import {openModalWindow} from'./form-events.js';
import {uploadForm} from'./form.js';

const fileChooser = uploadForm.querySelector('.img-upload input[type="file"]');
const preview = uploadForm.querySelector('.img-upload__preview img');

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
