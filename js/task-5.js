function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо потрібні елементи
const body = document.body;
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо слухач події на кнопку
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо фон на body
  body.style.backgroundColor = randomColor;

  // Відображаємо значення кольору у span
  colorSpan.textContent = randomColor;
});
