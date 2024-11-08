const errorTemplate = document.querySelector('#error').content.cloneNode(true);

const errorTemplateSection = errorTemplate.querySelector('.error');
const errorTemplateBtn = errorTemplate.querySelector('.error__button');


const successTemplate = document.querySelector('#success').content.cloneNode(true);
const successTemplateBtn = successTemplate.querySelector('.success__button');


// function opacityAnimationShown (element) {
//   element.style.opacity = '0';
//   element.style.transition = 'all linear 1000ms';
//   setTimeout(() => {
//     element.style.opacity = '1';
//   }, 1);
// }


function sendDataErrorModalShownEvent (){
  document.body.appendChild(errorTemplate);
  // opacityAnimationShown(errorTemplateSection);
  return true;
}

function sendDataSuccessModalShownEvent (){
  document.body.appendChild(successTemplate);

}


// const errorBtn = errorTemplate.querySelector('#error');
export {sendDataErrorModalShownEvent, sendDataSuccessModalShownEvent};
