var Game = function (ctx, dimensions, board ,player) {
	this.player = player;
	this.nextgift = {};
	this.dimensions = dimensions;
	this.ctx = ctx;
	this.currentLevel = 0;
	this.board = board;
	this.board.paddle.src = player.paddleColor
	this.board.ball.src = player.ballColor
	this.draw = function () {
		this.board.draw(this.ctx)
	}
	this.levelChanger = function (level)
	{
		this.player.currentLevel = level;
	}
	
}