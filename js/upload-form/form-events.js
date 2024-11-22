import {isEscapeKey, compensateOverflowPadding} from '../util.js';
import {addListner,removeListner} from '../big-picture/big-picture-events.js';

import { createSlider,defaultSliderValue } from './slider/slider.js';
import {defaultFormValues, blockEscKeyDownEvent} from'./form.js';
import {defaultImgScaleValues} from'./scale-handler.js';

import {setUserFormSubmit} from'./form.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const overlayCloseButton = uploadOverlay.querySelector('.img-upload__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (blockEscKeyDownEvent()) {
      return;
    }
    closeModalWindow();
  }
};

function openModalWindow () {
  compensateOverflowPadding(true);

  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  removeListner();
  document.addEventListener('keydown', onDocumentKeydown);
  createSlider();
}

function closeModalWindow () {
  compensateOverflowPadding(false);
  uploadOverlay.classList.add('hidden');

  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  addListner();
  defaultImgScaleValues();
  defaultFormValues();
  defaultSliderValue();
}

setUserFormSubmit(closeModalWindow);

overlayCloseButton.addEventListener('click', closeModalWindow) ;

export {onDocumentKeydown,openModalWindow};
