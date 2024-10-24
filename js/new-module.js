
import {commentsLoader, getCommentsList} from './big-picture-events.js';

// Условный (тернарный) оператор!!!!!!!!!!!!!!!!

// const commentsLoader = bigPictureWindow.querySelector('.comments-loader');

// const commentsTotalCountContainer = bigPictureWindow.querySelector('.social__comment-count');
// console.log(bigPictureWindow);

// const commentsCount = getCommentsList();

// console.log(commentsCount.length);

let displayedCommentsCount = 5;
// console.log(displayedCommentsCount);

function onClickHideComments() {
  const commentsList = getCommentsList();
  console.log(commentsLoader);

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

  // if (displayedCommentsCount >= commentsList.length) {
  //   commentsLoader.classList.add('hidden');
  //   console.log('displayedCommentsCount', 'хватит');
  // }
  console.log(displayedCommentsCount);
}


export {onClickHideComments, showComments, displayedCommentsCount};
