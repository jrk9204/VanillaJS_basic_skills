const parentsBodyEl = document.querySelector('.bodyContainer');
const parentBodyText = document.querySelector('.displayColor');
const targetBtn = document.querySelector('.colorBtn');
const dipslayCurrColor = document.querySelector('.dipslayCurrColor');

const colors = ['green', 'yellow', 'blue', 'grey', 'orange', 'purple', 'red'];

function changeColor() {
    let randomNum = getRandomNumber();

    parentsBodyEl.style.backgroundColor = colors[randomNum];

    dipslayCurrColor.textContent = colors[randomNum];
}

function initBody() {
    targetBtn.addEventListener('click', function () {
        changeColor();
    });
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

initBody();
