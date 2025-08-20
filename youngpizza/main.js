const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('clicked');
});

function toggleMenu() {
    document.querySelector(".menu ul").classList.toggle("active");
}