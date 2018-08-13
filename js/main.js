var canvas = document.getElementById("canvas");

var game = {
  canvas: canvas,
  ctx: this.canvas.getContext("2d"),

  width: canvas.width,
  height: canvas.height
};

var rectangles = [new Rect(0, 0, game.width, game.height)];

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.minWidth = 37.5;
  this.minHeight = 37.5;
  
  this.draw = function() {
    game.ctx.strokeRect(this.x, this.y, this.width, this.height);
    game.ctx.lineWidth = 10;
  };
  
  this.splitVertikal = function() {
    if (this.width > this.minWidth) {
      this.width = this.width / 2;
      var newRect = new Rect(this.x + this.width, this.y, this.width, this.height);
      rectangles.push(newRect);
    }
  };
  
  this.splitHorizontal = function() {
    if (this.height > this.minHeight) {
      this.height = this.height / 2;
      var newRect = new Rect(this.x, this.y + this.height, this.width, this.height)
      rectangles.push(newRect);
    }
  };

  this.colorRectangle = function () {
    // maaaaaaaan
    // colors = ["transparent", "#624eb9", "#f04443", "#feee4e"];
    // var i = 1;
    // game.ctx.fillStyle = colors[i++%colors.length];
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
    game.ctx.strokeRect(this.x, this.y, this.width, this.height);
    game.ctx.lineWidth = 10;
  }
}


rectangles[0].draw();
rectangles[0].draw();

function drawRectangles(rectangles) {
  for (var i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
  }
}


canvas.onclick = function(e) {
  var yClicked = e.offsetY;
  var xClicked = e.offsetX;
  for (var i = 0; i < rectangles.length; i++) {
    var rect = rectangles[i]
    if (rect.x <= xClicked && xClicked <= rect.x+rect.width && rect.y <= yClicked && yClicked <= rect.y+rect.height) {
      rect.colorRectangle();
      if (xClicked < rect.x+30 || xClicked > rect.x+rect.width-30){
        rect.splitVertikal();
        game.ctx.clearRect(0,0,game.width, game.height);

        drawRectangles(rectangles)
        return;
      }
      else if (yClicked < rect.y+30 || yClicked > rect.y+rect.height-30){
        rect.splitHorizontal();
        game.ctx.clearRect(0,0,game.width, game.height);

        drawRectangles(rectangles)
        return;
      }
    }
  }
}