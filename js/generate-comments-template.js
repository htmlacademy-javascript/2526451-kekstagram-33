import { photoDataArray } from './data.js';

const newCommentArea = document.querySelector('.social__comments');
const commentContainer = document.createDocumentFragment();


function generateComment (pictureSrc) {

  //pictureSrc приходит полным путем localhost и тд

  // делаем ссылкой
  const url = new URL(pictureSrc);
  // .. полный путь
  const imagePath = url.pathname;
  // убираем вначале /
  const formattedPath = imagePath.slice(1);

  // перебираем и сравниваю. возвращаю элемент массива нужный по Клику...

  // ну костылище же
  const pictureData = photoDataArray.find((imgUrl) => imgUrl.url === formattedPath);

  if (pictureData && pictureData.comments) {
    pictureData.comments.forEach ((comment) => {
      const newCommentTemplate = document.createElement('LI');
      newCommentTemplate.classList.add('social__comment');

      const newCommentImage = document.createElement('IMG');
      newCommentImage.classList.add('social__picture');
      newCommentImage.src = comment.avatar;
      newCommentImage.alt = comment.name;
      newCommentImage.setAttribute('width', '35');
      newCommentImage.setAttribute('height', '35');
      newCommentTemplate.appendChild(newCommentImage);

      const newCommentDescription = document.createElement('P');
      newCommentDescription.classList.add('social__text');
      newCommentDescription.textContent = comment.message;
      newCommentTemplate.appendChild(newCommentDescription);

      commentContainer.appendChild(newCommentTemplate);
    });
    newCommentArea.innerHTML = '';
    newCommentArea.appendChild(commentContainer);
  }
}

export { generateComment};
