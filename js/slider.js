

const slider = document.querySelector('.effect-level__slider');
// const sliderValue = slider.querySelector('.effect-level__value');

function createSlider() {


  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 80,
  });
  // slider.noUiSlider.on('update', () => {
  //   sliderValue.value = slider.noUiSlider.get();

  // });

}


export {createSlider};
