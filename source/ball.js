var Ball = function (x, y, radius, color, speed)
{
  this.center = new Point(x,y)
  this.radius = radius
  this.speed = speed
  this.color = color
  this.draw = function (ctx)
  {
    var center = this.center
    ctx.beginPath();
    ctx.arc(center.x, center.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

}