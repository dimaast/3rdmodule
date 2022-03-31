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
$(".activeelement").mouseover(function(){
  $(".cursor").css("border", "2px solid", 0.5)
    });
$(".activeelement").mouseleave(function(){
  $(".cursor").css("border", "1px solid", 0.5)
    });
$(".activeelement").mouseleave(function(){
  $(".cursor").css("transform", "none", 0.5)
    });
});

$(document).ready(function () {
  $('.buttonnachat').click(function() {
    $('html, body').animate({
      scrollTop: $(".secondslide").offset().top
    }, 1000);
  });
});

let i = 0;
let txt = 'Меня научили менять цвет, прямо как хамелеон!';
let speed = 60;
$(document).ready(function textstring() {
$(document).ready(function typeWriter() {
autoStart: false;
if (i < txt.length) {
document.getElementById("d2bubble1text").innerHTML += txt.charAt(i);
i++;
setTimeout(typeWriter, speed);
}
});
});

$(document).ready(function(){
  $(".d2rabbit").click(function(){
    if ($(".d2rabbit").hasClass("rv1")){
      $(".d2rabbit").addClass("rv2");
      setTimeout(function(){
        $(".d2rabbit").removeClass("rv1");
      }, 100);
    } else if ( $(".d2rabbit").hasClass("rv2")){
      $(".d2rabbit").addClass("rv3");
      setTimeout(function(){
        $(".d2rabbit").removeClass("rv2");
      }, 100);
    } else if ( $(".d2rabbit").hasClass("rv3")){
      $(".d2rabbit").addClass("rv1");
      setTimeout(function(){
        $(".d2rabbit").removeClass("rv3");
      }, 100);
    };
  });
});
