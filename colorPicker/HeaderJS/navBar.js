const navParentsEle = document.querySelector('.navBarContainer');

const navTitle = ['Color Flipper', 'Simple Hex'];

function initNav() {
    navTitle.forEach((el) => {
        let newNavTitle = document.createElement('span');
        newNavTitle.textContent = el;
        navParentsEle.appendChild(newNavTitle);
    });
}

initNav();
