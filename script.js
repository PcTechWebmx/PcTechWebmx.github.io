document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector('.slides');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const slideWidth = slides.clientWidth;
  let slideIndex = 0;

  function showSlides() {
      slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }

  function nextSlide() {
      if (slideIndex < slides.children.length - 1) {
          slideIndex++;
      } else {
          slideIndex = 0;
      }
      showSlides();
  }

  function prevSlide() {
      if (slideIndex > 0) {
          slideIndex--;
      } else {
          slideIndex = slides.children.length - 1;
      }
      showSlides();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  setInterval(nextSlide, 5000);

  // Agrega la función toggleDescription para expandir la descripción de los productos
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
      product.addEventListener('click', function() {
          toggleDescription(product);
      });
  });
});

function toggleDescription(product) {
  product.classList.toggle('description-expanded');
}



