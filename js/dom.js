$(".hide").hide();

$("#begin").click(function(){
  $("#intro").fadeOut(1000);
  $("#original-img").attr("src", "./img/level1.png");
  $("#title").html("Composition III With Blue, Yellow And White");
  $("#year").html("1936");
  setTimeout(function() {$(".passive").removeClass("passive");},300);
  $("#original").fadeIn().delay(3000).fadeOut();
});

$("#finish1").click(function(){
  $("#score").html(calculateScore(level1) + "%");
  $("#encouragement").html(ecouragement(calculateScore(level1)));
  $("#grades").fadeIn();
  $(".active").addClass("passive");
  $("#finish1").hide();
  $("#finish2").show();
});

$("#cont1").click(function(){
  $("#grades").fadeOut();
  $("#original-img").attr("src", "./img/level2.png");
  $("#title").html("Composition II In Red, Blue and Yellow");
  $("#year").html("1930");
  setTimeout(function() {$(".passive").removeClass("passive");},300);
  $("#original").fadeIn().delay(5000).fadeOut();
  $(startOver());
  $("#cont1").hide();
  $("#cont2").show();
});

$("#finish2").click(function(){
  $("#score").html(calculateScore(level2) + "%");
  $("#encouragement").html(ecouragement(calculateScore(level2)));
  $("#grades").fadeIn();
  $(".active").addClass("passive");
  $("#finish2").hide();
  $("#finish3").show();
});

$("#cont2").click(function(){
  $("#grades").fadeOut();
  $("#original-img").attr("src", "./img/level3.png");
  $("#title").html("Composition C");
  $("#year").html("1935");
  setTimeout(function() {$(".passive").removeClass("passive");},300);
  $("#original").fadeIn().delay(5000).fadeOut();
  $(startOver());
  $("#cont2").hide();
  $("#cont3").show();
});

$("#finish3").click(function(){
  $("#score").html(calculateScore(level3) + "%");
  $("#encouragement").html(ecouragement(calculateScore(level3)));
  $("#grades").fadeIn();
  $(".active").addClass("passive");
  $("#finish3").hide();
  $("#finish4").show();
});

$("#cont3").click(function(){
  $("#grades").fadeOut();
  $("#original-img").attr("src", "./img/level4.png");
  $("#title").html("Composition With Large Red Plane, Yellow, Black, Gray And Blue");
  $("#year").html("1921");
  setTimeout(function() {$(".passive").removeClass("passive");},300);
  $("#original").fadeIn().delay(5000).fadeOut();
  $(startOver());
  $("#cont3").hide();
  $("#cont4").show();
});

$("#finish4").click(function(){
  $("#score").html(calculateScore(level4) + "%");
  $("#encouragement").html(ecouragement(calculateScore(level4)));
  $("#grades").fadeIn();
  $(".active").addClass("passive");
});

$("#cont4").click(function(){
  $("#grades").fadeOut();
  $("#outro").fadeIn();
});

