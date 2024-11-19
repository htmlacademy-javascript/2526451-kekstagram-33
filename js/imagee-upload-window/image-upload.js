import {openModalWindow} from'./image-upload-events.js';
// import {uploadForm} from'./validation/validator.js';

const fileChooser = document.querySelector('.img-upload input[type="file"]');
// костыль;
const preview = document.querySelector('.img-upload__preview img');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

function fileChoose() {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
    openModalWindow();
  }
}

fileChooser.addEventListener('change',fileChoose);
export {fileChooser, preview};
