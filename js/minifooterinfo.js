
$(document).ready(function(){
  $('.footernav li a').click(function(){
    $('.footernav li a').removeClass("active");
    $(this).addClass("active");
  });

  $('#toggle').click(function(){
    $(this).toggleClass('on');
    $('.ftoggleactive').slideToggle();
  });
});

