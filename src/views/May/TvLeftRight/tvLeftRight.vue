
<template>
  <div class="floor"></div>

  <h1 class="drink-milk">
    <span class="skate">🛼</span>
    <span class="word">drink</span>
    <span class="word">milk</span>
    <span class="word">and</span>
    <span class="word">kick</span>
    <span class="word">🍑</span>
    <span class="word">.</span>
  </h1>

  <img class="aircraft" src="https://assets.codepen.io/25387/aircraft.gif" alt="aircraft">

  <canvas class="codepen-canvas" width="600" height="600"></canvas>

  <canvas class="jigglypuff-canvas" width="600" height="600"></canvas>

  <div class="screen">
    <iframe src="https://cdpn.io/pen/debug/gONYmNM" frameborder="0"></iframe>
  </div>

  <img class="tv" src="https://assets.codepen.io/25387/tv.png" alt="">

  <div class="screen">
    <iframe src="https://cdpn.io/pen/debug/JGEKJr" frameborder="0"></iframe>
  </div>

  <img class="tv" src="https://assets.codepen.io/25387/tv-2.png" alt="">

  <img class="parrot" src="https://assets.codepen.io/25387/parrot.gif" alt="parrot">

  <a class="lightning" href="https://the-pen-groove.github.io">
    <img title="yes" src="https://assets.codepen.io/25387/Lightning02.gif" alt="lightning">
  </a>

</template>

<script lang="ts" setup>
  import { ref, onMounted,onBeforeMount } from 'vue';
  import { add_script } from '@/utils/AppendCSSJS';

  onMounted(() => {
    add_script('https://unpkg.com/zdog@1/dist/zdog.dist.min.js');
    setTimeout(() => {
      add_script('/src/views/May/TvLeftRight/tvLeftRight.js');
    }, 1000);

  });
</script>

<style  lang="css">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

body {
  margin: 0;
  height: 100dvh;
  perspective: 460px;
  perspective-origin: 50% 54%;
  overflow: hidden;
  background:
      radial-gradient(
              circle at -20% bottom,
              #111, transparent 40%
      ),
      radial-gradient(
              circle at 120% bottom,
              #111, transparent 40%
      ),
      radial-gradient(
              circle at top right,
              #429, transparent
      ),
      radial-gradient(
              circle at top left,
              #a35 30%, #000
      );
}

.floor {
  width: 100dvw;
  height: 1000dvh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
  transform:
      translate(-50%, -50%)
      rotateX(90deg)
      translateZ(-5dvmin);
  background:
      repeating-linear-gradient(
              35deg,
              transparent,
              hotpink, pink 80px,
              transparent 120px,
              transparent 200px
      ),
      repeating-linear-gradient(
              to bottom,
              violet,
              #104a, #2068 40px,
              rebeccapurple 80px,
              violet 160px
      );
  background-size: 200% 200%;
  animation: floor 30s linear infinite;
}

@keyframes floor {
  to {
    transform:
        translate(-50%, -50%)
        rotateX(90deg)
        translateZ(-52px)
        translateY(10.47%);
  }
}

.drink-milk {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% 120%;
  width: 100%;
  padding: 10dvmin;
  font-size: 7dvmin;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  letter-spacing: 0.92em;
  word-spacing: .05em;
}

.drink-milk .skate,
.drink-milk .word {
  position: absolute;
  translate: -50% -60%;
  color: #fff3;
  padding: .2em;
  background: radial-gradient(
          circle at left center,
          #ff0018,
          #edff6e 35%
  );
  background-clip: text;
  background-size: 200% 200%;
}

.drink-milk .word {
  visibility: hidden;
  text-align: center;
  font-size: 1.25em;
}

.drink-milk:hover .skate {
  opacity: 0;
}

.drink-milk:hover .word {
  color: transparent;
  -webkit-text-stroke: 20px #d3ba;
  animation: word 1.5s linear infinite;
}

:nth-child(1 of .drink-milk .word) {
  animation-delay: 0;
}

:nth-child(2 of .drink-milk .word) {
  animation-delay: .25s
}

:nth-child(3 of .drink-milk .word) {
  animation-delay: .5s;
}

:nth-child(4 of .drink-milk .word) {
  animation-delay: .75s;
}

:nth-child(5 of .drink-milk .word) {
  animation-delay: 1s;
}

:nth-child(6 of .drink-milk .word) {
  animation-delay: 1.25s;
}

@keyframes word {
  from, 10%, 27%, to {
    visibility: hidden;
  }
  20% {
    visibility: visible;
  }
}

.aircraft {
  position: absolute;
  width: 100%;
  top: -12dvw;
  opacity: 0;
  filter:
      saturate(4)
      contrast(10)
      blur(0)
      hue-rotate(60deg);
  transition: all 1s .5s;
  transform: translateZ(0);
}

.drink-milk:hover ~ .aircraft {
  opacity: 1;
}

.codepen-canvas {
  --size: 25dvmin;
  --final-opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -70%;
  max-width: var(--size);
  max-height: var(--size);
  cursor: move;
  opacity: 0;
  background:
      radial-gradient(
              circle at center 55%,
              rgba(255, 255, 40, .5),
              #fff0 30%,
              rgba(255, 255, 0, .7) 30.5%,
              rgba(255, 255, 0, .7) 31%,
              #fff0 31.5%
      );
  border-radius: 50%;
  animation:
      wiggle 15s ease-in-out infinite,
      rainbow-turn 20s linear infinite,
      fade-in 5s forwards;
}

@keyframes wiggle {
  25% {
    translate: -40% -45%;
  }
  50% {
    translate: -37% -55%;
  }
  50% {
    translate: -45% -51%;
  }
  75% {
    translate: -60% -58%;
  }
}

@keyframes rainbow-turn {
  to {
    filter: hue-rotate(1turn);
  }
}

.jigglypuff-canvas {
  --size: 15dvmin;
  --stop-1: 20%;
  --stop-2: 30%;
  --stop-3: 15%;
  position: absolute;
  top: 40%;
  left: 0%;
  translate: -100% -100%;
  max-width: var(--size);
  max-height: var(--size);
  cursor: move;
  opacity: 0;
  animation:
      jigglypuff
      15s ease-in-out infinite,
      fade-in
      5s forwards;
}

@keyframes jigglypuff {
  12% {
    top: var(--stop-1);
  }
  40% {
    top: var(--stop-2);
  }
  to {
    top: var(--stop-3);
    left: calc(120% + var(--size));
  }
}

@keyframes fade-in {
  to {
    opacity: var(--final-opacity, 1);
  }
}

.parrot {
  position: absolute;
  top: 10%;
  left: 110%;
  animation: parrot 8s 1.5s infinite;
}

@keyframes parrot {
  30%, to {
    left: -30%;
  }
}

.screen {
  --shine-opacity: 0;
  width: clamp(165px, 285px, 19dvw);
  aspect-ratio: 4/3.98;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  transform-style: preserve-3d;
  overflow: hidden;
  border-radius: 20px;
  transition: all .5s;
  background: url(https://assets.codepen.io/25387/noise.gif);
}

.screen::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: radial-gradient(
          ellipse 90% 140% at 50% 100%,
          transparent 60%,
          #000f, transparent
  );
  rotate: .5turn;
  opacity: var(--shine-opacity);
  z-index: 1;
}

.screen::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15%;
  background: radial-gradient(
          ellipse 85% 130% at 50% 100%,
          transparent 60%,
          #f6c6, transparent
  );
  opacity: var(--shine-opacity);
}

.screen iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 100%;
  height: 100%;
}

svg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

:nth-child(1 of .screen) {
  --shine-opacity: .5;
  transform:
      translate(-108%, 2.5%)
      rotateY(45deg);
}

:nth-child(2 of .screen) {
  --shine-opacity: 1;
  transform:
      translate(108%, 2.5%)
      rotateY(-45deg);
}

.tv {
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(240px, 500px, 30%);
  vertical-align: middle;
  filter: hue-rotate(100deg) saturate(3);
  transition: all .5s;
  pointer-events: none;
}

:nth-child(1 of .tv) {
  translate: -130% -50%;
  transform-origin: left center;
}

:nth-child(2 of .tv) {
  translate: 30% -50%;
  rotate: y 180deg;
}

.lightning {
  position: absolute;
  top: 0;
  right: 0;
  translate: 20% -15%;
}

.lightning img {
  width: 20dvmin;
  rotate: 60deg;
  opacity: .2;
  scale: .6;
}

.lightning img:hover {
  opacity: 1;
}


</style>