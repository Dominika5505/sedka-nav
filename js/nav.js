const ul = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger-wrap');

hamburger.addEventListener('click', function() {
    ul.classList.toggle('toggle');
    hamburger.classList.toggle('toggle');
});