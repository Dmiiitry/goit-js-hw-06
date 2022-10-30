const divEl = document.querySelector('#counter');

const btnDecrement = document.querySelector('[data-action = "decrement"]');

const value = document.querySelector('#value');

const btnIncrement = document.querySelector('[data-action = "increment"]');

let counterValue = 0;

btnIncrement.addEventListener('click', handleIncrementButtonClick);

function handleIncrementButtonClick(event) {
    value.textContent = counterValue += 1;
}

btnDecrement.addEventListener('click', handleDecrementButtonClick);

function handleDecrementButtonClick(event){
    value.textContent = counterValue -= 1;
}

