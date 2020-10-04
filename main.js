const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('#nav-compact');
const header = document.querySelector('header');
const hamburger = document.querySelector('.menu-btn__burger');
const hamburgerTopColor = window.getComputedStyle(hamburger, ':before').getPropertyValue('background')
const hamburgerBottomColor = window.getComputedStyle(hamburger, ':after').getPropertyValue('background')

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  console.log('clicked')
  if(menuOpen) {
    menuOpen = false;
    menuBtn.classList.remove('open');
    nav.style.left = '100%';
    // header.style.backgroundColor = 'transparent';
    // header.style.color = '#fff';
  } else {
    menuOpen = true;
    menuBtn.classList.add('open');
    // header.style.backgroundColor = '#fff';
    // header.style.color = '#000';
    nav.style.left = '50%';
  }
  console.log(menuOpen)
})