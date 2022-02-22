$(document).mousemove(function(e) {
  $('.cursor').css({
    left:e.pageX,
    top:e.pageY
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
