const imgUpload = document.querySelector('.img-upload');
const uploadForm = imgUpload.querySelector('.img-upload__form');
// const containers = uploadForm.querySelectorAll('.img-upload__field-wrapper');
// const [hashTagsContainer,] = containers;


const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const hashtagsRegular = /^#[a-zа-я0-9]{1,19}$/i;


const hashtagsPristneValidator = new Pristine(uploadForm);
// ПЕПЕПИСАТЬ ТАК ЖЕ
// захочешь потом можно добавить все описания


function validateAllhashtags(hashtagsArray) {

  if (!hashtagsArray.every((hashTag) => hashtagsRegular.test(hashTag))) {
    /* eslint-disable */
  //  console.log('Хештег должен начинаться с № и не иметь пробелов и без спецсимволов');
   /* eslint-enable */
    return false;
  }
  return true;
}


function hasDuplicateHashtags(hashtagsArray) {
  const noDuplicate = {};
  for (let i = 0; i < hashtagsArray.length; i++) {
    const hashtag = hashtagsArray[i];
    if (!noDuplicate[hashtag]) {
      noDuplicate[hashtag] = true;
    } else {
      /* eslint-disable */
      console.log('дубль');
         /* eslint-enable */
      return false;
    }
  }
  return true;
}

function maxHashtagsValidation (hashtagsArray,maxHashtags) {
  if (hashtagsArray. length > maxHashtags) {
    console.log('не больше 5ти хештегов');
    return false;
  }
  return true;
}

function validateHashtagsInput(value) {
  const hastTagsArray = value.split(' ');
  const maxHashtags = 5;


  const allHashtagsRegularValid = validateAllhashtags(hastTagsArray);
  const noneDuplicates = hasDuplicateHashtags(hastTagsArray);
  const maxHashtagsValid = maxHashtagsValidation(hastTagsArray,maxHashtags);


  return allHashtagsRegularValid && noneDuplicates && maxHashtagsValid;
}

hashtagsPristneValidator.addValidator(hashtagsInput,validateHashtagsInput);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  // console.log(!hashtagsPristneValidator.validate());
  console.log(validateHashtagsInput(hashtagsInput.value));
});
