import {isEscapeKey} from '../util.js';
// import {pictures} from './generate-pictures.js';
import {addListner,removeListner} from '../big-picture-events.js';

import { createSlider,defaultSliderValue } from './slider/slider.js';
import {defaultFormValues, blockEscKeyDownEvent} from'./validation/validator.js';
import {deafultImgScaleValues} from'./scale-handler.js';

import {setUserFormSubmit} from'./validation/validator';


const uploadFile = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const overlayCloseButton = uploadOverlay.querySelector('.img-upload__cancel');
const body = document.body;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    blockEscKeyDownEvent(closeModalWindow);
  }
};

function openModalWindow (evt) {
  evt.preventDefault();
  uploadOverlay.classList.remove('hidden');

  body.classList.add('modal-open');
  removeListner();
  document.addEventListener('keydown', onDocumentKeydown);
  createSlider();
}

function closeModalWindow (stopEvent) {
  if (!stopEvent) {
    uploadOverlay.classList.add('hidden');

    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onDocumentKeydown);
    // че за листнер.. потом разберись при шлифовке.
    addListner();
    deafultImgScaleValues();
    defaultFormValues();
    defaultSliderValue();
  }
}

setUserFormSubmit(closeModalWindow);

uploadFile.addEventListener('click', openModalWindow);
overlayCloseButton.addEventListener('click', closeModalWindow) ;
