
/*
Окно должно открываться при клике на миниатюру. Данные для окна (изображение, комментарии, лайки и так далее) берите из того же объекта, который использовался для отрисовки соответствующей миниатюры.

Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:

Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

Количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count.

Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count.

Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

<li class="social__comment">
  <img
    class="social__picture"
    src="{{аватар}}"
    alt="{{имя комментатора}}"
    width="35" height="35">
  <p class="social__text">{{текст комментария}}</p>
</li>

        Копировать

Описание фотографии description вставьте строкой в блок .social__caption.

После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

Подключите модуль в проект.
*/
// import {newPictures} from './picture';

import { isEscapeKey } from './util';
import { pictures } from './picture';
import { newPictures } from './picture';
const bigPictureWindow = document.querySelector('.big-picture');
const bigPictureWindowCloseBtn = bigPictureWindow.querySelector('.big-picture__cancel');
const bigPictureImage = bigPictureWindow.querySelector('.big-picture__img').children[0];

const newCommentArea = document.querySelector('.social__comments');
const likesCount = bigPictureWindow.querySelector('.likes-count');
const commentShownCount = bigPictureWindow.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPictureWindow.querySelector('.social__comment-total-count');

// const [bigPictureCommentAvatar, bigPictureCommentDescription] = bigPictureWindow.querySelector('.social__comment').children;

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

// Убраться в  Коде
// console.log(bigPictureCommentAvatar);
// console.log(bigPictureCommentDescription);
const newCommentContainer = document.createDocumentFragment();

// function createCommentTemplate () {
// }


// const newPictureComents = [];
// newPictures.forEach((picture) => {

// picture.comments.forEach((comment) => {

// function createComment (id) {
//   const newCommentTemplate = document.createElement('LI');
//   newCommentTemplate.classList.add('social__comment');

//   const newCommentImage = document.createElement('IMG');
//   newCommentImage.classList.add('social__picture');
//   newCommentImage.src = comment.avatar;
//   newCommentImage.alt = comment.name;

//   newCommentTemplate.appendChild(newCommentImage);

//   const newCommentDescription = document.createElement('P');
//   newCommentDescription.classList.add('social__text');
//   newCommentDescription.textContent = comment.message;
//   newCommentTemplate.appendChild(newCommentDescription);

//   newCommentContainer.appendChild(newCommentTemplate);
//   console.log(newCommentTemplate);
// // newCommentArea.appendChild(newCommentTemplate);
// }

// console.log(newPictures[2].comments);

function createComment (id) {
  console.log(newPictures[id - 1].comments);

  newPictures[id - 1].comments.forEach ((comment) => {
    const newCommentTemplate = document.createElement('LI');
    newCommentTemplate.classList.add('social__comment');

    const newCommentImage = document.createElement('IMG');
    newCommentImage.classList.add('social__picture');
    newCommentImage.src = comment.avatar;
    newCommentImage.alt = comment.name;

    newCommentTemplate.appendChild(newCommentImage);

    const newCommentDescription = document.createElement('P');
    newCommentDescription.classList.add('social__text');
    newCommentDescription.textContent = comment.message;
    newCommentTemplate.appendChild(newCommentDescription);

    // console.log(newCommentTemplate);
    newCommentArea.appendChild(newCommentTemplate);
  });
// newCommentArea.appendChild(newCommentImage);
}

//   });
// });


function onPictureClick (evt) {
  const target = evt.target.parentElement;
  const [targetImage, targetInfo] = target.children;

  if (evt.target.nodeName === 'IMG') {
    openBigPictureWindow();
    bigPictureImage.src = targetImage.src;
    commentShownCount.textContent = '3?';
    commentsTotalCount.textContent = targetInfo.children[0].textContent;
    likesCount.textContent = targetInfo.children[1].textContent;

    createComment(targetImage.id);
  }
}

bigPictureWindowCloseBtn.addEventListener('click', closeBigPictureWindow);

pictures.addEventListener('click', onPictureClick);
