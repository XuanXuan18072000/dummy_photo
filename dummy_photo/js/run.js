(function () {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    }
  });

})(jQuery);

