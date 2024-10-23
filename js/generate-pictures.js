import {photoDataArray} from './data.js';
const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const pictureContainer = document.createDocumentFragment();

photoDataArray.forEach((picture) => {
  const newPicture = pictureTemplate.cloneNode(true);

  const newPictureImage = newPicture.querySelector('.picture__img');
  newPictureImage.src = picture.url;
  newPictureImage.alt = picture.description;

  // делал сюда в newPictureImage.id = picture.id
  // и перебирал массив photoDataArray значениями (ID - 1)
  // но в верстку не хотел добавлять id
  // переделал по поиску пути

  const [comments, likes] = newPicture.querySelector('.picture__info').children;
  likes.textContent = picture.likes;
  comments.textContent = picture.comments.length;
  pictureContainer.appendChild(newPicture);
});

pictures.appendChild(pictureContainer);

export {pictures};
