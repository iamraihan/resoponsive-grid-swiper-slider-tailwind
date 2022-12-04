var swiper = new Swiper(".speakerSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  grid: {
    rows: 1,
  },
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#swiper-button-next-slide",
    prevEl: "#swiper-button-prev-slide",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 130,
      grid: {
        rows: 2,
      },
    },
  },
});
