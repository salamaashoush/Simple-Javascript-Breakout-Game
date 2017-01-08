
var Paddle = function (rect, color,dimensions)
{
var rightPressed,leftPressed;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}
  this.color = color
  this.frame = rect
  this.draw = function(ctx)
  {
    var frame = this.frame
    ctx.beginPath();
    ctx.rect(frame.origin.x, frame.origin.y , frame.size.width, frame.size.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  this.move=function(x){
    if (rightPressed && this.frame.origin.x < dimensions.width - this.frame.size.width) {
        this.frame.origin.x += x;
    }else if (leftPressed && this.frame.origin.x > 0) {
        this.frame.origin.x -= x;
    }
  }
  this.hit =function()
  {
    var audio = new Audio('sound/paddle.mp3');
    audio.play();
  }

  
}
