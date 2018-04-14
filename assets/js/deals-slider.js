var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  centeredSlides: false,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});