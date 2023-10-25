function initCarousel() {
  let carousel = document.querySelector(".carousel");
  let inner = document.querySelector(".carousel__inner");
  let slides = document.querySelectorAll(".carousel__slide");
  let currentOffset = 0;
  let currentSlide = 1;

  let leftArrow = document.querySelector(".carousel__arrow_left");
  let rightArrow = document.querySelector(".carousel__arrow_right");
  leftArrow.style.display = 'none';

  carousel.addEventListener("click", event => {
    let arrow = event.target.closest(".carousel__arrow");

    if (arrow) {
      if (arrow.classList.contains("carousel__arrow_right")) {
        currentOffset -= inner.offsetWidth;
        currentSlide++;
      } else {
        currentOffset += inner.offsetWidth;
        currentSlide--;
      }

      inner.style.transform = `translateX(${currentOffset}px)`;

      leftArrow.style.display = currentSlide === 1 ? 'none' : '';
      rightArrow.style.display = currentSlide === slides.length ? 'none' : '';
    }
  });
}
