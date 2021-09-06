// query selector variables go here :point_down:
//vvvvvvvvvv Mainpage Poster Default vvvvvvvvvv\\
var imageMain = document.querySelector(‘.poster-img’);
var titleMain = document.querySelector(‘.poster-title’);
var quoteMain = document.querySelector(‘.poster-quote’);
//vvvvvvvvvv Inputs vvvvvvvvvv\\
var imageInput = document.querySelector(‘#poster-image-url’);
var titleInput = document.querySelector(‘#poster-title’);
var quoteInput = document.querySelector(‘#poster-quote’);
//vvvvvvvvvv Mainpage Poster Breakdown vvvvvvvvvv\\
var mainPosterPage = document.querySelector(‘.main-poster’);
var savedPostersPage = document.querySelector(‘.saved-posters’);
var makeYourOwnFormPage = document.querySelector(‘.poster-form’);
//vvvvvvvvvv Saved Posters Grid vvvvvvvvvv\\
var grid = document.querySelector(‘.saved-posters-grid’);
//vvvvvvvvvv ALL of the buttons vvvvvvvvvv\\
var randomButton = document.querySelector(‘.show-random’);
var makeYourOwnButton = document.querySelector(‘.show-form’);
var takeMeBackButton = document.querySelector(‘.show-main’);
var showSavedPostersButton = document.querySelector(‘.show-saved’);
var backToMainButton = document.querySelector(‘.back-to-main’);
var showMyPosterButton = document.querySelector(‘.make-poster’);
showMyPosterButton.setAttribute(‘type’, ‘button’);
var savePosterButton = document.querySelector(‘.save-poster’);
/* we’ve provided you with some data to work with :point_down:
                                  Thanks for the data.
You guys-and-gals / dudes-and-prudes / fellas-and-bellas are swell.
*/
var images = [
  “./assets/bees.jpg”,
  “./assets/bridge.jpg”,
  “./assets/butterfly.jpg”,
  “./assets/cliff.jpg”,
  “./assets/elephant.jpg”,
  “./assets/flock.jpg”,
  “./assets/fox.jpg”,
  “./assets/frog.jpg”,
  “./assets/horse.jpg”,
  “./assets/lion.jpg”,
  “./assets/mountain.jpg”,
  “./assets/pier.jpg”,
  “./assets/puffins.jpg”,
  “./assets/pug.jpg”,
  “./assets/runner.jpg”,
  “./assets/squirrel.jpg”,
  “./assets/tiger.jpg”,
  “./assets/turtle.jpg”
];
var titles = [
  “determination”,
  “success”,
  “inspiration”,
  “perspiration”,
  “grit”,
  “empathy”,
  “feelings”,
  “hope”,
  “believe”,
  “try”,
  “conviction”,
  “wiggle”,
  “accomplishment”,
  “achievement”,
  “ambition”,
  “clarity”,
  “challenge”,
  “commitment”,
  “confidence”,
  “action”,
  “courage”,
  “focus”,
  “breathe”,
  “gratitude”,
  “imagination”,
  “kindness”,
  “mindfulness”,
  “knowledge”,
  “opportunity”,
  “passion”,
  “patience”,
  “practice”,
  “smile”,
  “trust”,
  “understanding”,
  “wisdom”
];
var quotes = [
  “Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.“,
  “You are braver than you believe, stronger than you seem and smarter than you think.“,
  “You are confined only by the walls you build yourself.“,
  “The one who has confidence gains the confidence of others.“,
  “Act as if what you do makes a difference. It does.“,
  “Success is not final, failure is not fatal: it is the courage to continue that counts.“,
  “Never bend your head. Always hold it high. Look the world straight in the eye.“,
  “A snake in the grass is worth two in the boot.“,
  “What you get by achieving your goals is not as important as what you become by achieving your goals.“,
  “Believe you can and you’re halfway there.“,
  “When you have a dream, you’ve got to grab it and never let go.“,
  “I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.“,
  “No matter what you’re going through, there’s a light at the end of the tunnel.“,
  “It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.“,
  “Life is like riding a bicycle. To keep your balance, you must keep moving.“,
  “Just don’t give up trying to do what you really want to do. Where there is love and inspiration, I don’t think you can go wrong.“,
  ‘Limit your “always” and your “nevers.“‘,
  “You are never too old to set another goal or to dream a new dream.“,
  “Try to be a rainbow in someone else’s cloud.“,
  “You do not find the happy life. You make it.“,
  “Inspiration comes from within yourself. One has to be positive. When you’re positive, good things happen.“,
  “Sometimes you will never know the value of a moment, until it becomes a memory.“,
  “The most wasted of days is one without laughter.“,
  “You must do the things you think you cannot do.“,
  “It isn’t where you came from. It’s where you’re going that counts.“,
  “It is never too late to be what you might have been.“,
  “Happiness often sneaks in through a door you didn’t know you left open.“,
  “We must be willing to let go of the life we planned so as to have the life that is waiting for us.“,
  “Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.“,
  “Be the change that you wish to see in the world.“,
  “Let us make our future now, and let us make our dreams tomorrow’s reality.“,
  “You don’t always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.“,
  “If I cannot do great things, I can do small things in a great way.“,
  “Don’t wait. The time will never be just right.“,
  “With the right kind of coaching and determination you can accomplish anything.“,
  “If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.“,
  “No matter what people tell you, words and ideas can change the world.“,
  “Each person must live their life as a model for others.“,
  “A champion is defined not by their wins but by how they can recover when they fall.”
];
var savedPosters = [];
var currentPoster;
// event listeners go here :point_down:
window.addEventListener(‘load’, setMain);
randomButton.addEventListener(‘click’, setMain);
makeYourOwnButton.addEventListener(‘click’, showMakeYourOwnForm);
showSavedPostersButton.addEventListener(‘click’, showSavedPosters);
takeMeBackButton.addEventListener(‘click’, takeMeBack);
backToMainButton.addEventListener(‘click’, backToMain);
showMyPosterButton.addEventListener(‘click’, makeCustomPoster);
savePosterButton.addEventListener(‘click’, addPosterToSaved);
// vvvvvvvvvv Remove Image Event vvvvvvvvvv\\
grid.addEventListener(‘dblclick’, removePoster);
// functions and event handlers go here :point_down:
// (we’ve provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
function setMain() {
  titleMain.innerText = titles[getRandomIndex(titles)];
  quoteMain.innerText = quotes[getRandomIndex(quotes)];
  imageMain.src = images[getRandomIndex(images)];
};
function showMakeYourOwnForm() {
  mainPosterPage.classList.add(‘hidden’);
  makeYourOwnFormPage.classList.remove(‘hidden’);
};
function showSavedPosters() {
  mainPosterPage.classList.add(‘hidden’);
  savedPostersPage.classList.remove(‘hidden’);
  createGrid();
};
function takeMeBack() {
  makeYourOwnFormPage.classList.add(‘hidden’);
  mainPosterPage.classList.remove(‘hidden’);
};
function backToMain() {
  savedPostersPage.classList.add(‘hidden’);
  mainPosterPage.classList.remove(‘hidden’);
};
function makeCustomPoster() {
  currentPoster = new Poster(imageInput.value, titleInput.value, quoteInput.value);
  imageMain.src = imageInput.value;
  titleMain.innerText = titleInput.value;
  quoteMain.innerText = quoteInput.value;
  images.push(imageInput.value);
  titles.push(titleInput.value);
  quotes.push(quoteInput.value);
  takeMeBack();
};
function addPosterToSaved() {
  currentPoster = new Poster(imageMain.src, titleMain.innerText, quoteMain.innerText);
  if (!savedPosters.length) {
    savedPosters.push(currentPoster);
  }
  for (var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].imageURL === imageMain.src && savedPosters[i].title === titleMain.innerText && savedPosters[i].quote === quoteMain.innerText) {
      return;
    }
  }
  savedPosters.push(currentPoster);
};
function createGrid() {
  grid.innerHTML = ‘’;
  for (var i = 0; i < savedPosters.length; i++) {
      grid.innerHTML += `<article class=“mini-poster” id=“${savedPosters[i].id}“>
      <img src=“${savedPosters[i].imageURL}” alt=“Knees weak? Arms Heady?“>
      <h2>${savedPosters[i].title}</h2>
      <h4>${savedPosters[i].quote}</h4>
      </article>`;
  }
};
function removePoster() {
  var targetID = parseInt(event.target.parentNode.id);
  for (var i = 0; i < savedPosters.length; i++) {
    if (targetID === savedPosters[i].id) {
      event.target.parentNode.remove();
      savedPosters.splice(i, 1);
    }
  }
};
