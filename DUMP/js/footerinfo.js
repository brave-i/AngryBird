$(document).ready(function(){
  $('.footernav li a').click(function(){
    $('.footernav li a').removeClass("active");
    $(this).addClass("active");
  });


  $('#toggle').click(function(){
    $(this).toggleClass('on');
    $('.ftoggleactive').slideToggle();
  });

  var animateButton = function(e) {

    e.preventDefault;

    //reset animation
    e.target.classList.remove('animate');  
    e.target.classList.add('animate');

    setTimeout(function(){
      e.target.classList.remove('animate');
      },700);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
  
});



