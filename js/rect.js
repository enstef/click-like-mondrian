function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.minWidth = 37.5;
  this.minHeight = 37.5;
  this.color;


  this.draw = function () {
    this.color;
    game.ctx.strokeRect(this.x, this.y, this.width, this.height);
    game.ctx.lineWidth = 10;
  };

  this.splitVertikal = function () {
    if (this.width > this.minWidth) {
      this.width = this.width / 2;
      var newRect = new Rect(this.x + this.width, this.y, this.width, this.height);
      rectangles.push(newRect);
    }
  };

  this.splitHorizontal = function () {
    if (this.height > this.minHeight) {
      this.height = this.height / 2;
      var newRect = new Rect(this.x, this.y + this.height, this.width, this.height)
      rectangles.push(newRect);
    }
  };

  this.hintLeft = function () {
    if (this.width > this.minWidth) {
      if (this.width <= this.minWidth*2) {
        game.ctx.fillStyle = "lightgrey"
        game.ctx.fillRect(this.x, this.y, 20, this.height)
      }
      else {
      game.ctx.fillStyle = "lightgrey"
      game.ctx.fillRect(this.x, this.y, 30, this.height)
      }
    }
  };

  this.hintRight = function () {
    if (this.width > this.minWidth) {
      if (this.width <= this.minWidth*2) {
        game.ctx.fillStyle = "lightgrey"
        game.ctx.fillRect(this.x + this.width - 20, this.y, 20, this.height)
      }
      else {
        game.ctx.fillStyle = "lightgrey"
        game.ctx.fillRect(this.x + this.width - 30, this.y, 30, this.height)
      }
    }
  };

  this.hintTop = function () {
    if (this.height > this.minHeight) {
      if (this.height <= this.minHeight*2) {
        game.ctx.fillStyle = "lightgrey"
        game.ctx.fillRect(this.x, this.y, this.width, 20)
      }
      else {
        game.ctx.fillStyle = "lightgrey"
        game.ctx.fillRect(this.x, this.y, this.width, 30)
      }
    }
  };

  this.hintBottom = function () {
    if (this.height > this.minHeight) {
      if (this.height <= this.minHeight*2) {
        game.ctx.fillStyle = "lightgrey"
        game.ctx.fillRect(this.x, this.y + this.height - 20, this.width, 20)
      }
      else {
        game.ctx.fillStyle = "lightgrey"
        game.ctx.fillRect(this.x, this.y + this.height - 30, this.width, 30)
      }
    }
  };

  this.colorRectangle = function () {
    // maaaaaaaan
    colors = ["transparent", "#624eb9", "#f04443", "#feee4e"];
    var i = 1;
    this.color = game.ctx.fillStyle = colors[i++ % colors.length];
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
    game.ctx.strokeRect(this.x, this.y, this.width, this.height);
    game.ctx.lineWidth = 10;
  };


}