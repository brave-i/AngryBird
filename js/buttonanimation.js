(function (){
  'use strict';

  var onAnimComplete = function (){
    var animationEnd = [
      'webkitAnimationEnd',
      'mozAnimationEnd',
      'MSAnimationEnd',
      'oanimationend',
      'animationend'
    ];

    for (var i = 0; i < animationEnd.length; i++){
      $( '.bounce' ).on( animationEnd[i], function (){
        $( 'button' ).removeClass( 'bounce' );
      });
    }
  };
  
  $( 'button' ).on('click', function (){
    $( this ).addClass( 'bounce' );
    return onAnimComplete();
  });

  $( document ).on ( 'ready', onAnimComplete);
  
})();