'use strict';

let sliderImages = [
    '1.webp',
    '2.webp',
    '3.webp',
    '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    'https://images.squarespace-cdn.com/content/v1/5642f955e4b07810c0ac5658/1619189252533-GAQ9QW6OBTXFE6SC7NUA/The_TOKYOITER_Templates_6.gif?format=500w'
];

let num = 0;

function forwImg() {
    let slider = document.getElementById('slider');
    num++;
    if (num >= sliderImages.length) {
        num = 0;
    }
    slider.src = sliderImages[num];
}

function backImg() {
    let slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = sliderImages.length - 1;
    }
    slider.src = sliderImages[num];
}