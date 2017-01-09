var dx = 3
var dy = 3
var play = false;
document.getElementById("gamecanvas").addEventListener("click", togglePlaying, false);
var Game = function()
{
	this.nextgift=null;
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
			if(this.nextgift!==null){
				this.nextgift.draw(this.ctx);
			}
			collisionDetecting(this.board.ball, this.board.bricks.bricks, this.board)
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
	

    collisionDetectingBricks(ball,bricks);
	  collisionDetectingFrames(ball,board)
	 
}
function collisionDetectingFrames(ball,board)
{

	var hitPoint;
	var allsides=[new Rect(0, 0, 3,game.canvas.height )
	, new Rect(0, 0, game.canvas.width,3)
	, new Rect(game.canvas.width, 0, 3,game.canvas.height)];
	 var frame = this.frame

	// console.log("IN",hitPoint);
for(var u=0;u<allsides.length;u++){


	 hitPoint = ball.isInBoundsOf(allsides[u],new Accel(0,0))

	if (hitPoint){
			console.log(u , allsides[u] , dx, dy,hitPoint);
					
                	dx = hitPoint.dx
                	dy = hitPoint.dy
					
                }
}
 hitPoint = ball.isInBoundsOf(board.paddle.frame,board.paddle.accel)
  if (hitPoint){
	  console.log( "OLD",dx, dy)
                	dx = hitPoint.dx
                	dy = hitPoint.dy
			console.log("NEW", dx, dy)		
                }
	var bottom = new Rect(0, game.canvas.height, game.canvas.width,30)
	 hitPoint = ball.isInBoundsOf(bottom,new Accel(0,0))
	 if (hitPoint){
                	dx = hitPoint.dx
                	dy = hitPoint.dy
					console.log("GameOver");
                }




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

function collisionDetectingBricks(ball,bricks){
console.log(bricks)
    for(var c=0;c<bricks.length;c++){
            var b = bricks[c];
			console.log(b)
            if(b.hit==false){
            	 hitPoint = ball.isInBoundsOf(b.frame,new Accel(0,0))
                if (hitPoint){
                	dx = hitPoint.dx
                	dy = hitPoint.dy
					b.hit=true;

                }
            }
        
    }

}

