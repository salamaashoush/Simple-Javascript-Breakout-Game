var Brick = function (rect, color )
{
  this.status = 1;
  this.color = color;
  this.frame = rect;
  this.draw = function(ctx)
  {
    var frame = this.frame
    ctx.beginPath();
    ctx.rect(frame.origin.x, frame.origin.y , frame.size.width, frame.size.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}