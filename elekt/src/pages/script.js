document.querySelector('.right-arrow').addEventListener('click', () => {
    document.querySelector('.caretaker-images').scrollBy(200, 0);
  });
  
  document.querySelector('.left-arrow').addEventListener('click', () => {
    document.querySelector('.caretaker-images').scrollBy(-200, 0);
  });
  