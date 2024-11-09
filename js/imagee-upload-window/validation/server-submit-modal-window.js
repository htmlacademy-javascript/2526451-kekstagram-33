
import {isEscapeKey} from '../../util.js';

const successTemplate = document.querySelector('#success').content.cloneNode(true);

// const successTemplateBtn = successTemplate.querySelector('.success__button');


// function opacityAnimationShown (element) {
//   element.style.opacity = '0';
//   element.style.transition = 'all linear 1000ms';
//   setTimeout(() => {
//     element.style.opacity = '1';
//   }, 1);
// }

function closeSendDataAlert(alertWindow) {
  alertWindow.remove();
}

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    closeSendDataAlert(errorTemplateSection);

    document.removeEventListener('keydown', keydownHandler);
  }
};

function sendDataErrorModalShownEvent (){
  const errorTemplate = document.querySelector('#error').content.cloneNode(true);

  const errorTemplateSection = errorTemplate.querySelector('.error');
  const errorTemplateBtn = errorTemplate.querySelector('.error__button');

  document.body.appendChild(errorTemplate);

  // opacityAnimationShown(errorTemplateSection);

  errorTemplateBtn.addEventListener('click',()=> {
    closeSendDataAlert(errorTemplateSection);
  });
  document.addEventListener('keydown', keydownHandler);

  return true;
}

function sendDataSuccessModalShownEvent (){
  document.body.appendChild(successTemplate);

}


// const errorBtn = errorTemplate.querySelector('#error');
export {sendDataErrorModalShownEvent, sendDataSuccessModalShownEvent};
