const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const handlerOfSize = () => {
    textRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener('input', handlerOfSize);

