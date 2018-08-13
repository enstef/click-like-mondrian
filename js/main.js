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
  
  this.draw = function() {
    game.ctx.fillStyle = "red";
    game.ctx.globalAlpha = 0.2;
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
    game.ctx.strokeRect(this.x, this.y, this.width, this.height);
  };
  
  this.splitVertikal = function() {
      this.width = this.width / 2;
      var newRect = new Rect(this.x + this.width, this.y, this.width, this.height);
      rectangles.push(newRect);
  };
  
  this.splitHorizontal = function() {
      this.height = this.height / 2;
      var newRect = new Rect(this.x, this.y + this.height, this.width, this.height)
      rectangles.push(newRect);
  };
}


rectangles[0].draw();

function drawRectangles(rectangles) {
  for (var i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
  }
}


canvas.onclick = function(e) {
  console.log(e);
  game.ctx.clearRect(0,0,game.width, game.height);
  drawRectangles(rectangles);
  var yClicked = e.offsetY;
  var xClicked = e.offsetX;
  for (var i = 0; i < rectangles.length; i++) {
    var rect = rectangles[i]
    console.log(rect);
    if (rect.x <= xClicked && xClicked <= rect.x+rect.width && rect.y <= yClicked && yClicked <= rect.y+rect.height) {
      console.log("The rectangle with the following index was clicked", i);
      if (xClicked < rect.x+30 || xClicked > rect.x+rect.width-30){
        console.log("why")
        rect.splitVertikal();
        return;
      }
      if (yClicked < rect.y+30 || yClicked > rect.y+rect.height-30){
        rect.splitHorizontal();
        return;
      }
    }
  }
}



// var rect = {
//   x : 0,
//   y : 0,
//   width : game.width,
//   height : game.height,

//   draw : function() {
//     game.ctx.strokeRect(this.x, this.y, this.width, this.height);
//   },

//   vertikalSplit : function() {
//     // console.log(rect)
//     // console.log(rect.draw())
//     onclick = function() {
//       rect.width = rect.width / 2;
//       // rectangles.push(rect);
//     };
//   },

//   horizontalSplit : function() {
//     onkeydown = function() {
//       rect.height = rect.height / 2;
//       // rectangles.push(rect);
//     };
//   },

  // hint : function() {
  //   onmouseover = function(event) {
  //     var mx = event.offsetX;
  //     var my = event.offsetY;
  //     console.log("x", mx, "y", my);
  //     if(my < 30) {
  //       horizontalSplit();
  //     }
  //     if(my < )
  //   }
  // }

// };

// function rectUpdate() {
//   rect.draw();

//   rect.vertikalSplit();

//   rect.horizontalSplit();
//   // rect.hint();

//   requestAnimationFrame(rectUpdate);
// }
// requestAnimationFrame(rectUpdate);
