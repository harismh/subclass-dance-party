var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.step();  
  this.setPosition(top, left);

};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
  }; 
  
  this.$node.css(styleSettings);
};

Dancer.prototype.lineLeft = function() {
  var styleSettings = {
    left: 0
  };

  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  var styleSettings = {
    top: 250
  };

  this.$node.css(styleSettings);
};