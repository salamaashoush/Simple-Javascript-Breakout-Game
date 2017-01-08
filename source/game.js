var dx = 3
var dy = 3
var play = false;
document.addEventListener("click", togglePlaying, false);
document.getElementById("gamecanvas").addEventListener("click", togglePlaying, false);
var Game = function()
{
	this.dimensions = new Size(480, 302);
	this.canvas = document.getElementById("gamecanvas");
	this.ctx = this.canvas.getContext("2d");
	this.dimensions = new Size(this.canvas.width,this.canvas.height);
	this.currentLevel = 1;
	this.board = level1(this.dimensions)
	this.draw = function () {
		this.board.draw(this.ctx)
	}
	this.start = function () {
		if (play) {
			this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
			this.board.ball.move(-dx, -dy)
			this.board.draw(this.ctx)
			collisionDetecting(this.board.ball, this.board.bricks, this.board)
			requestAnimationFrame(this.start.bind(this));
		}
	}
	this.playSound = function ()
	{
		var audio = new Audio('sound/go.mp3');
    	audio.play();
	}
}

var game = new Game()
game.draw()

function togglePlaying() {
	play = !play;
	if(play)
		game.playSound()
		game.start();

}



function collisionDetecting(ball, bricks, board) {
	var left = ball.left()
	var right = ball.right()
	var top = ball.top()
	var bottom = ball.bottom()
	if (left.x <= 0 || right.x > game.dimensions.width) {
		dx *= -1;
	}
	if (top.y <= 0) {
		dy *= -1;
	}
	if (bottom.x > board.paddle.frame.origin.x && bottom.x < board.paddle.frame.origin.x + board.paddle.frame.size.width && bottom.y >= board.paddle.frame.origin.y) {
		dy *= -1;
	}

	for (var c = 0; c < bricks.bricks.length; c++) {
		var b = bricks.bricks[c];
		if (b.hit == false) {
			hitPoint = ball.isInBoundsOf(b.frame)
			if (hitPoint) {
				console.log(hitPoint)
				b.hit = true
				dx *= hitPoint.x
				dy *= hitPoint.y
			}
		}
	}
}

