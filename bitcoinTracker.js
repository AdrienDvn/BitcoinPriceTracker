//get url
const url ='https://blockchain.info/ticker';

function getPrice() {
  //create request
  let request = new XMLHttpRequest(); //create an object
  request.open('GET', url);             // parameter GET or POST
  request.responseType = 'json';    //we tell we want Json
  request.send();                   // we send the request

  //execute a function as soon as sent, to check if it works
  request.onload = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if(request.status === 200) {
        let result = request.response; // we stock the answer;
        console.log(result);
        let euroPrice =result.EUR.last;
        console.log(euroPrice);
        document.querySelector('#price_label').textContent = euroPrice
      }
      else{
        alert("An error has occured, please come back later.");
      }
    }
  }
}

let updatedValue = setInterval(getPrice, 5000)
console.log(updatedValue);
