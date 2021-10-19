window.onload = function () {
    document.body.classList.add('loaded');
  }

  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
  
  $('a[href^="#"]').click(function(){
  	let valHref = $(this).attr("href");
  	$('html, body').animate({scrollTop: $(valHref).offset().top - 100 + "px"})
  }) 
  
