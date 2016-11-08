
var ColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);  
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function() {
  this.$node.toggle();
  
  var back = ['red', 'orange', 'blue', 'purple', 'green', 'white', 'violet', 'pink', 'yellow', 'aqua', 'GreenYellow', 'SeaGreen', 'LawnGreen', 'Crimson'];
  var rand = back[Math.floor(Math.random() * back.length)];
  this.$node.css('border-color', rand);
  
  Dancer.prototype.step.call(this);
};
