var dx = 2
var dy = 2
var play = false;
document.getElementById("gamecanvas").addEventListener("click", togglePlaying, false);
var Game = function () {
	this.nextgift = null;
	this.dimensions = dimensions
	this.canvas = document.getElementById("gamecanvas");
	this.ctx = this.canvas.getContext("2d");
	this.dimensions = new Size(this.canvas.width, this.canvas.height);
	this.currentLevel = 0;
	this.board = levelGenerator(this.dimensions,this.currentLevel)
	this.draw = function () {
		this.board.draw(this.ctx)
	}
	this.start = function () {
		if (play) {
			this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
			this.board.ball.move(-dx, -dy)
			this.board.draw(this.ctx)
			drawLives(this.ctx)
			drawScore(this.ctx)
			if (this.nextgift !== null) {
				this.nextgift.draw(this.ctx);
			}
			if(this.board.ball.top().y > (this.board.paddle.frame.origin.y + this.board.paddle.frame.size.height)){
				var ballFall = checkBallFall(this.board.ball.center.x, this.board.paddle.frame.size.width,this.dimensions.width)
				this.board.lives --;
				this.board.ball.place(ballFall , this.board.ball.center.y -50)
				this.board.paddle.place(this.board.ball.center.x -(this.board.paddle.frame.size.width/2) ,(this.dimensions.height-this.board.paddle.frame.size.height))
				this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
				this.board.draw(this.ctx)
				drawScore(this.ctx)
				drawLives(this.ctx)
				requestAnimationFrame(this.start.bind(this));
				togglePlaying()
				this.board.draw(this.ctx)	
			}else{
				collisionDetecting(this.board.ball, this.board.bricks.bricks, this.board)
				requestAnimationFrame(this.start.bind(this));
			}
		}
	}
	this.playSound = function () {
		var audio = new Audio(Defaults.sounds.go);
		audio.play();
	}
}

