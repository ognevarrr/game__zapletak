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
});


const canvas = document.querySelector('canvas')
ctx = canvas.getContext("2d");

const drawing = (e) => {
  ctx.lineTo( e.offsetX, e.offsetY);
  ctx.stroke();
}
canvas.addEventListener("mousemove", drawing);
