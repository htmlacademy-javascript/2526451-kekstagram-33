import {uploadForm} from'./validator.js';
const eventContainer = uploadForm.querySelector('.img-upload__text');


function keydownBreak (event) {
  if (event.target.NodeName === 'input' || event.target.NodeName === 'textarea'){
    console.log(event.target);
  }

}
eventContainer.addEventListener('click', keydownBreak);
