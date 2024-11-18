import {generatePictures,pictures} from'./generate-pictures.js';
import {photoDataArray} from'./data-fetcher.js';
// import {getRandomInteger} from'./util.js';

const overlayTest = document.querySelector('.img-filters');
const formFilter = overlayTest.querySelector('.img-filters__form');
const [deffaultBtn, randomBtn, popularBtn] = formFilter.children;

overlayTest.classList.remove('img-filters--inactive');

const RANDOM_PICTURES_COUNT = 10;

const mostPopularArray = photoDataArray.slice();


function comparePopular (a,b) {
  return b.comments.length - a.comments.length;
}


mostPopularArray.sort(comparePopular);

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

  generatePictures(mostPopularArray);
}

const tenRandomPicturesArray = photoDataArray.slice();
// console.log(getRandomInteger(-1,9));


function compareRandom () {
  return 0.5 - Math.random();
}

function getRandomSubset(array, size) {
  const shuffled = array.sort(compareRandom);
  return shuffled.slice(0, size);
}


// tenRandomPicturesArray = tenRandomPicturesArray.sort(compareRandom).slice(0,10);


function showTenRandomPictures(evt) {
  deffaultBtn.classList.remove('img-filters__button--active');
  randomBtn.classList.remove('img-filters__button--active');

  evt.target.classList.add('img-filters__button--active');

  const picturesImg = pictures.querySelectorAll('.picture');
  picturesImg.forEach((picture) => picture.remove());

  generatePictures(getRandomSubset(tenRandomPicturesArray,RANDOM_PICTURES_COUNT));
}


popularBtn.addEventListener('click', showPopularPictures);
deffaultBtn.addEventListener('click', showDeafaultPictures);
randomBtn.addEventListener('click', showTenRandomPictures);
