var badgesObj = {
    bdg1:"img/badges/2xspeed.png",
    bdg2:"img/badges/bestscore.png",
    bdg3:"img/badges/skiplevel.png",
    bdg4:"img/badges/thug.png",
    bdg5:"img/badges/thug.png"
}
var GUI = function(){
    var userName = document.getElementById("user-name");
    var playerName = document.getElementById("player-name");
    var badgesSection = document.getElementById("badge-sec3");
    var playerBadges = document.getElementById("player-badges");
    var playerPaddle = document.getElementById("player-paddle");
    var playerBall = document.getElementById("player-ball");
    var playerLives = document.getElementById("lives");
    var playerScore = document.getElementById("score");
    
    this.bindLevels = function(){
        var lvlContainer = document.getElementById("lvl-container");
        for (var i=0; i < lvlContainer.children.length; i++){
            lvlContainer.children[i].children[0].setAttribute("src","img/levels/level"+i+".png");
            lvlContainer.children[i].children[2].style.display = "none";
            if(i > player.currentLevel)
                lvlContainer.children[i].children[2].style.display = "block";
        }
    }
    this.bindProfile = function(){
        document.getElementById("user-name").innerHTML = player.name;
        document.getElementById("player-name").innerHTML = player.name;
        document.getElementById("highscore-value").innerHTML = player.highscore;
        if(player.gender == "female"){
            document.getElementById("profile-thumbnail").style.backgroundImage = 'url(img/female.jpg)';
            document.getElementById("profile-avatar").style.backgroundImage = 'url(img/female.jpg)';
        }
        else{
            document.getElementById("profile-thumbnail").style.backgroundImage = 'url(img/male.jpg)';
            document.getElementById("profile-avatar").style.backgroundImage = 'url(img/male.jpg)';
        }
        
    }
    this.bindBadges = function(){
        badgesSection.innerHTML = "";
        playerBadges.innerHTML = "";
        for(var bdg in player.badges){
            if(!player.badges.hasOwnProperty(bdg)) continue;
            
            var divObj = document.createElement("div");
            var imgObj = document.createElement("img");
            
            divObj.className = "badge-icon";
            imgObj.setAttribute("src",player.badges[bdg]);
            
            var divObj2 = divObj.cloneNode();
            var imgObj2 = imgObj.cloneNode();
            divObj.appendChild(imgObj);
            divObj2.appendChild(imgObj2);
            badgesSection.appendChild(divObj);
            playerBadges.appendChild(divObj2);
        }
    }
    this.bindLives = function(){
        for(var i=0; i<playerLives.children.length; i++){
            if(i<game.board.lives)
                playerLives.children[i].className = "icon-heart-2";
            else
                playerLives.children[i].className = "icon-heart-empty-2";
        }
    }
    this.bindScore = function(){
        playerScore.innerHTML = game.player.score;
    }
    this.navigate = function(sender,target,display='block'){
        document.getElementById(sender).style.display='none';
        document.getElementById(target).style.display=display;
    }
    this.toggleMusic = function(){
        soundManager.toggleBackground();
        var btn = document.getElementById("btn-toggle-music");
        if(btn.className=="icon-music-1")
            btn.className = "icon-music-outline";
        else
            btn.className = "icon-music-1";
        document.getElementById("menu-volume-btn").children[0].className = btn.className;
    }
    this.toggleSound = function(){
        soundManager.setMute();
        var btn = document.getElementById("btn-toggle-sound");
        if(btn.className=="icon-volume-high")
            btn.className = "icon-volume-off-1";
        else
            btn.className = "icon-volume-high";
    }
    this.bindToolKit = function(){
        var paddleDiv = document.createElement("div");
        var paddleImg = document.createElement("img");
        var ballDiv = document.createElement("div");
        var ballImg = document.createElement("img");

        paddleDiv.className = "slider-img";
        ballDiv.className = "slider-img";

        paddleImg.setAttribute("src",player.paddleColor);
        ballImg.setAttribute("src",player.ballColor);
        paddleDiv.appendChild(paddleImg);
        ballDiv.appendChild(ballImg);
        
        playerPaddle.innerHTML = "";
        playerBall.innerHTML = "";
        playerPaddle.appendChild(paddleDiv);
        playerBall.appendChild(ballDiv);
    }
    this.togglePlaying = function(state){
        var splash = document.getElementById("splashCard");
        var control = document.getElementById("splashControl");
        var attr = splash.getAttribute("state");
        var btn = document.getElementById("play-btn");
        
        if(!state){
            if(attr=="pending")
                state="start";
            if(attr=="start")
                state="pause";
            else if(attr=="pause")
                state="resume";
            else if(attr=="resume")
                state="pause";
            else if(attr=="finish" || attr=="gameover"){
                state="pending";
                levelChanger(player.currentLevel);
                this.bindLives();
            }
        }
        
        if(state=="start" || state=="resume"){
            play = true;
        }else if(state=="pending"){
            play = false;
            control.children[0].children[0].className = "icon-gamepad";
            control.children[1].innerHTML = "Start Playing!";
        }else if(state=="pause"){
            play = false;
            control.children[0].children[0].className = "icon-play-circled";
            control.children[1].innerHTML = "Resume Playing!";
        }else if(state=="gameover"){
            play = false;
            control.children[0].children[0].className = "icon-emo-cry";
            control.children[1].innerHTML = "Game Over!";
        }else if(state=="finish"){
            play = false;
            control.children[0].children[0].className = "icon-emo-thumbsup";
            control.children[1].innerHTML = "Good Job!";
        }
        
        if(play){
            startGame(game);
            splash.style.height = "0px";
            btn.className = "icon-pause-2";
        }else{
            splash.style.height = "501px";
            btn.className = "icon-play";
        }
        splash.setAttribute("state",state);
    }
    this.changeLevel = function(lvlNumber){
        if(lvlNumber<=player.currentLevel){
            levelChanger(lvlNumber);
            this.navigate('level','play');
            this.togglePlaying('pending');
        }
    }
    this.leaveGame = function(){
        this.togglePlaying("pause");
        this.navigate("play","menu");
    }
    
    this.init = function(){
        this.bindProfile();
        this.bindBadges();
        this.bindToolKit();
        this.bindLevels();
        this.bindScore();
    }
}
gui = new GUI();
if(restorePlayerSession())
    gui.init();