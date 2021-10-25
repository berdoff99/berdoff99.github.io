menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav');

  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav";
  }
}

var widgetOptions376010 = {
        bg_color: "transparent"
    };
    (function() {
        var a = document.createElement("script"), h = "head";
        a.async = true;
        a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=376010&t="+Math.floor(new Date()/18e5);
        document.getElementsByTagName(h)[0].appendChild(a)
    })();

$('.form-check-input').click(function() { 
    $('input[type="radio"]').prop("click_on_page", true);
});



