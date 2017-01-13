
function checkBallFall(x, paddlewidth, boardWidth) {
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