var canvas = document.getElementById("canvas");

var game = {
  canvas: canvas,
  ctx: this.canvas.getContext("2d"),

  width: canvas.width,
  height: canvas.height
};

var rectangles = [new Rect(0, 0, game.width, game.height)];

window.onload = rectangles[0].draw();
window.onload = rectangles[0].draw();

function drawRectangles(rectangles) {
  for (var i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
  }
}

canvas.onclick = function (e) {
  var xClicked = e.offsetX;
  var yClicked = e.offsetY;

  for (var i = 0; i < rectangles.length; i++) {
    var rect = rectangles[i]

    if (rect.x <= xClicked && xClicked <= rect.x + rect.width && rect.y <= yClicked && yClicked <= rect.y + rect.height) {
      rect.colorRectangle();
      
      if (rect.width > rect.minWidth) {
        if (rect.width <= rect.minWidth*2){
          if (xClicked < rect.x + 20 || xClicked > rect.x + rect.width - 20) {
            game.ctx.clearRect(0, 0, game.width, game.height);
            rect.splitVertikal();
            drawRectangles(rectangles)
            return;
          }
        }
        else if (xClicked < rect.x + 30 || xClicked > rect.x + rect.width - 30) {
          game.ctx.clearRect(0, 0, game.width, game.height);
          rect.splitVertikal();
          drawRectangles(rectangles)
          return;
        }
      }

      if (rect.height > rect.minHeight) {
        if (rect.height <= rect.minHeight*2) {
          if (yClicked < rect.y + 20 || yClicked > rect.y + rect.height - 20) {
            game.ctx.clearRect(0, 0, game.width, game.height);
            rect.splitHorizontal();
            drawRectangles(rectangles)
            return;
          }
        }
        else if (yClicked < rect.y + 30 || yClicked > rect.y + rect.height - 30) {
          game.ctx.clearRect(0, 0, game.width, game.height);
          rect.splitHorizontal();
          drawRectangles(rectangles)
          return;
        }
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
      
      if (rect.width > rect.minWidth) {
        if (rect.width <= rect.minWidth*2) {
          if (xHover < rect.x + 20) {
            console.log("at the left")
            game.ctx.clearRect(0, 0, game.width, game.height);
            rect.hintLeft();
            drawRectangles(rectangles)
            return;
          }
        }
        else {
          if (xHover < rect.x + 30) {
            game.ctx.clearRect(0, 0, game.width, game.height);
            rect.hintLeft();
            drawRectangles(rectangles)
            return;
          }
        }
      }

      if (rect.width > rect.minWidth) {
        if (rect.width <= rect.minWidth*2) {
          if (xHover > rect.x + rect.width - 20) {
            console.log("at the right")
            game.ctx.clearRect(0, 0, game.width, game.height);
            rect.hintRight();
            drawRectangles(rectangles)
            return;
          }
        }
        else {
          if (xHover > rect.x + rect.width - 30) {
            game.ctx.clearRect(0, 0, game.width, game.height);
            rect.hintRight();
            drawRectangles(rectangles)
            return;
          }
        }
      }

      if (rect.height > rect.minHeight) {
        if (rect.height <= rect.minHeight*2) {
          if (yHover < rect.y + 20) {
            console.log("at the top")
            game.ctx.clearRect(0, 0, game.width, game.height);
            rect.hintTop();
            drawRectangles(rectangles)
            return;
          }
        }
        else {
          if (yHover < rect.y + 30) {
            game.ctx.clearRect(0, 0, game.width, game.height);
            rect.hintTop();
            drawRectangles(rectangles)
            return;
          }
        }
      }

      if (rect.height > rect.minHeight) {
        if (rect.height <= rect.minHeight*2) {
          if (yHover > rect.y + rect.height - 20) {
            console.log("at the bottom")
            game.ctx.clearRect(0, 0, game.width, game.height);
            rect.hintBottom();
            drawRectangles(rectangles)
            return;
          }
        }
        else {
          if (yHover > rect.y + rect.height - 30) {
            game.ctx.clearRect(0, 0, game.width, game.height);
            rect.hintBottom();
            drawRectangles(rectangles)
            return;
          }
        }
      }
    }
  }
}
