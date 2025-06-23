var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = 400;
cx = cw / 2;
var ch = canvas.height = 400;
cy = ch / 2;
ctx.fillStyle = "#6ab150";
ctx.strokeStyle = "#fff";
var rad = Math.PI / 180;

var points = [];
//var _points = [];
var triangles = [];
var scl = 2.5; // scale

var speed = .0001;
var m = { //  mouse initial position
    x: 200,
    y: 100
}

// vars for the möbius strip
var r = 70
var v = -.7 * r;
// −1*r ≤ v ≤ 1*r.

function Point(x, y, z) {
    this.x = x * scl;
    this.y = y * scl;
    this.z = z * scl;

    this.fl = 250; // focal length
    // vanishing point
    this.vpX = 0;
    this.vpY = 0;
    this.cX = 0;
    this.cY = 0;
    this.cZ = 0;

    this.setVanishingPoint = function(vpX, vpY) {
        this.vpX = vpX;
        this.vpY = vpY;
    };

    this.setCenter = function(cX, cY, cZ) {
        this.cX = cX;
        this.cY = cY;
        this.cZ = cZ;
    };

    this.rotateX = function(angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var y1 = this.y * cos - this.z * sin;
        var z1 = this.z * cos + this.y * sin;
        this.y = y1;
        this.z = z1;
    }

    this.rotateY = function(angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var x1 = this.x * cos - this.z * sin;
        var z1 = this.z * cos + this.x * sin;
        this.x = x1;
        this.z = z1;
    }
    this.rotateZ = function(angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var x1 = this.x * cos - this.y * sin;
        var y1 = this.y * cos + this.x * sin;
        this.x = x1;
        this.y = y1;
    };

    this.getScreenX = function() {
        var scale = this.fl / (this.fl + this.z + this.cZ);
        return this.vpX + (this.cX + this.x) * scale;
    }

    this.getScreenY = function() {
        var scale = this.fl / (this.fl + this.z + this.cZ);
        return this.vpY + (this.cY + this.y) * scale;
    };

    this.update = function(ax, ay) {
        this.rotateX(ax);
        this.rotateY(ay);
    }
}

function Triangle(a, b, c, color) {
    this.pointA = a;
    this.pointB = b;
    this.pointC = c;
    this.color = color;

    this.draw = function() {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.pointA.getScreenX(), this.pointA.getScreenY());
        ctx.lineTo(this.pointB.getScreenX(), this.pointB.getScreenY());
        ctx.lineTo(this.pointC.getScreenX(), this.pointC.getScreenY());
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    }

    this.getDepth = function() {
        return Math.min(this.pointA.z, this.pointB.z, this.pointC.z);
    };

}

function depth(a, b) {
    return (b.getDepth() - a.getDepth());
} // for sorting triangles

////////////////////////////////////////

// points for the möbius strip
// where 0 ≤ u < 2π and −1*r ≤ v ≤ 1*r.

for (var u = 0; u <= 2 * Math.PI; u += .1) {
    var x = (r + .5 * v * Math.cos(.5 * u)) * Math.cos(u);
    var y = (r + .5 * v * Math.cos(.5 * u)) * Math.sin(u);
    var z = .5 * v * Math.sin(.5 * u);
    var point = new Point(x, y, z);
    points.push(point);

    var _u = u + 2 * Math.PI;
    var _x = (r + .5 * v * Math.cos(.5 * _u)) * Math.cos(_u);
    var _y = (r + .5 * v * Math.cos(.5 * _u)) * Math.sin(_u);
    var _z = .5 * v * Math.sin(.5 * _u);
    var _point = new Point(_x, _y, _z);
    points.push(_point);

}

////////////////////////////////////////

// triangles for the möbius strip

for (var i = 0; i <= points.length - 2; i += 2) {

    var hue = map(i, 0, points.length, 0, 360);
    var color = "hsl(" + hue + ",90%,40%)";

    var v1 = points[i];
    var v2 = points[i + 1];
    if (i == points.length - 2) {
        var v3 = points[1];
        var v4 = points[0];
    } else {
        var v3 = points[i + 2];
        var v4 = points[i + 3];
    }

    var t = new Triangle(v1, v4, v2, color);
    var _t = new Triangle(v1, v3, v4, color);

    triangles.push(t);
    triangles.push(_t);

}

///////////////////////////////////////////

for (var i = 0; i < points.length; i++) {
    points[i].setVanishingPoint(cx, cy);
    points[i].setCenter(0, 0, 200);
}

function Draw() {
    requestId = window.requestAnimationFrame(Draw);
    ctx.clearRect(0, 0, cw, ch);
    var ay = (m.x - cx) * speed;
    var ax = (m.y - cy) * speed;

    for (var i = 0; i < points.length; i++) {
        points[i].update(ax, ay);
    }

    triangles.sort(depth)

    for (var i = 0; i < triangles.length; i++) {

        triangles[i].draw();

    }

}

requestId = window.requestAnimationFrame(Draw);

canvas.addEventListener('mousemove', function(evt) {
    m = oMousePos(canvas, evt);
}, false);

function oMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - rect.left),
        y: Math.round(evt.clientY - rect.top)
    }
}

function map(n, a, b, _a, _b) {
    var d = b - a;
    var _d = _b - _a;
    var u = _d / d;
    return _a + n * u;
}