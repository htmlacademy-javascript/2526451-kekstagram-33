import { bigPictureWindow} from './big-picture-events.js';
// import './big-picture-events.js';


// const commentsTotalCountContainer = bigPictureWindow.querySelector('.social__comment-count');
// const commentsLoader = bigPictureWindow.querySelector('.comments-loader');
const commentsList = bigPictureWindow.querySelectorAll('.social__comment');


console.log(commentsList);


function hideComments () {

  commentsList.forEach ((hide, index) =>{
    if (index >= 6) {
      console.log(step);
      hide.classList.add('hidden');
    }
  });
}

export {hideComments};
