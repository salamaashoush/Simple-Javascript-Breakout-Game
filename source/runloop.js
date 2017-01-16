var dimensions = new Size(750, 500);
var soundManager = new soundManager();
var players = {};
var canvas = document.getElementById("gamecanvas");
var ctx = canvas.getContext("2d");
var player=null;
if(restorePlayerSession()){
	player=restorePlayerSession();
}else{
	player=new Player("Ali","male", Paddles.blue, Balls.orange);
	savePlayer(player);
	console.log("saved");
}
soundManager.toggleBackground();
var board = levelGenerator(dimensions, player.currentLevel, player);
var game = new Game(ctx, dimensions, board, player);
var dx = 2
var dy = 2
var play = false;
var requestId = 0;


//document.getElementById("gamecanvas").addEventListener("click", togglePlaying, false);



function togglePlaying() {
	play = !play;
	var btn = document.getElementById("play-btn");
	var bg = document.getElementById("player-splash");
	var ctrl = document.getElementById("player-splash-control");
	if (play) {
		soundManager.gameStart();
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






function startGame(game) {
	if (play) {		
		this.game.ctx.clearRect(0, 0, this.game.dimensions.width, this.game.dimensions.height);
		this.game.board.ball.move();

		this.game.board.draw(this.game.ctx);
		updateScore(this.game.player.score);
		checkHighScore(this.game.player.score);
		collisionDetecting(this.game.board.ball, this.game.board.bricks.bricks, this.game.board)
		for ( var giftname in this.game.nextgift ) 
		
		{
			//console.log(giftname);
			this.game.nextgift[giftname].draw(this.game.ctx);
			
			if(this.game.nextgift[giftname].hascollided(this.game.board.paddle.frame)){
				this.game.nextgift[giftname].bonusfun(this.game.board);
				delete this.game.nextgift[giftname];
				updateLives(this.game.board.lives);
			}
		}


		if (this.game.board.ball.top().y > this.game.dimensions.height - (this.game.board.paddle.frame.size.height/2)) {
			var ballX = this.game.board.ball.center.x;
			var ballY = this.game.board.ball.center.y;
			var paddleW = this.game.board.paddle.frame.size.width;
			var paddleX = this.game.board.paddle.frame.origin.x;
			var ballFall = checkBallFall(ballX, paddleW, this.game.dimensions.width);
			var paddleY = this.game.board.paddle.frame.origin.y;
			var paddleH = this.game.board.paddle.frame.size.height;

			this.game.board.lives--;
			updateLives(this.game.board.lives);
			if (outOflives(this.game.board.lives)) {
				soundManager.gameOver();
				checkSlug(this.game);
				this.game.player.highscore = this.game.player.score;
				lost(this.game);
			}
			this.game.board.ball.place(ballFall, ballY - 50)
			this.game.ctx.clearRect(0 ,0 , this.game.dimensions.width , this.game.dimensions.height)
			this.game.board.paddle.frame.origin = new Point (ballFall - (paddleW / 2), (this.game.dimensions.height - paddleH))
			render(this.game.ctx,this.game.board.bricks)
			gui.togglePlaying("pause");
		} else {
			if (win(this.game.board.bricks.bricks)) {
				checkThugLife(this.game);
				soundManager.levelUp();
				this.game.player.currentLevel ++;
				savePlayer(this.game.player);
				if(this.game.player.currentLevel >9){
					finishgame();
				}
				else{
				this.game.board = levelGenerator(this.game.dimensions, this.game.player.currentLevel, this.game.player)
				this.game.ctx.clearRect(0, 0, this.game.dimensions.width, this.game.dimensions.height)
				gui.togglePlaying("finish");
				}
			} else {
				requestId = requestAnimationFrame(startGame);
			}
		}
	}
}

function levelChanger (level)
{
	if(level <= 9){
	var board = levelGenerator(dimensions,level,player);
	game.board = board;
	}
	
}

function finishgame ()
{

}

function lost (game)
{	
	this.game.player.lives = 3;
	this.game.player.score = 0;
	levelChanger(player.currentLevel);
	updateScore(this.game.player.score);
	updateLives(this.game.board.lives);
	navigateFromTo('play','menu');	

}