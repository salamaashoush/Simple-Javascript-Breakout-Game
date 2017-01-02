var canvas = document.getElementById("gamecanvas");
var ctx = canvas.getContext("2d");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2, dy = -2;
var ballraduis = 10;

var paddleWidth = 75;
var paddleHeight = 10;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks=[];
for(var c=0;c<brickColumnCount;c++){
    bricks[c]=[];
    for(var r=0;r<brickRowCount;r++){
        bricks[c][r]={x:0,y:0};
    }
}
function drawBricks() {
    for(var c=0;c<brickColumnCount;c++){
        for(var r=0;r<brickRowCount;r++){
            var brickX=(c*(brickWidth+brickPadding)+brickOffsetLeft);
            var brickY=(r*(brickHeight+brickPadding)+brickOffsetTop);
            bricks[c][r].x=brickX;
            bricks[c][r].y=brickY;
            ctx.beginPath();
            ctx.rect(brickX,brickY,brickWidth,brickHeight);
            ctx.fillStyle="#0095dd";
            ctx.fill();
            ctx.closePath();
        }
    }
    
}


function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095dd";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballraduis, 0, Math.PI * 2);
    ctx.fillStyle = "#0095dd";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    if (x + dx > canvas.width - ballraduis || x + dx < ballraduis) {
        dx = -dx;
    }
    if (y + dy < ballraduis) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballraduis) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            alert("Game Over!");
            document.location.reload();
        }
    }
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}
setInterval(draw, 10);
