const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // клік по елементам пагінацію перемикає слайди
    dynamicBullets: true, // динамічний розмір елементів пагінації
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // кількість слайдів, які будуть відображатися одночасно
  slidesPerView: 1,

  // відступ між слайдами
  spaceBetween: 30,

  // налаштування автоматичного перемикання слайдів
  //   autoplay: {
  //     delay: 1000,  // затримка
  //     disableOnInteraction: false,
  //     stopOnLastSlide: false,  // зупинитися на останньому слайді

  //   },
  speed: 1500, // швидкість переключення слайдів

  // адаптивний слайдер
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    // when window width is >= 1158px
    1200: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
  },
});
