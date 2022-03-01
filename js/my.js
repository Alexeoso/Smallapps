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
choiceimg1.style.backgroundImage= "url(img/svg/a-heart-green.svg)";
// choiceTitle[0].style.color = "#000";
suggestionEmage1.style.display = "block";
//  Включены по уммолчанию

function previousSuggestion() { 
    clickSuggestion1.style.opacity = "0";
    clickSuggestion2.style.opacity = "0";
    clickSuggestion3.style.opacity = "0";
    clickSuggestion4.style.opacity = "0";
    clickSuggestion5.style.opacity = "0"; //Прозрачность услайдеро

    choiceimg1.style.backgroundImage= "url(img/svg/a-heart.svg)";
    choiceimg2.style.backgroundImage= "url(img/svg/briefcase.svg)";
    choiceimg3.style.backgroundImage= "url(img/svg/leaf.svg)";
    choiceimg4.style.backgroundImage= "url(img/svg/rocket.svg)";
    choiceimg5.style.backgroundImage= "url(img/svg/umbrella.svg)";//Все иконки серые

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
        choiceimg1.style.backgroundImage = "url(img/svg/a-heart-green.svg)";
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
        choiceimg2.style.backgroundImage = "url(img/svg/briefcase-green.svg)";
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
        choiceimg3.style.backgroundImage = "url(img/svg/leaf-green.svg)";
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
        choiceimg4.style.backgroundImage = "url(img/svg/rocket-green.svg)";
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
        choiceimg5.style.backgroundImage = "url(img/svg/umbrella-green.svg)";
        choiceTitle[1].style = "";
        choiceTitle[3].style = "";
        choiceTitle[2].style = "";
        choiceTitle[0].style = "";
        choiceTitle[4].style.color = "#000";
        suggestionEmage5.style.display = "block";
    };

});




