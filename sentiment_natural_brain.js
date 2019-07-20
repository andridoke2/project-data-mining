var BrainJSClassifier = require('natural-brain'); // npm install natural-brain
var classifier = new BrainJSClassifier();

// const data = require('./data/sentiment-analysis-dataset_small.json');
// const data = require('./data/sentiment-clean-dataset.json');
const data = require('./data/data.json');

classifier.addDocument('I am very happy today', 'Positive');
classifier.addDocument('I am not happy today', 'Negative');
classifier.addDocument('I hate you', 'Negative');
classifier.addDocument('I love you', 'Positive');
classifier.addDocument('Today is very nice out', 'Positive');
classifier.addDocument('Today it is very rainy out', 'Negative');

for(let i = 0; i < data.length; i++){
  classifier.addDocument(data[i].SentimentText, data[i].Sentiment);
  // console.log(data[i].SentimentText);
  // console.log(data[i].Sentiment);
}

classifier.train();

console.log(classifier.classify('you must work if you want to successfully'));
console.log(classifier.getClassifications('you must work if you want to successfully'));