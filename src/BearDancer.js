var BearDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bear');
  this.xPosition = -40;
  this.currentX = left;
  this.currentY = top;
  this.xMove = Math.random() * 20 - 10;
  this.yMove = Math.random() * 20 - 10;
  this.orientation = this.xMove > 0 ? 1 : -1;
  if (this.xMove < 0) this.$node.css({'transform' : 'scaleX(' + this.orientation + ')'});
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
  if (this.currentX >= (window.innerWidth - this.$node.width()) || this.currentX <= 0) {
    this.xMove *= -1;
    this.orientation *= -1;
    this.$node.css({'transform' : 'scaleX(' + this.orientation + ')'});
  }
  if (this.currentY >= (window.innerHeight - this.$node.height()) || this.currentY <= window.innerHeight * 0.40) {
    this.yMove *= -1;
  }
  this.currentX += this.xMove;
  this.currentY += this.yMove;
  this.setPosition(this.currentY, this.currentX);
};