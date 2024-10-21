const uploadFile = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const overlayCloseButton = document.querySelector('.img-upload__cancel');
const body = document.body;


const onModalEscKeyDown = (evt) => {
  if (evt.keyCode === 27) {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onModalEscKeyDown);
    overlayCloseButton.removeEventListener('click', onModalCloseBtnClick);
  }
};
const onModalCloseBtnClick = (evt) => {
  evt.preventDefault();

  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  overlayCloseButton.removeEventListener('click', onModalCloseBtnClick);
  document.removeEventListener('keydown', onModalEscKeyDown);
};


const onFileUploadBtnClick = (evt) => {
  evt.preventDefault();

  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeyDown);
  overlayCloseButton.addEventListener('click', onModalCloseBtnClick);
  // uploadFile.removeEventListener('click', windowOpenEvent);
};

uploadFile.addEventListener('click', onFileUploadBtnClick);

// };
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
