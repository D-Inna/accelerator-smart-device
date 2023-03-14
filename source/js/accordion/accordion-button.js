const parent = document.querySelector('[data-accordion="parent"]');
const element = parent.querySelector('[data-accordion="element"]');
const button = parent.querySelector('[data-accordion="button"]');

const accordionButton = () => {
  if (!element.classList.contains('is-active')) {
    button.textContent = 'свернуть';
  } else {
    button.textContent = 'подробнее';
  }
};

const showMore = () => {
  if (parent && button && element) {
    button.addEventListener('click', accordionButton);
  }
};

export {showMore};
