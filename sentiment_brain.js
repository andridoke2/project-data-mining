const brain = require('brain.js');
const data = require('./data/sentiment-analysis-dataset_small.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.SentimentText,
  output: item.Sentiment
}));

network.train(trainingData, {
  iterations: 2000
});

const output = network.run('I realy hate you fucking bitch');

console.log(`Result : ${output}`);

// const network = new brain.NeuralNetwork();

// network.train([
//   { input: [0, 0, 0], output: [0] },
//   { input: [0, 0, 1], output: [0] },
//   { input: [0, 1, 1], output: [0] },
//   { input: [1, 0, 1], output: [1] },
//   { input: [1, 1, 1], output: [1] },
// ]);

// const output = network.run([0, 0, 0]);

// if(output > 0.70){
//   console.log('1');
//   console.log(`Probabilitas : ${output}`);
// } else {
//   console.log('0');
//   console.log(`Probabilitas : ${output}`);
// }

// console.log(`Probabilitas : ${output}`);