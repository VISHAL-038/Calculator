let display = document.getElementById('display');

function appendValue(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '';
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = 'Error';
  }
}

function backspace() {
  display.textContent = display.textContent.slice(0, -1);
}

function calculateFactorial() {
  let num = parseFloat(display.textContent);
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  display.textContent = result;
}

function calculatePercentage() {
  let num = parseFloat(display.textContent);
  display.textContent = num / 100;
}

function convertToScientific() {
  let num = parseFloat(display.textContent);
  display.textContent = num.toExponential();
}

function convertToDegrees() {
  let num = parseFloat(display.textContent);
  let radians = num * (Math.PI / 180);
  display.textContent = radians;
}

function convertToRadians() {
  let num = parseFloat(display.textContent);
  let degrees = num * (180 / Math.PI);
  display.textContent = degrees;
}