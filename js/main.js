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
    colors = ["transparent", "#624eb9", "#f04443", "#feee4e"];
    var i = 1;
    game.ctx.fillStyle = colors[i++%colors.length];
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
    game.ctx.strokeRect(this.x, this.y, this.width, this.height);
    game.ctx.lineWidth = 10;
  }

  this.hintLeft = function () {
    game.ctx.fillStyle = "lightgrey"
    game.ctx.fillRect(this.x, this.y, 30, this.height)
  }
  this.hintRight = function () {
    game.ctx.fillStyle = "lightgrey"
    game.ctx.fillRect(this.x+this.width-30, this.y, 30, this.height)
  }
  this.hintTop = function () {
    game.ctx.fillStyle = "lightgrey"
    game.ctx.fillRect(this.x, this.y, this.width, 30)
  }
  this.hintBottom = function () {
    game.ctx.fillStyle = "lightgrey"
    game.ctx.fillRect(this.x, this.y+this.height-30, this.width, 30)
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
  var xClicked = e.offsetX;
  var yClicked = e.offsetY;
  for (var i = 0; i < rectangles.length; i++) {
    var rect = rectangles[i]
    if (rect.x <= xClicked && xClicked <= rect.x+rect.width && rect.y <= yClicked && yClicked <= rect.y+rect.height) {
      rect.colorRectangle();
      if (xClicked < rect.x+30 || xClicked > rect.x+rect.width-30){
        game.ctx.clearRect(0,0,game.width, game.height);
        rect.splitVertikal();
        drawRectangles(rectangles)
        return;
      }
      else if (yClicked < rect.y+30 || yClicked > rect.y+rect.height-30){
        game.ctx.clearRect(0,0,game.width, game.height);
        rect.splitHorizontal();
        drawRectangles(rectangles)
        return;
      }
    }
  }
}

canvas.onmousemove = function (e) {
  var xHover = e.offsetX
  var yHover = e.offsetY;
  for (var i = 0; i < rectangles.length; i++) {
    var rect = rectangles[i];
    if (rect.x <= xHover && xHover <= rect.x + rect.width && rect.y <= yHover && yHover <= rect.y + rect.height) {
      if (xHover < rect.x + 30) {
        game.ctx.clearRect(0, 0, game.width, game.height);
        rect.hintLeft();
        drawRectangles(rectangles)
        return;
      }
      else if (xHover > rect.x + rect.width - 30) {
        game.ctx.clearRect(0, 0, game.width, game.height);
        rect.hintRight();
        drawRectangles(rectangles)
        return;
      }
      else if (yHover < rect.y + 30) {
        game.ctx.clearRect(0, 0, game.width, game.height);
        rect.hintTop();
        drawRectangles(rectangles)
        return;
      }
      else if (yHover > rect.y + rect.height - 30) {
        game.ctx.clearRect(0, 0, game.width, game.height);
        rect.hintBottom();
        drawRectangles(rectangles)
        return;
      }
    }
  }
}
