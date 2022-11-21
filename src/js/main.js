'use strict';
// import * as bootstrap from 'bootstrap';
//Smooth scroll

const btnSctollTo = document.querySelector('.btn-scroll-to');
const sectionSlide = document.querySelector('#section-scroll-to');

//slider first
const slidesFirst = document.querySelectorAll('.slide');
const btnSlideFirstRight = document.querySelector('.arrow-slide-right');
const btnSlideFirstLeft = document.querySelector('.arrow-slide-left');
const slideCount = document.querySelector('.slider-count');

//slider second
const slidesSecond = document.querySelectorAll('.slide-img');
const btnSlideSecondRight = document.querySelector('.arrow-slider-img-right');
const btnSlideSecondLeft = document.querySelector('.arrow-slider-img-left');
//
const slidesThird = document.querySelectorAll('.slide-jhon');
const btnSlideThirdRight = document.querySelector('.john-doe-arrow-right');
const btnSlideThirdLeft = document.querySelector('.john-doe-arrow-left');

//smooth function
btnSctollTo.addEventListener('click', function () {
  sectionSlide.scrollIntoView({ behavior: 'smooth' });
});
//First colloseum
const maxSlide = slidesFirst.length;
let curSlide = 0;
let curSlideTwo = 0;
let curSlideThird = 0;

const sliderTo = function (slide, slides) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

sliderTo(0, slidesFirst);
const slideCounter = function (slideNum) {
  slideCount.textContent = `0${slideNum + 1}/03`;
};

const btnRev = function (slideNum) {
  if (slideNum > 0) {
    btnSlideFirstLeft.classList.remove('hidden');
  }

  if (slideNum === 0) {
    btnSlideFirstLeft.classList.add('hidden');
  }
};

const btnFuncPlus = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  return curSlide;
};

const btnFuncMinus = function () {
  if (curSlide === 0) {
    curSlide = 0;
  } else {
    curSlide--;
  }
  return curSlide;
};

sliderTo(0, slidesSecond);

const btnFuncPlusTwo = function () {
  if (curSlideTwo === maxSlide - 1) {
    curSlideTwo = 0;
  } else {
    curSlideTwo++;
  }
  return curSlideTwo;
};

const btnFuncMinusTwo = function () {
  if (curSlideTwo === 0) {
    curSlideTwo = 0;
  } else {
    curSlideTwo--;
  }
  return curSlideTwo;
};

const btnFuncPlusThird = function () {
  if (curSlideThird === maxSlide - 1) {
    curSlideThird = 0;
  } else {
    curSlideThird++;
  }
  return curSlideThird;
};

const btnFuncMinusThird = function () {
  if (curSlideThird === 0) {
    curSlideThird = 0;
  } else {
    curSlideThird--;
  }
  return curSlideThird;
};
sliderTo(0, slidesThird);

btnSlideFirstRight.addEventListener('click', function () {
  btnFuncPlus();
  sliderTo(curSlide, slidesFirst);
  slideCounter(curSlide);
  btnRev(curSlide);
  console.log(curSlide);
});
btnSlideFirstLeft.addEventListener('click', function () {
  btnFuncMinus();
  sliderTo(curSlide, slidesFirst);
  slideCounter(curSlide);
  btnRev(curSlide);
  console.log(curSlide);
});

// Second coloseum
btnSlideSecondRight.addEventListener('click', function () {
  btnFuncPlusTwo();

  sliderTo(curSlideTwo, slidesSecond);
  console.log(curSlideTwo);
});
btnSlideSecondLeft.addEventListener('click', function () {
  btnFuncMinusTwo();
  sliderTo(curSlideTwo, slidesSecond);
  console.log(curSlideTwo);
});
//third
btnSlideThirdRight.addEventListener('click', function () {
  btnFuncPlusThird();

  sliderTo(curSlideThird, slidesThird);
});
btnSlideThirdLeft.addEventListener('click', function () {
  btnFuncMinusThird();
  sliderTo(curSlideThird, slidesThird);
});

//Observer on sections

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});

// reveal section intersection
// const allSelections = document.querySelectorAll('.section');
// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section-hidden');
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });
// allSelections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add('section-hidden');
// });

const mobileNav = document.querySelector('.hero_nav');
const openIcon = document.querySelector('.hamburger-nav-open');
const closeIcon = document.querySelector('.hamburger-nav-close');
const nav = document.querySelector('.nav');

const btnMobile = document.querySelector('.mobile-nav');

const heroItemOne = document.querySelectorAll('.hero_nav_item');

const navPopIn = function (slide) {
  heroItemOne.forEach(
    (s, i) => (s.style.transform = `translateY(-${200 * (i - slide)}%)`)
  );
};

const navPopOut = function () {
  heroItemOne.forEach(s => (s.style.transform = `translateY(0%)`));
};

btnMobile.addEventListener('click', function () {
  mobileNav.classList.toggle('mobile-hidden');
  navPopIn(1);
  //just so i can change icons
  openIcon.classList.toggle('open');
  closeIcon.classList.toggle('close');
  nav.classList.toggle('nav-mobile');
  navPopOut();
});
