const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navbar.classList.toggle('menu');
});





const carouselImages = document.querySelector('.carousel-images');
      const prevButton = document.querySelector('.carousel-btn.prev');
      const nextButton = document.querySelector('.carousel-btn.next');
      const totalImages = document.querySelectorAll('.carousel-images img').length;

      let currentIndex = 0;

      function updateCarousel() {
        const imageWidth = document.querySelector('.carousel-images img').clientWidth;
        carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
      }

      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateCarousel();
      });

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateCarousel();
      });

      // Update the carousel on window resize
      window.addEventListener('resize', updateCarousel);