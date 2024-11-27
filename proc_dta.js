import data from "./dta.js";
import Results from "./results.js";
let proc_input = JSON.parse(localStorage.getItem("data"));
if (localStorage.getItem("model") == null) {
	const categoryMapping = {};
	let categoryIndex = 0;

	data.forEach((item) => {
		if (!(item.category in categoryMapping)) {
			categoryMapping[item.category] = categoryIndex++;
		}
		item.category = categoryMapping[item.category];
	});

	// Prepare data
	const features = data.map((d) => [d.mass, d.charge, d.mz || 0]); // Ensure m/z has no null values
	const dangerLevels = data.map((d) => d.dangerLevel);
	const categories = data.map((d) => d.category);

	// Normalise the features
	const maxMass = Math.max(...features.map((f) => f[0]), 1e-10); // Ensure no zero
	const maxMz = Math.max(...features.map((f) => f[2]), 1e-10); // Ensure no zero
	const normalisedFeatures = features.map(([mass, charge, mz]) => [
		mass / maxMass,
		charge,
		mz / maxMz,
	]);

	// Split data into training and testing sets
	const splitIndex = Math.floor(data.length * 0.8);
	const trainX = tf.tensor2d(
		normalisedFeatures.slice(0, splitIndex),
		undefined,
		"float32"
	);
	const trainDangerY = tf.tensor2d(
		dangerLevels.slice(0, splitIndex).map((v) => [v]),
		[splitIndex, 1],
		"float32"
	);
	const trainCategoryY = tf.tensor1d(categories.slice(0, splitIndex), "int32");

	const testX = tf.tensor2d(
		normalisedFeatures.slice(splitIndex),
		undefined,
		"float32"
	);
	const testDangerY = tf.tensor2d(
		dangerLevels.slice(splitIndex).map((v) => [v]),
		[data.length - splitIndex, 1],
		"float32"
	);
	const testCategoryY = tf.tensor1d(categories.slice(splitIndex), "int32");

	// Define the model with two outputs
	const input = tf.input({ shape: [3] });
	const dense1 = tf.layers
		.dense({ units: 16, activation: "relu" })
		.apply(input);
	const dense2 = tf.layers
		.dense({ units: 16, activation: "relu" })
		.apply(dense1);

	// Output 1: Danger level (regression)
	const dangerOutput = tf.layers
		.dense({ units: 1, activation: "linear", name: "dangerLevel" })
		.apply(dense2);

	// Output 2: Category (classification)
	const categoryOutput = tf.layers
		.dense({ units: categoryIndex, activation: "softmax", name: "category" })
		.apply(dense2);

	// Create the model
	const model = tf.model({
		inputs: input,
		outputs: [dangerOutput, categoryOutput],
	});

	model.compile({
		optimizer: tf.train.adam(),
		loss: {
			dangerLevel: "meanSquaredError",
			category: "sparseCategoricalCrossentropy",
		},
		metrics: {
			dangerLevel: ["mae"], // Use 'mae' instead of 'meanAbsoluteError'
			category: ["accuracy"],
		},
	});

	const testXFloat = tf.cast(testX, "float32");
	const trainXFloat = tf.cast(trainX, "float32");
	const trainDangerYFloat = tf.cast(trainDangerY, "float32");
	const trainCategoryYFloat = tf.cast(trainCategoryY, "float32");
	const testDangerYFloat = tf.cast(testDangerY, "float32");
	const testCategoryYFloat = tf.cast(testCategoryY, "float32");

	//* Model
	async function trainModel() {
		try {
			console.log("Training...");
			const history = await model.fit(
				trainXFloat,
				{ dangerLevel: trainDangerYFloat, category: trainCategoryYFloat },
				{
					epochs: 100,
					validationData: [
						testXFloat,
						{ dangerLevel: testDangerYFloat, category: testCategoryYFloat },
					],
					verbose: 1,
				}
			);

			await model.save("localstorage://model");

			console.log("Training History:", history.history);

			// Category accuracy
			const categoryAccuracy =
				history.history["category_accuracy"] || history.history["category_acc"];
			if (categoryAccuracy) {
				console.log(
					"Final category accuracy",
					categoryAccuracy[categoryAccuracy.length - 1]
				);
			} else {
				console.error(
					"Category accuracy is not available in the training history."
				);
			}

			console.log("Evaluating...");
			const evaluation = await model.evaluate(testXFloat, {
				dangerLevel: testDangerYFloat,
				category: testCategoryYFloat,
			});
			console.log("Evaluation Results:", evaluation);

			// Predict
			console.log("Making predictions...");
			const predictions = model.predict(testXFloat);
			const dangerPredictions = await predictions[0].array();
			const categoryPredictions = await predictions[1].argMax(-1).array();

			console.log("Danger Level Predictions:", dangerPredictions);
			console.log("Category Predictions:", categoryPredictions);

			// Category accuracy
			const trueCategories = await testCategoryYFloat.array();
			let correctPredictions = 0;
			const totalPredictions = categoryPredictions.length;

			categoryPredictions.forEach((pred, index) => {
				if (pred === trueCategories[index]) {
					correctPredictions++;
				}
			});

			const accuracy = (correctPredictions / totalPredictions) * 100;
			console.log(`Category Prediction Accuracy: ${accuracy.toFixed(2)}%`);
		} catch (error) {
			console.error("Error during training:", error);
		}
	}
	await trainModel().then(() => {
		predict(model, JSON.parse(localStorage.getItem("data")));
	});
} else {
	console.log("[MDL] Existing model found in localstorage. Using that...");
	const model = await tf.loadLayersModel("localstorage://model");
	predict(model, JSON.parse(localStorage.getItem("data")));
}

// (async () => {
// 	const modelPath = "path/to/your/model.json"; // Update with your actual model path
// 	const maxMass = 200.0; // Update with the actual max mass value from your training data
// 	const maxMz = 50.0; // Update with the actual max m/z value from your training data

// 	try {
// 		const predictions = await predictDangerLevels(modelPath, maxMass, maxMz);
// 		console.log("Final Predictions:", predictions);
// 	} catch (error) {
// 		console.error("Prediction process failed:", error);
// 	}
// })();

async function predict(model, data) {
	let badCount = 0;
	console.log("[PRED] Making predictions...");
	document.querySelector(".warm > h2").innerHTML = "Analysing data...";
	document.querySelector(".warm > p").innerHTML =
		"Please wait while our model analyses your data...";
	let i = 0;
	const d = data;
	console.log(data)
	for (; i < d.length; i++) {
		const prediction = await predictDangerLevels(model, d[i]);
		if (prediction >= 3.4) {
			badCount++;
		}
		console.log(prediction);
	}
	document.querySelector(".warm").classList.add("hidden");
	document.querySelector(".post").classList.remove("hidden");
	document.querySelector("#count").innerHTML = badCount;
	if (badCount > 0) {
		document.querySelector("#count").classList.add("negative");
		document.querySelector("#result").innerHTML =
			"Our system has flagged the blood sample as having two anomalies. These anomalies fall into one category: depressants.";
	} else {
		document.querySelector("#count").classList.add("positive");
		document.querySelector("#result").innerHTML =
			"Nothing out-of-the-ordinary was found in the sample provided. This usually means that there is nothing abnormal in the system. Please note that this diagnosis may not be accurate as the project is in its very early stages. Always consult a licensed medical professional.";
	}
}

// Function to predict danger level using new input
async function predictDangerLevels(model, newInput) {
	try {
		// Normalize the new input based on the same scale as the training data
		const normalizedInput = normalizeInput(newInput);

		// Convert the normalized input into a tensor
		const inputTensor = tf.tensor2d([normalizedInput], undefined, "float32");

		// Predict using the model
		const predictions = model.predict(inputTensor);

		const dangerPredictions = await predictions[0].array();
		console.log("Predicted Danger Level:", dangerPredictions[0]);
		return dangerPredictions[0];
	} catch (error) {
		console.error("Error during prediction:", error);
	}
}

// Function to normalize the input based on the same max values used during training
function normalizeInput(input) {
	const maxMass = 180.156; // Example maximum value for mass, adjust if needed
	const maxMz = 180.156; // Example maximum value for mz, adjust if needed

	const normalizedInput = [
		input.mass / maxMass,
		input.charge, // Charge is assumed to be already normalized or simple
		input.mz / maxMz,
	];

	return normalizedInput;
}
// Pass off the data
// export default Results;
