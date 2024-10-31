const chrome = {
  effect: (value) => `grayscale(${value})`,
  range: {
    min: 0,
    max: 1,
  }
};
const sepia = {
  effect:(value) => `sepia(${value})`,
  range: {
    min: 0,
    max: 1,
  }
};

const marvin = {
  effect:(value) => `invert(${value}%)`,
  range: {
    min: 0,
    max: 100,
  },
  step: 1
};


const phobos = {
  effect:(value) => `blur(${value}px)`,
  range: {
    min: 0,
    max: 3,
  }
};

const heat = {
  effect:(value) => `brightness(${value})`,
  range: {
    min: 1,
    max: 3,
  }
};

const EFFECTS = {
  chrome: chrome,
  sepia: sepia,
  marvin: marvin,
  phobos: phobos,
  heat: heat,
};

export {EFFECTS};
