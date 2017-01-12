var Player = function (name, paddleColor, ballColor) {
    var badgess = "badge"
    var badgec = 0;
    this.badges = {};
    this.score = 0;
    this.highscore=0;
    this.name = name || "player";
    this.lives = 3;
    this.paddleColor = paddleColor || Defaults.color.paddle;
    this.ballColor = ballColor || Defaults.color.ball;
    this.currentLevel=0;
    this.addBadge = function (badge) {
        this.badges[badgess + badgec++] = badge;
    }
    this.resetScore = function (score) {
        this.score = 0;
    }
    this.getUserInfo = function () {
        return {
            name: this.name,
            highscore: this.highscore,
            paddleColor: this.paddleColor,
            ballColor: this.ballColor,
            badges: this.badges,
            currentLevel:this.currentLevel
        };
    }
    this.setLevel=function (level) {  
        this.currentLevel=level;
    }
    this.parseSavedPlayer = function (splayer) {
        this.badges = splayer.badges;
        this.score = 0;
        this.highscore=splayer.highscore;
        this.name = splayer.name ;
        this.lives = splayer.lives;
        this.paddleColor = splayer.paddleColor;
        this.ballColor = splayer.ballColor;
        this.currentLevel=splayer.currentLevel;
    }
}