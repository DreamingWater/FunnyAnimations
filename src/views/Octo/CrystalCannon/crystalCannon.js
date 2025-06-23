let sequence = new TimelineMax({ paused: true });
let sequencetext = new TimelineMax({ paused: true });

let button = document.getElementById("button");
button.addEventListener("click", function (e) {
    e.preventDefault();
    sequence.restart();
    sequencetext.restart();
});

TweenMax.fromTo(
    "#exteriorButton",
    1.5,
    {
        scale: 0,
        opacity: 1,
        transformOrigin: "50% 50%"
    },
    {
        scale: 1,
        opacity: 0,
        repeat: -1
    }
);

sequence
    .add("blowAway", "+=1")
    .to(
        "#cannon",
        2,
        {
            rotation: -25,
            transformOrigin: "35% 35%"
        },
    )
    .staggerFromTo(
        "#bubbles path",
        2,
        {
            scale: 0,
            y: 0,
            opacity: 0
        },
        {
            scale: 4,
            y: -130,
            x: 200,
            opacity: 0.95,
            ease: Back.easeOut
        },
        0.3,
        "blowAway"
    )

    .staggerFromTo(
        "#bubbles path",
        2,
        {
            opacity: 0.9
        },
        {
            opacity: 0
        },
        0.3,
        "blowAway"
    )
    .to("#cannon", 1, {
        rotation: 0,
        transformOrigin: "35% 35%"
    });

sequencetext
    .add("blowAway", "+=1")
    .to(
        "#cannon",
        2,
        {
            rotation: -25,
            transformOrigin: "35% 35%"
        },
    )
    .staggerFromTo(
        "#bubbles text",
        2,
        {
            scale: 0,
            y: 0,
            opacity: 1
        },
        {
            scale: 4,
            y: -130,
            x: 200,
            opacity: 1, // Ensure final opacity is 1
            ease: Back.easeOut
        },
        0.3,
        "blowAway"
    )
    .to("#cannon", 1, {
        rotation: 0,
        transformOrigin: "35% 35%"
    });