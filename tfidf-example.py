from scipy.sparse import find
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd

# list_artikel = [
# 	"saya suka bermain sepak bola",
# 	"bola adalah teman",
# 	"bola dunia itu bulat"
# ]

# list_artikel = pd.read_csv("data/sentiment-analysis-dataset.csv")
# print(list_artikel)

# open the file to read
myFile = open('data/sentiment-analysis-dataset.csv', 'r')

# read the data from file into a list
listOfLines = myFile.read().splitlines()

# print(listOfLines[1])
# print(listOfLines[len(listOfLines)-1])

#### SINGLE LINE ####
# aLine = listOfLines[1]
# lineItems = aLine.split(',')
# print(lineItems)
# itemId = lineItems[0]
# sentiment = lineItems[1]
# sentimentSource = lineItems[2]
# sentimentText = lineItems[3]
# print('ItemID : ', itemId)
# print('Sentiment : ', sentiment)
# print('Sentiment Source : ', sentimentSource)
# print('Sentiment Text : ', sentimentText)
#### SINGLE LINE ####

for i in range(1, len(listOfLines), 1):
	aLine = listOfLines[i]
	aLine = aLine.split(',')
	itemId = aLine[0]
	sentimentText = aLine[3]
	# print(aLine)
	# print('Item ID : ', itemId)
	print(sentimentText)

vectorizer = TfidfVectorizer()
# vektor = vectorizer.fit_transform(list_artikel)
vektor = vectorizer.fit_transform(sentimentText)

# print(list_artikel)
print(sentimentText)
# print(vectorizer.get_feature_names())
print(vectorizer.get_feature_names())

# print(vektor.toarray())
print(vektor.toarray())

for indexArtikel, v in enumerate(list_artikel):
	print ("Artikel ke: ", indexArtikel, list_artikel[indexArtikel])
	for indexKata, kata in enumerate(vectorizer.get_feature_names()):
		print(indexKata, kata, vektor.toarray()[indexArtikel][indexKata])
print()