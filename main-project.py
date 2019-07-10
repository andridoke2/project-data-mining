import pandas as pd
import numpy as np
pd.set_option('display.max_rows', 15)

# reading csv file
sentiment_data = pd.read_csv("data/sentiment-analysis-dataset.csv", names = ['sentiment-text'])
# print(sentiment_data['sentiment-text'])

sentiment_text = sentiment_data['SentimentText']
print(sentiment_text)



































# docA = "the cat sat on my face"
# docB = "the dog sat on my face"

# bowA = docA.split(" ")
# bowB = docB.split(" ")

# wordSet = set(bowA).union(set(bowB))
# # print(wordSet)

# wordDictA = dict.fromkeys(wordSet, 0)
# wordDictB = dict.fromkeys(wordSet, 0)
# print(wordDictA)

# import pandas as pd
# pd.DataFrame([wordDictA, wordDictB])

# def computeTF(wordDict, bow):
#   tfDict = {}
#   bowCount = len(bow)
#   for word, count in wordDict.iteritems():
#     tfDict[word] = count / float(bowCount)
#   return tfDict

# tfBowA = computeTF(wordDictA, bowA)
# tfBowB = computeTF(wordDictB, bowB)

# def computeIDF(docList):
#   import math
#   idfDict = {}
#   N = len(docList)
  
#   # counts the number of documents that contain a word w
#   idfDict = dict.fromkeys(docList[0].keys(),0)
#   for doc in docList:
#     for word, val in doc.iteritems():
#       if val > 0 :
#         idfDict[0] += 1
  
#   # divide N by denominator above, take the log of that
#   for word, val in idfDict.iteritems():
#     idfDict[word] = math.log(N / float(val))

#   return idfDict

# idfs = computeIDF([wordDictA, wordDictB])

# def computeTFIDF(tfBow, idfs):
#   tfidf = {}
#   for word, val in tfBow.iteritems():
#     tfidf[word] = val * idfs[word]
#   return tfidf

# tfidfBowA = computeTFIDF(tfBowA, idfs)
# tfidfBowB = computeTFIDF(tfBowB, idfs)

# import pandas as pd
# result = pd.DataFrame([tfidfBowA, tfidfBowB])
# print(result)































# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.feature_extraction.text import CountVectorizer
# # import pandas as pd

# # read json into a dataframe
# # df_idf = pd.read_json("data/sentiment-analysis-dataset_small.json",lines=True)
# #print schema
# # print("Schema : \n\n", df_idf.dtypes)
# # print("Number of questions,columns=",df_idf.shape)

# kalimat = [
#   'ini adalah artikel pertama',
#   'ini adalah artikel kedua',
#   'ini adalah artikel ketiga'
# ]

# tfidf = TfidfVectorizer()
# x = tfidf.fit_transform(kalimat)
# print(tfidf.get_feature_names())
# print(x.shape)


# count = CountVectorizer()
# y = count.fit_transform(kalimat)
# print(count.get_feature_names())
# print(y.toarray())

