var Paddle = function (rect, src, dimensions) {
  var rightPressed, leftPressed;;
  document.addEventListener("keydown", keyDownHandler.bind(this), false);
  document.addEventListener("keyup", keyUpHandler.bind(this), false);

  
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

  this.src=src
  this.frame = rect
  this.draw = function (ctx) {
    var frame = this.frame
    var img = new Image();
    img.src = this.src;
    img.onload = function(){ctx.drawImage(img, frame.origin.x, frame.origin.y, frame.size.width, frame.size.height);}; 
    ctx.drawImage(img, frame.origin.x, frame.origin.y, frame.size.width, frame.size.height);
  }
  this.move = function () {

     if (rightPressed && this.frame.origin.x < dimensions.width - this.frame.size.width) {
        this.frame.origin.x += 7;
    } else if (leftPressed && this.frame.origin.x > 0) {
        this.frame.origin.x -= 7;
    }


  }
  this.hit = function () {
    var audio = new Audio('sound/paddle.mp3');
    audio.play();
  }

  this.place = function (x, y) {
    this.frame.origin.x = x
    this.frame.origin.y = y
  }


}