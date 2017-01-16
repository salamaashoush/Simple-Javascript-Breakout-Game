
function calcBricks (level)
{
var max=0;
var bricks=Levels[level].bricks;
for(var i=0;i<bricks.length;i++){
	if(bricks[i].length>max){
		 max=i;
	}
}
	var xchunks = Levels[level].bricks[max].length;
	var ychunks = Levels[level].bricks.length;
	return court ={
		xchunks : Levels[level].bricks[max].length,
	    ychunks : Levels[level].bricks.length
	};
}

function reset(level, court) {
	var layout = Levels[level];
	var xchunks = court.xchunks
	var ychunks = court.ychunks
	var line, brick, score, c, n, x, y, nx, ny = Math.min(layout.bricks.length, ychunks);
	var bricks = [];
	for (y = 0; y < ny; y++) {
		score = (ychunks - y) * 5;
		line = layout.bricks[y] + " "; // extra space simplifies loop
		brick = null;
		nx = Math.min(line.length, xchunks + 1);
		for (x = 0; x < nx; x++) {
			c = line[x];
			if (brick && (brick.c == c)) {
				brick.pos.x2 = x;
			} else if (brick && (brick.c != c)) {
				bricks.push(brick);
				brick = null;
			}

			if (!brick && (c != ' '))
			{	brick = {
					isbrick: true,
					hit: false,
					strenght:1,
					unbreakable:c==='x'||c==='X'?true:false,
					hasGift: Boolean (Math.floor(Math.random() *(1.3-0.03*(level)))) ,
					c: c,
					pos: {
						x1: x,
						x2: x,
						y: y
					},
					score: score,
					color: layout.colors[c.toLowerCase()]
				};

				brick.hasGift= Boolean(brick.hasGift * !brick.unbreakable )

			}

		}
	}
	var numbricks = bricks.length;
	var numhits = 0;
	return {
		bricks: bricks,
		score: score,
		numbricks: numbricks
	};
}

function render(ctx, bricks) {
	var n, brick;

	ctx.strokeStyle = Defaults.color.border;
	ctx.lineWidth = 1;
	for (n = 0; n < bricks.numbricks; n++) {
		brick = bricks.bricks[n];
		if (!brick.hit) {
			ctx.beginPath();
			ctx.fillStyle = brick.color;
			ctx.fillRect(brick.frame.origin.x, brick.frame.origin.y, brick.frame.size.width, brick.frame.size.height);
			ctx.strokeRect(brick.frame.origin.x, brick.frame.origin.y, brick.frame.size.width, brick.frame.size.height);
			ctx.fill();
			ctx.closePath();

		}
	}
}

function levelGenerator(dimensions, level ,player) {
	console.log(player);
	var paddleX = (dimensions.width - 90) / 2
	var paddleY = (dimensions.height - 20)
	var paddleFrame = new Rect(paddleX, paddleY, 90, 20)
	var paddle = new Paddle(paddleFrame, player.paddleColor, dimensions)
	var ball = new Ball(paddleX + (paddleFrame.size.width / 2), paddleY - 10, 5, player.ballColor);
	var court = calcBricks(level)
	var bricks = reset(level, court);
	resize(bricks, dimensions, court);
	var boardFrame = new Rect(0, 0, dimensions.width, dimensions.height)
	var board = new Board(paddle, ball, bricks, 3, boardFrame)
	return board;

}

function resize(bricks, dimensions, court) {

	var chunk = Math.floor(Math.max(dimensions.width-100, dimensions.height-50) / (Math.max(court.xchunks, court.ychunks))); // room for court plus 2 chunk wall either side
	var width = court.xchunks * chunk;
	var height = court.ychunks * chunk;
	var left = Math.floor((dimensions.width - width) / 2);
	var top = Math.floor((dimensions.height - height) / 4);
	var right = left + width;
	var bottom = top + height;
	for (n = 0; n < bricks.numbricks; n++) {
		brick = bricks.bricks[n];
		var x = left + (brick.pos.x1 * chunk);
		var y = top + (brick.pos.y * chunk);
		var w = (brick.pos.x2 - brick.pos.x1 + 1) * chunk;
		var h = chunk;
		brick.frame = new Rect(x, y, w, h);
	}

	var rerender = true;
}
