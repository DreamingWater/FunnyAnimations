//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin)

// create master timeline
const master = gsap.timeline({ defaults: {duration: 1 }, repeat: -1, repeatDelay: 5 })

// create the landing part of the
// animation
const landing = () => {
    const tl = gsap.timeline()

    tl.to('.bird', {
        duration: 1,
        ease: 'power1.inOut',
        motionPath:{
            path: "#path",
            align: "#path",
            autoRotate: true,
            start: 0.25,
            end: 0.80
        }
    })
        .to('.bird', {
            x: 0,
            y: 0,
            duration: 1,
            rotate: 0,
            ease: 'bounce.out'
        })
    return tl
}


// animate the legs
const landingLegs = () => {
    const tl = gsap.timeline()

    tl.to('.legs', {
        scale: 1,
        duration: 0.1,
        ease: 'linear'
    })
    return tl
}
// animate the legs
const changeLegs = () => {
    const tl = gsap.timeline()

    tl.to('.legs', {
        scale: 0.5,
        duration: 0.1,
        ease: 'linear'
    })
    return tl
}

// control the motion of the headset
const headsetMove = () => {
    const tl = gsap.timeline()
    tl.fromTo('.headset', {
        x: -30,
        y: -30
    }, {
        x: 0,
        y: 0,
        duration: 0.5
    })
    return tl
}

// notes fading in
const notesFadeInOut = () => {
    const tl = gsap.timeline()
    tl.to('.note', {
        autoAlpha: 1,
        scale: 1,
        stagger: 0.2
    })
        .to('.note', {
            scale: 0.2,
            rotation: -90,
            autoAlpha: 0,
            stagger: 0.2,
            duration: 2
        })
    return tl
}

// move the eyes towards the notes
const eyesMove = () => {
    const tl = gsap.timeline()
    tl.from(['.left-eyeball', '.right-eyeball'], {
        x: 50,
        y: 30,
        duration: 0.4,
        ease: 'linear'
    })
    return tl
}

// move the eyes straight
const eyesStraight = () => {
    const tl = gsap.timeline()
    tl.to(['.left-eyeball', '.right-eyeball'], {
        x: 20,
        y: 10,
        duration: 1,
        ease: 'linear'
    })
    return tl
}

// set some properties before the
// start of the main animation
gsap.set('.legs', {transformOrigin: 'top', scale: 0.3})

gsap.set('.note', {transformOrigin: 'left top', scale: 0, autoAlpha: 0})

gsap.set('#bird-pic', {autoAlpha: 1})

// nest the child timelines inside
// the master and adjust timing
const animate = () => {
    master.add(landing(), 'start')
        .add(landingLegs(), '>-1')
        .add(changeLegs(), '>0.2')
        .add(landingLegs(), '>0.3')
        .add(headsetMove(), 'start+=0.3')
        .add(notesFadeInOut(), '>+0.8')
        .add(eyesMove(), '<+0.3')
        .add(eyesStraight(), '>+2')
}

// run the animation
animate()