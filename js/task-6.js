function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо елементи
const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очищення контейнера перед створенням нових елементів
  boxesContainer.innerHTML = '';

  const elements = [];
  let size = 30; // Початковий розмір квадратів

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px'; // Додаємо відступи між квадратами
    elements.push(box);
    size += 10; // Збільшуємо розмір для наступного елемента
  }

  // Додаємо всі елементи до DOM за одну операцію
  boxesContainer.append(...elements);
}

// Функція для очищення контейнера
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Обробник події для кнопки Create
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value.trim(), 10);

  // Перевірка значення input
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищаємо input
  } else {
    alert('Please enter a number between 1 and 100!');
  }
});

// Обробник події для кнопки Destroy
destroyButton.addEventListener('click', destroyBoxes);
