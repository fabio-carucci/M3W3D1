document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
      document.querySelector('.carousel-inner').style.overflow = 'visible';
    });
  
    card.addEventListener('mouseout', () => {
      document.querySelector('.carousel-inner').style.overflow = 'hidden';
    });
});