import {uploadForm} from'../validation/validator.js';
const uploadPreview = uploadForm.querySelector('.img-upload__preview');

function test (value) {
  uploadPreview.style.opacity = value;

}

export {test};
