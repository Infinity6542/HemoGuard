import data from "./dta.js";
if (localStorage.getItem("model") === null) {
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

// Normalize the features
const maxMass = Math.max(...features.map((f) => f[0]), 1e-10); // Ensure no zero
const maxMz = Math.max(...features.map((f) => f[2]), 1e-10); // Ensure no zero
const normalizedFeatures = features.map(([mass, charge, mz]) => [
	mass / maxMass,
	charge,
	mz / maxMz,
]);

// Split data into training and testing sets
const splitIndex = Math.floor(data.length * 0.8);
const trainX = tf.tensor2d(
	normalizedFeatures.slice(0, splitIndex),
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
	normalizedFeatures.slice(splitIndex),
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
const dense1 = tf.layers.dense({ units: 16, activation: "relu" }).apply(input);
const dense2 = tf.layers.dense({ units: 16, activation: "relu" }).apply(dense1);

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

// Why is this not in goddamn float
// F***
// WHY IS THIS NOT WORKING
// WORK YOU SON OF A B****
// Ah well here is float
// Floating in the clouds... Wishing I never learnt JS
const testXFloat = tf.cast(testX, "float32");
const trainXFloat = tf.cast(trainX, "float32");
const trainDangerYFloat = tf.cast(trainDangerY, "float32");
const trainCategoryYFloat = tf.cast(trainCategoryY, "float32");
const testDangerYFloat = tf.cast(testDangerY, "float32");
const testCategoryYFloat = tf.cast(testCategoryY, "float32");

//* Model
(async () => {
	try {
		console.log("Training...");
		const history = await model.fit(
            trainXFloat,
            { dangerLevel: trainDangerYFloat, category: trainCategoryYFloat },
            {
                epochs: 1000,
                validationData: [
                    testXFloat,
                    { dangerLevel: testDangerYFloat, category: testCategoryYFloat },
                ],
                verbose: 1,
            }
		);

        await model.save('localstorage://model');

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
})();
} else {
    const model = await tf.loadLayersModel('localstorage://model');
}

//* Model

//* Import user provided data

//* Process categorising the data
// i.e. what type of cancer, etc.

//* Send off data to remote server for further processing
// Also to add data to further train AI
// Server located @ 192.9.187.53
//TODO: How to do this?

// Pass off the data
// export default Results;
