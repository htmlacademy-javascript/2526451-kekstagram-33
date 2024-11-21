import { isEscapeKey,compensateOverflowPadding } from '../util.js';
import {pictures} from '../generate-pictures.js';

import {generateComments } from './generate-comments-template.js';
import { hideCommentsOnLoadBigPicture,showNextComments , getCommentShownCount} from './comments-functions.js';


const bigPictureWindow = document.querySelector('.big-picture');
const commentShownCount = bigPictureWindow.querySelector('.social__comment-shown-count');


const bigPictureWindowCloseBtn = bigPictureWindow.querySelector('.big-picture__cancel');
const bigPictureImage = bigPictureWindow.querySelector('.big-picture__img').children[0];
const likesCount = bigPictureWindow.querySelector('.likes-count');
const commentsTotalCount = bigPictureWindow.querySelector('.social__comment-total-count');

const pictureDescription = bigPictureWindow.querySelector('.social__caption');

const commentsLoader = bigPictureWindow.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureWindow();
  }
};

function getCommentsList (){
  return bigPictureWindow.querySelectorAll('.social__comment');
}

function openBigPictureWindow () {
  compensateOverflowPadding(true);

  bigPictureWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener ('click', showNextComments);
}

function closeBigPictureWindow () {
  compensateOverflowPadding(false);
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
function removeListner () {
  pictures.removeEventListener('click', onPictureClick);
  pictures.removeEventListener('click', hideCommentsOnLoadBigPicture);
}
function addListner () {
  pictures.addEventListener('click', onPictureClick);
}

function onPictureClick (evt) {

  if (evt.target.nodeName === 'IMG') {
    const target = evt.target.parentElement;
    const [targetImage, { children: [newComentsCount, newLikesCount] }] = target.children;

    generateComments(targetImage.src);
    hideCommentsOnLoadBigPicture();

    openBigPictureWindow();

    const imageUrl = new URL(targetImage.src);

    bigPictureImage.src = imageUrl.pathname.slice(1);
    commentsTotalCount.textContent = newComentsCount.textContent;

    likesCount.textContent = newLikesCount.textContent;
    pictureDescription.textContent = targetImage.alt;

    getCommentShownCount();
    hideCommentsLoader();
  }
}

bigPictureWindowCloseBtn.addEventListener('click', closeBigPictureWindow);
pictures.addEventListener('click', onPictureClick);

export {getCommentsList, commentsLoader, commentShownCount,removeListner,addListner};
