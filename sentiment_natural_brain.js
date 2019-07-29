var BrainJSClassifier = require('natural-brain'); // npm install natural-brain
var classifier = new BrainJSClassifier();

// const data = require('./data/sentiment-analysis-dataset_small.json');
// const data = require('./data/sentiment-clean-dataset.json');
const data = require('./data/data.json');

for(let i = 0; i < data.length; i++){
  classifier.addDocument(data[i].SentimentText, data[i].Sentiment);
  // console.log(data[i].SentimentText);
  // console.log(data[i].Sentiment);
}

classifier.train();

console.log('Output : ' + classifier.classify('fuck tweet'));
console.log('\n');
console.log(classifier.getClassifications('fuck tweet'));