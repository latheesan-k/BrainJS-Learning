const brain = require('brain.js');
const neuralNetwork = new brain.NeuralNetwork();

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];

neuralNetwork.train(trainingData);

console.log(neuralNetwork.run([0, 0]));
