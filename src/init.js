$(document).ready(function() {

  window.dancers = [];

  // $('.addColorDancer').on('click', function(e) {
  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
  //   var dancerMakerFunction = window[dancerMakerFunctionName];
  
  //   var dancer = new dancerMakerFunction (
  //     $('body').height() * Math.random(),
  //     $('body').width() * Math.random(),
  //     Math.random() * 1000
  //     );

  //   $('body').append(dancer.$node);
  //   window.dancers.push(dancer);

  // });

  // $('.addMouseDancer').on('click', function(e) {
  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
  //   var dancerMakerFunction = window[dancerMakerFunctionName];
    
  //   var dancer = new MouseDancer (
  //     $('body').height() * Math.random(),
  //     $('body').width() * Math.random(),
  //     Math.random() * 1000
  //     );

  //   $('body').append(dancer.$node);
  //   window.dancers.push(dancer);

  //   $(document).mousemove(function(e) {
  //     $mouseX = e.pageX;
  //     $mouseY = e.pageY;
  //     dancer.followMouse($mouseX, $mouseY);    
  //   });

  // });


  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction (
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
      );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    if (dancerMakerFunctionName === 'MouseDancer') {
      $(document).mousemove(function(e) {
        $mouseX = e.pageX;
        $mouseY = e.pageY;
        dancer.followMouse($mouseX, $mouseY);    
      });
    }
  });


  $('.lineLeft').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineLeft();
    });
  });

  $('.lineUp').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
  });
});

