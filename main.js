
const body      = document.querySelector('body'),
      hero      = document.querySelector('#hero-section'),
      menuBtn   = document.querySelector('.menu-btn'),
      nav       = document.querySelector('#nav-compact'),
      header    = document.querySelector('header'),
      [menuTop, menuMiddle, menuBottom] = Array.from(document.querySelectorAll('.menu-btn__burger')),
      logo      = document.querySelector('.logo-img')

let viewportHeight  = body.offsetHeight,
    yPos            = 0,
    menuOpen        = false

const atTop = () => {
  return yPos < 10
}

const openMenu = () => {
  menuOpen = true
  menuBtn.classList.add('open')
  menuTop.style.backgroundColor = '#eaebe4'
  menuMiddle.style.backgroundColor = 'transparent'
  menuBottom.style.backgroundColor = '#eaebe4'
  nav.style.left = "50%"
}

const closeMenu = () => {
  menuOpen = false
  menuBtn.classList.remove('open')
  nav.style.left = '100%'
  if (atTop()) {
    menuTop.style.backgroundColor = '#eaebe4'
    menuMiddle.style.backgroundColor = '#eaebe4'
    menuBottom.style.backgroundColor = '#eaebe4'
  } else {
    menuTop.style.backgroundColor = '#272727'
    menuMiddle.style.backgroundColor = '#272727'
    menuBottom.style.backgroundColor = '#272727'
  }
}

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if(menuOpen) {
    closeMenu()
  } else {
    openMenu()
  }
})

body.addEventListener('click', () => {
  if(menuOpen) {
    closeMenu()
  }
})

window.addEventListener('scroll', () => {
  yPos = window.scrollY
  if (atTop()) {
    menuTop.style.backgroundColor = '#eaebe4'
    menuMiddle.style.backgroundColor = '#eaebe4'
    menuBottom.style.backgroundColor = '#eaebe4'
    header.classList.remove('background-scrolled')
    logo.src = "./img/logo.svg"
  } else {
    if(!menuOpen) {
      menuTop.style.backgroundColor = '#272727'
      menuMiddle.style.backgroundColor = '#272727'
      menuBottom.style.backgroundColor = '#272727'
    }
    header.classList.add('background-scrolled')
    logo.src = "./img/logo-black.svg";
  }
})

hero.style.height = viewportHeight