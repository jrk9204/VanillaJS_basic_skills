const questions = document.querySelectorAll('.question');

function init() {
    questions.forEach(function (question) {
        const questionBtn = question.querySelector('.question-btn');

        questionBtn.addEventListener('click', function () {
            questions.forEach(function (item) {
                if (question !== item) {
                    item.classList.remove('show-text');
                }
            });

            question.classList.toggle('show-text');
        });
    });
}

init();
