
let menuBtn = document.getElementById('menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () => {
  navbar.classList.toggle('active');
};

window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
});
