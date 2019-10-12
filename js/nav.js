const ul = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger-wrap');

hamburger.addEventListener('click', function() {
    ul.classList.toggle('toggle');
    hamburger.classList.toggle('toggle');
});

var element = document.documentElement;
  
if(element.scrollHeight > element.clientHeight) {
  // Overflow detected; force scroll bar
  element.style.overflow = 'scrollbar';
} else {
  // No overflow detected; prevent scroll bar
  element.style.overflow = 'hidden';
}

