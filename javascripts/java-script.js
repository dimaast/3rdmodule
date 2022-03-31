$(document).mousemove(function(e) {
  $('.cursor').css({
    left:e.pageX,
    top:e.pageY
  });
});

$(document).ready(function(){
$(".activeelement").mouseover(function(){
  $(".cursor").css("transform", "scale(0.4)", 0.5)
  });
$("a").mouseover(function(){
  $(".cursor").css("border", "2px solid", 0.5)
    });
$("a").mouseleave(function(){
  $(".cursor").css("border", "1px solid", 0.5)
    });
$("a").mouseleave(function(){
  $(".cursor").css("transform", "none", 0.5)
    });
});

$(document).ready(function(){
$(".block0").hover(function(){
  $(".block").addClass("block1");
}, function() {
  $(".block").removeClass("block1");
    });
});

$(document).ready(function(){
	$(".block0").click(function(){
		$(".block").toggleClass("block2");
	});

});
