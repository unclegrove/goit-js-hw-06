// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputRef = document.querySelector('input[type=number]');
const createBtnRef = document.querySelector('button[data-create]');
const destriyBtnRef = document.querySelector('button[data-destroy');
const divRef = document.querySelector('#boxes');

inputRef.addEventListener('input', onValueInput);

function onValueInput() {
  return inputRef.value;
}
createBtnRef.addEventListener('click', createBoxes);

destriyBtnRef.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  const amountOfBoxes = onValueInput();
  const newBoxArr = [];

  for (let i = 0, j = 30; i <= amountOfBoxes; i += 1, j += 10) {
    let createBoxEl = document.createElement('div');
    createBoxEl.style.width = `${j}px`;
    createBoxEl.style.height = `${j}px`;
    createBoxEl.style.border = '1px solid black';
    createBoxEl.style.backgroundColor = getRandomHexColor();
    newBoxArr.push(createBoxEl);
  }

  divRef.append(...newBoxArr);
}

function destroyBoxes() {
  while (divRef.firstChild) {
    divRef.removeChild(divRef.firstChild);
  }
}
