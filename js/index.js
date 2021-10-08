import { openModal } from '../js/menu-mobile.js';
import { openSection } from '../js/openSection.js';

openModal();
openSection();

const swiperMobile = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperTablet = new Swiper('.swiper--tablet', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
