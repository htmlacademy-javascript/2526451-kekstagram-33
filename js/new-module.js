
import {bigPictureWindow} from './big-picture-events.js';

// const commentsLoader = bigPictureWindow.querySelector('.comments-loader');

// const commentsTotalCountContainer = bigPictureWindow.querySelector('.social__comment-count');
// console.log(bigPictureWindow);

function getCommentsList (){
  return bigPictureWindow.querySelectorAll('.social__comment');
}

let displayedCommentsCount = 5;

function hideComments() {
  const commentsList = getCommentsList();

  commentsList.forEach ((comment, index) => {
    if (index >= displayedCommentsCount) {
      comment.classList.add('hidden');
    }
  });
}


function showComments () {
  const commentsList = getCommentsList();

  for (let i = displayedCommentsCount; i < displayedCommentsCount + 5; i++) {
    commentsList[i].classList.remove('hidden');
  }
  displayedCommentsCount = displayedCommentsCount + 5;

  if (displayedCommentsCount >= commentsList.length) {
    console.log('displayedCommentsCount', 'хватит');
  }
  console.log(commentsList);
}


export {hideComments, showComments};
