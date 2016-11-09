$(document).ready(function() {

  window.dancers = [];
  var initializer = true;

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];    

    if (dancerMakerFunctionName === 'MouseDancer' && !initializer) {
      var $mouseDancer = $('a:contains("mouse")');
      $mouseDancer.addClass('not-active');
      return;
    }

    if (dancerMakerFunctionName === 'MouseDancer') {
      initializer = false;
    }

    var dancer = new dancerMakerFunction (
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
      );

    $(dancer.$node).addClass('animated');
    $('body').append(dancer.$node);

    if (dancerMakerFunctionName === 'MouseDancer') {
      $(dancer.$node).addClass('MouseDancer');
    }
    window.dancers.push(dancer);

    if (dancerMakerFunctionName === 'MouseDancer') {
      $(document).mousemove(function(e) {
        $mouseX = e.pageX;
        $mouseY = e.pageY;
        dancer.followMouse($mouseX, $mouseY);
        dancer.checkColision();    
      });
    }
  });

  $('.lineUp').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
  });
});

