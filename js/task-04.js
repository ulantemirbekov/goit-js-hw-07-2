const valueRef = document.querySelector('#value');
const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');


let counterValue = Number(valueRef.textContent);


const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};


incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);




