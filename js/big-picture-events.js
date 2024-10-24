import { isEscapeKey } from './util.js';
import {pictures} from './generate-pictures.js';
import {generateComments } from './generate-comments-template.js';
import {hideComments,showComments} from './new-module.js';

// Окно
const bigPictureWindow = document.querySelector('.big-picture');
// временно по переменнымы
const commentsLoader = bigPictureWindow.querySelector('.comments-loader');


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


// const HIDE_COMMENTS_COUNT_START = 5;


function openBigPictureWindow () {
  bigPictureWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener ('click', showComments);

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
pictures.addEventListener('click', hideComments);

export {bigPictureWindow};
