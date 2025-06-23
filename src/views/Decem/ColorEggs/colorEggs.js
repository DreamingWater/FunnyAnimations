var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cw = c.width = 500,
    cx = cw / 2;
var ch = c.height = 400,
    cy = 3*ch / 4;
var rad = Math.PI / 180;
var kappa = 0.5522847498;
var frames = 0;
var stopped = true;
var spring = .025; //elasticidad
var friction = .95;
var flag = true;


ctx.font="35pt Tangerine";
ctx.strokeStyle="hsl(19,98%,45%)";
ctx.textAlign="center";


var hues = [260, 310, 197, 160, 53];

var eggs = [{
    r: 45,
    cx: cx + 120,
    a_init: 10 * rad,
    A_final: -15 * rad
}, {
    r: 70,
    cx: cx,
    a_init: -10 * rad,
    A_final: 15 * rad
}, {
    r: 45,
    cx: cx - 120,
    a_init: 25 * rad,
    A_final: 10 * rad
}, {
    r: 40,
    cx: cx - 50,
    a_init: 10 * rad,
    A_final: -15 * rad
}, {
    r: 35,
    cx: cx + 50,
    a_init: 10 * rad,
    A_final: -5 * rad
}];

function resset(eggs) {
    for (var i = 0; i < eggs.length; i++) {
        var o = eggs[i];
        o.R = o.r * 1.4;
        if (flag) {
            o.a = o.a_init;
            o.A = o.A_final;
            flag = false;
        } else {
            o.a = o.A_final;
            o.A = o.a_init;
            flag = true;
        }
        o.va = 0; // angular speed
        o.cy = cy - o.r;
        o.hue = hues[i]
    }
    frames = 0;
    console.log(eggs)
}

function buildPointsRy(egg) {
    var or = egg.r * kappa; // offset
    var p = [
        [],
        [],
        [],
        []
    ];

    p[0][0] = {
        x: egg.cx - egg.r,
        y: egg.cy
    }
    p[0][1] = {
        x: p[0][0].x,
        y: p[0][0].y + or
    }
    p[0][2] = {
        x: p[0][0].x,
        y: p[0][0].y - or
    }

    p[1][0] = {
        x: egg.cx,
        y: egg.cy - egg.R
    }
    p[1][1] = {
        x: egg.cx - or,
        y: p[1][0].y
    }
    p[1][2] = {
        x: egg.cx + or,
        y: p[1][0].y
    }

    p[2][0] = {
        x: egg.cx + egg.r,
        y: egg.cy
    }
    p[2][1] = {
        x: p[2][0].x,
        y: p[2][0].y - or
    }
    p[2][2] = {
        x: p[2][0].x,
        y: p[2][0].y + or
    }

    p[3][0] = {
        x: egg.cx,
        y: egg.cy + egg.r
    };
    p[3][1] = {
        x: p[3][0].x + or,
        y: p[3][0].y
    }
    p[3][2] = {
        x: p[3][0].x - or,
        y: p[3][0].y
    }

    return p;

}

function drawEgg(egg, ctx) {
    var a = 0;
    var p = buildPointsRy(egg);
    for (var i = 0; i < p.length; i++) {
        for (var j = 0; j < p[i].length; j++) {
            rotatePoint(p[i][j], egg)
        }
    }
    //console.log(p)
    //draw egg

    ctx.fillStyle = Grd(egg.cx, egg.cy, egg.r, egg.hue);
    ctx.beginPath();
    ctx.moveTo(p[3][0].x, p[3][0].y);
    ctx.bezierCurveTo(p[3][2].x, p[3][2].y, p[0][1].x, p[0][1].y, p[0][0].x, p[0][0].y);
    ctx.bezierCurveTo(p[0][2].x, p[0][2].y, p[1][1].x, p[1][1].y, p[1][0].x, p[1][0].y);
    ctx.bezierCurveTo(p[1][2].x, p[1][2].y, p[2][1].x, p[2][1].y, p[2][0].x, p[2][0].y);
    ctx.bezierCurveTo(p[2][2].x, p[2][2].y, p[3][1].x, p[3][1].y, p[3][0].x, p[3][0].y);
    ctx.fill();

}

function rotatePoint(p, egg) {
    var sin = Math.sin(egg.a);
    var cos = Math.cos(egg.a);
    var x1 = p.x - egg.cx;
    var y1 = p.y - (egg.cy + egg.r);
    var x2 = cos * x1 - sin * y1;
    var y2 = sin * x1 + cos * y1;
    p.x = egg.cx + x2;
    p.y = (egg.cy + egg.r) + y2;
    return p;
}

function Draw() {
    frames++;
    requestId = window.requestAnimationFrame(Draw);
    ctx.clearRect(0, 0, cw, ch);
    ctx.save();

    ctx.fillStyle ="#777";
    ctx.fillText("Happy Easter",cx,60);
    ctx.fillText("2025",cx,100);

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#E8DFD9";
    ctx.translate(0, .5);

    ctx.beginPath();
    ctx.moveTo(50,3*ch/4 +3);
    ctx.lineTo(cw-50,3*ch/4+3);
    ctx.stroke();

    ctx.restore();
    for (var i = 0; i < eggs.length; i++) {

        /////////////////////////////
        var range = (eggs[i].A - eggs[i].a);
        var acceleration = range * spring;

        eggs[i].va += acceleration;
        eggs[i].va *= friction;
        eggs[i].a += eggs[i].va;
        //////////////////////////
        drawEgg(eggs[i], ctx);
    }
}

function start() {
    resset(eggs);
    requestId = window.requestAnimationFrame(Draw);
    stopped = false;

}

function stopAnim() {
    if (requestId) {
        window.cancelAnimationFrame(requestId);
    }
    stopped = true;

}

window.addEventListener("load", start(), false);
c.addEventListener("click", function() {
    (stopped == true) ? start(): stopAnim();
    start();
}, false)

function Grd(x, y, r, hue) {
    grd = ctx.createRadialGradient(x + .5 * r, y-.3*r, 0, x + .3 * r, y-.3*r, r);
    grd.addColorStop(0, 'hsl(' + hue + ',100%,70%)');
    grd.addColorStop(0.4, 'hsl(' + hue + ',80%,60%)');
    grd.addColorStop(1, 'hsl(' + hue + ',70%,50%)');
    return grd;
}