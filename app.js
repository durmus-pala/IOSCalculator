/* eslint-disable linebreak-style */
/* eslint-disable no-eval */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const inputPlace = document.getElementById('numbers');
const acBtn = document.getElementById('graybtn1');
const absBtn = document.getElementById('graybtn2');
const percentBtn = document.getElementById('graybtn3');
const dividerBtn = document.getElementById('orangebtn1');
const multBtn = document.getElementById('orangebtn2');
const minusBtn = document.getElementById('orangebtn3');
const plusBtn = document.getElementById('orangebtn4');
const equalBtn = document.getElementById('orangebtn5');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const zeroBtn = document.getElementById('zero');
const pointBtn = document.getElementById('point');

sevenBtn.addEventListener('click', () => {
  inputPlace.value += '7';
});
eightBtn.addEventListener('click', () => {
  inputPlace.value += '8';
});
nineBtn.addEventListener('click', () => {
  inputPlace.value += '9';
});
fourBtn.addEventListener('click', () => {
  inputPlace.value += '4';
});
fiveBtn.addEventListener('click', () => {
  inputPlace.value += '5';
});
sixBtn.addEventListener('click', () => {
  inputPlace.value += '6';
});
oneBtn.addEventListener('click', () => {
  inputPlace.value += '1';
});
twoBtn.addEventListener('click', () => {
  inputPlace.value += '2';
});
threeBtn.addEventListener('click', () => {
  inputPlace.value += '3';
});
zeroBtn.addEventListener('click', () => {
  inputPlace.value += '0';
});
acBtn.addEventListener('click', () => {
  inputPlace.value = '';
});
pointBtn.addEventListener('click', () => {
  inputPlace.value += '.';
});
dividerBtn.addEventListener('click', () => {
  inputPlace.value += '/';
});
multBtn.addEventListener('click', () => {
  inputPlace.value += '*';
});
minusBtn.addEventListener('click', () => {
  inputPlace.value += '-';
});
plusBtn.addEventListener('click', () => {
  inputPlace.value += '+';
});
percentBtn.addEventListener('click', () => {
  inputPlace.value += '%';
});
absBtn.addEventListener('click', () => {
  let result = 1;
  result = eval(inputPlace.value *= '-1');
  inputPlace.value = result;
});
equalBtn.addEventListener('click', () => {
  let result1 = 0;
  result1 = eval(inputPlace.value);
  inputPlace.value = result1;
});
