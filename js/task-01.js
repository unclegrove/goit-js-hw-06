// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// В результаті, в консолі будуть виведені наступні повідомлення:

//Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const findListItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${findListItem.length}`);

findListItem.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`),
    console.log(`Elements: ${el.children[1].children.length}`);
});
