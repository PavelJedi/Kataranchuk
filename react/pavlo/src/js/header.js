let header = document.querySelector('.header');
let navOpenBtn = document.querySelector('.nav-opener');

navOpenBtn.addEventListener('click', () => {
    header.classList.toggle('active');
});