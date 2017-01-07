var Game = function() 
{
  this.dimensions = new Size(480,302);
  this.canvas = document.getElementById("gamecanvas");
  this.ctx = this.canvas.getContext("2d");
  this.currentLevel = 1;
  this.board = level1(this.dimensions)
  this.start = function()
  {
    console.log(this.board)
    this.board.draw(this.ctx)
  }

}

var game = new Game()
game.start()