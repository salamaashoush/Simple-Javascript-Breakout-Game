var xchunks=Levels[9].bricks[3].length;
var ychunks=Levels[9].bricks.length;
console.log(xchunks,ychunks);
function reset(level,xchunks,ychunks) {
	var layout = Levels[level];
	var xchunks = xchunks;
	var ychunks = ychunks;
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
				brick = {
					isbrick: true,
					hit: false,
					c: c,
					pos: {
						x1: x,
						x2: x,
						y: y
					},
					score: score,
					color: layout.colors[c.toLowerCase()]
				};
		}
	}
	var numbricks = bricks.length;
	var numhits = 0;
	//this.resize();
	return {
		bricks: bricks,
		score: score,
		numbricks: numbricks
	};
}

function render(ctx, bricks) {
	var n, brick;

	//ctx.translate(0.5, 0.5); // crisp 1px lines for the brick borders
	ctx.strokeStyle = "#80D010";
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
function level1(dimensions) {
	var paddleX = (dimensions.width - 75) / 2
	var paddleY = (dimensions.height - 10)
	var paddleFrame = new Rect(paddleX, paddleY, 75, 10)
	var paddle = new Paddle(paddleFrame, "blue", dimensions)

	var ball = new Ball(paddleX + (paddleFrame.size.width / 2), paddleY - 10, 10, "blue", 2)
		// var bricks =[];
		// for(var row = 0; row < 3; row++){
		// 	bricks[row] = [];    
		// 	for(var col = 0; col < 3; col++){ 
		// 		var brickX = (75 + 10) * col
		// 		var brickY = (20 + 10) * row
		// 		var brickFrame = new Rect (brickX,brickY,75,20)
		//     	bricks[row][col] = new Brick(brickFrame,"blue")    
		// 	}    
		// }
	var bricks = reset(9,xchunks,ychunks);
	resize(bricks,dimensions,xchunks,ychunks);
	var boardFrame = new Rect(0, 0, dimensions.width, dimensions.height)
	var board = new Board(paddle, ball, bricks, 3, boardFrame)
	return board;

}

function resize(bricks,dimensions,xchunks,ychunks) {

      var chunk  = Math.floor(Math.min(dimensions.width, dimensions.height) / (Math.max(xchunks, ychunks) + 4)); // room for court plus 2 chunk wall either side
      var width  = xchunks * chunk;
      var height = ychunks * chunk;
      var left   = Math.floor((dimensions.width  - width)  / 2);
      var top    = Math.floor((dimensions.height - height) / 2);
      var right  = left + width;
      var bottom = top  + height;

    //   wall = {}
    //   wall.size  = chunk;
    //   wall.top   = Game.Math.bound({x: this.left - this.wall.size, y: this.top - this.wall.size*2, w: this.width + this.wall.size*2, h: this.wall.size*2               });
    //   wall.left  = Game.Math.bound({x: this.left - this.wall.size, y: this.top - this.wall.size*2, w: this.wall.size,                h: this.wall.size*2 + this.height });
    //   wall.right = Game.Math.bound({x: this.right,                 y: this.top - this.wall.size*2, w: this.wall.size,                h: this.wall.size*2 + this.height });
      for(n = 0 ; n < bricks.numbricks ; n++) {
        brick = bricks.bricks[n];
        var x = left + (brick.pos.x1 * chunk);
        var y = top  + (brick.pos.y  * chunk);
        var w = (brick.pos.x2 - brick.pos.x1 + 1) * chunk;
        var h = chunk;
		brick.frame=new Rect(x,y,w,h);
        //Game.Math.bound(brick);
      }

      var rerender = true;
    }

