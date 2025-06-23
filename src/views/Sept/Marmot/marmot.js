const cavia = document.getElementById('cavia');
const ogen = document.getElementsByClassName('oog');
const neus = document.getElementsByClassName('neus');
const oorLeft = document.getElementsByClassName('oren__left');

const elements = [ ogen, neus,  cavia ];
TweenMax.set( elements, { transformOrigin:'50% 50%' });

const nosetiming = .1;

const eyes = new TimelineMax({ paused: false });
const oren = new TimelineMax({ repeat: -1, onComplete:orenAnimation });
const nose = new TimelineMax({ paused: false, repeat: 1, onComplete:function(){
        eyes.play(0);
    }});


eyes.to( ogen, .1, {
    scaleY: 0,
    delay: 0.5
})
    .to( ogen, .12, {
        scaleY: 1
    })

nose.to( neus , nosetiming, {
    rotation: 5
}, 'rotate_left')
    .to( neus, nosetiming, {
        rotation: -5
    }, 'rotate_right')
    .to( neus, ( nosetiming / 2), {
        rotation: 0
    })

function orenAnimation(){
    let random = ((Math.random()*3) + 1);

    oren.to( oorLeft, .05, {
        rotation: 10,
        transformOrigin:'80% 80%',
        delay: random
    })
        .to( oorLeft, .2, {
            rotation: 0
        })
}
orenAnimation();

window.addEventListener('click', function(){
    nose.play(0);
})
