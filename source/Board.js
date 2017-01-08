var Board =  function(paddle, ball, bricks, lives, rect) 
{
  this.frame = rect;
  this.paddle = paddle;
  this.ball = ball;
  this.bricks = bricks;
  this.lives= lives;
  this.draw = function(ctx)
  {
    var bricks = this.bricks;
    this.paddle.draw(ctx);
    this.paddle.move(7);
    this.ball.draw(ctx);
    render(ctx,bricks);
  }

}