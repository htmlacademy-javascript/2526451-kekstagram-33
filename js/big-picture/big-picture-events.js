import { isEscapeKey } from '../util.js';
import {pictures} from '../generate-pictures.js';

import {generateComments } from '../big-picture/generate-comments-template.js';
import { hideCommentsOnLoadBigPicture,showNextComments , getCommentShownCount} from '../comments-functions.js';

// Окно
const bigPictureWindow = document.querySelector('.big-picture');
const commentShownCount = bigPictureWindow.querySelector('.social__comment-shown-count');


const bigPictureWindowCloseBtn = bigPictureWindow.querySelector('.big-picture__cancel');
const bigPictureImage = bigPictureWindow.querySelector('.big-picture__img').children[0];
// Счетчики
const likesCount = bigPictureWindow.querySelector('.likes-count');
const commentsTotalCount = bigPictureWindow.querySelector('.social__comment-total-count');

const pictureDescription = bigPictureWindow.querySelector('.social__caption');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureWindow();
  }
};

function getCommentsList (){
  return bigPictureWindow.querySelectorAll('.social__comment');
}
// временно по переменнымю разберись потом по экспорту импорту

const commentsLoader = bigPictureWindow.querySelector('.comments-loader');


function openBigPictureWindow () {

  bigPictureWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener ('click', showNextComments);
}

function closeBigPictureWindow () {
  bigPictureWindow.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
}

function hideCommentsLoader () {
  const commentsList = getCommentsList();
  if (commentsList.length <= 5) {
    commentsLoader.classList.add('hidden');
  } else if (commentsLoader.classList.contains('hidden')) {
    commentsLoader.classList.remove('hidden');
  }
}
// Пока костыль
function removeListner () {
  pictures.removeEventListener('click', onPictureClick);
  pictures.removeEventListener('click', hideCommentsOnLoadBigPicture);
}
function addListner () {
  pictures.addEventListener('click', onPictureClick);
  // pictures.addEventListener('click', hideCommentsOnLoadBigPicture);
}

function onPictureClick (evt) {

  if (evt.target.nodeName === 'IMG') {
    hideCommentsOnLoadBigPicture();
    const target = evt.target.parentElement;

    const [targetImage, { children: [newComentsCount, newLikesCount] }] = target.children;
    openBigPictureWindow();

    bigPictureImage.src = targetImage.src;
    commentsTotalCount.textContent = newComentsCount.textContent;

    likesCount.textContent = newLikesCount.textContent;
    pictureDescription.textContent = targetImage.alt;

    generateComments(targetImage.src);
    getCommentShownCount();
    hideCommentsLoader();
  }
}

bigPictureWindowCloseBtn.addEventListener('click', closeBigPictureWindow);

pictures.addEventListener('click', onPictureClick);
pictures.addEventListener('click', hideCommentsOnLoadBigPicture);

export {getCommentsList, commentsLoader, commentShownCount,removeListner,addListner};
