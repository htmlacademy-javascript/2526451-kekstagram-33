import {MAX_HASHTAGS,validateAllhashtags,hasDuplicateHashtags,maxHashtagsValidation} from'./validation-checks.js';
import {sendData} from'../../data-fetcher.js';
import {showErrorSuccessModal} from'./error-success-modal.js';


const imgUpload = document.querySelector('.img-upload');
const uploadForm = imgUpload.querySelector('.img-upload__form');

const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const comment = uploadForm.querySelector('.text__description');

const submitBtn = uploadForm.querySelector('.img-upload__submit');

const pristine = new Pristine(uploadForm);


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

function blockEscKeyDownEvent () {
  const isActive = document.activeElement === hashtagsInput || document.activeElement === comment;
  return isActive;
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

function setUserFormSubmit () {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    //отрицание
    if (!isValid) {
      // console.log(isValid);
      blockSubmitBtn();
      sendData(
        // onSuccess
        () => {
          showErrorSuccessModal('#success');
          unblockSubmitBtn();
        },
        // fail
        () => {
          showErrorSuccessModal('#error');
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
