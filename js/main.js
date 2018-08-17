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

//-------------------Click-------------------//
canvas.onclick = function (e) {

  var xClicked = e.offsetX;
  var yClicked = e.offsetY;

  for (var i = 0; i < rectangles.length; i++) {
    var rect = rectangles[i];

//-------------------Color-------------------//
      if (rect.width <= rect.minWidth && rect.height <= rect.minHeight) {
        if (rect.x <= xClicked && xClicked <= rect.x + rect.width 
          && rect.y <= yClicked && yClicked <= rect.y + rect.height) {
          clearAndColor(rect);
        }
      }
      else if (rect.width <= rect.minWidth && rect.height <= rect.minHeight*2) {
        if (rect.x <= xClicked && xClicked <= rect.x + rect.width 
          && rect.y+20 <= yClicked && yClicked <= rect.y + rect.height-20) {
          clearAndColor(rect);
        }
      }
      else if (rect.width <= rect.minWidth*2 && rect.height <= rect.minHeight) {
        if (rect.x+20 <= xClicked && xClicked <= rect.x + rect.width+20 
          && rect.y <= yClicked && yClicked <= rect.y + rect.height) {
          clearAndColor(rect);
        }
      }
      else if (rect.width <= rect.minWidth) {
        if (rect.x <= xClicked && xClicked <= rect.x + rect.width 
          && rect.y+30 <= yClicked && yClicked <= rect.y + rect.height-30) {
          clearAndColor(rect);
        }
      }
      else if (rect.height <= rect.minHeight) {
        if (rect.x+30 <= xClicked && xClicked <= rect.x + rect.width+30 
          && rect.y <= yClicked && yClicked <= rect.y + rect.height) {
          clearAndColor(rect);
        }
      }
      else if (rect.width <= rect.minWidth*2 && rect.height <= rect.minHeight*2) {
        if (rect.x+20 <= xClicked && xClicked <= rect.x + rect.width-20 
          && rect.y+20 <= yClicked && yClicked <= rect.y + rect.height-20) {
          clearAndColor(rect);
        }
      }
      else if (rect.width <= rect.minWidth*2) {
        if (rect.x+20 <= xClicked && xClicked <= rect.x + rect.width-20 
          && rect.y+30 <= yClicked && yClicked <= rect.y + rect.height-30) {
          clearAndColor(rect);
        }
      }
      else if (rect.height <= rect.minHeight*2) {
        if (rect.x+30 <= xClicked && xClicked <= rect.x + rect.width-30 
          && rect.y+20 <= yClicked && yClicked <= rect.y + rect.height-20) {
          clearAndColor(rect);
        }
      }
      else if (rect.x+30 <= xClicked && xClicked <= rect.x + rect.width-30 
        && rect.y+30 <= yClicked && yClicked <= rect.y + rect.height-30) {
        clearAndColor(rect);
      }
      
//-------------------Split-------------------//
    if (rect.x <= xClicked && xClicked <= rect.x + rect.width && rect.y <= yClicked && yClicked <= rect.y + rect.height) {
      
      if (rect.width > rect.minWidth) {
        if (rect.width <= rect.minWidth*2){
          if (xClicked < rect.x + 20 || xClicked > rect.x + rect.width - 20) {
            clearAndSplitVertikal(rect);
            return;
          }
        }
        else if (xClicked < rect.x + 30 || xClicked > rect.x + rect.width - 30) {
          clearAndSplitVertikal(rect);
          return;
        }
      }

      if (rect.height > rect.minHeight) {
        if (rect.height <= rect.minHeight*2) {
          if (yClicked < rect.y + 20 || yClicked > rect.y + rect.height - 20) {
            clearAndSplitHorizontal(rect);
            return;
          }
        }
        else if (yClicked < rect.y + 30 || yClicked > rect.y + rect.height - 30) {
          clearAndSplitHorizontal(rect);
          return;
        }
      }
    }
  }
}

//-------------------Hover-------------------//
canvas.onmousemove = function (e) {
  var xHover = e.offsetX
  var yHover = e.offsetY;
  for (var i = 0; i < rectangles.length; i++) {
    var rect = rectangles[i];

//-------------------Hints-------------------//    
    if (rect.x <= xHover && xHover <= rect.x + rect.width && rect.y <= yHover && yHover <= rect.y + rect.height) {
      
      if (rect.width > rect.minWidth) {
        if (rect.width <= rect.minWidth*2) {
          if (xHover < rect.x + 20) {
            clearAndHintLeft(rect);
            return;
          }
        }
        else {
          if (xHover < rect.x + 30) {
            clearAndHintLeft(rect);
            return;
          }
        }
      }

      if (rect.width > rect.minWidth) {
        if (rect.width <= rect.minWidth*2) {
          if (xHover > rect.x + rect.width - 20) {
            clearAndHintRight(rect);
            return;
          }
        }
        else {
          if (xHover > rect.x + rect.width - 30) {
            clearAndHintRight(rect);
            return;
          }
        }
      }

      if (rect.height > rect.minHeight) {
        if (rect.height <= rect.minHeight*2) {
          if (yHover < rect.y + 20) {
            clearAndHintTop(rect);
            return;
          }
        }
        else {
          if (yHover < rect.y + 30) {
            clearAndHintTop(rect);
            return;
          }
        }
      }

      if (rect.height > rect.minHeight) {
        if (rect.height <= rect.minHeight*2) {
          if (yHover > rect.y + rect.height - 20) {
            clearAndHintBottom(rect);
            return;
          }
        }
        else {
          if (yHover > rect.y + rect.height - 30) {
            clearAndHintBottom(rect);
            return;
          }
        }
      }
    }
  }
}
//-------------------Leave-------------------//
canvas.onmouseleave = function() {
  game.ctx.clearRect(0, 0, game.width, game.height);
  drawRectangles(rectangles);
};


//-------------------Repetitive Functions-------------------//
function clearAndHintBottom(rect) {
  game.ctx.clearRect(0, 0, game.width, game.height);
  rect.hintBottom();
  drawRectangles(rectangles);
}

function clearAndHintTop(rect) {
  game.ctx.clearRect(0, 0, game.width, game.height);
  rect.hintTop();
  drawRectangles(rectangles);
}

function clearAndHintRight(rect) {
  game.ctx.clearRect(0, 0, game.width, game.height);
  rect.hintRight();
  drawRectangles(rectangles);
}

function clearAndHintLeft(rect) {
  game.ctx.clearRect(0, 0, game.width, game.height);
  rect.hintLeft();
  drawRectangles(rectangles);
}

function clearAndSplitHorizontal(rect) {
  game.ctx.clearRect(0, 0, game.width, game.height);
  rect.splitHorizontal();
  drawRectangles(rectangles);
}

function clearAndSplitVertikal(rect) {
  game.ctx.clearRect(0, 0, game.width, game.height);
  rect.splitVertikal();
  drawRectangles(rectangles);
}

function clearAndColor(rect) {
  game.ctx.clearRect(0, 0, game.width, game.height);
  rect.colorRectangle();
  drawRectangles(rectangles);
}

//-------------------Score-------------------//
function calculateScore(level) {
  var score = 0;
  
  rectangles.sort(function(a,b) {
    return a.x - b.x || a.y - b.y
  });

  if (rectangles.length > level.length) {
    var difference = rectangles.length - level.length;
    rectangles.splice(rectangles.length-difference, difference)
  };

  for (var i = 0; i < rectangles.length; i++) {
    if (rectangles[i].x === level[i].x) {
      score++;
    }
    if (rectangles[i].y === level[i].y) {
      score++;
    }
    if (rectangles[i].width === level[i].width) {
      score++;
    }
    if (rectangles[i].height === level[i].height) {
      score++;
    }
    if (rectangles[i].color === level[i].color) {
      score++;
    }
  };

  score = Math.round(score/(level.length*5)*100);

  if(rectangles.length === 1) {
    score = 0;
  }

  return score
}

function ecouragement(score) {

  if (score >= 80) {
    return "You have an excellent eye and memory, congratulation!";
  }
  else if (score >= 50) {
    return "Between you and me - what do we even need grades for, right?";
  }
  else {
    return "You are a true artist at heart.";
  }
}

//-------------------New Level-------------------//
function startOver() {
  rectangles = [new Rect(0, 0, game.width, game.height)];
  game.ctx.clearRect(0, 0, game.width, game.height);
  rectangles[0].draw();
  rectangles[0].draw();
}