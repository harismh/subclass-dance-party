var MouseDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);  
};

MouseDancer.prototype = Object.create(Dancer.prototype);
MouseDancer.prototype.constructor = MouseDancer;

MouseDancer.prototype.followMouse = function(x, y) {
  var styleSettings = {
    left: x,
    top: y
  };

  this.$node.css(styleSettings);
};
