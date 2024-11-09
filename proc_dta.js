//* TESTING TENSORFLOW
// Define a model for linear regression. The script tag makes `tf` available
// as a global variable.
var model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
// Generate some synthetic data for training.
var xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
var ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
// Train the model using the data.
model.fit(xs, ys, { epochs: 1000 }).then(function () {
    // Use the model to do inference on a data point the model hasn't seen before:
    model.predict(tf.tensor2d([5], [1, 1])).print();
    // Open the browser devtools to see the output
});
//* END TESTING TENSORFLOW
// Processing will be done on 192.9.187.53.
// Send data to server
//TODO: Figure out how to do this lmao
// Receive data from server
// Interpret data
//TODO: TensorFlow.JS
var results = function () {
    var output = "e";
    // nonMaxSuppressionV3Impl.no();
    return output;
};
// Pass on data
// export default results;
