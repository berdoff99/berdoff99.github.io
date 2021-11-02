menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav')
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav";
  }
}

$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 20) {
        $('.postix').addClass('top-of-page');
    } else {
        $('.postix').removeClass('top-of-page');
    }
})