$(document).ready(function(){

	$( function() {
		$( ".zapl1" ).draggable();
	});
	$(function() {
		$(".zapl2").draggable();
	});
	$(function() {
		$(".zapl3").draggable();
  });

  let rot1 = 0;
	$(".zapl1").click(function() {
			rot1 += 45;
			$(this).css("transform", `rotate(${rot1}deg)`)
	});
	let rot2 = 0;
	$(".zapl2").click(function() {
			rot2 += 45;
			$(this).css("transform", `rotate(${rot2}deg)`)
	});
	let rot3 = 0;
	$(".zapl3").click(function() {
			rot3 += 45;
			$(this).css("transform", `rotate(${rot3}deg)`)
	});

let
    canvas, ctx, brush = {
      x: 0,
      y: 0,
      size: 5,
      color: var(--blue);
      down: false,
    },
    strokes = [],
    currentStroke = null;
  function init () {
    canvas = $('#draw');
    canvas.attr({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    ctx = canvas[0].getContext('2d');
    function mouseEvent (e) {
      brush.x = e.pageX;
      brush.y = e.pageY;
      currentStroke.points.push({
        x: brush.x,
        y: brush.y,
      });
    }
    canvas.mousedown(function (e) {
      brush.down = true;
      currentStroke = {
        color: brush.color,
        size: brush.size,
        points: [],
      };
      strokes.push(currentStroke);
      mouseEvent(e);
    }).mouseup(function (e) {
        brush.down = false;
        mouseEvent(e);
      currentStroke = null;
    }).mousemove(function (e) {
      if (brush.down)
      mouseEvent(e);
    });
    $('.c_yellow').click(function () {
      brush.color = "yellow";
    });
    $('.c_orange').click(function () {
      brush.color = "orange";
    });
    $('.c_black').click(function () {
      brush.color = "black";
    });
  }
  $(init);
});
