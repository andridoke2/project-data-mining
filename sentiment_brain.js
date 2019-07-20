const brain = require('brain.js');

// const data = require('./data/sentiment-analysis-dataset_small.json');
// const data = require('./data/sentiment-clean-dataset.json');
const data = require('./data/data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.SentimentText,
  output: item.Sentiment
}));

network.train(trainingData, {
  iterations: 20000
});

const output = network.run('I really hate you');

console.log(`Result : ${output}`);