var Game = function (ctx, dimensions, board) {
	this.score = 0 ;
	this.nextgift = null;
	this.dimensions = dimensions;
	this.ctx = ctx;
	this.currentLevel = 0;
	this.board = board;
	this.draw = function () {
		this.board.draw(this.ctx)
	}
	
}