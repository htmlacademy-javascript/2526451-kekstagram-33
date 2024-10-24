import { isEscapeKey } from './util.js';
import {pictures} from './generate-pictures.js';
import {generateComments } from './generate-comments-template.js';
import { hideCommentsOnLoadBigPicture,showNextComments , getCommentShownCount} from './new-module.js';

// Окно
const bigPictureWindow = document.querySelector('.big-picture');
const commentShownCount = bigPictureWindow.querySelector('.social__comment-shown-count');


const bigPictureWindowCloseBtn = bigPictureWindow.querySelector('.big-picture__cancel');
const bigPictureImage = bigPictureWindow.querySelector('.big-picture__img').children[0];
// Счетчики
const likesCount = bigPictureWindow.querySelector('.likes-count');
const commentsTotalCount = bigPictureWindow.querySelector('.social__comment-total-count');

const pictureDescription = bigPictureWindow.querySelector('.social__caption');

// посмотреть зачем тут такая функция , можно ли совместить на общее окно закрытия
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

// const HIDE_COMMENTS_COUNT_START = 5;


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

function showHideCommentsLoader () {
  const commentsList = getCommentsList();
  if (commentsList.length <= 5) {
    commentsLoader.classList.add('hidden');
  } else if (commentsLoader.classList.contains('hidden')) {
    commentsLoader.classList.remove('hidden');
  }
}


function onPictureClick (evt) {
  if (evt.target.nodeName === 'IMG') {
    const target = evt.target.parentElement;

    const [targetImage, { children: [newComentsCount, newLikesCount] }] = target.children;
    openBigPictureWindow();
    getCommentShownCount();

    bigPictureImage.src = targetImage.src;
    commentsTotalCount.textContent = newComentsCount.textContent;

    likesCount.textContent = newLikesCount.textContent;
    pictureDescription.textContent = targetImage.alt;

    generateComments(targetImage.src);
    showHideCommentsLoader();
  }
}

bigPictureWindowCloseBtn.addEventListener('click', closeBigPictureWindow);

pictures.addEventListener('click', onPictureClick);
pictures.addEventListener('click', hideCommentsOnLoadBigPicture);

export {getCommentsList, commentsLoader, commentShownCount};
