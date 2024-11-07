import { uploadForm } from './validation/validator.js';
import { previewImage } from './slider/slider.js';
const scaleContainer = uploadForm.querySelector('.img-upload__scale');
const [zoomOutBtn, scaleValueInput, zoomInBtn] = scaleContainer.children;

const SCALE_RULES = {
  step: 0.25,
  maxPictureSize: 1,
  minPictureSize: 0.25
};

const scaleValue = Number((scaleValueInput.value).replace('%',''));
let scaleNewValue = (scaleValue / 100).toFixed(3);

scaleContainer.addEventListener('click', (evt) =>{
  if (evt.target === scaleValueInput){
    return;
  }
  evt.preventDefault();
  const STEP = SCALE_RULES.step;

  if (evt.target === zoomInBtn && scaleNewValue < SCALE_RULES.maxPictureSize) {
    scaleNewValue += STEP;
  }
  if (evt.target === zoomOutBtn && scaleNewValue > SCALE_RULES.minPictureSize) {
    scaleNewValue -= STEP;
  }

  previewImage.style.transform = `scale(${scaleNewValue})`;

  scaleValueInput.value = `${(scaleNewValue * 100).toFixed(0)}%`;
});

function deafultImgScaleValues() {
  previewImage.style.transform = `scale(${1})`;
  scaleValueInput.value = `${(100)}%`;
  scaleNewValue = 1;
}

export {deafultImgScaleValues};
