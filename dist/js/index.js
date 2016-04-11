'use strict';

var changeColor = function changeColor() {
  document.querySelector('.header').addEventListener('click', function () {
    return document.body.classList.add('backgnd');
  });
};

changeColor();