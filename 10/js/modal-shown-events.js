import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const overlayCloseButton = document.querySelector('.img-upload__cancel');
const body = document.body;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    closeModalWindow();
  }
};

function openModalWindow (evt) {
  evt.preventDefault();
  uploadOverlay.classList.remove('hidden');

  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModalWindow () {
  uploadOverlay.classList.add('hidden');

  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

uploadFile.addEventListener('click', openModalWindow);

overlayCloseButton.addEventListener('click', closeModalWindow) ;

/*
1. Загрузка нового изображения на сайт и заполнение информации о нём
1.1. Загрузка нового изображения:

выбор файла с изображением для загрузки;
изменение масштаба изображения;
применение одного из заранее заготовленных эффектов;
выбор глубины эффекта с помощью ползунка;
добавление текстового комментария;
добавление хэштегов.
1.2. Выбор изображения для загрузки осуществляется с помощью стандартного контрола загрузки файла .img-upload__input, который стилизован под букву «О» в логотипе. После выбора изображения (изменения значения поля .img-upload__input), показывается форма редактирования изображения. У элемента .img-upload__overlay удаляется класс hidden, а body задаётся класс modal-open.

После выбора изображения пользователем с помощью стандартного контрола загрузки файла .img-upload__input, нужно подставить его в форму редактирования вместо тестового изображения в блок предварительного просмотра и в превью эффектов.

1.3 Закрытие формы редактирования изображения производится либо нажатием на кнопку .img-upload__cancel, либо нажатием клавиши Esc. Элементу .img-upload__overlay возвращается класс hidden. У элемента body удаляется класс modal-open.*/
