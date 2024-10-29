import {uploadForm} from'../validation/validator.js';
import {test} from'./slider-functions.js';

const slider = uploadForm.querySelector('.effect-level__slider');
const sliderValue = uploadForm.querySelector('.effect-level__value');
function createSlider() {

  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.05,
    start: 1,
  });
  slider.noUiSlider.on('update', () => {
    // sliderValue.value = parseFloat((slider.noUiSlider.get())).toFixed(0);
    sliderValue.value = slider.noUiSlider.get();

    test(sliderValue.value);
  });

}

function destroySlider() {
  slider.noUiSlider.destroy();
}


export {createSlider,destroySlider};
