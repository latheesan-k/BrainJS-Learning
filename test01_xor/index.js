const brain = require('brain.js');
const neuralNetwork = new brain.NeuralNetwork({ hiddenLayers: [3] });

/**
 * When the input differs, the output is 1
 * When the input is same, the output is 0
 */

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];

neuralNetwork.train(trainingData, {
    log: error => console.log(error),
    logPeriod: 100
});

console.log(neuralNetwork.run([0, 0]));
console.log(neuralNetwork.run([1, 0]));
console.log(neuralNetwork.run([1, 1]));
