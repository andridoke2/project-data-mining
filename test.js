const brain = require('brain.js');

const data = require('./data/data.json');

const trainingData = data.map(item => ({
  input: item.SentimentText,
  output: item.Sentiment
}));

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
  iterations: 50,
  errorThresh: 0.011,
  log: (stats) => console.log(stats)
});

const output = net.run('i want to create new project');
console.log(`Result : ${output}`);