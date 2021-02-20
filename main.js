var receiveMsgButton = document.querySelector('#recieve-msg');
var meditationImage = document.querySelector('.meditate-image');
var receiveMsgButton = document.querySelector('form')
var randomQuote = document.querySelector('.random-phrase');
var form = document.forms[0];
var radios = form.elements['message'];

var favoriteMessages = [];

receiveMsgButton.addEventListener('submit', displayRandomQuote);

function displayRandomQuote(event) {
  event.preventDefault();
    if (radios.value === 'affirmation') {
      randomQuote.innerText = affirmationsList[getRandomIndex(affirmationsList)];
      meditationImage.classList.add('hidden');
      randomQuote.classList.remove('hidden');
    } else if (radios.value === 'mantra'){
      randomQuote.innerText = mantrasList[getRandomIndex(mantrasList)];
      meditationImage.classList.add('hidden');
      randomQuote.classList.remove('hidden');
    }
}

function getRandomIndex(array) {
 return Math.floor(Math.random() * array.length);
}
