// "use strict"

// const isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     IOS: function () {
//         return navigator.userAgent.match(/iPhone|Ipad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function () {
//         return ( 
//             isMobile.Android() ||
//             isMobile.BlackBerry() ||
//             isMobile.IOS() ||
//             isMobile.Opera() ||
//             isMobile.Windows());
        
//     },
// };
 
// if (isMobile.any()) {
//     document.body.classList.add('_touch');
// } else {
//     document.body.classList.add('_pc');
// };

// const dob = document.querySelectorAll("li");
// const t = window.innerWidth;
// const ttt = document.body.previousElementSibling;
// const tt = document.body.nextElementSibling;
// const t = document.body.parentElement;

// console.log(dob[0]);
// while (dob.length) {
//     console.log(dob.length);
// }
/*const t = {
    one: function () {
                return 1+1==2;
    },
    two: function () {
                return 1+1==3;
    },
    three: function () {
                return ( t.one() || t.two());
    },
    
};
var www = t.three();


console.log(www);
if ( www ) {
    console.log("Условие сработало");
} else {console.log("Условие не сработало");}; */

// var tr = document.getElementById('choice__suggestions');

// num = 8;
// while (num) {console.log(num); num--};
// one: for (let num = 0; num < 3; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size == 3) { break one};
//         console.log(size);
//     };
// };
// const elems = document.querySelectorAll('li');
// console.log(elems[2]);
//  // Добавить класс
//  block__text.classList.add('one-block__classe');

//  var qq = block__text.className;
//  console.log(qq);



// const block__text = document.querySelector('.uull');
// block__text.style.cssText = `
//     width: 470px;
//     color: red;
//     opacity: 0.4;
// `;
// block__text.style.paddingTop = "110px";
// console.log(block__text.style.paddingTop);
// block__text.0 = false;
// console.log(block__text.0);

//_Домашка + + + +

// const block__text = document.querySelector('.uull');
// console.log(block__text.dataset.sayHi);

// const block__text = document.querySelector('.uull');
// var r = block__text.lastElementChild;

// const block__text = document.getElementsByClassName('uull');
// const block__text = document.querySelectorAll('.uull');
// console.log(block__text);

// const block__text = document.querySelector('.uull');
// block__text.insertAdjacentHTML(
//     'beforeend',
//     `<li>Текст</li>`
// );
// console.log(block__text.innerHTML);

// const wq = document.documentElement;
// var ww = wq.clientWidth;
// var www = wq.clientHeight;
// var ww = window.innerWidth;
// var www = window.innerHeight;
// var ww = Math.max(
//     document.body.scrollWidth, document.body.offsetWidth, document.body.clientWidth,
//     document.documentElement.scrollWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth
// );
// var www = Math.max(
//     document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight,
//     document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight
// );
// var ww = window.pageYOffset;
// var www = window.pageXOffset;
// console.log(ww, www);

var clickSuggestion1 = document.querySelector(".choice__slider_1");
var clickSuggestion2 = document.querySelector(".choice__slider_2");
var clickSuggestion3 = document.querySelector(".choice__slider_3");
var clickSuggestion4 = document.querySelector(".choice__slider_4");
var clickSuggestion5 = document.querySelector(".choice__slider_5");
//Все слайдеры предложений

var choiceimg1 = document.querySelector(".choice__img_1");
var choiceimg2 = document.querySelector(".choice__img_2");
var choiceimg3 = document.querySelector(".choice__img_3");
var choiceimg4 = document.querySelector(".choice__img_4");
var choiceimg5 = document.querySelector(".choice__img_5");
//Все иконки придложений

var suggestionEmage1 = document.querySelector(".two-block__suggestion-info_1");
var suggestionEmage2 = document.querySelector(".two-block__suggestion-info_2");
var suggestionEmage3 = document.querySelector(".two-block__suggestion-info_3");
var suggestionEmage4 = document.querySelector(".two-block__suggestion-info_4");
var suggestionEmage5 = document.querySelector(".two-block__suggestion-info_5");
//Информация справа

var choiceTitle = document.querySelectorAll(".choice__title");//Имя в предложении

clickSuggestion1.style.opacity = "1";
choiceimg1.style.backgroundImage= "url(../img/svg/a-heart-green.svg)";
choiceTitle[0].style.color = "#000";
suggestionEmage1.style.display = "block";
//  Включены по уммолчанию

function previousSuggestion() { 
    clickSuggestion1.style.opacity = "0";
    clickSuggestion2.style.opacity = "0";
    clickSuggestion3.style.opacity = "0";
    clickSuggestion4.style.opacity = "0";
    clickSuggestion5.style.opacity = "0"; //Прозрачность услайдеро

    choiceimg1.style.backgroundImage= "url(../img/svg/a-heart.svg)";
    choiceimg2.style.backgroundImage= "url(../img/svg/briefcase.svg)";
    choiceimg3.style.backgroundImage= "url(../img/svg/leaf.svg)";
    choiceimg4.style.backgroundImage= "url(../img/svg/rocket.svg)";
    choiceimg5.style.backgroundImage= "url(../img/svg/umbrella.svg)";//Все иконки серые

    suggestionEmage1.style.display = "none";
    suggestionEmage2.style.display = "none";
    suggestionEmage3.style.display = "none";
    suggestionEmage4.style.display = "none";
    suggestionEmage5.style.display = "none"; //Информаия справа выключена
}; // Отключены все

// -----------------------------------------------------

const choiceClick = document.querySelector('.choice__suggestions'); //Родитель кликов.
choiceClick.addEventListener("click", function (event) {

    if (event.target.closest(".choice__suggestion-1")) {
        previousSuggestion();
        clickSuggestion1.style.opacity = "1";
        choiceimg1.style.backgroundImage = "url(../img/svg/a-heart-green.svg)";
        choiceTitle[4].style = "";
        choiceTitle[3].style = "";
        choiceTitle[2].style = "";
        choiceTitle[1].style = "";
        choiceTitle[0].style.color = "#000";
        suggestionEmage1.style.display = "block";
    };

    if (event.target.closest(".choice__suggestion-2")) {
        previousSuggestion();
        clickSuggestion2.style.opacity = "1";
        choiceimg2.style.backgroundImage = "url(../img/svg/briefcase-green.svg)";
        choiceTitle[4].style = "";
        choiceTitle[3].style = "";
        choiceTitle[2].style = "";
        choiceTitle[0].style = "";
        choiceTitle[1].style.color = "#000";
        suggestionEmage2.style.display = "block";
    };

    if (event.target.closest(".choice__suggestion-3")) {
        previousSuggestion();
        clickSuggestion3.style.opacity = "1";
        choiceimg3.style.backgroundImage = "url(../img/svg/leaf-green.svg)";
        choiceTitle[4].style = "";
        choiceTitle[3].style = "";
        choiceTitle[0].style = "";
        choiceTitle[1].style = "";
        choiceTitle[2].style.color = "#000";
        suggestionEmage3.style.display = "block";
    };

    if (event.target.closest(".choice__suggestion-4")) {
        previousSuggestion();
        clickSuggestion4.style.opacity = "1";
        choiceimg4.style.backgroundImage = "url(../img/svg/rocket-green.svg)";
        choiceTitle[4].style = "";
        choiceTitle[1].style = "";
        choiceTitle[2].style = "";
        choiceTitle[0].style = "";
        choiceTitle[3].style.color = "#000";
        suggestionEmage4.style.display = "block";
    };

    if (event.target.closest(".choice__suggestion-5")) {
        previousSuggestion();
        clickSuggestion5.style.opacity = "1";
        choiceimg5.style.backgroundImage = "url(../img/svg/umbrella-green.svg)";
        choiceTitle[1].style = "";
        choiceTitle[3].style = "";
        choiceTitle[2].style = "";
        choiceTitle[0].style = "";
        choiceTitle[4].style.color = "#000";
        suggestionEmage5.style.display = "block";
    };

});


// var rrr = document.



