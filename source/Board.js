var Board =  function(paddle, ball, bricks, lives, rect) 
{
  this.frame = rect;
  this.paddle = paddle;
  this.ball = ball;
  this.bricks = bricks;
  this.lives= lives;
  this.draw = function(ctx)
  {
    var bricks = this.bricks
    this.paddle.draw(ctx)
    this.ball.draw(ctx)
    for (var i = 0; i < bricks.length ; i++) {
      for (var j = 0; j < bricks.length ; j++) {
        bricks[i][j].draw(ctx)
      }
    }
  }

}