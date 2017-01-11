function hitnewaccel(orgbaccel, line, accel) {
	//console.log(orgbaccel ,line ,accel)
	accel = accel || new Accel(0, 0);
	var baccel = new Accel(orgbaccel.dx + Math.floor(accel.dx / 6), orgbaccel.dy + Math.floor(accel.dy / 6));
	var adj = Math.sqrt(baccel.dy * baccel.dy + baccel.dx * baccel.dx)
	var currangle = Math.asin(baccel.dy / adj) * 180 / Math.PI;

	if (baccel.dx < 0)
		currangle += 90 * (baccel.dy / Math.abs(baccel.dy))

	var inbetwen = currangle - line.angle;

	var newangle = inbetwen;

	var fin = line.angle + (180 - newangle);

	var fincal = fin * Math.PI / 180

	return new Accel(Math.round(adj * Math.cos(fincal)), Math.round(adj * Math.sin(fincal)));

}

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