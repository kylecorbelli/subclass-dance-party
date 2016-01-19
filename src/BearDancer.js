var BearDancer = function(top, left, timeBetweenSteps) {
  MoveDancer.call(this, Math.max(top - 321, window.innerHeight * 0.5), left / 2, timeBetweenSteps);
  this.xPosition = -40;
  this.$node.addClass('bear');
};

BearDancer.prototype = Object.create(MoveDancer.prototype);
BearDancer.prototype.constructor = BearDancer;

BearDancer.prototype.step = function() {
  MoveDancer.prototype.step.call(this);
  this.xPosition === -700 ? (this.xPosition = -40) : (this.xPosition -= 220);
  var changeX = {
    'background-position' : this.xPosition + 'px' +' 0',
  };
  this.$node.css(changeX);

};