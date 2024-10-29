import {isEscapeKey} from './util.js';
import { createSlider } from './slider.js';
import {hashtagsInput,comment} from'./validation/validator.js';

const uploadFile = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const overlayCloseButton = uploadOverlay.querySelector('.img-upload__cancel');
const body = document.body;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement !== hashtagsInput && document.activeElement !== comment) {
      closeModalWindow();
    }
  }
};

function openModalWindow (evt) {
  evt.preventDefault();
  uploadOverlay.classList.remove('hidden');

  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  createSlider();
}

function closeModalWindow () {
  uploadOverlay.classList.add('hidden');

  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

uploadFile.addEventListener('click', openModalWindow);

overlayCloseButton.addEventListener('click', closeModalWindow) ;

export{uploadOverlay,};
