'use strict';

let x = 0;
let y = 0;

let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

const circle = document.querySelector('.circle');
circle.style.left = x + 'px';
circle.style.top = y + 'px';

function move() {



  switch (x) {
    case 300:
      moveLeft = true;
      break;
    case 0:
      moveLeft = false;
      moveRight = true;
      break;
  }
  switch (y) {
    case 200:
      moveUp = true;
      break;
    case 0:
      moveUp = false;
      moveDown = true;
      break;
  }

  moveLeft ? x -= 3 : y += 3;
  moveUp ? x -= 1 : y += 1;

  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
  console.log(x);
  console.log(y);
}

circle.addEventListener('click', () => {
  move();
  setInterval(move, 20);
});