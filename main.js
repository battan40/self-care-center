var receiveMsgButton = document.querySelector('#recieve-msg');
var meditationImage = document.querySelector('.meditate-image');
var receiveMsgButton = document.querySelector('form')
var randomQuote = document.querySelector('.random-phrase');
var form = document.forms[0]; //grabbing the form in my html doc
var radios = form.elements['message']; //create a var, go to forms, select an indicated el
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
   console.log(form, "form");
   console.log(radios, "just radios");
   console.log(radios.value, "radios");
}

function getRandomIndex(array) {
 return Math.floor(Math.random() * array.length);
}
