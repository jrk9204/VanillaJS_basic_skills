const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const currImg = document.querySelector('.slide-img');

slides.forEach(function (slide, idx) {
    slide.style.left = `${idx * 100}%`;

    slide.addEventListener('click', function () {
        console.log('clicked');
        clearInterval(imgInterval);
    });
});

let countPage = 0;

nextBtn.addEventListener('click', function () {
    countPage += 1;
    moveImg();
});

prevBtn.addEventListener('click', function () {
    countPage -= 1;
    moveImg();
});

let imgInterval = setInterval(moveImg, 2500);

function moveImg() {
    countPage += 1;

    slides.forEach(function (slide, idx) {
        if (countPage >= slides.length) {
            countPage = 0;
            slide.style.transform = `translateX(0%)`;
        } else {
            slide.style.transform = `translateX(-${countPage * 100}%)`;
        }
    });
}

// const slides = document.querySelectorAll('.slide');
// const nextBtn = document.querySelector('.nextBtn');
// const prevBtn = document.querySelector('.prevBtn');
// slides.forEach(function (slide, index) {
//     slide.style.left = `${index * 100}%`;
// });

// let counter = 0;

// nextBtn.addEventListener('click', function () {
//     counter++;
//     carousel();
// });

// prevBtn.addEventListener('click', function () {
//     counter--;
//     carousel();
// });

// function carousel() {
//     // working with slides
//     if (counter === slides.length) {
//         counter = 0;
//     }
//     if (counter < 0) {
//         counter = slides.length - 1;
//     }
//     // working with buttons

//     if (counter < slides.length - 1) {
//         nextBtn.style.display = 'block';
//     } else {
//         nextBtn.style.display = 'none';
//     }
//     if (counter > 0) {
//         prevBtn.style.display = 'block';
//     } else {
//         prevBtn.style.display = 'none';
//     }
//     slides.forEach(function (slide) {
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     });
// }

// prevBtn.style.display = 'none';
