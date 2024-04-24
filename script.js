document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
  
    galleryItems.forEach(item => {
      item.addEventListener('click', e => {
        const imgSrc = e.target.getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
        lightbox.style.display = 'flex';
      });
    });
  
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  });
  