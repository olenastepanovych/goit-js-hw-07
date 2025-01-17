// Знаходимо ul#categories
const categoriesList = document.querySelector('#categories');

// Підраховуємо кількість категорій
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

// Перебираємо всі елементи li.item
categoryItems.forEach(item => {
  // Знаходимо текст заголовка h2
const categoryTitle = item.querySelector('h2').textContent;

  // Підраховуємо кількість вкладених li
const elementsCount = item.querySelectorAll('ul li').length;

  // Виводимо інформацію в консоль
console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${elementsCount}`);
});
