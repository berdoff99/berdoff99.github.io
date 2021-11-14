menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav')
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav";
  }
}


/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}






/* Индекс слайда по умолчанию */
var s2lideIndex = 1;
s2howSlides(s2lideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide2() {
    s2howSlides(s2lideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide2() {
    s2howSlides(s2lideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide2(m) {
    s2howSlides(s2lideIndex = n);
}

/* Основная функция слайдера */
function s2howSlides(m) {
    var y;
    var s2lides = document.getElementsByClassName("item_2");
    var d2ots = document.getElementsByClassName("slider-dots_item_2");
    if (m > s2lides.length) {
      s2lideIndex = 1
    }
    if (y < 1) {
        s2lideIndex = s2lides.length
    }
    for (y = 0; y < s2lides.length; y++) {
        s2lides[y].style.display = "none";
    }
    for (y = 0; y < d2ots.length; y++) {
        d2ots[y].className = d2ots[y].className.replace(" active", "");
    }
    s2lides[s2lideIndex - 1].style.display = "block";
    d2ots[s2lideIndex - 1].className += " active";
}
