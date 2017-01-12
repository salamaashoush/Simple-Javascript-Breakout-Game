var dimensions = new Size(750, 500);
var level = 0;
var players = {};
var canvas = document.getElementById("gamecanvas");
var ctx = canvas.getContext("2d");
//var player = new Player("Ali", Paddles.blue, Balls.orange);
//savePlayers("players",players);
var player=new Player();
//console.log(getAllPlayers());
player.parseSavedPlayer(getPlayer("Ali"));


var board = levelGenerator(dimensions, 0, player);
var game = new Game(ctx, dimensions, board, player);
var dx = 2
var dy = 2
var play = false;
var requestId = 0;

document.getElementById("gamecanvas").addEventListener("click", togglePlaying, false);



function togglePlaying() {
	play = !play;
	var btn = document.getElementById("play-btn");
	var bg = document.getElementById("player-splash");
	var ctrl = document.getElementById("player-splash-control");
	if (play) {
		startGame(game)
		btn.className = "icon-pause-2";
		bg.style.display = "none";
		ctrl.style.display = "none";
	} else {
		btn.className = "icon-play";
		bg.style.display = "block";
		ctrl.style.display = "block";
	}
}


function collisionDetecting(ball, bricks, board) {


	collisionDetectingBricks(ball, bricks);
	collisionDetectingFrames(ball, board)

}

function collisionDetectingFrames(ball, board) {

	var hitPoint;
	var allsides = [new Rect(0, 0, 3, canvas.height), new Rect(0, 0, canvas.width, 3), new Rect(canvas.width, 0, 3, canvas.height)];
	var frame = this.frame

	// console.log("IN",hitPoint);
	for (var u = 0; u < allsides.length; u++) {


		hitPoint = ball.isInBoundsOf(allsides[u], new Accel(0, 0))

		if (hitPoint) {
			//console.log(u, allsides[u], dx, dy, hitPoint);

			dx = hitPoint.dx
			dy = hitPoint.dy

		}
	}
	hitPoint = ball.isInBoundsOf(board.paddle.frame, board.paddle.accel)
	if (hitPoint) {
		//console.log("OLD", dx, dy)
		dx = hitPoint.dx
		dy = hitPoint.dy
		//console.log("NEW", dx, dy)
	}
	//var bottom = new Rect(0, game.canvas.height, game.canvas.width, 30)
	//hitPoint = ball.isInBoundsOf(bottom, new Accel(0, 0))
	// if (hitPoint) {
	// 	dx = hitPoint.dx
	// 	dy = hitPoint.dy
	// 	//console.log("GameOver");
	// }




	/*		
	var left = ball.left()
	var right = ball.right()
	var top = ball.top()
	var bottom = ball.bottom()
if ( left.x <= 0 || right.x > game.canvas.width) {
        dx *= -1;
    }
    if(top.y <= 0 ){
    	dy *= -1;
    }
     if (bottom.x > board.paddle.frame.origin.x && bottom.x < board.paddle.frame.origin.x + board.paddle.frame.size.width && bottom.y >= board.paddle.frame.origin.y ) {
			board.paddle.hit()
            dy *= -1;
    }
	*/

}

function collisionDetectingBricks(ball, bricks) {
	//console.log(bricks)
	for (var c = 0; c < bricks.length; c++) {
		var b = bricks[c];
		//console.log(b)
		if (b.hit == false) {
			hitPoint = ball.isInBoundsOf(b.frame, new Accel(0, 0))
			if (hitPoint) {
				dx = hitPoint.dx
				dy = hitPoint.dy
				if (!b.unbreakable) {
					b.strenght--;
				}
				if (b.strenght === 0) {
					b.hit = true;
					game.player.score += b.score
				}
				if (b.hasGift) {
					var giftpos = {
						x: b.frame.origin.x,
						y: b.frame.origin.y
					};
					game.nextgift = randomGift(giftpos);
				}

			}
		}
	}
}

function calcBricksCount(bricks) {
	var count = 0
	for (var c = 0; c < bricks.length; c++) {
		var b = bricks[c];
		if (!b.unbreakable)
			count++;
	}
	return count;
}

function calcBricksHit(bricks) {
	var count = 0
	for (var c = 0; c < bricks.length; c++) {
		var b = bricks[c];
		if (b.hit)
			count++;
	}
	return count;
}

function win(bricks) {
	return (calcBricksCount(bricks) == calcBricksHit(bricks))
}

function startGame(game) {
	if (play) {
		this.game.ctx.clearRect(0, 0, this.game.dimensions.width, this.game.dimensions.height);
		this.game.board.ball.move(-dx, -dy);
		this.game.board.draw(this.game.ctx);
		updateScore(this.game.player.score);
		if (this.game.nextgift !== null) {
			this.game.nextgift.draw(this.game.ctx);
		}
		if (this.game.board.ball.top().y > (this.game.board.paddle.frame.origin.y + this.game.board.paddle.frame.size.height)) {
			var ballX = this.game.board.ball.center.x;
			var ballY = this.game.board.ball.center.y;
			var paddleW = this.game.board.paddle.frame.size.width;
			var paddleX = this.game.board.paddle.frame.origin.x;
			var ballFall = checkBallFall(ballX, paddleW, this.game.dimensions.width);
			var paddleY = this.game.board.paddle.frame.origin.y;
			var paddleH = this.game.board.paddle.frame.size.height;
			var paddleDx = this.game.board.paddle.accel.dx;
			var paddleAcc = this.game.board.paddle.limitx;
			this.game.board.lives--;
			updateLives(this.game.board.lives);
			if (outOflives(this.game.board.lives)) {
				checkHighScore(this.game.player.score);
				console.log(this.game.player.getUserInfo());
				this.game.player.highscore = this.game.player.score;
			}
			this.game.board.ball.place(ballFall, ballY - 50)
			this.game.board.paddle.place(ballFall - (paddleW / 2), (this.game.dimensions.height - paddleH))
			this.game.ctx.clearRect(paddleX - paddleDx, paddleY, paddleW + 10, paddleH)
			togglePlaying()
		} else {
			collisionDetecting(this.game.board.ball, this.game.board.bricks.bricks, this.game.board)
			if (win(this.game.board.bricks.bricks)) {
				level++
				this.game.board = levelGenerator(this.game.dimensions, level, this.game.player)
				this.game.ctx.clearRect(0, 0, this.game.dimensions.width, this.game.dimensions.height)
				this.board.draw(this.game.ctx)
				togglePlaying()

			} else {
				requestId = requestAnimationFrame(startGame);
			}
		}
	}
}


function stop() {
	if (requestId) {
		window.cancelAnimationFrame(requestId);
		requestId = undefined;
	}
}

function highScoreBadge(score) {
	game.player.addBadge(Badges.bestscore);

}

function saveHighScore(score) {
	var highscore = localStorage.getItem("highscore");
	if (highscore !== null) {
		if (score > highscore) {
			localStorage.setItem("highscore", JSON.stringify(sp));
		}
	} else {
		localStorage.setItem("highscore", JSON.parse(sp));
	}
}
function getHighScore() {
	var score = JSON.parse(localStorage.highscore);
	return score;
}

function checkHighScore(score) {
	var highScore = getHighScore();
	if (score > highScore || highScore === undefined) {
		saveHighScore(score);
		highScoreBadge(score);
	}
}

function outOflives(lives) {
	return (lives < 0);
}