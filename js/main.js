const swiper1 = document.querySelector(".slider-container"),
  swiper2 = document.querySelector(".swiper-container"),
  burger = document.querySelector(".burger"),
  closeMenu = document.querySelector(".menu-close"),
  menu = document.querySelector(".menu"),
  playButtonsFirst = document.querySelectorAll(".first-play");


burger.addEventListener('click', () => {
  menu.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu-open');
  document.body.style.overflow = 'initial';
});

let slider1 = new Swiper(swiper1, {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 105,
});

let slider2 = new Swiper(swiper2, {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.first-slider-btn-next',
    prevEl: '.first-slider-btn-prev',
  },
});

slider2.on('transitionEnd', function () {
  let videos = document.querySelectorAll('.first-slide-video');
  videos.forEach((el) => {
    el.pause();
    el.currentTime = 0;
    el.src = el.src;
  });
  playButtonsFirst.forEach((el) => {
    el.classList.remove('invisible');
  })
});

playButtonsFirst.forEach((el) => {
  el.addEventListener('click', (e) => {
    let video = e.currentTarget.closest('.slider-media').querySelector('.first-slide-video');
    video.play();
    e.currentTarget.classList.add('invisible');
  });
});