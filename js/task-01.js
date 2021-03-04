const categoriesRef = document.querySelector('#categories');
// console.dir(categoriesRef);
// console.dir(categoriesRef.children);
const itemsRef = document.querySelectorAll('.item');
// console.dir(itemRef);


const numbersOfCategories = categoriesRef.children.length;
console.log(`В списке ${numbersOfCategories} категории.`);


itemsRef.forEach(item => {

    const titleRef = item.querySelector('h2');
    const listRef = item.querySelector('ul');

    const numbersOfItems = listRef.children.length;

    console.log(`Категория: ${titleRef.textContent} \n Количество элементов: ${numbersOfItems}`);
});
