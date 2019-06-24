console.log("Hello World");

var canvas = document.getElementById("canvas");
var c= canvas.getContext('2d");
var tx = window.innerWidth;
var ty = window.innerHeight;     
canvas.width = tx;
canvas.height = ty;
//c.linewidth= 5;
//c.globalAlpha = o.5;

var mousex = 0;
var mousey = 0;
                         
addEventListener('mousemove', function() {
  mousex = event.clientX;
  mousey = event.clientY;
  });


                         
                         
                         
