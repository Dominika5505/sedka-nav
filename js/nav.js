const ul = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger-wrap');
const mainGalleryBanner = {
  name: document.querySelector('.main-gallery-banner'),
  path: 'resources/activity-adventure-blur-297642.jpg'
}

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

function myFunction(x, varName, url) {
  if (x.matches && 'backgroundAttachment' in document.body.style && 'backgroundSize' in document.body.style) { // If media query matches
    if (varName.hasAttribute('data-parallax')) {
      return
    } else {
      varName.attribute('data-parallax', 'scroll');
    }

    if (varName.hasAttribute('data-parallax')) {
      return
    } else {
      varName.attribute('data-image-src', url);
    }
      varName.classList.add('full-height');
    varName.style.background = 'none';
  } else {
    if(varName.classList.contains('full-height')) {
      varName.classList.remove('full-height');
    }
    varName.style.background = `url(../${url})`;
    varName.removeAttribute('data-parallax');
    varName.removeAttribute('data-image-src');
  }
}

var x = window.matchMedia("(min-width: 768px)")
myFunction(x, mainGalleryBanner.name, mainGalleryBanner.path) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes