// Знаходимо потрібні елементи
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

// Додаємо слухач події input
inputEl.addEventListener('input', event => {
  // Очищаємо введене значення від пробілів
const trimmedValue = event.target.value.trim();

  // Якщо інпут порожній, підставляємо "Anonymous", інакше текст з інпуту
outputEl.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
