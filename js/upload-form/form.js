import {sendData} from'../data-fetcher.js';
import {validateHashtagsInput,getErrorsMessages,cleanErrorsMessages} from'./validation/validation-checks.js';
import {showErrorSuccessModal} from'./error-success-modal.js';
import { fileChooser } from './image-upload.js';
// переименнуй все красиво
const uploadForm = document.querySelector('.img-upload__form');


const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const comment = uploadForm.querySelector('.text__description');

const submitBtn = uploadForm.querySelector('.img-upload__submit');

const MAX_COMMENTS_LENGTH = 140;

const pristine = new Pristine(uploadForm,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    classInvalid: 'img-upload__field-wrapper--error',
    errorTextTag: 'div',
    errorTextClass: 'img-upload__field-wrapper--error',
  }, false
);

function defaultFormValues () {
  hashtagsInput.value = '';
  comment.value = '';
  fileChooser.value = '';
}

function blockEscKeyDownEvent () {
  const isActive = document.activeElement === hashtagsInput || document.activeElement === comment;
  return isActive;
}

function blockSubmitBtn () {
  submitBtn.disabled = true;
  // замути таймаут позже
  submitBtn.textContent = 'Отправка...';
}

function unblockSubmitBtn () {
  submitBtn.disabled = false;
  submitBtn.textContent = 'Опубликовать';
}

pristine.addValidator(hashtagsInput, validateHashtagsInput, getErrorsMessages);

pristine.addValidator(comment, (value) =>
  value.length < MAX_COMMENTS_LENGTH,
'Длина комментария больше 140 символов');

function setUserFormSubmit (closeModalWindow) {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      cleanErrorsMessages();
      blockSubmitBtn();
      sendData(
        // onSuccess
        () => {
          showErrorSuccessModal('#success');
          unblockSubmitBtn();
          pristine.reset();
          closeModalWindow();
        },
        // fail
        () => {
          showErrorSuccessModal('#error');
          unblockSubmitBtn();
        },
        // body
        new FormData(evt.target)
      );
    } else {
      submitBtn.addEventListener('focusout', () => {
        pristine.reset();
      });
    }
  }
  );
}

export {defaultFormValues, setUserFormSubmit, uploadForm, blockEscKeyDownEvent, hashtagsInput};
