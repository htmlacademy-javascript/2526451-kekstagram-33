import {generatePictures,pictures} from'./generate-pictures.js';
import {photoDataArray} from'./data-fetcher.js';

const overlayTest = document.querySelector('.img-filters');
const formFilter = overlayTest.querySelector('.img-filters__form');
const [deffaultBtn, randomBtn, popularBtn] = formFilter.children;
overlayTest.classList.remove('img-filters--inactive');


const mostPopularArray = photoDataArray.slice();


function comparePopular (a,b) {
  return b.likes - a.likes;
}


mostPopularArray.sort(comparePopular);


function showDeafaultPictures(evt) {
  const picturesImg = pictures.querySelectorAll('.picture');
  picturesImg.forEach((picture) => picture.remove());

  evt.target.classList.add('img-filters__button--active');

  generatePictures(photoDataArray);

}

function showPopularPictures(evt) {

  evt.target.classList.add('img-filters__button--active');

  const picturesImg = pictures.querySelectorAll('.picture');
  picturesImg.forEach((picture) => picture.remove());

  generatePictures(mostPopularArray);
}


popularBtn.addEventListener('click', showPopularPictures);
deffaultBtn.addEventListener('click', showDeafaultPictures);
