import {sendData} from'../data-fetcher.js';

import {validateHashtagsInput,getErrorsMessages,cleanErrorsMessages} from'./validation/validation-checks.js';
import {showErrorSuccessModal} from'./error-success-modal.js';
import { fileChooser } from './file-chooser.js';

const MAX_COMMENTS_LENGTH = 140;


const uploadForm = document.querySelector('.img-upload__form');

const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentsTextarea = uploadForm.querySelector('.text__description');
const submitBtn = uploadForm.querySelector('.img-upload__submit');

const pristine = new Pristine(uploadForm,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    classInvalid: 'img-upload__field-wrapper--error',
    errorTextTag: 'div',
    errorTextClass: 'img-upload__field-wrapper--error',
  }, false
);

const defaultFormValues = () => {
  hashtagsInput.value = '';
  commentsTextarea.value = '';
  fileChooser.value = '';
};

const blockSubmitBtn = () => {
  submitBtn.disabled = true;
  submitBtn.textContent = 'Публикуем...';
};

const unblockSubmitBtn = () => {
  submitBtn.disabled = false;
  submitBtn.textContent = 'Опубликовать';
};

pristine.addValidator(hashtagsInput, validateHashtagsInput, getErrorsMessages);

pristine.addValidator(commentsTextarea, (value) =>
  value.length < MAX_COMMENTS_LENGTH,
'Длина комментария больше 140 символов');

const setUserFormSubmit = (closeModalWindow) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitBtn();
      sendData(
        () => {
          showErrorSuccessModal('#success');
          unblockSubmitBtn();
          pristine.reset();
          closeModalWindow();
        },
        () => {
          showErrorSuccessModal('#error');
          unblockSubmitBtn();
        },
        new FormData(evt.target)
      );
    } else {
      cleanErrorsMessages();
      submitBtn.addEventListener('focusout', () => {
        pristine.reset();
      });
    }
  }
  );

};

export {defaultFormValues, setUserFormSubmit, uploadForm, hashtagsInput,commentsTextarea};
