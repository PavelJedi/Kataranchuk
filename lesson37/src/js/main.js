let swiper = new Swiper(".hero-img", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let modal = document.getElementById("myModal");
let btn = document.getElementById("play-button-outer");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

$(document).ready(function () {
    $('.block-holder').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        infinite: false,
    })
});