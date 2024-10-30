import {uploadForm} from'../validation/validator.js';
// import {chomeEffect} from'./slider-functions.js';

const slider = uploadForm.querySelector('.effect-level__slider');
const sliderValue = uploadForm.querySelector('.effect-level__value');

const effectsContainer = uploadForm.querySelector('.img-upload__effects');
const uploadPreview = uploadForm.querySelector('.img-upload__preview');

const EFFECTS = {
  chrome: (value) => `grayscale(${value})`,
  sepia: (value) => `sepia(${value})`,
  marvin: (value) => `invert(${value})`,
  phobos: (value) => `blur(${value}px)`,
  heat: (value) => `brightness(${value})`,
};


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
    sliderValue.value = slider.noUiSlider.get();
  });

}

function destroySlider() {
  slider.noUiSlider.destroy();
}


function deffaultValue () {
  uploadPreview.style.removeProperty('filter');
  uploadPreview.style.filter = '';

  slider.noUiSlider.off('update');

}

// function chromeEffect () {

//   console.log('sss');
//   slider.noUiSlider.updateOptions({
//     range: {
//       min: 0,
//       max: 1,
//     },
//     step: 0.1,
//   });

//   slider.noUiSlider.updateOptions('update', () => {

//     const fixed = Number(sliderValue.value).toFixed(1);
//     const cromeEffectValue = fixed;
//     console.log(EFFECTS.chrome(sliderValue.value));
//     uploadPreview.style.filter = EFFECTS.chrome(sliderValue.value);
//     console.log(cromeEffectValue);

//   });

// }


effectsContainer.addEventListener('change', (evt) => {
  deffaultValue();
  // if (evt.target.value === 'chrome') {
  const effect = evt.target.value;
  console.log(effect);

  slider.noUiSlider.on('update', () => {
    console.log(effect);
    // const fixed = Number(sliderValue.value).toFixed(1);
    // const cromeEffectValue = fixed;
    // console.log(EFFECTS.chrome(sliderValue.value));
    uploadPreview.style.filter = EFFECTS[evt.target.value](sliderValue.value);

    // }

  });
});

// export {chomeEffect,effectsContainer};
//

export {createSlider,destroySlider,slider,sliderValue};
