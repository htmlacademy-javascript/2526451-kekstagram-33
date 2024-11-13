
import {isEscapeKey} from '../../util.js';
import {onDocumentKeydown} from '../image-upload-events.js';


function onErrorSuccessModalKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.body.lastChild.remove();
    document.removeEventListener('keydown', onErrorSuccessModalKeydown);
    document.addEventListener('keydown', onDocumentKeydown);
  }
}

function getWindow(sentDataStatus) {

  const allertTemplate = document.querySelector(sentDataStatus).content.cloneNode(true);

  const [allertSection] = allertTemplate.children;
  const allertbtn = allertSection.children[0].children[1];

  return {allertbtn, allertSection};
}


function showErrorSuccessModal (status) {
  const { allertbtn, allertSection } = getWindow(status);

  document.body.appendChild(allertSection);
  // надо тут
  if (allertSection.classList.contains('hidden')) {
    allertSection.classList.remove('hidden');
  }

  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', onErrorSuccessModalKeydown);

  allertbtn.addEventListener('click',()=> {
    document.body.lastChild.remove();
    document.removeEventListener('keydown', onErrorSuccessModalKeydown);
    document.addEventListener('keydown', onDocumentKeydown);
  });

}

export { showErrorSuccessModal };
