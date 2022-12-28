const btn = document.querySelector('.switchPlayer');
const videoDom = document.querySelector('.videoContainer');
const preLoadDom = document.querySelector('.preLoaded');

window.addEventListener('load', function () {
    preLoadDom.classList.add('hide-preloaded');
});

btn.addEventListener('click', function () {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        videoDom.pause();
    } else {
        btn.classList.remove('slide');
        videoDom.play();
    }
});
