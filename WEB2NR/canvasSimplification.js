var c = document.getElementById("theCanvas");
var ctx = c.getContext("2d");
function drawCircle (x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
}
function drawLine (x1,y1,x2,y2) {
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}