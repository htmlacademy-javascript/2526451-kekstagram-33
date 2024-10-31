import {uploadForm} from'../validation/validator.js';
import {EFFECTS} from'../slider/slider-effects.js';

const slider = uploadForm.querySelector('.effect-level__slider');
const sliderValue = uploadForm.querySelector('.effect-level__value');

const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');

const effectsContainer = uploadForm.querySelector('.img-upload__effects');
const uploadPreview = uploadForm.querySelector('.img-upload__preview');

const DEFAULT_STEP = 0.1;

function createSlider() {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 1,
    },
    step: DEFAULT_STEP,
    start: 1,
    format:
    {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
}

function destroySlider() {
  slider.noUiSlider.destroy();
}

function sliderToValue (target){
  sliderValue.value = slider.noUiSlider.get();
  uploadPreview.style.filter = EFFECTS[target].effect(sliderValue.value);
  console.log(uploadPreview.style.filter);
}


effectsContainer.addEventListener('change', (evt) => {
  const effectTarget = evt.target.value;
  if(evt.target.value === 'none') {
    sliderContainer.classList.add('hidden');
  }

  slider.noUiSlider.off('update', sliderUpdate);


  function sliderUpdate() {
    sliderToValue(effectTarget);
  }

  const effectStartValue = EFFECTS[effectTarget].range.max;
  uploadPreview.style.filter = '';
  uploadPreview.style.filter = EFFECTS[effectTarget].effect(effectStartValue);

  slider.noUiSlider.updateOptions({
    range: EFFECTS[effectTarget].range,
    start: effectStartValue,
    step: (effectTarget !== 'marvin') ? DEFAULT_STEP : EFFECTS[effectTarget].step,
  });

  slider.noUiSlider.on('update', sliderUpdate);
});


// export {chomeEffect,effectsContainer};
//

export {createSlider,destroySlider,slider,sliderValue};
