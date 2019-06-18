/* JSON.stringify() 
 * yaitu untuk mengubah dari object ke json pada javascript
 *
 * JSON.parse()
 * yaitu untuk mengubah dari json ke object pada javascript
 * 
 * json_encode()
 * yaitu mengubah array associative menjadi json pada php
 * 
 * json_decode()
 * yaitu mengubah json menjadi array associative pada php jika parameter ditambahkan true
 */

// ajax || vanilla javascript
function getJSONLocal(){

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){

    if(xhr.readyState == 4 && xhr.status == 200){
      let mahasiswa = JSON.parse(this.responseText);
      let outputItem = '';

      for(let i = 0; i < mahasiswa.length; i++){
        let ItemID = mahasiswa[i].ItemID;
        let Sentiment = mahasiswa[i].Sentiment;
        let SentimentSource = mahasiswa[i].SentimentSource;
        let SentimentText = mahasiswa[i].SentimentText;

        let item = ItemID;
        let sentiment = Sentiment;
        let sentimentSource = SentimentSource;
        let sentimentText = SentimentText;

        console.log('Item ID : ', item);
        console.log('Sentiment : ', sentiment);

        if(sentiment == 1){
          console.log('Sentiment...');
        } else {
          console.log('Tidak Sentiment...');
        }
        
        outputItem += `<ul>
                      <li>Item ID : ${item}</li>
                      <li>Sentiment : ${sentiment}</li>
                      <li>Sentiment Source : ${sentimentSource}</li>
                      <li>Sentiment Text : ${sentimentText}</li>
                      </ul>`;
        
      }
      document.getElementById('itemId').innerHTML = outputItem;
    }
  }
  xhr.open('GET', 'sentiment-analysis-dataset_small.json', true);
  xhr.send();
}

getJSONLocal(); // jalankan function