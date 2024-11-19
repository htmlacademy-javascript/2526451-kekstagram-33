
const isEscapeKey = (evt) => evt.key === 'Escape';


// при открытом моальном окне прячется скролбар и появялет сдвиг. глаз режет.
function compensateOverflowPadding(modalShown) {
  // ширина вьюпорта - ширина контента вот и полоса
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  if (modalShown) {
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    document.body.style.paddingRight = '';
  }
}

export { isEscapeKey, compensateOverflowPadding};
