let item, sentiment, sentimentSource, sentimentText;

document.getElementById('getData').addEventListener('click', function(){

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){

    if(xhr.readyState == 4 && xhr.status == 200){
      let data = JSON.parse(this.responseText);
      let output = '';

      for(let i = 0; i < data.length; i++){
        item = data[i].ItemID;
        sentiment = data[i].Sentiment;
        sentimentSource = data[i].SentimentSource;
        sentimentText = data[i].SentimentText;

        console.log('Text : ', sentimentText);

        output += `<ul>
                      <li>Item ID : ${item}</li>
                      <li>Sentiment : ${sentiment}</li>
                      <li>Sentiment Source : ${sentimentSource}</li>
                      <li>Sentiment Text : ${sentimentText}</li>
                    </ul>
                    `;
        
      }
      document.getElementById('itemId').innerHTML = output;
    }
  }
  xhr.open('GET', 'sentiment-analysis-dataset_small.json', true);
  xhr.send();
});