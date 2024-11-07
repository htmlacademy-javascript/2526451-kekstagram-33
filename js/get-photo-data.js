
let photoDataArray = [];

const photoDataPromise = fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json());

photoDataPromise.then((data) => {
  photoDataArray = data;
});

export {photoDataArray,photoDataPromise};
