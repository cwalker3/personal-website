var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('nav');
var navlinks = Array.from(document.getElementsByClassName('navlink'));

hamburger.onclick = toggleNav;

function toggleNav() {
  toggleNavScale();
  toggleNavLinksOpacity();
}

function toggleNavScale() {
  if (
    window.getComputedStyle(nav).transform ==
    'matrix(1, 0, 0, 0, 0, 0)'
  ) {
    nav.style.transform = 'scaleY(1)';
  } else {
    nav.style.transform = 'scaleY(0)';
  }
}

function toggleNavLinksOpacity() {
  if (
    window.getComputedStyle(nav).transform ==
    'matrix(1, 0, 0, 0, 0, 0)'
  ) {
    navlinks.forEach((navlink) => (navlink.style.opacity = '1'));
  } else {
    navlinks.forEach((navlink) => (navlink.style.opacity = '0'));
  }
}
