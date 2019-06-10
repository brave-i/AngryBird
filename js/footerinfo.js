
$(document).ready(function(){

  

    $('#loader').fadeIn(3000);

    /*$('.footernav li a').click(function(){
      $('.footernav li a').removeClass("active");
      $(this).addClass("active");

      console.log("step: 1 ++++++++++++++++++++++++++++++ ");
    });

    */


    $('#toggle').click(function(){

      $(this).toggleClass('on');
      $('.ftoggleactive').slideToggle();

      console.log("step: 2 ++++++++++++++++++++++++++++++ ");

    });

    $('#toggle2').click(function(){
      
      $(this).toggleClass('on');
      $('.ftoggleactive2').slideToggle();

      console.log("step: 2 ++++++++++++++++++++++++++++++ ");

    });

    $('#toggle3').click(function(){
      
      $(this).toggleClass('on');
      $('.ftoggleactive3').slideToggle();

      console.log("step: 3 ++++++++++++++++++++++++++++++ ");

    });

    /*

    var animateButton = function(e) {

      console.log("step: 3 ++++++++++++++++++++++++++++++ ");

      e.preventDefault;

      //reset animation
      e.target.classList.remove('animate');  
      e.target.classList.add('animate');

      console.log("step: 4 ++++++++++++++++++++++++++++++ ");

      setTimeout(function(){
        e.target.classList.remove('animate');
        console.log("step: 5 ++++++++++++++++++++++++++++++ ");

        },700);
    };

    var bubblyButtons = document.getElementsByClassName("bubbly-button");

    console.log("step: 6 ++++++++++++++++++++++++++++++ ");

    for (var i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', animateButton, false);

      console.log("step: 7 ++++++++++++++++++++++++++++++ ");
    }

    */

    /////////////////////////   DOCUMENT IS READY!   ////////////////////////////////
    

    setTimeout(function(){ 
      $("#mainload").hide();
      $(".page__style").removeClass("hide");
        }, 3000);
    
 
});



