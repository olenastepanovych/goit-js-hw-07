// Знаходимо форму
const loginForm = document.querySelector('.login-form');

// Додаємо слухач події submit
loginForm.addEventListener('submit', event => {
  // Зупиняємо перезавантаження сторінки
event.preventDefault();

  // Доступ до елементів форми
const { email, password } = loginForm.elements;

  // Очищаємо значення від пробілів
const emailValue = email.value.trim();
const passwordValue = password.value.trim();

  // Перевірка заповнення полів
if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
}

  // Створення об'єкта з даними форми
const formData = {
    email: emailValue,
    password: passwordValue,
};

  // Виводимо об'єкт у консоль
console.log(formData);

  // Очищуємо поля форми
loginForm.reset();
});

