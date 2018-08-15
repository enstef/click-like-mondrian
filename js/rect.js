function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.minWidth = 37.5;
  this.minHeight = 37.5;
  this.possibleColors = ["transparent", "#624eb9", "#f04443", "#feee4e", "black"];
  this.index = 0;
  this.color = this.possibleColors[this.index];

  this.draw = function () {
    game.ctx.fillStyle = this.color;
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
    game.ctx.strokeRect(this.x, this.y, this.width, this.height);
    game.ctx.lineWidth = 10;
  };

  this.colorRectangle = function () {
    this.index = (this.index + 1) % this.possibleColors.length;
    this.color = this.possibleColors[this.index];
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
        this.drawHint(this.x, this.y, 20, this.height)
      }
      else {
        this.drawHint(this.x, this.y, 30, this.height)
      }
    }
  };

  this.hintRight = function () {
    if (this.width > this.minWidth) {
      if (this.width <= this.minWidth*2) {
        this.drawHint(this.x + this.width - 20, this.y, 20, this.height)
      }
      else {
        this.drawHint(this.x + this.width - 30, this.y, 30, this.height)
      }
    }
  };
  
  this.hintTop = function () {
    if (this.height > this.minHeight) {
      if (this.height <= this.minHeight*2) {
        this.drawHint(this.x, this.y, this.width, 20)
      }
      else {
        this.drawHint(this.x, this.y, this.width, 30)
      }
    }
  };
  
  this.hintBottom = function () {
    if (this.height > this.minHeight) {
      if (this.height <= this.minHeight*2) {
        this.drawHint(this.x, this.y + this.height - 20, this.width, 20)
      }
      else {
        this.drawHint(this.x, this.y + this.height - 30, this.width, 30)
      }
    }
  };

  this.drawHint = function(x,y,w,h) {
    game.ctx.fillStyle = "#ababab";
    game.ctx.globalAlpha = 0.85
    game.ctx.fillRect(x,y,w,h)    
  }
  
}
