var BirdDancer = function(top, left, timeBetweenSteps) {
  this.spriteCoordinates = [
    [0, 0],
    [-185, 0],
    [-365, 0],
    [-539, 0],
    [-725, 0],
    [0, -190],
    [-185, -190],
    [-365, -190],
    [-539, -190],
    [-725, -190],
    [0, -355],
    [-185, -355],
    [-356, -355],
    [-543, -355]
  ];
  this.currentSpriteIndex = 0;
  MoveDancer.call(this, top * 0.4, left / 2, 40);
  this.$node.addClass('bird');
  // this.xPosition = -40;
  // this.yPosition = 20;
};

BirdDancer.prototype = Object.create(MoveDancer.prototype);
BirdDancer.prototype.constructor = BirdDancer;

BirdDancer.prototype.step = function() {
  MoveDancer.prototype.step.call(this);
  (this.currentSpriteIndex === (this.spriteCoordinates.length - 1)) ? (this.currentSpriteIndex = 0) : (this.currentSpriteIndex++);
  var changeX = {
    'background-position' : this.spriteCoordinates[this.currentSpriteIndex][0] + 'px ' + this.spriteCoordinates[this.currentSpriteIndex][1] + 'px',
  };
  this.$node.css(changeX);

};