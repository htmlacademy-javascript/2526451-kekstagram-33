import {photoDataPromise} from './data-fetcher.js';
const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const pictureContainer = document.createDocumentFragment();

// console.log(photoDataArray);
// function generatePhoto (photoDataArray) {


function generatePictures (photoDataArray) {
  photoDataArray.forEach((picture) => {
    const newPicture = pictureTemplate.cloneNode(true);

    const newPictureImage = newPicture.querySelector('.picture__img');
    newPictureImage.src = picture.url;
    newPictureImage.alt = picture.description;

    const [comments, likes] = newPicture.querySelector('.picture__info').children;
    likes.textContent = picture.likes;
    comments.textContent = picture.comments.length;
    pictureContainer.appendChild(newPicture);
  });
  pictures.appendChild(pictureContainer);
}

photoDataPromise.then((photoData) => generatePictures(photoData));

export {pictures};
