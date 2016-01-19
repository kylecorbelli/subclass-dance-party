var Robot = function(top, left, timeBetweenSteps) {
  Dancer.call(this, $('body').height() - top/4 - 238, left, 10);
  this.$node.addClass('robot');
  //this.xPosition = 0;
};

Robot.prototype = Object.create(Dancer.prototype);
Robot.prototype.constructor = Robot;

Robot.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.xPosition === -700 ? (this.xPosition = -40) : (this.xPosition -= 220);
  var changeX = {
    'background-position' : this.xPosition + 'px' +' 0',
    'z-index' : '-20'
  };
  //this.$node.css(changeX);
};