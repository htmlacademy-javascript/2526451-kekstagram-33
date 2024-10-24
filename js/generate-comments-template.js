import { photoDataArray } from './data.js';

const newCommentArea = document.querySelector('.social__comments');
const commentContainer = document.createDocumentFragment();


function generateComments (pictureSrc) {

  const url = new URL(pictureSrc);
  const imagePath = url.pathname;
  const formattedPath = imagePath.slice(1);
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

export { generateComments};
