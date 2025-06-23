let amountSpines = 0;
let spinesinterval = null;
const cactus = document.querySelector('.cactus');

function createParticle () {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    const x = window.innerWidth * 0.5;
    const y = window.innerHeight * 0.7;

    const size = Math.floor(Math.random() * 30 + 10);
    particle.style.width = `${size * 0.6}px`;
    particle.style.height = `${size}px`;
    particle.style.filter = `brightness(${Math.random() + 0.5})`;

    // Generate a random x & y destination within a distance of 75px from the mouse
    const destinationX = x + (Math.random() - 0.5) * 2 * (innerWidth * 0.5);
    const destinationY = y + (Math.random() - 0.8) * 2 * (innerHeight * 0.5);
    const rotate = Math.atan2(destinationY - y, destinationX - x) * 180 / Math.PI + 90;

    particle.animate({
        transform: [`translate(${x}px, ${y}px) rotate(${rotate}deg)`, `translate(${destinationX}px, ${destinationY}px) rotate(${rotate}deg)`],
        opacity: [1, 1, 0],
        offset: [0, 0.7]
    }, {
        duration: Math.random() * 1000 + 800,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 200,
        fill: 'backwards'
    })
        .onfinish = () => particle.remove();
}

let lastFrame = Date.now();
function pop () {
    requestAnimationFrame(pop);
    if (Date.now() - lastFrame > 50) {
        createParticle();
        lastFrame = Date.now();
    }
}
requestAnimationFrame(pop);
