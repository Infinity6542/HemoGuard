//* TESTING TENSORFLOW
// Define a model for linear regression. The script tag makes `tf` available as a global variable.
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys, { epochs: 10 }).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    model.predict(tf.tensor2d([5], [1, 1])).print();
    // Open the browser devtools to see the output
});
//* END TESTING TENSORFLOW
//* Model

//* Import user provided data

//* Process categorising the data
// i.e. what type of cancer, etc.

// Export
//TODO: Move this into a new file
class Results {
    constructor(diagnosis) {
        this.diagnosis = null;
    }
    destruct() {
        delete this.diagnosis;
        delete this;
    }
    diagnose(diagnosis) {
        if (typeof diagnosis != "string") {
            throw new Error(
                "[CRT] [ERR] [Dx] Invalid diagnosis value type. Expected diagnosis to be string, where diagnosis is" +
                typeof diagnosis
            );
        }
        this.diagnosis = diagnosis;
    }
}

// Send off data to remote server for further processing
// Also to add data to further train AI
// Server located @ 192.9.187.53
//TODO: How to do this?

// Pass off the data
export default Results;
