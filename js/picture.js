// import {getRandomArrayElement} from './util.js';
import {usersArray} from './data.js';
const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const pictureContainer = document.createDocumentFragment();

const newPictures = usersArray(25);
// временное решение...
newPictures.sort(() => Math.random() - 0.5);

newPictures.forEach((picture) =>{
  const newPicture = pictureTemplate.cloneNode(true);
  const newPictureImage = newPicture.querySelector('.picture__img');
  newPictureImage.src = picture.url;
  newPictureImage.alt = picture.description;

  const newPictureInfo = newPicture.querySelector('.picture__info').children;
  const [comments, likes] = newPictureInfo;
  likes.textContent = picture.likes;
  comments.textContent = picture.comments.length;
  pictureContainer.appendChild(newPicture);
});

pictures.appendChild(pictureContainer);
