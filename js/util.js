
const isEscapeKey = (evt) => evt.key === 'Escape';


// При открытом модальном окне прячется скроллбар и появляется сдвиг. Глаз режет
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
