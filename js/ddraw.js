let prevX, prevY, x1, y1;

$(document).ready(function() {

  let canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

  let windowWidth = window.innerWidth

  if (windowWidth > 100vw) {
    canvas.width = 100vw
    canvas.height = 100vw
  }

  // let drawing = (e) => {
  //   console.log(e);
  //   ctx.lineTo(e.offsetX, e.offsetY);
  //   // const canvasPosition = canvas.getBoundingClientRect()
  //   // const canvasTop = canvasPosition.top
  //   // const canvasLeft = canvasPosition.left
  //
  //   // ctx.lineTo(e.clientX - canvasLeft, e.clientY - canvasTop);
  //   ctx.stroke();
  // }
    ctx.strokeStyle = "#AF00B8";
  $('#black_knopka').click(function() {
    ctx.strokeStyle = "black";
  });
    ctx.lineWidth = 3;
  canvas.addEventListener("mousemove", drawing);

  function draw(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    console.log(e);
    ctx.strokeStyle = "#AF00B8";
    ctx.lineWidth = 4;

  function drawing(x1, y1, x2, y2) {
   ctx.beginPath();
   ctx.moveTo(x1, y1);
   ctx.lineTo(x2, y2);
   ctx.stroke();
  }




  $(window).resize(() => {
    console.log('resize');

    windowWidth = window.innerWidth

    if (windowWidth > 800) {
      canvas.width = 300
      canvas.height = 300
    }
  })
});

//
// function drawLine(x1, y1, x2, y2) {
//   ctx.beginPath();
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.stroke();
// }

// $("#viol_knopka").click(function() {
//   selectedColor = window.getComputedStyle(btn).getPropertyValue('background-color');
//   // btn????
// });
