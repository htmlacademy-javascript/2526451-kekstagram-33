import {MAX_HASHTAGS,validateAllhashtags,hasDuplicateHashtags,maxHashtagsValidation} from'./validation-checks.js';

const imgUpload = document.querySelector('.img-upload');
const uploadForm = imgUpload.querySelector('.img-upload__form');

const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const comment = uploadForm.querySelector('.text__description');
// попробуй потом без разделить условия и отдельно прописать события всплывашки
const hashtagsPristneValidator = new Pristine(uploadForm);
// захочешь потом можно добавить все описания
// не забудь массивы удалять или смотреть за ними

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

hashtagsPristneValidator.addValidator(hashtagsInput, validateHashtagsInput);
hashtagsPristneValidator.addValidator(comment, validateCommentinput);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  /* eslint-disable */
  console.log(validateHashtagsInput(hashtagsInput.value));
  	/* eslint-enable */
});

export {hashtagsInput,uploadForm,comment};
