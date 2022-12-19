const getImg = document.querySelector('#imageSection');
const getSubTitle = document.querySelector('.imageSubTitle');
const getContent = document.querySelector('.cardContents');
const getAllArr = document.querySelectorAll('.dirArr');
const displayCurrIdx = document.querySelector('.displayIdx');

let currIdx = 0;
const data = [
    {
        content:
            "In this SQL course, you'll learn how to manage large datasets and analyze real data using the standard data management language.",
        subTitle: 'Learn SQL',
        image: './img/a.jpeg',
    },
    {
        content:
            'Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.        ',
        subTitle: 'Learn Javascript',
        image: './img/b.jpeg',
    },
    {
        content:
            'Start at the beginning by learning HTML basics — an important foundation for building and editing web pages. ',
        subTitle: 'Learn Html',
        image: './img/c.jpeg',
    },
    {
        content:
            "Learn the basics of the world's fastest growing and most popular programming language used by software engineers, analysts, data scientists, and machine learning engineers alike.        ",
        subTitle: 'Learn Python',
        image: './img/c.jpeg',
    },
];

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    getImg.src = data[0].image;
    getSubTitle.textContent = data[0].subTitle;
    getContent.textContent = data[0].content;
});

function getDataFunc() {
    getImg.src = data[currIdx - 1].image;
    getSubTitle.textContent = data[currIdx - 1].subTitle;
    getContent.textContent = data[currIdx - 1].content;
}

function init() {
    getAllArr.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            const style = e.currentTarget.classList;

            if (style.contains('rightArr')) {
                if (currIdx + 1 > data.length) {
                    currIdx = (currIdx + 1) % data.length;
                } else {
                    currIdx += 1;
                }
            }

            if (style.contains('leftArr')) {
                if (currIdx - 1 < 1) {
                    currIdx = data.length;
                } else {
                    currIdx -= 1;
                }
            }
            displayCurrIdx.textContent = currIdx;
            getDataFunc();
        });
    });
}

init();
