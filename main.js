var favoriteMessages = [];

var meditationImage = document.querySelector('.meditate-image');
var receiveMsgButton = document.querySelector('form')
var randomQuote = document.querySelector('.random-phrase');
var form = document.forms[0];
var radios = form.elements['message'];
var favoriteButton = document.querySelector('#favorite');
var viewFavoritesButton = document.querySelector('#view-favorites');
var mainPageView = document.querySelector('#main-view');
var favoritesView = document.querySelector('#favorites-page');
var displayFavorites = document.querySelector('.favorite-quote-display');
var returnToMain = document.querySelector('#return-main-page');

receiveMsgButton.addEventListener('submit', displayRandomQuote);
favoriteButton.addEventListener('click', putInFavoriteMessages);
viewFavoritesButton.addEventListener('click', showFavorites);
returnToMain.addEventListener('click', goBackToMain);
displayFavorites.addEventListener('click', removeMessage)
window.addEventListener('load', permanentMessages)

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
favoriteMessages.push({
  id: Date.now(),
  message: randomQuote.innerText,
});
permanentMessages()
}

function showFavorites() {
  mainPageView.classList.add('hidden');
  favoritesView.classList.remove('hidden');
  displayFavorites.innerHTML = '';
  for (var i = 0; i < favoriteMessages.length; i++) {
    displayFavorites.innerHTML+= `
     <div class="messages-list-bubbles">
     ${favoriteMessages[i].message}
     <button class="remove-quote" id=${favoriteMessages[i].id}>Delete Message
     </button>
     </div>`;
   }
}

function goBackToMain() {
  mainPageView.classList.remove('hidden');
  favoritesView.classList.add('hidden');
  randomQuote.classList.add('hidden');
  meditationImage.classList.remove('hidden');

}

function removeMessage() {
  var messageToDelete = parseInt(event.target.id);
    for (var i = 0; i < favoriteMessages.length; i++) {
      if (messageToDelete === favoriteMessages[i].id) {
      favoriteMessages.splice(i, 1);
  }
    showFavorites();
 }
 permanentMessages()
}

window.addEventListener('load', permanentMessages)

function permanentMessages() {
  save();
  goBackToMain();
}

function save() {
  favoriteMessages;
  var stringifyIt = JSON.stringify(favoriteMessages);
  localStorage.setItem('makeItWork', stringifyIt);
  var retrieve = localStorage.getItem('makeItWork');
  var parseMe = JSON.parse(retrieve);
    return parseMe

}
