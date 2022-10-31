
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('nav ul');

navToggler.addEventListener('click', togglerClick);


function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
  if(navMenu.classList.contains('open')) {
    document.getElementById("nav-toggler-icon").src="/Assets/close.png";
  } else {
    document.getElementById("nav-toggler-icon").src="/Assets/menu.png";
  }
}

function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}