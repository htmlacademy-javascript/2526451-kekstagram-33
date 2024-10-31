import {hashtagsInput} from'./validator.js';


function hashtagsFormatter(hashtTagsArray) {
  const newArray = [];

  for (let i = hashtTagsArray.length - 1; i >= 0; i--) {
    if (hashtTagsArray[i].trim() === '') {
      hashtTagsArray.splice(i, 1);
    }
  }
  if ((hashtTagsArray[0])[0] !== '#') {
    const firstHashtag = `#${ hashtTagsArray[0]}`;
    hashtTagsArray[0] = firstHashtag;
  }
  for (let i = 0; i < hashtTagsArray.length; i++) {
    const newHashtag = ((hashtTagsArray[i].replace(/#/g, ' #'))).trim();
    if (newHashtag.includes(' ')) {
      const splitHashtagArray = newHashtag.split(' ');
      splitHashtagArray.forEach((hashtag) => {
        const trimmed = hashtag.trim();
        newArray.push(trimmed);
      });
    } else {
      newArray.push(newHashtag);
    }
  }
  return newArray;
}


hashtagsInput.addEventListener('focus', () => {
  if (hashtagsInput.value === '') {
    hashtagsInput.value = '#';
  }
});
hashtagsInput.addEventListener('focusout', () => {
  if (hashtagsInput.value === '#') {
    hashtagsInput.value = '';
  }
});

hashtagsInput.addEventListener('change', () => {
  const hastTagsArray = hashtagsInput.value.split(' ');
  hashtagsInput.value = hashtagsFormatter(hastTagsArray).join(' ');
});
