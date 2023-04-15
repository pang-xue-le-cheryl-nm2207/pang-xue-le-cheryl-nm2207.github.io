//making the nav bar disappear when scrolling up
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // scroll up
    document.querySelector('nav').classList.remove('nav-hide');
  } else {
    // scroll down
    document.querySelector('nav').classList.add('nav-hide');
  }

  prevScrollpos = currentScrollPos;
});