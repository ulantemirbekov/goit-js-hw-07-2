const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');


const inputHandler = (e) => {

    inputRef.value ? spanRef.textContent = e.target.value : spanRef.textContent = 'незнакомец';

};

inputRef.addEventListener('input', inputHandler);
