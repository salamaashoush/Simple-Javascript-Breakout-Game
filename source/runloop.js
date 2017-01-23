function loading() {
    document.getElementById("splash").style.display = "block";
    var elem = document.getElementById("bar");
    var lbl = document.getElementById("progress-lable");
    var width = 1;
    var id = setInterval(progress, 35);
    function progress() {
        if (width >= 100) {
            clearInterval(id);
            document.getElementById("splash").style.display = "none";
            document.getElementById("menu").style.display = "block";
        } else {
        width++;
            elem.style.width = width + '%';
        }
    }
}

var dimensions = new Size(750, 500);
var soundManager = new soundManager();
var players = {};
var canvas = document.getElementById("gamecanvas");
var ctx = canvas.getContext("2d");
var player=null;
if(restorePlayerSession()){
    player = restorePlayerSession();
    loading();
}else{
    soundManager.toggleBackground();
    document.getElementById("usermod").style.display = "block";
}
soundManager.toggleBackground();
var board = levelGenerator(dimensions, player.currentLevel, player);
var game = new Game(ctx, dimensions, board, player);
var dx = 2
var dy = 2
var play = false;
var requestId = 0;

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
        gui.bindScore();
        checkHighScore(this.game.player.score);
        collisionDetecting(this.game.board.ball, this.game.board.bricks.bricks, this.game.board)
        for (var giftname in this.game.nextgift)

        {

            this.game.nextgift[giftname].draw(this.game.ctx);
            
            if ( this.game.nextgift[giftname].spos.y> this.game.dimensions.height )
                delete this.game.nextgift[giftname];
            else
           { 
               if (this.game.nextgift[giftname].hascollided(this.game.board.paddle.frame)) {
                this.game.nextgift[giftname].bonusfun(this.game);
                delete this.game.nextgift[giftname];
                gui.bindLives();
                gui.bindScore();
                }
            }
        }
        if (outOflives(this.game.board.lives)) {
            soundManager.gameOver();
            checkSlug(this.game);
            this.game.player.highscore = this.game.player.score;
            lost(this.game);
        }
        if (this.game.board.ball.top().y > this.game.dimensions.height - (this.game.board.paddle.frame.size.height / 2)) {
            var ballX = this.game.board.ball.center.x;
            var ballY = this.game.board.ball.center.y;
            var paddleW = this.game.board.paddle.frame.size.width;
            var paddleX = this.game.board.paddle.frame.origin.x;
            var ballFall = checkBallFall(ballX, paddleW, this.game.dimensions.width);
            var paddleY = this.game.board.paddle.frame.origin.y;
            var paddleH = this.game.board.paddle.frame.size.height;

            gui.togglePlaying("pause");
            this.game.board.lives--;
            gui.bindLives();
            if (outOflives(this.game.board.lives)) {
                soundManager.gameOver();
                checkSlug(this.game);
                this.game.player.highscore = this.game.player.score;
                savePlayer(this.game.player);
                lost(this.game);
            }
            this.game.board.ball.place(ballFall, ballY - 50)
            this.game.ctx.clearRect(0, 0, this.game.dimensions.width, this.game.dimensions.height)
            this.game.board.paddle.frame.origin = new Point(ballFall - (paddleW / 2), (this.game.dimensions.height - paddleH))
            render(this.game.ctx, this.game.board.bricks)
        } else {
            if (win(this.game.board.bricks.bricks)) {
                checkThugLife(this.game);
                soundManager.levelUp();
                this.game.player.currentLevel++;
                savePlayer(this.game.player);
                if (this.game.player.currentLevel > 9) {
                    finishgame();
                } else {
                    this.game.board = levelGenerator(this.game.dimensions, this.game.player.currentLevel, this.game.player)
                    this.game.ctx.clearRect(0, 0, this.game.dimensions.width, this.game.dimensions.height)
                    gui.togglePlaying("finish");
                }
            } else {
                savePlayer(this.game.player);
                requestId = requestAnimationFrame(startGame);
            }
        }
    }
}

function levelChanger(level) {
    if (level <= 9) {
        var board = levelGenerator(dimensions, level, player);
        game.board = board;
    }
    gui.bindBadges();

}

function finishgame() {

}

function lost(game) {
    gui.togglePlaying("gameover");
    this.game.player.lives = 3;
    this.game.player.score = 0;
    gui.bindLives();
    gui.bindScore();
    gui.bindBadges();
}