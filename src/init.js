$(document).ready(function() {
  window.dancers = [];
  window.linedUp = false;

  var cheerSong = $("<audio></audio>").attr({
      'src':'audio/cheer.mp3',
      'volume':1.0,
      'autoplay':'autoplay'
  }).appendTo("body");

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 100 + 100
      // Math.max($("body").height() * Math.random(), window.innerHeight * 0.5),
      // $("body").width() * Math.random()/2,
      // Math.random() * 100 + 100
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);


  });


  $(".alignDancer").on("click", function(){
    if (window.linedUp) {
      window.linedUp = false;
      window.dancers.forEach(function(item, i) {
        item.xMove = item.oldXMove;
        item.yMove = item.oldYMove;
        // if (item.$node.hasClass('bird')) {
          item.currentX = item.oldXPosition;
          item.currentY = item.oldYPosition;
        // }
        item.$node.addClass('aligned');
        item.setPosition(item.currentY, item.currentX);
        item.$node.removeClass('aligned');
      });
    } else {
      window.linedUp = true;
      window.dancers.forEach(function(item, i){
        item.oldXMove = item.xMove || Math.random() * 30 - 10;
        item.oldYMove = item.yMove || Math.random() * 20 - 10;
        item.xMove = 0;
        // if (item.$node.hasClass('bird')) {
          item.oldXPosition = item.currentX;
          item.oldYPosition = item.currentY;
        // }
        item.yMove = 0;
        // console.log($('body').width()/window.dancers.length);
        item.currentX = (i + 1) * ($('body').width()*0.75/window.dancers.length);
        item.currentY = $('body').height()/2;
        item.$node.addClass('aligned');
        item.setPosition(item.currentY, item.currentX);
        item.$node.removeClass('aligned');
      });
    }
    
  });

  $(document).on('click', 'span', function() {
    var self;
    for (var i = 0; i < window.dancers.length; i++) {
      if ($(this)[0] === window.dancers[i].$node[0]) {
        self = window.dancers[i];
        break;
      }
    }
    // console.log('this: ', this, '\nself: ', self);
    self.step = function(){};
    self.xMove = 0;
    self.yMove = 0;
    self.xPosition = 0;
    // clearTimeout(self.timer);
    self.$node.css({'background-image' : 'url("./images/explode.png")',
                    'background-position' : '0 0',
                    'background-size' : 'contain',
                    'background-repeat' : 'no-repeat',
                    'width' : '195px',
                    'height' : '195px'});
    var audio = $("<audio></audio>").attr({
        'src':'audio/shotgun.wav',
        'volume':0.4,
        'autoplay':'autoplay'
    }).appendTo("body");
    //self.setPosition(self.currentY, self.currentX);
    setTimeout(function(){ self.$node.remove(); }, 2200); 
  });

});

