import {MAX_HASHTAGS,validateAllhashtags,hasDuplicateHashtags,maxHashtagsValidation} from'./validation-checks.js';
import {sendData} from'../../data-fetcher.js';
import {sendDataErrorModalShownEvent, sendDataSuccessModalShownEvent} from'./server-submit-modal-window.js';


const imgUpload = document.querySelector('.img-upload');
const uploadForm = imgUpload.querySelector('.img-upload__form');

const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const comment = uploadForm.querySelector('.text__description');

const submitBtn = uploadForm.querySelector('.img-upload__submit');
// попробуй потом разделить условия и отдельно прописать события всплывашки

const pristine = new Pristine(uploadForm);
// захочешь потом можно добавить все описания
// не забудь массивы удалять смотреть за ними

function validateHashtagsInput(value) {
  if (value) {
    const hastTagsArray = value.split(' ');

    const allHashtagsRegularValid = validateAllhashtags(hastTagsArray);
    const noneDuplicates = hasDuplicateHashtags(hastTagsArray);
    const maxHashtagsValid = maxHashtagsValidation(hastTagsArray, MAX_HASHTAGS);

    return allHashtagsRegularValid && noneDuplicates && maxHashtagsValid;
  }
  return true;
}

function validateCommentinput (value) {
  if (value && value.length >= 140) {
    /* eslint-disable */
		console.log(hashtagRules[9]);
		/* eslint-enable */
    return false;
  }
  return true;
}

function defaultFormValues () {
  hashtagsInput.value = '';
  comment.value = '';
}

function blockEscKeyDownEvent (eventToBlock) {
  if (document.activeElement !== hashtagsInput && document.activeElement !== comment) {
    eventToBlock(true);
  }
  if (!sendDataErrorModalShownEvent) {
    eventToBlock(true);
  }
}

pristine.addValidator(hashtagsInput, validateHashtagsInput);
pristine.addValidator(comment, validateCommentinput);

function blockSubmitBtn () {
  submitBtn.disabled = true;
  // замути таймаут позже
  submitBtn.textContent = 'Отправка...';
}
function unblockSubmitBtn () {
  submitBtn.disabled = false;
  submitBtn.textContent = 'Опубликовать';
}


function setUserFormSubmit (onSuccess) {

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    //отрицание
    if (!isValid) {
      console.log(isValid);
      blockSubmitBtn();
      sendData(
        // onSuccess
        () => {
          onSuccess();
          sendDataSuccessModalShownEvent();
          unblockSubmitBtn();
        },
        // fail
        () => {
          sendDataErrorModalShownEvent();
          unblockSubmitBtn();
        },
        // body
        new FormData(evt.target)
      );
    }
  }

  );
}

export {defaultFormValues, setUserFormSubmit, uploadForm, blockEscKeyDownEvent, hashtagsInput};
