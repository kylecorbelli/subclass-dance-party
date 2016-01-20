var Robot = function(top, left, timeBetweenSteps) {
  Dancer.call(this, $('body').height() - top/4 - 238, left, 10);
  this.$node.addClass('robot');
};

Robot.prototype = Object.create(Dancer.prototype);
Robot.prototype.constructor = Robot;

Robot.prototype.step = function() {
  Dancer.prototype.step.call(this);
};