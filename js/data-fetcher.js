const errorTemplate = document.querySelector('#data-error').content;
const TIMEOUT_DELETE_ERROR_SECTION = 5000;
const SERVER_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

const photoDataArray = [];

const photoDataPromise = fetch(`${SERVER_URL }/data`,
  {
    method:'GET'
  }
)
  .then((response) => response.json())
  .catch(showErrorModal);
photoDataPromise.then(async (photoData) => {
  photoDataArray.push(...photoData);
});

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

export {photoDataArray,photoDataPromise,sendData};
