menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav')
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function(){
    
    let options = {threshold: [0.5]};
     let observer = new IntersectionObserver (onEntry, options);
     let elements = $('.element-animation');
     elements.each((i,el) => {
         observer.observe(el);
     });

    
    
    
    $("#inputTel").mask("+7(999) 999-9999");
    
   
 
    $('form').submit(function(event){
    if ($("#inputTel").val() == ""){
        event.preventDefault();
        alert("Введите телефон");
    }
        });
    
    $('form').submit(function(event){
    if ($("#exampleInputEmail1").val() == ""){
        event.preventDefault();
        alert("Введите email");
    }
        });
    
      
    
    
    
});

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
}
