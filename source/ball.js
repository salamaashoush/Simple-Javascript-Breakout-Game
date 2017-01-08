var Ball = function (x, y, radius, color, speed,dx,dy)
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

  this.move = function (dx, dy)
  {
    this.center.y += dy;
    this.center.x += dx;


  }
  this.top = function ()
  {
     return new Point(this.center.x ,this.center.y - this.radius)

  }
  this.bottom = function ()
  {
    return new Point(this.center.x ,this.center.y + this.radius)
  }
  this.right = function ()
  {
    return new Point(this.center.x + this.radius,this.center.y)
  }

  this.left = function ()
  {
    return new Point(this.center.x - this.radius,this.center.y)
  }
  this.isInBoundsOf = function (rect)
  {
    if (rect.includes(this.top()) || rect.includes(this.bottom()))
      return new Point(1,-1)
    else if (rect.includes(this.right()) || rect.includes(this.left()))
      return new Point(-1,1)
    else
      return null
  }
    // this.isInBoundsOf = function (rect)
  // {
  //   return (rect.includes(this.top()) || rect.includes(this.bottom()) || rect.includes(this.right()) || rect.includes(this.left()))
  // }

}
