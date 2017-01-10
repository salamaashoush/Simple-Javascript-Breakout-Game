var Paddle = function (rect, src, dimensions, dxa, dya, limitdx, factor) {
  var rightPressed, leftPressed;
  this.accel = new Accel(dxa, dya);
  this.limitx = limitdx;
  this.xfactor = factor;
  document.addEventListener("keydown", keyDownHandler.bind(this), false);
  document.addEventListener("keyup", keyUpHandler.bind(this), false);

  function keyDownHandler(e) {
    if (Math.abs(this.accel.dx) >= this.limitx) {

    } else if (e.keyCode == 39) {
      this.accel.dx += factor;

    } else if (e.keyCode == 37) {
      this.accel.dx -= factor;

    }
  }

  function keyUpHandler(e) {
    this.accel.dx = 0;
  }
  //this.color = color
  this.src=src
  this.frame = rect
  this.draw = function (ctx) {
    var frame = this.frame
    //#this code to draw image instead of rectangle 
    var img = new Image();
    img.src = this.src;
    img.onload = function(){ctx.drawImage(img, frame.origin.x, frame.origin.y, frame.size.width, frame.size.height);}; 
    ctx.drawImage(img, frame.origin.x, frame.origin.y, frame.size.width, frame.size.height);
    

    // ctx.beginPath();
    // ctx.rect(frame.origin.x, frame.origin.y , frame.size.width, frame.size.height);
    // ctx.fillStyle = this.color;
    // ctx.fill();
    // ctx.closePath();
  }
  this.move = function () {


    //this.frame.origin.y+=this.accel.dy

    // if (this.frame.origin.x +this.accel.dx <= dimensions.width - this.frame.size.width  && this.frame.origin.x > 0) 
    if (this.frame.origin.x + this.accel.dx <= dimensions.width - this.frame.size.width && this.frame.origin.x + this.accel.dx >= 0)
      this.frame.origin.x += this.accel.dx
    else
      this.accel.dx = 0;
    //  }else if (leftPressed && this.frame.origin.x > 0) {
    //     this.frame.origin.x -= x;
    // }
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