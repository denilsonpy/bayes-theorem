var fs = require("fs");
var BayesClassifier = require("./bayes-classifier");
var classifier = new BayesClassifier();

var positiveDocument = fs.readFileSync(
  __dirname + "/data-sets/positive-words.txt"
);
var positiveDocuments = positiveDocument.toString().split("\n");
classifier.addDocuments(positiveDocuments, "positive");

var negativeDocument = fs.readFileSync(
  __dirname + "/data-sets/negative-words.txt"
);
var negativeDocuments = negativeDocument.toString().split("\n");
classifier.addDocuments(negativeDocuments, "negative");

classifier.train();

console.log(classifier.classify("I heard the mexican restaurant is great!")); // "positive"
console.log(classifier.classify("I don't want to eat there again.")); // "negative"
console.log(classifier.classify("The torta is epicly bad.")); // "negative"
console.log(classifier.classify("The torta is horribly awesome.")); // "positive"
console.log(classifier.classify("I love you so much.")); // "positive"
console.log(classifier.classify("I hate torta.")); // "negative"
console.log(classifier.classify("I really hate tacos.")); // "negative"
console.log(classifier.classify("My mon is amazing i love him.")); // "positive"
