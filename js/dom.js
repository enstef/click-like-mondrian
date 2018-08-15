$(".hide").hide();

$("#begin").click(function(){
  $("#intro").fadeOut(3000);
  $("#original-img").attr("src", "./img/level1.png");
  $("#title").html("Composition III With Blue, Yellow And White");
  $("#year").html("1936");
  $("#original").fadeIn().delay(5000).fadeOut();
});

$("#finish").click(function(){
  console.log("Finished");
  
  $("#score").html(calculateScore(level1) + "%");
  $("#encouragement").html(ecouragement(calculateScore(level1)));
  $("#grades").fadeIn();
})