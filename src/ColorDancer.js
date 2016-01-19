var ColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  var border = Math.floor(Math.random() * 100);
  var borderRadius = Math.floor(Math.random() * 100);
  var style = {
    'border': border + 'px ' + 'solid' + color,
    'border-radius': borderRadius + 'px'
  };
  this.$node.css(style);
  this.$node.toggle();
};