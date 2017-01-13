var Ball = function (x, y, radius, src, speed)
{
  this.center = new Point(x,y)
  this.radius = radius
  this.speed = speed
  this.src = src;
  this.draw = function (ctx)
  {
    var center = this.center
    var img = new Image();
    img.src = this.src; 
    ctx.drawImage(img, center.x, center.y, this.radius*2, this.radius*2);
  }

  this.move = function (dx, dy)
  {
    this.center.y += dy;
    this.center.x += dx;
  }

  this.place = function (dx, dy)
  {
    this.center.y = dy;
    this.center.x = dx;


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
    if ( rect.includes(this.top()) || rect.includes(this.bottom()) )
       return new Point (1,-1);
    else if ( rect.includes(this.right()) || rect.includes(this.left()) )
       return  new Point(-1,1);
    else
      return null
  }

}
