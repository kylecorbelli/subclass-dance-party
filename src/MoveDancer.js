var MoveDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.currentX = left;
  this.currentY = top;
  this.xMove = Math.random() * 30 - 10;
  this.yMove = Math.random() * 20 - 10;
  this.orientation = this.xMove > 0 ? 1 : -1;
  this.$node.css({'transform' : 'scaleX(' + this.orientation + ')'});
};

MoveDancer.prototype = Object.create(Dancer.prototype);
MoveDancer.prototype.constructor = MoveDancer;

MoveDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

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