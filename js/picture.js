// import {getRandomArrayElement} from './util.js';
import {usersArray} from './data.js';
const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const pictureContainer = document.createDocumentFragment();

const newPictures = usersArray(25).sort(() => Math.random() - 0.5);
// \.sort(() => Math.random() - 0.5);
// временное решение c рандомом...
// console.log(newPictures);

newPictures.forEach((picture) => {
  const newPicture = pictureTemplate.cloneNode(true);
  const newPictureImage = newPicture.querySelector('.picture__img');
  newPictureImage.src = picture.url;
  newPictureImage.alt = picture.description;
  newPictureImage.id = picture.id;
  // console.table(picture);
  const [comments, likes] = newPicture.querySelector('.picture__info').children;
  likes.textContent = picture.likes;
  comments.textContent = picture.comments.length;
  pictureContainer.appendChild(newPicture);
});

/*
for (let i = 0; i < newPictures.length; i++) {
  const newPicture = pictureTemplate.cloneNode(true);
  const newPintureData = getRandomArrayElement(newPictures);

  const newPictureImage = newPicture.querySelector('.picture__img');
  newPictureImage.src = newPintureData.url;
  newPictureImage.alt = newPintureData.description;

  const [comments, likes] = newPicture.querySelector('.picture__info').children;
  likes.textContent = newPintureData.likes;
  comments.textContent = newPintureData.comments.length;
  pictureContainer.appendChild(newPicture);
}

*/

pictures.appendChild(pictureContainer);
export {};
export {newPictures, pictures};
