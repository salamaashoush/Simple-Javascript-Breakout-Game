 function soundManager  () {
    var mute = false;

  if (arguments.callee._singletonInstance) {
    return arguments.callee._singletonInstance;
  }

  arguments.callee._singletonInstance = this;

  this.brickHit = function () {
      if (! mute){
   var audio = new Audio('sound/brick.mp3');
    audio.play();
      }
  };

  this.paddleHit = function () {
      if (! mute){
   var audio = new Audio('sound/paddle.mp3');
    audio.play();
      }
  };

  this.gameStart = function () {
      if (! mute){
   var audio = new Audio('sound/go.mp3');
    audio.play();
      }
  };

  this.loseLife = function () {
      if (! mute){
   var audio = new Audio('sound/loselife.mp3');
    audio.play();
      }
  };

  this.gameOver = function () {
      if (! mute){
   var audio = new Audio('sound/gameover.mp3');
    audio.play();
      }
  };
  this.levelUp = function () {
      if (! mute){
   var audio = new Audio('sound/levelup.mp3');
    audio.play();
      }
  };
  this.setMute = function (){
      mute = !mute;
  }
}
