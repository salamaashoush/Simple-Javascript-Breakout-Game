function collisionDetecting(ball, bricks, board) {
	collisionDetectingBricks(ball, bricks);
	collisionDetectingFrames(ball, board)
}

function collisionDetectingFrames(ball, board) {
	var hitPoint;
	var allsides = [new Rect(0, 0, 3, canvas.height), new Rect(0, 0, canvas.width, 3), new Rect(canvas.width, 0, 3, canvas.height)];

	for (var u = 0; u < allsides.length; u++) {
		hitPoint = ball.isInBoundsOf(allsides[u])
		if (hitPoint) {
			ball.dx *= hitPoint.x
			ball.dy *= hitPoint.y
		}
	}
		if (ball.bottom().y >= board.paddle.frame.origin.y && ball.bottom().x > board.paddle.frame.origin.x && ball.bottom().x < board.paddle.frame.origin.x + board.paddle.frame.size.width) {
			soundManager.paddleHit();
			if(ball.dy > 0)
			ball.dy *= -1;
		}
}

function collisionDetectingBricks(ball, bricks) {
	for (var c = 0; c < bricks.length; c++) {
		var b = bricks[c];
		if (b.hit == false) {
			hitPoint = ball.isInBoundsOf(b.frame)
			if (hitPoint) {
				soundManager.brickHit();
				ball.dx *= hitPoint.x
				ball.dy *= hitPoint.y
				if (!b.unbreakable) {
					b.strenght--;
				}
				if (b.strenght === 0) {
					b.hit = true;
					game.player.score += b.score
				}
				if (b.hasGift) {
					var giftpos = {
						x: b.frame.origin.x,
						y: b.frame.origin.y
					};
					game.nextgift = randomGift(giftpos);
				}

			}
		}
	}
}



function checkBallFall(x, paddlewidth, boardWidth) {
	soundManager.loseLife();
	var rightOffset = x + (paddlewidth / 2) - boardWidth;
	var leftOffset = x - (paddlewidth / 2);
	if (rightOffset > 0) {
		return (x - rightOffset);
	} else if (leftOffset < 0) {
		return (x - leftOffset);
	} else {
		return x;
	}

}