var receiveMsgButton = document.querySelector('#recieve-msg');
var meditationImage = document.querySelector('.meditate-image');
var receiveMsgButton = document.querySelector('form')
var randomQuote = document.querySelector('.random-phrase');
var form = document.forms[0];
var radios = form.elements['message'];
var favoriteButton = document.querySelector('#favorite');
var viewFavoritesButton = document.querySelector('#view-favorites');
var mainPageView = document.querySelector('#main-view')
var favoritesView = document.querySelector('#favorites-page')

var favoriteMessages = [];

receiveMsgButton.addEventListener('submit', displayRandomQuote);
favoriteButton.addEventListener('click', putInFavoriteMessages);
viewFavoritesButton.addEventListener('click', showFavorites);

function displayRandomQuote(event) {
  event.preventDefault();
    if (radios.value === 'affirmation') {
      randomQuote.innerText = affirmationsList[getRandomIndex(affirmationsList)];
      meditationImage.classList.add('hidden');
      randomQuote.classList.remove('hidden');
      viewFavoritesButton.classList.remove('hidden');
      favorite.classList.remove('hidden');
    } else if (radios.value === 'mantra'){
      randomQuote.innerText = mantrasList[getRandomIndex(mantrasList)];
      meditationImage.classList.add('hidden');
      randomQuote.classList.remove('hidden');
      viewFavoritesButton.classList.remove('hidden');
      favorite.classList.remove('hidden');
    }
}

function getRandomIndex(array) {
 return Math.floor(Math.random() * array.length);
}

function putInFavoriteMessages() {
  favoriteMessages.push(randomQuote);
}

function showFavorites() {

}
