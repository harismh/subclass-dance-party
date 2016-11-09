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

MouseDancer.prototype.getPos = function(node) {
  var pos = node.$node.position();
  return pos; 
};

MouseDancer.prototype.setPos = function(node) {
  var dancerpos = this.getPos(this);
  var nodepos = this.getPos(node);

  var dancertop = dancerpos.top;
  var dancerleft = dancerpos.left;
  var nodetop = nodepos.top;
  var nodeleft = nodepos.left;

  if (dancerleft - 50 > nodeleft) {
    node.$node.css('left', nodeleft += 3);
  } else if (dancerleft + 50 < nodeleft) {
    node.$node.css('left', nodeleft -= 3);    
  } else if (dancertop - 50 > nodetop) {
    node.$node.css('top', nodetop += 3);
  } else if (dancertop + 50 < nodetop) {
    node.$node.css('top', nodetop -= 3);
  }
};

MouseDancer.prototype.checkColision = function() {
  for (var i = 0; i < window.dancers.length; i++) {
    var dancer = window.dancers[i];
    this.setPos(dancer);
  }
};