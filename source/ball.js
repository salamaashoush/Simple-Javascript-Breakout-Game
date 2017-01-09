var Ball = function (x, y, radius, color, speed,dx,dy)
{
  this.center = new Point(x,y)
  this.radius = radius
  this.speed = speed
  this.color = color
   this.accel=new Accel(dx || 2, dy || 2)
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
    if(arguments.length){
    this.accel.dx= dx;
     this.accel.dy= dy;
    }
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
  this.isInBoundsOf = function (rect,accl)
  {
    if ( rect.includes(this.top()) || rect.includes(this.bottom()) )
       return hitnewaccel(this.accel ,new line(0) ,accl );
    else if ( rect.includes(this.right()) || rect.includes(this.left()) )
       return  hitnewaccel(this.accel ,new line(90) ,accl );
    else
      return null
  }
    // this.isInBoundsOf = function (rect)
  // {
  //   return (rect.includes(this.top()) || rect.includes(this.bottom()) || rect.includes(this.right()) || rect.includes(this.left()))
  // }

}
