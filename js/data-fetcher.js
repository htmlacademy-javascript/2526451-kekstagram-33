
const SERVER_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/data';

let photoDataArray = [];

const photoDataPromise = fetch(SERVER_URL)
  .then((response) => response.json());

photoDataPromise.then((data) => {
  photoDataArray = data;
});

export {photoDataArray,photoDataPromise};
