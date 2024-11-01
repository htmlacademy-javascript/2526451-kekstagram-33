import { uploadForm } from './validation/validator.js';
import { preiewImage } from './slider/slider.js';
const scaleContainer = uploadForm.querySelector('.img-upload__scale');
const [smallerBtn, scaleValueInput, biggerBth] = scaleContainer.children;


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

  if (evt.target === biggerBth && scaleNewValue < SCALE_RULES.maxPictureSize) {
    scaleNewValue += STEP;
  }
  if (evt.target === smallerBtn && scaleNewValue > SCALE_RULES.minPictureSize) {
    scaleNewValue -= STEP;
  }

  preiewImage.style.transform = `scale(${scaleNewValue})`;

  scaleValueInput.value = `${(scaleNewValue * 100).toFixed(0)}%`;
});

