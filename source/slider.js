var Slider = function(){
    var PaddleSlider = document.getElementById("paddle-slider");
    var BallSlider = document.getElementById("ball-slider");
    var CurrentPaddle = 0;
    var CurrentBall = 0;
    var PaddlesCount = 0;
    var BallsCount = 0;
    
    this.init = function(){
        slider.initPaddleSlider();
        slider.initBallSlider();
    }
    this.initPaddleSlider = function(){
        for (var key in Paddles){
            if(!Paddles.hasOwnProperty(key)) continue;
            
            var divObj = document.createElement("div");
            divObj.className = "slider-img";
            divObj.style.display = "none";
            
            var imgObj = document.createElement("img");
            imgObj.setAttribute("src",Paddles[key]);
            divObj.appendChild(imgObj);
            
            PaddleSlider.appendChild(divObj);
            PaddlesCount++;
        }
        PaddleSlider.children[CurrentPaddle+2].style.display = "table-cell";
    }
    this.initBallSlider = function(){
        for (var key in Balls){
            if(!Balls.hasOwnProperty(key)) continue;
            
            var divObj = document.createElement("div");
            divObj.className = "slider-img";
            divObj.style.display = "none";
            
            var imgObj = document.createElement("img");
            imgObj.setAttribute("src",Balls[key]);
            divObj.appendChild(imgObj);
            
            BallSlider.appendChild(divObj);
            BallsCount++;
        }
        BallSlider.children[CurrentBall+2].style.display = "table-cell";
    }
    
    this.Slide = function(who,where){
        if(who=="paddle"){
            PaddleSlider.children[CurrentPaddle+2].style.display = "none";
            CurrentPaddle += where=="right" ? 1 : -1;
            CurrentPaddle = CurrentPaddle < 0 ? PaddlesCount-1 : CurrentPaddle;
            CurrentPaddle = CurrentPaddle >= PaddlesCount ? 0 : CurrentPaddle;
            PaddleSlider.children[CurrentPaddle+2].style.display = "table-cell";
        }else if(who=="ball"){
            BallSlider.children[CurrentBall+2].style.display = "none";
            CurrentBall += where=="right" ? 1 : -1;
            CurrentBall = CurrentBall < 0 ? BallsCount-1 : CurrentBall;
            CurrentBall = CurrentBall >= BallsCount ? 0 : CurrentBall;
            BallSlider.children[CurrentBall+2].style.display = "table-cell";
        }
    }
}

var slider = new Slider();
slider.init();