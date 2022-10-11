"use strict";

alert("Draw your space invader here");

function drawspaceinvader() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.fillStyle = "black";

    context.fillRect(0, 0, 300, 300);

    context.fillStyle = "lime";



    context.fillRect(25, 125, 30, 110);
    context.fillRect(75, 225, 40, 50);
    context.fillRect(75, 75, 30, 100);
    context.fillRect(125, 125, 30, 100);
    context.fillRect(175, 75, 30, 100);
    context.fillRect(225, 125, 30, 110);
    context.fillRect(175, 225, 40, 50);
}
drawspaceinvader();