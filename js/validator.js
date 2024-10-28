const imgUpload = document.querySelector('.img-upload');
const uploadForm = imgUpload.querySelector('.img-upload__form');
// const containers = uploadForm.querySelectorAll('.img-upload__field-wrapper');
// const [hashTagsContainer,] = containers;


const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const hashtagsRegular = /^#[a-zа-я0-9]{1,19}$/i;


const hashtagsPristneValidator = new Pristine(uploadForm);
// ПЕПЕПИСАТЬ ТАК ЖЕ
// захочешь потом можно добавить все описания


function validateHashtagsInput(value) {

  const hashTags = value.split(' ');
  const allHashgagsTrue = hashTags.every((hashTag) => hashtagsRegular.test(hashTag));

  function doubledHashtags (){


  }

  return allHashgagsTrue;
}


hashtagsPristneValidator.addValidator(hashtagsInput,validateHashtagsInput);


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  // console.log(!hashtagsPristneValidator.validate());
  console.log(validateHashtagsInput(hashtagsInput.value));
});
