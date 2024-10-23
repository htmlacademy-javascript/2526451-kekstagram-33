import { isEscapeKey } from './util.js';
import {pictures} from './generate-pictures.js';
import {generateComment as generateComments} from './generate-comments-template.js';
// Окно
const bigPictureWindow = document.querySelector('.big-picture');
const bigPictureWindowCloseBtn = bigPictureWindow.querySelector('.big-picture__cancel');
const bigPictureImage = bigPictureWindow.querySelector('.big-picture__img').children[0];
// Счетчики
const likesCount = bigPictureWindow.querySelector('.likes-count');
const commentShownCount = bigPictureWindow.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPictureWindow.querySelector('.social__comment-total-count');

const pictureDescription = bigPictureWindow.querySelector('.social__caption');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureWindow();
  }
};

function openBigPictureWindow () {
  bigPictureWindow.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.classList.add('modal-open');
}

function closeBigPictureWindow () {
  bigPictureWindow.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
}

function onPictureClick (evt) {

  if (evt.target.nodeName === 'IMG') {
    const target = evt.target.parentElement;

    const [targetImage, { children: [newComentsCount, newLikesCount] }] = target.children;
    openBigPictureWindow();

    bigPictureImage.src = targetImage.src;
    commentShownCount.textContent = '3?';

    commentsTotalCount.textContent = newComentsCount.textContent;
    likesCount.textContent = newLikesCount.textContent;

    pictureDescription.textContent = targetImage.alt;

    generateComments(targetImage.src);
  }
}
bigPictureWindowCloseBtn.addEventListener('click', closeBigPictureWindow);

pictures.addEventListener('click', onPictureClick);

export {bigPictureWindow};
