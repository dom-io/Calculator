const display = document.querySelector('.display');
const addBtn = document.querySelector('.add-btn');
const subBtn = document.querySelector('.sub-btn');
const multBtn = document.querySelector('.mult-btn');
const divBtn = document.querySelector('.div-btn');
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
const zeroBtn = document.querySelector('.zero');
const decimalBtn = document.querySelector('.decimal-btn');
const equalsBtn = document.querySelector('.equals-btn');
const deleteBtn = document.querySelector('.delete-btn');
const clearBtn = document.querySelector('.clear-btn');

let mode = '';
let userInput = '';
let firstValue = userInput;
let secondValue = userInput;
let finalValue = '';
let chainValue = '';
let chainCalc = '';
let clickCntAdd = 0;
let clickCntSub = 0;
let clickCntMult = 0;
let clickCntDiv = 0;

addBtn.addEventListener('click', () => operate('add'));
subBtn.addEventListener('click', () => operate('sub'));
multBtn.addEventListener('click', () => operate('mult'));
divBtn.addEventListener('click', () => operate('div'));
equalsBtn.addEventListener('click', () => operate('equals'));
deleteBtn.addEventListener('click', () => operate('delete'));
clearBtn.addEventListener('click', () => operate('clear'));

decimalBtn.addEventListener('click', () => numbers('.'));
oneBtn.addEventListener('click', () => numbers(1));
twoBtn.addEventListener('click', () => numbers(2));
threeBtn.addEventListener('click', () => numbers(3));
fourBtn.addEventListener('click', () => numbers(4));
fiveBtn.addEventListener('click', () => numbers(5));
sixBtn.addEventListener('click', () => numbers(6));
sevenBtn.addEventListener('click', () => numbers(7));
eightBtn.addEventListener('click', () => numbers(8));
nineBtn.addEventListener('click', () => numbers(9));
zeroBtn.addEventListener('click', () => numbers(0));

function operate(event) {
  if (event == 'add') {
    firstValue = userInput;
    userInput = '';
    mode = 'add';
    ++clickCntAdd;
  } else if (event == 'equals' && mode == 'add') {
    secondValue = userInput;
    finalValue = +firstValue + +secondValue;
    display.textContent = finalValue;
    mode = '';
  } else if (event == 'sub') {
    firstValue = userInput;
    userInput = '';
    mode = 'sub';
    ++clickCntSub;
  } else if (event == 'equals' && mode == 'sub') {
    secondValue = userInput;
    finalValue = +firstValue - +secondValue;
    display.textContent = finalValue;
    mode = '';
  } else if (event == 'mult') {
    firstValue = userInput;
    userInput = '';
    mode = 'mult';
    ++clickCntMult;
  } else if (event == 'equals' && mode == 'mult') {
    secondValue = userInput;
    finalValue = +firstValue * +secondValue;
    display.textContent = Math.floor(finalValue * 100) / 100;
    mode = '';
  } else if (event == 'div') {
    firstValue = userInput;
    userInput = '';
    mode = 'div';
    ++clickCntDiv;
  } else if (event == 'equals' && mode == 'div') {
    secondValue = userInput;
    finalValue = +firstValue / +secondValue;
    display.textContent = Math.floor(finalValue * 100) / 100;
    mode = '';
    if (finalValue == 'Infinity') {
      display.textContent = 'No dividing by zero!';
    }
  } else if (event == 'delete') {
    userInput = userInput.slice(0, -1);
    display.textContent = userInput;
  } else if (event == 'clear') {
    display.textContent = '';
    userInput = '';
    mode = '';
    clickCnt = 0;
  }
}

// Need to finish implementing chaining ability
function chains() {
  chainValue = finalValue;
  chainValue2 = userInput;
  chainCalc = +chainValue + +chainValue2;
  display.textContent = chainCalc;
}

function numbers(num) {
  if (userInput.length <= 9) {
    userInput += num;
    display.textContent = userInput;
  }
  if (display.textContent.includes('.')) {
    decimalBtn.disabled = true;
  } else {
    decimalBtn.disabled = false;
  }
}
