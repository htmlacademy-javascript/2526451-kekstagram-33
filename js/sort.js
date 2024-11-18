import {generatePictures,pictures} from'./generate-pictures.js';
import {photoDataArray} from'./data-fetcher.js';
// import {getRandomInteger} from'./util.js';

const sortMenu = document.querySelector('.img-filters');
const formFilter = sortMenu.querySelector('.img-filters__form');
const [deffaultBtn, randomBtn, popularBtn] = formFilter.children;


const RANDOM_PICTURES_COUNT = 10;

const mostPopularArray = photoDataArray.slice();
// const tenRandomPicturesArray = photoDataArray.slice();

function comparePopular (a,b) {
  return b.comments.length - a.comments.length;
}


function showDeafaultPictures(evt) {
  popularBtn.classList.remove('img-filters__button--active');
  randomBtn.classList.remove('img-filters__button--active');

  evt.target.classList.add('img-filters__button--active');

  const picturesImg = pictures.querySelectorAll('.picture');
  picturesImg.forEach((picture) => picture.remove());

  evt.target.classList.add('img-filters__button--active');

  generatePictures(photoDataArray);
}

function showPopularPictures(evt) {
  deffaultBtn.classList.remove('img-filters__button--active');
  randomBtn.classList.remove('img-filters__button--active');

  evt.target.classList.add('img-filters__button--active');

  const picturesImg = pictures.querySelectorAll('.picture');
  picturesImg.forEach((picture) => picture.remove());

  generatePictures(mostPopularArray.sort(comparePopular));
}

//алгоритм Фишера-Йетса..
function shuffle(array) {
  const shuffledArray = array.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0,RANDOM_PICTURES_COUNT);
}

function showTenRandomPictures(evt) {
  deffaultBtn.classList.remove('img-filters__button--active');
  popularBtn.classList.remove('img-filters__button--active');

  evt.target.classList.add('img-filters__button--active');

  const picturesImg = pictures.querySelectorAll('.picture');
  picturesImg.forEach((picture) => picture.remove());

  generatePictures(shuffle(photoDataArray));
}


popularBtn.addEventListener('click', showPopularPictures);
deffaultBtn.addEventListener('click', showDeafaultPictures);
randomBtn.addEventListener('click', showTenRandomPictures);

export {sortMenu};
