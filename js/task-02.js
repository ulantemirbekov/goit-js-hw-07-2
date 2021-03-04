const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const createItem = item => {

    const itemRef = document.createElement('li');
    itemRef.textContent = item;

    return itemRef;
};

const itemsMarkup = ingredients.map(item => createItem(item));

ingredientsRef.append(...itemsMarkup);


