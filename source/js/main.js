const sliderLine = document.querySelector('.promo__slider-line');
const nextSlideButton = document.querySelector('.promo__next-button');
const prevSlideButton = document.querySelector('.promo__prev-button');
const totalSlidesSpan = document.querySelector('.promo__total-slides');
const slides = document.querySelectorAll('.promo__slider-slide');
const activeSlideSpan = document.querySelector('.promo__active-slide');

if (sliderLine && nextSlideButton && prevSlideButton && totalSlidesSpan && slides && activeSlideSpan) {
  const TOTAL_SLIDES = slides.length;
  const MIN_WIDTH = 480;
  let activeSlideNumber = 1;
  let offset = 0;


  const setTotalSlides = () => {
    totalSlidesSpan.innerHTML = '/' + TOTAL_SLIDES;
  }

  nextSlideButton.addEventListener('click', function () {
    let slideWidth = document.documentElement.clientWidth;
    if (offset > slideWidth * (TOTAL_SLIDES - 2)) {
      offset = 0;
      activeSlideNumber = 1;
    } else {
      activeSlideNumber++
      offset = (activeSlideNumber - 1) * (slideWidth < MIN_WIDTH ? MIN_WIDTH : slideWidth);
    }
    sliderLine.style.left = -offset + 'px'
    activeSlideSpan.innerHTML = String(activeSlideNumber);
  })

  prevSlideButton.addEventListener('click', function () {
    let slideWidth = document.documentElement.clientWidth;
    if (offset <= 0) {
      offset = slideWidth * (TOTAL_SLIDES - 1);
      activeSlideNumber = TOTAL_SLIDES;
    } else {
      activeSlideNumber--;
      offset = (activeSlideNumber - 1) * (slideWidth < MIN_WIDTH ? MIN_WIDTH : slideWidth);
    }
    sliderLine.style.left = -offset + 'px'
    activeSlideSpan.innerHTML = String(activeSlideNumber);
  })

  window.addEventListener('resize', function () {
    let slideWidth = document.documentElement.clientWidth;
    offset = (activeSlideNumber - 1) * (slideWidth < MIN_WIDTH ? MIN_WIDTH : slideWidth);
    sliderLine.style.left = -offset + 'px';
  })

  setTotalSlides();
}