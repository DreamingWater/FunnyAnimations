const hearts = document.querySelectorAll('.hearts *');
hearts.forEach((h) => {
    const bbox = h.getBBox();
    const destX = (Math.random() * 150 + 80) * gsap.utils.random([-1, 1]);
    const destY = (Math.random() * 150 + 80) * gsap.utils.random([-1, 1]);

    const rotation = Math.atan2(destY, destX) * 180 / Math.PI + 90;

    gsap.timeline({
        repeat: -1,
        repeatDelay: Math.random(),
        delay: -Math.random() * 2
    }).set(h, {
        rotate: rotation
    }).to(h, {
        x: destX,
        y: destY,
        duration: 'random(0.8, 1.8)',
        ease: 'elastic.out(0.3, 0.4)'
    }).to(h, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    }, '-=0.3')
})
