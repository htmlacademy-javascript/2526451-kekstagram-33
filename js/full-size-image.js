import { newPictures } from './picture';

const newCommentArea = document.querySelector('.social__comments');

// DECRIPPTION!!!!!!

function createComment (id) {

  newPictures[id - 1].comments.forEach ((comment) => {
    const newCommentTemplate = document.createElement('LI');
    newCommentTemplate.classList.add('social__comment');

    const newCommentImage = document.createElement('IMG');
    newCommentImage.classList.add('social__picture');
    newCommentImage.src = comment.avatar;
    newCommentImage.alt = comment.name;

    newCommentTemplate.appendChild(newCommentImage);

    const newCommentDescription = document.createElement('P');
    newCommentDescription.classList.add('social__text');
    newCommentDescription.textContent = comment.message;
    newCommentTemplate.appendChild(newCommentDescription);

    newCommentArea.appendChild(newCommentTemplate);
  });
}

export {createComment};
