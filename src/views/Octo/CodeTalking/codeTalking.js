'use strict';
var TweenMax = TweenMax;
var TimelineLite = TimelineLite;
TweenMax.to(".move-code-to-left", 0, {x: 400, y: 10});
TweenMax.to(".move-code-to-right", 0, {x: -330});


TweenMax.from(".float-shape", 2, {
    y: 7,
    yoyo: true,
    repeat: -1
});


TweenMax.from("#papa-head", 0.5, {
    transformOrigin: "bottom",
    rotation: -1,
    yoyo: true,
    repeat: -1
});

TweenMax.to("#papa_arm", 3, {
    transformOrigin: "20% 70%",
    scale: 1.1,
    rotation: 5,
    yoyo: true,
    repeat: -1
});

TweenMax.to("#papa_hand", 0.5, {
    transformOrigin: "10% 80%",
    rotation: 7,
    yoyo: true,
    repeat: -1
});

TweenMax.to("#blond-head", 0.4, {
    transformOrigin: "70% 90%",
    rotation: -1.2,
    yoyo: true,
    repeat: -1
});


TweenMax.to("#blond-guy", 2, {
    transformOrigin: "center",
    rotation: 0.7,
    y: 2,
    yoyo: true,
    repeat: -1
});



TweenMax.to("#girl2", 2.25, {
    transformOrigin: "center",
    rotation: -1.5,
    y: 4,
    yoyo: true,
    repeat: -1
});

TweenMax.staggerTo(".leg1, .leg2", 2.25, {
    transformOrigin: "center",
    x: 5,
    yoyo: true,
    repeat: -1
}, 1.1);


TweenMax.staggerTo("#girl", 2.25, {
    transformOrigin: "center",
    y: 5,
    rotation: 1,
    yoyo: true,
    repeat: -1
}, 1.1);


var girlBlinkAnim = new TimelineLite();

girlBlinkAnim.to("#girl-eyes", 5, {
    visibility: "visible"
})
    .to("#girl-eyes", 0.1, {
        visibility: "hidden"
    })
    .to("#girl-eyes", 10, {
        visibility: "visible"
    })
    .to("#girl-eyes", 0.1, {
        visibility: "hidden"
    })
    .to("#girl-eyes", 0.1, {
        visibility: "visible"
    })
    .to("#girl-eyes", 0.1, {
        visibility: "hidden"
    })
    .call(function () {
        girlBlinkAnim.restart();
        girlBlinkAnim.play();
    });

var gingerAnim = new TimelineLite();

gingerAnim.to("#ginger-eyes", 0, {
    x: 1.5,
    y: 2
})
    .to(".ginger-hand1", 0.25, {
        transformOrigin: "center",
        y: -3,
        yoyo: true,
        repeat: 8
    })
    .to(".ginger-hand2", 0.25, {
        transformOrigin: "center",
        y: -3,
        yoyo: true,
        repeat: 8
    }, "-=2")
    .to("#ginger-head", 0.5, {
        transformOrigin: "center",
        rotation: 7
    })
    .to("#ginger-eyes", 0.5, {
        x: 0,
        y: 0
    }, "-=0.5")
    .to("#ginger-eyes", 1, {})
    .to("#ginger-eyes", 0.5, {
        x: 1.5,
        y: 2
    })
    .to("#ginger-head", 0.5, {
        rotation: 0
    }, "-=0.5")

    .call(function () {
        gingerAnim.restart();
        gingerAnim.play();
    });

var codeStripes = [];
var allStripes = document.querySelector("#animated-code");
var codeMask = document.querySelector("#SVGID_33_");
Array.from(allStripes.childNodes).forEach(function (node) {
    if (node.nodeType === 1) {
        codeStripes.push(node);
    }
});

function getNextStripe(stripeNum) {
    if (stripeNum >= 1) {
        codeStripes[stripeNum].classList.remove("stripe-hidden");
        return setTimeout(function () {
            getNextStripe(stripeNum - 1);
        }, 200);
    } else {

        codeMask.classList.add("moved-bottom");
        allStripes.classList.add("moved-top");

        setTimeout(function () {

            codeMask.classList.remove("moved-bottom");
            allStripes.classList.remove("moved-top");

            codeStripes.forEach(function (stripe) {
                stripe.classList.add("stripe-hidden");
            });
            setTimeout(function () {
                getNextStripe(codeStripes.length - 1);
            }, 500);
        }, 500);
    }
}
codeStripes.forEach(function (stripe) {
    stripe.classList.add("stripe-hidden", "stripe");
});
getNextStripe(codeStripes.length - 1);


