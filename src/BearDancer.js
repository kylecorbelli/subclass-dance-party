var BearDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bear');
  this.xPosition = -40;
};

BearDancer.prototype = Object.create(Dancer.prototype);
BearDancer.prototype.constructor = BearDancer;

BearDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.xPosition === -700 ? (this.xPosition = -40) : (this.xPosition -= 220);
  var changeX = {
    'background-position' : this.xPosition + 'px' +' 0',
  };
  this.$node.css(changeX);
};