const ul = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger-wrap');
const mainGalleryBanner = document.querySelectorAll('.main-gallery-banner')[0];

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

function myFunction(x) {
  if (x.matches) { // If media query matches
    console.log(mainGalleryBanner);
    mainGalleryBanner.classList.add('full-height');
    mainGalleryBanner.style.background = 'none';
  } else {
    mainGalleryBanner.removeAttribute('data-parallax');
    mainGalleryBanner.removeAttribute('data-image-src');
    mainGalleryBanner.style.background = "url(../resources/activity-adventure-blur-297642.jpg)";
  }
}

var x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes