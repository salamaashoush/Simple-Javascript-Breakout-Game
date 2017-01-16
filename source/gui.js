var badgesObj = {
    bdg1:"img/badges/2xspeed.png",
    bdg2:"img/badges/bestscore.png",
    bdg3:"img/badges/skiplevel.png",
    bdg4:"img/badges/thug.png"
}
var GUI = function(){
    var userName = document.getElementById("user-name");
    var playerName = document.getElementById("player-name");
    var badgesSection = document.getElementById("badge-sec3");
    var playerPaddle = document.getElementById("player-paddle");
    var playerBall = document.getElementById("player-ball");
    
    this.initLevels = function(){
        var lvlContainer = document.getElementById("lvl-container");
        for (var i=0; i < lvlContainer.children.length; i++){
            if(i >= player.currentLevel){
                var lock = document.createElement("div");
                var icon = document.createElement("i");
                lock.className = "lvl-lock";
                icon.className = "icon-lock";
                lock.appendChild(icon);
                lvlContainer.children[i].appendChild(lock);
            }
        }
    }
    this.initProfile = function(){
        document.getElementById("user-name").innerHTML = player.name;
        document.getElementById("player-name").innerHTML = player.name;
        if(player.gender == "male")
            document.getElementById("profile-thumbnail").style.backgroundImage = 'url(img/profile.jpg)';
        
    }
    this.initBadges = function(){
        badgesSection.innerHTML = "";
        for(var bdg in badgesObj){
            var divObj = document.createElement("div");
            var imgObj = document.createElement("img");
            
            divObj.className = "badge-icon";
            imgObj.setAttribute("src",badgesObj[bdg]);
            divObj.appendChild(imgObj);
            badgesSection.appendChild(divObj); 
        }
    }
    this.initToolKit = function(){
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
        
        console.log(paddleDiv);
        console.log(ballDiv);
        playerPaddle.appendChild(paddleDiv);
        playerBall.appendChild(ballDiv);
    }
}

gui = new GUI();
//gui.initLevels();
//gui.initProfile();
//gui.initBadges();
//gui.initToolKit();