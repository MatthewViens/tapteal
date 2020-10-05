const container = document.querySelector('#container');
const body = document.querySelector('body')
const hero = document.querySelector('#hero-section')
const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('#nav-compact');
const header = document.querySelector('header');
const hamburger = document.querySelector('.menu-btn__burger');
const hamburgerTopColor = window.getComputedStyle(hamburger, ':before').getPropertyValue('background')
const hamburgerBottomColor = window.getComputedStyle(hamburger, ':after').getPropertyValue('background')
const logo = document.querySelector('.logo-img')

let menuOpen = false;
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if(menuOpen) {
    menuOpen = false;
    menuBtn.classList.remove('open');
    nav.style.left = '100%';
    if (window.scrollY > 10) {
      hamburger.style.backgroundColor = "#272727";
    }
    // header.style.backgroundColor = 'transparent';
    // header.style.color = '#fff';
  } else {
    menuOpen = true;
    menuBtn.classList.add('open');
    hamburger.style.backgroundColor = "#eaebe4";
    nav.style.left = '50%';
  }
  console.log('hamburger clicked')
  console.log(menuOpen)
})

container.addEventListener('click', (e) => {
  if(menuOpen) {
    menuOpen = false;
    menuBtn.classList.remove('open');
    nav.style.left = '100%'
  }
  console.log('container clicked')
  console.log(menuOpen)
})

window.addEventListener('scroll', () => {
  height = window.scrollY
  if (height > 10) {
    hamburger.style.backgroundColor = "#272727";
    logo.src = "./img/logo-black.svg";
    // hamburgerTopColor = "#272727"
    header.classList.add('background-scrolled')
  } else {
    hamburger.style.backgroundColor = "#eaebe4";
    header.classList.remove('background-scrolled')
    logo.src = "./img/logo.svg"
  }
})

let viewportHeight = container.offsetHeight
hero.style.height = viewportHeight
console.log(viewportHeight)