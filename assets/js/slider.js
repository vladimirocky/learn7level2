'use strict';

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderButtonPrew = document.querySelector('.slider-button__prew');
const sliderButtonNext = document.querySelector('.slider-button__next');

sliderButtonNext.addEventListener('click', () => {
  offset -= 400;
  if (offset == -2000) {
    offset = 0;
  }
  sliderLine.style.left = offset + 'px';
});
sliderButtonPrew.addEventListener('click', () => {

  if (offset == 0) {
    offset = -1600;
  } else {
    offset += 400;
  }
  sliderLine.style.left = offset + 'px';
});