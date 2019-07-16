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