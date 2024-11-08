
const SERVER_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

const photoDataArray = [];

const photoDataPromise = fetch(`${SERVER_URL }/data`,
  {
    method:'GET'
  }
)
  .then((response) => response.json());

await photoDataPromise.then((photoData) => {
  for (let i = 0; i < photoData.length; i++) {
    photoDataArray.push(photoData[i]);
  }
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


export {photoDataArray,photoDataPromise,sendData};
