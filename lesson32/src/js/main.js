// Task 1 Створити сторінку, що показує нумерований список пісень
let playList = [
        {
            author: "LED ZEPPELIN",
            song: "STAIRWAY TO HEAVEN" },
        {
            author: "QUEEN",
            song: "BOHEMIAN RHAPSODY" },
        {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD" },
        {
            author: "DEEP PURPLE",
            song: "SMOKE ON THE WATER" },
        {
            author: "JIMI HENDRIX",
            song: "ALL ALONG THE WATCHTOWER" },
        {
            author: "AC/DC",
            song: "BACK IN BLACK" },
        {
            author: "QUEEN",
            song: "WE WILL ROCK YOU" },
        {
            author: "METALLICA",
            song: "ENTER SANDMAN" }
    ];

let id = document.getElementById('list');

let li = document.createElement('li');
li.className = 'song';
li.innerHTML = 'LED ZEPPELIN - STAIRWAY TO HEAVEN';

let liSecond = document.createElement('li');
liSecond.className = 'song';
liSecond.innerHTML = 'QUEEN - BOHEMIAN RHAPSODY';

let liThird = document.createElement('li');
liThird.className = 'song';
liThird.innerHTML = 'LYNYRD SKYNYRD - FREE BIRD';

let liFour = document.createElement('li');
liFour.className = 'song';
liFour.innerHTML = 'DEEP PURPLE - SMOKE ON THE WATER';

let liFive = document.createElement('li');
liFive.className = 'song';
liFive.innerHTML = 'JIMI HENDRIX - ALL ALONG THE WATCHTOWER';

let liSix = document.createElement('li');
liSix.className = 'song';
liSix.innerHTML = 'AC/DC - BACK IN BLACK';

let liSeven = document.createElement('li');
liSeven.className = 'song';
liSeven.innerHTML = 'QUEEN - WE WILL ROCK YOU';

let liEight = document.createElement('li');
liEight.className = 'song';
liEight.innerHTML = 'METALLICA - WE ENTER SANDMAN';

document.body.append(li);
document.body.append(liSecond);
document.body.append(liThird);
document.body.append(liFour);
document.body.append(liFive);
document.body.append(liSix);
document.body.append(liSeven);
document.body.append(liEight);
id.append(li, liSecond, liThird, liFour, liFive, liSix, liSeven, liEight);

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". 
// Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

let modal = document.getElementById("myModal");
let btn = document.getElementById("open");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

//Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

// let div = document.createElement('div');
// div.className = 'div';
//
// document.body.append(div);
// div.append(div);
// let lighter = document.getElementById('div');

let div = document.getElementById('light')
let color = document.querySelector('.color');

color.onclick = function () {
    div.classList.toggle('red');
}

let divSecond = document.getElementById('light2')
let color2 = document.querySelector('.color2');
color2.onclick = function () {
    divSecond.classList.toggle('yellow');
}

let divThird = document.getElementById('light3')
let color3 = document.querySelector('.color3');
color3.onclick = function () {
    divThird.classList.toggle('green');
}







