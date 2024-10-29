const MAX_HASHTAGS = 5;

const hashtagRules = [
  'Начинается с символа #',
  'Содержит только буквы и цифры',
  'Не содержит пробелы и специальные символы',
  'Не может состоять только из одной решётки',
  'Максимальная длина — 20 символов',
  'Нечувствительны к регистру',
  'Разделяются пробелами',
  'Не могут быть использованы дважды',
  `Не более ${ MAX_HASHTAGS }ти хэштегов`,
  'Lлина комментария не может составлять больше 140 символов'
];


const hashtagsRegular = /^#[a-zа-я0-9]{1,19}$/i;

function validateAllhashtags(hashtagsArray) {

  if (!hashtagsArray.every((hashTag) => hashtagsRegular.test(hashTag))) {
    /* eslint-disable */
		console.log(hashtagRules[0], hashtagRules[1], hashtagRules[2], hashtagRules[3], hashtagRules[4], hashtagRules[5]);
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
			console.log(hashtagRules[7]);
			/* eslint-enable */
      return false;
    }
  }
  return true;
}


function maxHashtagsValidation(hashtagsArray, maxHashtags) {
  if (hashtagsArray.length > maxHashtags) {
    /* eslint-disable */
		console.log(hashtagRules[8]);
		/* eslint-enable */
    return false;
  }
  return true;
}
export {MAX_HASHTAGS,validateAllhashtags,hasDuplicateHashtags,maxHashtagsValidation};
