//angles range from 0 to 179;
var line=function(angle){
Object.defineProperty(this,'Types',
{
  enumerable: false,
  configurable: false,
  writable: false,
  value: {Vertical:1,Horizontal:2,Other:10}
}
);
this.angle=angle;
this.getDefaultType=function(){
if(this.angle===0)
    return this.Types.Horizontal;
else if(this.angle==90)
    return this.Types.Vertical;
else 
    return this.Types.Other;
}
}
line.prototype
function hit(ball ,line ,accel ){
if()








return new Accel(dx,dy);



}