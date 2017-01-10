var brick = function (isbrick, hit, strenght, c, hasGift, x, y ,score)
{
	this.isbrick: isbrick,
	this.hit: hit,
	this.strenght:strenght,
	this.unbreakable:c==='x'||c==='X'?true:false,
	this.hasGift:hasGift,
	this.c: c,
	this.pos: {
	x1: x,
	x2: x,
	y: y
	},
	this.score: score,
	this.color: layout.colors[c.toLowerCase()]
}