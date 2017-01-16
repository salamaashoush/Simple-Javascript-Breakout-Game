
var Size = function (width, height)
{
	this.width = width
	this.height = height

}

var Point = function (x, y)
{
	this.x = x
	this.y = y

}

var Rect = function(x, y, width, height)
{	
	this.origin = new Point (x, y)
	this.size = new Size (width, height)
	this.includes = function (point)
	{
		var x = this.origin.x
		var y = this.origin.y
		var width = this.size.width
		var height = this.size.height 
		return (x <= point.x && point.x <= x+width) && (y <= point.y && point.y <= y+height)

	}
}