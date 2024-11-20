import { generatePictures} from'./generate-pictures.js';
const sortMenu = document.querySelector('.img-filters');

const errorTemplate = document.querySelector('#data-error').content;
const TIMEOUT_DELETE_ERROR_SECTION = 5000;
const SERVER_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

// let photoDataArray = [];

const photoDataPromise = fetch(`${SERVER_URL}/data`,
  {
    method:'GET'
  }
)
  .then((response) => response.json());

photoDataPromise
  .then((photoData) => {

    // for (let i = 0; i < photoData.length; i++) {
    //   photoDataArray.push(photoData[i]);

    // }
    generatePictures(photoData);
    sortMenu.classList.remove('img-filters--inactive');
  })
  .catch(showErrorModal);


function sendData (onSuccess, onFail, body){
  fetch(SERVER_URL,
    {
      method:'POST',
      body,
    }
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail('ошибка');
    }
  })
    .catch(() => {
      onFail('ошибка');
    });

}


function showErrorModal() {
  const errorModal = errorTemplate.cloneNode(true);
  const errorModalSection = errorModal.children[0];

  document.body.appendChild(errorModalSection);
  setTimeout(() => {
    document.body.lastChild.remove();
  }, TIMEOUT_DELETE_ERROR_SECTION);
}
export {photoDataPromise,sendData};

