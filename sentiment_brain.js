const brain = require('brain.js');

// const data = require('./data/sentiment-analysis-dataset_small.json');
// const data = require('./data/sentiment-clean-dataset.json');
const data = require('./data/data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.SentimentText,
  output: item.Sentiment
}));

// network.train(trainingData, {
//   iterations: 20000
// });

// const output = network.run('I really hate you');

// console.log(`Result : ${output}`);

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
  iterations: 500,
  errorThresh: 0.011,
  log: (stats) => console.log(stats)
});

const output = net.run('fuck tweet');
console.log(`Result : ${output}`);