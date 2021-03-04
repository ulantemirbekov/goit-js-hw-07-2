const inputRef = document.querySelector('#validation-input');

const handlerOnBlur = (event) => {

    let input = event.target.value;

    if (input.length >= inputRef.dataset.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    };
};

inputRef.addEventListener('blur', handlerOnBlur);
