
import {commentsLoader, getCommentsList, commentShownCount} from './big-picture-events.js';

const INITIAL_COMMENTS_TO_SHOW = 5;
let displayedCommentsCount = INITIAL_COMMENTS_TO_SHOW;

function hideCommentsOnLoadBigPicture() {
  displayedCommentsCount = INITIAL_COMMENTS_TO_SHOW;
  const commentsList = getCommentsList();
  commentsList.forEach ((comment, index) => {
    if (index >= INITIAL_COMMENTS_TO_SHOW) {
      comment.classList.add('hidden');
    }
  });
}

function getCommentShownCount () {
  // ох уж этот гет коментс...
  const commentsList = getCommentsList();
  if (commentsList.length < displayedCommentsCount) {
    commentShownCount.textContent = commentsList.length;
  } else {
    commentShownCount.textContent = INITIAL_COMMENTS_TO_SHOW;
  }
}

function showNextComments () {
  const commentsList = getCommentsList();
  const COMMENTS_TO_SHOW = 5;

  if (displayedCommentsCount < commentsList.length) {
    for (let i = displayedCommentsCount; i < displayedCommentsCount + COMMENTS_TO_SHOW && i < commentsList.length ; i++) {
      commentsList[i].classList.remove('hidden');
    }
  }
  displayedCommentsCount += COMMENTS_TO_SHOW;
  commentShownCount.textContent = displayedCommentsCount;

  if (displayedCommentsCount >= commentsList.length) {
    commentShownCount.textContent = commentsList.length;
    commentsLoader.classList.add('hidden');
    displayedCommentsCount = INITIAL_COMMENTS_TO_SHOW;
  }
}
// тернальный есть такой. не забывай
export {hideCommentsOnLoadBigPicture, showNextComments , getCommentShownCount};
