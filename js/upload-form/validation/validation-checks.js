const MAX_HASHTAGS = 5;

const hashtagsRegular = /^#[a-zа-я0-9]{1,19}$/i;

let errorMesage = [ ];

function hasDuplicateHashtags(hashtagsArray) {
  const noDuplicate = {};
  for (let i = 0; i < hashtagsArray.length; i++) {
    const hashtag = hashtagsArray[i];
    if (!noDuplicate[hashtag]) {
      noDuplicate[hashtag] = true;
    } else {
      return false;
    }
  }
  return true;
}

function getErrorsMessages (){
  return errorMesage.join(', ');
}

function validateHashtagsInput(value) {
  if (value) {
    const hashtagsArray = value.split(' ');

    const allHashtagsRegularValid = hashtagsArray.every((hashTag) => hashtagsRegular.test(hashTag));
    const noDuplicateHashtags = hasDuplicateHashtags(hashtagsArray);
    const maxHashtagsValid = hashtagsArray.length < MAX_HASHTAGS;

    const hashtagsValidationArray = [
      { isValid: allHashtagsRegularValid, message: 'введён невалидный хэштег' },
      { isValid: noDuplicateHashtags, message: 'хэштеги повторяются' },
      { isValid: maxHashtagsValid, message: 'превышено количество хэштегов' }
    ];
    errorMesage = [];
    hashtagsValidationArray.forEach(({isValid, message})=>{
      if (!isValid) {
        errorMesage.push(message);
      }
    });
    return allHashtagsRegularValid && noDuplicateHashtags && maxHashtagsValid;
  }
  return true;
}


export {validateHashtagsInput, getErrorsMessages};
