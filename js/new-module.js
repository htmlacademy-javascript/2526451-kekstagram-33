
import {commentsLoader, getCommentsList, commentShownCount} from './big-picture-events.js';


let displayedCommentsCount = 5;

function hideCommentsOnLoadBigPicture() {
  const commentsList = getCommentsList();
  commentsList.forEach ((comment, index) => {
    if (index >= displayedCommentsCount) {
      comment.classList.add('hidden');
    }
  });
}

function getCommentShownCount () {

  const commentsList = getCommentsList();
  if (commentsList.length < displayedCommentsCount) {
    commentShownCount.textContent = commentsList.length;

    console.log(commentShownCount.textContent);
    console.log(commentsList.length);
    console.log('true');
  } else {
    console.log('else');
    commentShownCount.textContent = displayedCommentsCount;
  }
}

function showNextComments () {
  const commentsList = getCommentsList();
  const COMMENTS_TO_SHOW = 5;

  if (displayedCommentsCount < commentsList.length) {
    for (let i = displayedCommentsCount; i < displayedCommentsCount + COMMENTS_TO_SHOW && i < commentsList.length ; i++) {
      commentsList[i].classList.remove('hidden');
    }
    if (displayedCommentsCount <= commentsList.length - 1) {
      commentsLoader.classList.add('hidden');
    } else {
      displayedCommentsCount = displayedCommentsCount + COMMENTS_TO_SHOW;

    }
  }
}
export {hideCommentsOnLoadBigPicture, showNextComments , getCommentShownCount};
