function level1(dimensions)
{
	var paddleX = (dimensions.width - 75) / 2
	var paddleY = (dimensions.height-10)
	var paddleFrame = new Rect(paddleX,paddleY,75,10)
	var paddle = new Paddle(paddleFrame,"blue")

	console.log(paddle)
	console.log(dimensions)
	var ball = new Ball(paddleX+(paddleFrame.size.width/2),paddleY-10,10,"blue",2)
	var bricks = [];
	console.log(ball)
	for(var row = 0; row < 3; row++){
    	bricks[row] = [];    
    	for(var col = 0; col < 3; col++){ 
    		var brickX = (75 + 10) * col
    		var brickY = (20 + 10) * row
    		var brickFrame = new Rect (brickX,brickY,75,20)
        	bricks[row][col] = new Brick(brickFrame,"blue")    
    	}    
	}
	var board = new Board (paddle,ball,bricks,3)
	return board;

}

