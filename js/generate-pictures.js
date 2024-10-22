// import {getRandomArrayElement} from './util.js';
import {photoDataArray} from './data.js';
const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const pictureContainer = document.createDocumentFragment();

const newPictures = photoDataArray;
// .sort(() => Math.random() - 0.5);
// рандом или не рандом

newPictures.forEach((picture) => {
  const newPicture = pictureTemplate.cloneNode(true);

  const newPictureImage = newPicture.querySelector('.picture__img');
  newPictureImage.src = picture.url;
  newPictureImage.alt = picture.description;
  // вот тут ID...
  newPictureImage.id = picture.id;

  const [comments, likes] = newPicture.querySelector('.picture__info').children;
  likes.textContent = picture.likes;
  comments.textContent = picture.comments.length;
  pictureContainer.appendChild(newPicture);
});

pictures.appendChild(pictureContainer);

export {newPictures, pictures};
