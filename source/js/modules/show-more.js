const showMore = () => {
  let moreText = document.querySelector('.advantages__wrapper-more');
  let buttonText = document.querySelector('button');

  buttonText.addEventListener('click', function () {
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      buttonText.innerHTML = 'Свернуть';
    } else {
      moreText.style.display = 'none';
      buttonText.innerHTML = 'Подробнее';
    }
  });
};
export {showMore};
