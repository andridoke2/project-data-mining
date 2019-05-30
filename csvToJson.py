import csv, json

csvFilePath = "sentiment-analysis-dataset.csv"
jsonFilePath = "sentiment-analysis-dataset_small.json"

# reading csv and adding data to dictionary

data = {}
with open(csvFilePath) as csvFile:
  csvReader = csv.DictReader(csvFile)
  for csvRow in csvReader:
    item_id = csvRow['ItemID']
    data[item_id] = csvRow

# write to json file
with open(jsonFilePath, 'w') as jsonFile:
  jsonFile.write(json.dumps(data, indent=4))