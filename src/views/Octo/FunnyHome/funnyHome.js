var TweenMax = TweenMax;
TweenMax.to('.caption', 0.5, {autoAlpha:1,ease:Power3.easeIn, delay:10});
$('.caption').click(function(){
    $(this).hide();
});

/*Runner - credit to David DeSandro */
/*jshint unused: false, undef: true */
/*global blockSize: false */

// ----- utils ----- //

// extends objects
function extend( a, b ) {
    for ( var prop in b ) {
        a[ prop ] = b[ prop ];
    }
    return a;
}

function modulo( num, div ) {
    return ( ( num % div ) + div ) % div;
}

function normalizeAngle( angle ) {
    return modulo( angle, Math.PI * 2 );
}

function getDegrees( angle ) {
    return angle * ( 180 / Math.PI );
}



// --------------------------  -------------------------- //

function line( ctx, a, b ) {
    ctx.beginPath();
    ctx.moveTo( a.x, a.y );
    ctx.lineTo( b.x, b.y );
    ctx.stroke();
    ctx.closePath();
}

/*jshint browser: true, undef: true, unused: true */

// -------------------------- vector -------------------------- //

function Vector( x, y ) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector.prototype.set = function( v ) {
    this.x = v.x;
    this.y = v.y;
};

Vector.prototype.setCoords = function( x, y ) {
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function( v ) {
    this.x += v.x;
    this.y += v.y;
};

Vector.prototype.subtract = function( v ) {
    this.x -= v.x;
    this.y -= v.y;
};

Vector.prototype.scale = function( s )  {
    this.x *= s;
    this.y *= s;
};

Vector.prototype.multiply = function( v ) {
    this.x *= v.x;
    this.y *= v.y;
};

// custom getter whaaaaaaat
Object.defineProperty( Vector.prototype, 'magnitude', {
    get: function() {
        return Math.sqrt( this.x * this.x  + this.y * this.y );
    }
});

Vector.prototype.equals = function ( v ) {
    return this.x == v.x && this.y == v.y;
};

Vector.prototype.zero = function() {
    this.x = 0;
    this.y = 0;
};

Vector.prototype.block = function( size ) {
    this.x = Math.floor( this.x / size );
    this.y = Math.floor( this.y / size );
};

Object.defineProperty( Vector.prototype, 'angle', {
    get: function() {
        return normalizeAngle( Math.atan2( this.y, this.x ) );
    }
});

// ----- class functions ----- //
// return new vectors

Vector.subtract = function( a, b ) {
    return new Vector( a.x - b.x, a.y - b.y );
};

Vector.add = function( a, b ) {
    return new Vector( a.x + b.x, a.y + b.y );
};

Vector.copy = function( v ) {
    return new Vector( v.x, v.y );
};

Vector.isSame = function( a, b ) {
    return a.x == b.x && a.y == b.y;
};

Vector.getDistance = function( a, b ) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return Math.sqrt( dx * dx + dy * dy );
};

Vector.addDistance = function( vector, distance, angle ) {
    var x = vector.x + Math.cos( angle ) * distance;
    var y = vector.y + Math.sin( angle ) * distance;
    return new Vector( x, y );
};

// --------------------------  -------------------------- //

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;


// --------------------------  -------------------------- //

// --------------------------  -------------------------- //

var origin = new Vector( w / 2, 100 );
var torso = new Vector();
var coccyx = new Vector();
var head = new Vector();
var leftShoulder, leftElbow, leftWrist, leftHip, leftKnee, leftAnkle;
var rightShoulder, rightElbow, rightWrist, rightHip, rightKnee, rightAnkle;
var leftShoulderOffset = new Vector( -40, 0 );
var rightShoulderOffset = new Vector( 40, 0 );
var shoulderAmplitude = 10;
var armLength = 50;
var leftHipOffset = new Vector( -40, 80 );
var rightHipOffset = new Vector( 40, 80 );
var hipAmplitude = 10;
var legLength = 60;


// --------------------------  -------------------------- //

var cycleTheta = 0;
var cycleSpeed = 0.07;
var PI = Math.PI;

function update() {
    cycleTheta += cycleSpeed;

    var sin = Math.sin( cycleTheta );
    var cos = Math.sin( cycleTheta );
    var sin2x = Math.sin( cycleTheta * 2 );
    var cos2x = Math.cos( cycleTheta * 2 );

    torso.set( origin );
    torso.y -= Math.abs( cos ) * 30;
    coccyx.set( torso );
    coccyx.y += leftHipOffset.y;
    head.set( torso );
    head.y -= 30;

    // shoulder
    leftShoulder = Vector.add( torso, leftShoulderOffset );
    leftShoulder.x += sin * shoulderAmplitude;
    // elbow
    var leftElbowAngle = -sin * 1.2 + 1.6;
    leftElbow = Vector.addDistance( leftShoulder, armLength, leftElbowAngle );
    // wrist
    var normTheta = normalizeAngle( cycleTheta );
    var ankleAngle = normTheta < PI / 2 ? -cos2x :
        normTheta < PI ? 1 :
            normTheta < PI * 3/2 ? cos2x : -1;
    var leftWristAngle = leftElbowAngle + -sin * 0.4 + PI / 2 * -1;
    leftWrist = Vector.addDistance( leftElbow, armLength, leftWristAngle );
    // hip
    leftHip = Vector.add( torso, leftHipOffset );
    leftHip.x += -sin * hipAmplitude;
    // knee
    var leftKneeAngle = sin * 1.2 + 1.4;
    leftKnee = Vector.addDistance( leftHip, legLength, leftKneeAngle );
    // ankle

    var leftAnkleAngle = ( ankleAngle + 1 ) * 0.8;
    leftAnkleAngle += leftKneeAngle;
    leftAnkle = Vector.addDistance( leftKnee, legLength, leftAnkleAngle );
    // right
    // shoulder
    rightShoulder = Vector.add( torso, rightShoulderOffset );
    rightShoulder.x += sin * shoulderAmplitude * -1;
    // elbow
    var rightElbowAngle = sin * 1.2 + 1.6;
    rightElbow = Vector.addDistance( rightShoulder, armLength, rightElbowAngle );
    // wrist
    var rightWristAngle = rightElbowAngle + sin * 0.4 + PI / 2 * -1;
    rightWrist = Vector.addDistance( rightElbow, armLength, rightWristAngle );
    // hip
    rightHip = Vector.add( torso, rightHipOffset );
    rightHip.x += sin * hipAmplitude;
    // knee
    var rightKneeAngle = -sin * 1.2 + 1.4;
    rightKnee = Vector.addDistance( rightHip, legLength, rightKneeAngle );
    // ankle
    var rightAnkleAngle = ( -ankleAngle + 1 ) * 0.8;
    rightAnkleAngle += rightKneeAngle;
    rightAnkle = Vector.addDistance( rightKnee, legLength, rightAnkleAngle );
}

function render2() {
    ctx.clearRect( 0, 0, w, h );




    ctx.fillStyle = '#231f20';
    ctx.strokeStyle = '#231f20';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    line( ctx, torso, head );



    line( ctx, leftShoulder, leftElbow );
    line( ctx, leftElbow, leftWrist );
    line( ctx, leftHip, leftKnee );
    line( ctx, leftKnee, leftAnkle );



    line( ctx, rightShoulder, rightElbow );
    line( ctx, rightElbow, rightWrist );
    line( ctx, rightHip, rightKnee );
    line( ctx, rightKnee, rightAnkle );

    line( ctx, leftShoulder, rightShoulder );
    line( ctx, leftShoulder, coccyx );
    line( ctx, rightShoulder, coccyx );
    line( ctx, leftHip, rightHip );

    dot( ctx, leftShoulder );
    dot( ctx, leftElbow );
    dot( ctx, leftWrist );
    dot( ctx, leftHip );
    dot( ctx, leftKnee );
    dot( ctx, leftAnkle );

    dot( ctx, rightShoulder );
    dot( ctx, rightElbow );
    dot( ctx, rightWrist );
    dot( ctx, rightHip );
    dot( ctx, rightKnee );
    dot( ctx, rightAnkle );

    dot( ctx, torso );
    dot( ctx, coccyx );
    dot2( ctx, head );

}

function dot( ctx, v ) {
    ctx.beginPath();
    ctx.arc( v.x, v.y, 6, 0, Math.PI * 2 );
    ctx.fill();
    ctx.closePath();
}
function dot2( ctx, v ) {
    ctx.beginPath();
    ctx.arc( v.x, v.y, 15, 0, Math.PI * 2 );
    ctx.fill();
    ctx.closePath();
}

var isAnimating = false;

function animate2() {
    update();
    render2();
    requestAnimationFrame( animate2 );
}

function start() {
    isAnimating = true;
}

// --------------------------  -------------------------- //

animate2();

var speedRange = document.querySelector('.speed-range')
speedRange.onchange = function() {
    cycleSpeed = parseFloat( speedRange.value );
};

/*Play Chords*/
var sounds = ["http://www.qingli.life/sounds/am.mp3",
        "http://www.qingli.life/sounds/c.mp3",
        "http://www.qingli.life/sounds/d.mp3",
        "http://www.qingli.life/sounds/dm.mp3",
        "http://www.qingli.life/sounds/e.mp3",
        "http://www.qingli.life/sounds/f.mp3",
        "http://www.qingli.life/sounds/g.mp3"],
    oldSounds = [];

var playSounds = function () {
    var guitarChords = Math.floor(Math.random() * (sounds.length)),
        thisSound = sounds[guitarChords];

    oldSounds.push(thisSound);
    sounds.splice(guitarChords, 1);

    if (sounds.length < 1) {
        sounds = oldSounds.splice(0, oldSounds.length);
    }

    $("#guitar-element").html("<audio autoplay><source src=\"" + thisSound + "\" type=\"audio/mpeg\"><embed src=\"" + thisSound + "\" hidden=\"true\" autostart=\"true\" /></audio>");
}

$('#play-guitar').click(function(){
    TweenMax.fromTo('#speakerphone-icon', 3.5, {css:{stroke:'#1a478c'}},{css:{stroke:'#231f20'}});
});

/*Device Detecter*/
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()) ;
    }
};
if (isMobile.any()) {
    $('.bottom-wave-container').hide();
}

var	windowWidth = $(window).width();
var	windowHeight = $(window).height();

var runnerWidth1 = $(window).height() * 0.1;
var runnerWidth2 = $(window).width() * 0.1;
var runnerWidth3 = $(window).width() * 0.1;

var trackWidth1 = runnerWidth1 *0.8;
var trackWidth2 = runnerWidth2 *0.8;

var topValue1 = windowHeight * 0.5 - runnerWidth1/2;
var topValue2 = windowHeight * 0.5 - runnerWidth2/2;
var topValue3 = windowWidth * 0.6 - runnerWidth3/2;

var leftValue1 = windowWidth * 0.5 + runnerWidth1;
var leftValue2 = windowWidth *0.5 + runnerWidth2;

if (windowWidth > windowHeight) {
    $('.runner').css({top:topValue1,left:leftValue1});
    $('.runner canvas').css({width:runnerWidth1});
    $('.speed-range').css({width:trackWidth1});
};
if (windowWidth <= windowHeight) {
    $('.runner').css({top:topValue2,left:leftValue2});
    $('.runner canvas').css({width:runnerWidth2});
    $('.speed-range').css({width:trackWidth2});
};

/*Add Circle Effect*/
function randomBetween(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};
$('.logo-ani').click(function(){
    addBox();
    function addBox(){

        var size = randomBetween(30,200);
        var positionY = randomBetween(0,-150);
        var positionX = randomBetween(0,120);
        var h = randomBetween(10, 100);

        var box = $('<div class="box"></div>').css({
            top: positionY,
            left: positionX,
            width: size,
            height: size,
            'z-index': 10,
            backgroundColor: 'hsl('+h+', 60%, 80%)'

        }).appendTo('.saying-container');
    };

    for (var i=0; i<36; i++){
        // addBox();
        setTimeout(addBox,20*i)
    }

    $('.saying-container').on('mouseover','.box',function(){
        $(this).remove();
    });
});

/*Animation Timeline*/
var tl = new TimelineMax(),
    // lifeLogo = $('#qingli-life-logo .st6')
    outerCircle = $('#outer-dotted-circle'),
    bottomLines = $('#bottom-lines-wave path'),
    waveOverlay = $('#wave-overlay'),
    horizontalLines = $('#structure-lines-horizontal'),
    verticalLines = $('#structure-lines-vertical'),
    flowerArrow = $('#flower-arrow'),
    leaves = $('#leaves-1, #leaves-2'),
    targetDot = $('#intersection-circle path'),
    targetRings = $('#intersection-circle circle'),
    flowerStem = $('#flower-stem'),
    flowerBud = $('#flower-bud ellipse'),
    lampStem = $('#lamp-stem'),
    lampBody = $('#lamp-body'),
    mountainShape = $('#mountains'),
    mountainArrows = $('#mountains-arrow polyline'),
    speakerPhone = $('#speakerphone'),
    speakerVolume = $('#speakerphone #speakerphone-volume'),
    cookPot = $('#cook-pot'),
    cookFire = $('#cook-fires'),
    potCap = $('#cook-pot-cap'),
    guitarBody = $('#guitar'),
    bookShelf = $('#book-shelf'),
    bookShelfBottom = $('#book-shelf-bottom'),
    tlBook = new TimelineMax({repeat:-1}),
    tlWave = new TimelineMax({repeat:-1});

tl
    .to('.saying-container',0.5, {autoAlpha:0, ease:Power2.easeIn})
    .from(outerCircle, 1, {autoAlpha:0, rotation:-45, transformOrigin:'50% 50%', ease:Power2.easeIn})
    .staggerFrom(bottomLines, 1, {autoAlpha: 0, y: 15, ease:Power2.easeInOut},'-=0.5')
    .from(waveOverlay, 0.25, {autoAlpha:0, ease:Power3.easeOut},'-=0.5')
    .from(verticalLines, 1, {autoAlpha:0, y: 500,ease:Back.easeInOut},'-=0.15')
    .from(horizontalLines, 1, {autoAlpha:0, x: -500,ease:Back.easeInOut},'-=0.5')
    .to(leaves, 1, {autoAlpha:1,ease:Back.easeInOut},'-=0.35')
    .from(targetDot, 0.3, {autoAlpha:0, scale:3, transformOrigin:'50% 50%', ease:Power3.easeOut},'-=1.1')
    .staggerFrom(targetRings, 0.3, {autoAlpha:0, scale:2, transformOrigin:'50% 50%', ease:Power3.easeOut},0.3)
    .from(flowerArrow, 1, {autoAlpha:0, x: 500,ease:Back.easeInOut},'-=1')
    .from(flowerStem, 0.5, {autoAlpha:0,ease:Power3.easeOut},'-=0.8')
    .staggerFrom(flowerBud, 0.2, {autoAlpha:0, scale:1.5, transformOrigin:'50% 50%', ease:Power2.easeOut},0.1)
    .from(lampStem, 1, {autoAlpha:0,ease:Power3.easeOut},'-=1.2')
    .from(lampBody, 1, {autoAlpha:0,ease:Power3.easeOut},'-=1')
    .from('#earth', 1, {autoAlpha:0, scale: 0.5, transformOrigin:'50% 50%',ease:Bounce.easeOut},'-=1.5')
    .from(mountainShape, 0.8, {autoAlpha:0, ease:Power3.easeOut},'-=1')
    .from(speakerPhone, 0.5, {autoAlpha:0, ease:Power3.easeOut},'-=0.8')
    .staggerTo(speakerVolume, 0.25, {autoAlpha:1, ease:Power3.easeOut},0.15,'-=0.35')
    .staggerFrom(mountainArrows, 0.75, {cycle: {y:[-100,100]} ,autoAlpha:0, ease:Power3.easeOut},'-=0.5')
    .from('.runner',0.75,{autoAlpha:0,scale: 0, transformOrigin:'50% 50%', ease:Back.easeOut})
    .from(guitarBody, 0.75, {autoAlpha:0, scale: 0, transformOrigin:'50% 50%', ease:Back.easeOut},'-=0.25')
    .from(bookShelf, 0.75, {autoAlpha:0, scale: 0, transformOrigin:'50% 50%', ease:Back.easeOut},'-=0.25')
    .from(cookPot, 0.75, {autoAlpha:0, scale: 0, transformOrigin:'50% 50%', ease:Back.easeOut},'-=0.25')
    .from(cookFire, 1, {autoAlpha:0, ease:Power3.easeOut},'-=1.75')
    .from(bookShelfBottom, 1, {autoAlpha:0, ease:Power3.easeOut},'-=0.5');

tlBook
    .fromTo('#book-1', 0.5,{x:-22, rotation:0},{x:-12, rotation:-30, transformOrigin:'bottom left'})
    .fromTo('#book-2', 0.5,{x:-17, rotation:0},{x:-7, rotation:-30, transformOrigin:'bottom left'},'-=0.25')
    .fromTo('#book-3', 0.5,{x:-12, rotation:0},{x:-2, rotation:-30, transformOrigin:'bottom left'},'-=0.25')
    .to('#book-1', 0.5,{x:-2, rotation:-60, transformOrigin:'bottom left'},'-=0.5')
    .to('#book-2', 0.5,{x:3, rotation:-60, transformOrigin:'bottom left'},'-=0.25')
    .to('#book-3', 0.5,{x:8, rotation:-60, transformOrigin:'bottom left'},'-=0.25')
    .to('#book-1', 0.5,{x:8, rotation:-90, autoAlpha:0, transformOrigin:'bottom left'},'-=0.5')
    .to('#book-2', 0.5,{x:13, rotation:-90, autoAlpha:0, transformOrigin:'bottom left'},'-=0.25')
    .to('#book-3', 0.5,{x:18, rotation:-90, autoAlpha:0, transformOrigin:'bottom left'},'-=0.25')
    .to('#book-3', 0.25,{x:-12, rotation:0, autoAlpha:1, transformOrigin:'bottom left'},'+=0.25')
    .to('#book-2', 0.25,{x:-17, rotation:0, autoAlpha:1, transformOrigin:'bottom left'},'-=0.25')
    .to('#book-1', 0.25,{x:-22, rotation:0, autoAlpha:1, transformOrigin:'bottom left'},'-=0.25')
;


TweenMax.to('#earth', 2, {rotation:-360, transformOrigin:'50% 50%',repeat:-1,ease:Linear.easeNone});
TweenMax.fromTo(guitarBody, 2.5, {y:6},{y:-6, repeat:-1,ease:Power1.easeInOut, yoyo:true});
TweenMax.to(potCap, 3, {rotation:10, transformOrigin:'50% 50%',repeat:-1,ease:RoughEase.ease.config({ template: Power2.easeInOut, strength: 2, points: 20, taper: "none", randomize: true, clamp: false}), yoyo:true});
TweenMax.fromTo('#lamp-bulb', 3, {css:{fill:'#f5f8fa'}},{css:{fill:'#fff200'}, repeat:-1, yoyo:true, ease:Power1.easeInOut});
TweenMax.fromTo('#signature', 2.5, {y:6},{y:-6, repeat:-1,ease:Power1.easeInOut, yoyo:true});


/*Timeline Control*/
$('#btnPause').on('click', function(){
    tl.pause();
})
$('#btnPlay').on('click', function(){
    tl.play();
})
$('#btnReverse').on('click', function(){
    tl.reverse();
})
$('#btnRestart').on('click', function(){
    tl.restart();
});
$('#btnPause-2').on('click', function(){
    tl.pause();
})
$('#btnPlay-2').on('click', function(){
    tl.play();
})
$('#btnReverse-2').on('click', function(){
    tl.reverse();
})
$('#btnRestart-2').on('click', function(){
    tl.restart();

});

TweenMax.to('#earth', 2, {rotation:-360, transformOrigin:'50% 50%',repeat:-1,ease:Linear.easeNone});
TweenMax.fromTo(guitarBody, 2.5, {y:6},{y:-6, repeat:-1,ease:Power1.easeInOut, yoyo:true});
TweenMax.to(potCap, 3, {rotation:10, transformOrigin:'50% 50%',repeat:-1,ease:RoughEase.ease.config({ template: Power2.easeInOut, strength: 2, points: 20, taper: "none", randomize: true, clamp: false}), yoyo:true});
TweenMax.fromTo('#lamp-bulb', 3, {css:{fill:'#f5f8fa'}},{css:{fill:'#fff200'}, repeat:-1, yoyo:true, ease:Power1.easeInOut});
TweenMax.fromTo('#signature', 2.5, {y:6},{y:-6, repeat:-1,ease:Power1.easeInOut, yoyo:true});

