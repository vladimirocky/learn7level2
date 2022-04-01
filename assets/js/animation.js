'use strict';

let fps = 50;
let timer = 50;

const exemplBox = document.querySelector('.exempl-box');
const exe = document.querySelector('.exe');

exemplBox.addEventListener('click', () => {
  console.log('box click');
});
exe.addEventListener('click', () => {
  console.log('exe click');
});