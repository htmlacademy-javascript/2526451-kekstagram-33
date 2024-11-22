
const isEscapeKey = (evt) => evt.key === 'Escape';

function compensateOverflowPadding(modalShown) {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  if (modalShown) {
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    document.body.style.paddingRight = '';
  }
}

export { isEscapeKey, compensateOverflowPadding};
