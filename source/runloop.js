var dimensions = new Size (700,460);
var level =0;
var board =levelGenerator(dimensions,0);
var canvas = document.getElementById("gamecanvas");

var ctx = canvas.getContext("2d");
var game = new Game(ctx ,dimensions, board);
var dx = 2
var dy = 2
var play = false;
document.getElementById("gamecanvas").addEventListener("click", togglePlaying, false);

game.draw();





function togglePlaying() {

	play = !play;
	if (play)
	startGame(game)

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
				if(!b.unbreakable){
					b.strenght--;
				}
				if(b.strenght===0){
					b.hit=true;
					game.score += b.score
				}
				if(b.hasGift){
					var giftpos={x:b.frame.origin.x,y:b.frame.origin.y};
					game.nextgift=randomGift(giftpos);
				}

			}
		}
	}
}

function drawLives(ctx) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+game.board.lives, game.dimensions.width-65, 20);
}

function drawScore(ctx){
    ctx.font="16px Arial";
    ctx.fillStyle="#0095DD";
    ctx.fillText("Score: "+game.score,8,20);
}

function calcBricksCount (bricks)
{		var count = 0
		for (var c = 0; c < bricks.length; c++) {
		var b = bricks[c];
		if (! b.unbreakable)
			count ++;
		}
		return count;
}

function calcBricksHit (bricks)
{		var count = 0
		for (var c = 0; c < bricks.length; c++) {
		var b = bricks[c];
		if (b.hit)
			count ++;
		}
		return count;
}

function win (bricks)
{
	return (calcBricksCount(bricks) == calcBricksHit(bricks))
}

function startGame(game)
{
	
		if (play) {
			this.game.ctx.clearRect(0, 0, this.game.dimensions.width, this.game.dimensions.height)
			this.game.board.ball.move(-dx, -dy)
			this.game.board.draw(this.game.ctx)
			drawLives(this.game.ctx)
			drawScore(this.game.ctx)
			if (this.game.nextgift !== null) {
				this.game.nextgift.draw(this.game.ctx);
			}
			if(this.game.board.ball.top().y > (this.game.board.paddle.frame.origin.y + this.game.board.paddle.frame.size.height)){
				var ballFall = checkBallFall(this.game.board.ball.center.x, this.game.board.paddle.frame.size.width,this.game.dimensions.width)
				this.game.board.lives --;
				this.game.board.ball.place(ballFall , this.game.board.ball.center.y -50)
				this.game.board.ball.move(1 ,-1 )
				this.game.board.paddle.place(this.game.board.ball.center.x -(this.game.board.paddle.frame.size.width/2) ,(this.game.dimensions.height-this.game.board.paddle.frame.size.height))
				this.game.ctx.clearRect(0, 0, this.game.dimensions.width, this.game.dimensions.height)
				this.game.board.draw(this.game.ctx)
				drawScore(this.game.ctx)
				drawLives(this.game.ctx)
				requestAnimationFrame(startGame);
				togglePlaying()
				this.game.board.draw(this.game.ctx)	
			}else{
				collisionDetecting(this.game.board.ball, this.game.board.bricks.bricks, this.game.board)
				if(win(this.game.board.bricks.bricks)){
					level++
					this.game.board=levelGenerator(this.game.dimensions,level)
					this.game.ctx.clearRect(0, 0, this.game.dimensions.width, this.game.dimensions.height)
					this.board.draw(this.game.ctx)
					togglePlaying()

				}else{
				requestAnimationFrame(startGame);
				}
			}
		}
}