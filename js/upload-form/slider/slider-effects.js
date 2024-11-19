const chromeEffect = {
  effect: (value) => `grayscale(${value})`,
  range: {
    min: 0,
    max: 1,
  }
};
const sepiaEffect = {
  effect:(value) => `sepia(${value})`,
  range: {
    min: 0,
    max: 1,
  }
};

const marvinEffect = {
  effect:(value) => `invert(${value}%)`,
  range: {
    min: 0,
    max: 100,
  },
  step: 1
};


const phobosEffect = {
  effect:(value) => `blur(${value}px)`,
  range: {
    min: 0,
    max: 3,
  }
};

const heatEffect = {
  effect:(value) => `brightness(${value})`,
  range: {
    min: 1,
    max: 3,
  }
};

const EFFECTS = {
  chrome: chromeEffect,
  sepia: sepiaEffect,
  marvin: marvinEffect,
  phobos: phobosEffect,
  heat: heatEffect,
};

export {EFFECTS};
