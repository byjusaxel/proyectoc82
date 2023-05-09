canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";
ctx.strokeStyle=color;
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(400, 250, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(524, 250, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(276, 250, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(338, 300, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(460, 300, 50, 0, 2*Math.PI);
ctx.stroke();

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    console.log(color);

    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X= "+mouse_x);
    console.log("Y= "+mouse_y);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mouse_x, mouse_y, 100, 0, 2*Math.PI);
    ctx.stroke();
}