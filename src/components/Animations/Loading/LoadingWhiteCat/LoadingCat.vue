<template lang="pug">
  - var segments = 30;
  .cat-container
    .cat
      - while (segments--) {
      .cat__segment
      - }
</template>




<style  lang="scss">
$angleSpan: 40deg;
$dur: 2s;
$delayInc: $dur / 100;
$segments: 30;
$timing: cubic-bezier(0.6,0,0.4,1);
$playState: running;
// colors
$w1: hsl(0,0%,100%);
$w1T: hsla(0,0%,100%,0);
$w2: hsl(0,0%,90%);
$w2T: hsla(0,0%,90%,0);
$w3: hsl(0,0%,80%);
$w3T: hsla(0,0%,80%,0);
$bk: hsl(0,0%,10%);
$bkT: hsla(0,0%,10%,0);
$pk: hsl(0,60%,75%);
$pkT: hsla(0,60%,75%,0);

* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.cat-container {

  display: flex;
  font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
  height: 100vh;
  line-height: 1.5;
}
.cat {
  margin: auto;
  position: relative;
  width: 14em;
  height: 14em;
  &__segment {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3em;
    height: 2em;
    transform: translate(-50%,-50%);
    &:before {
      animation: loop $dur $timing infinite $playState;
      background: linear-gradient(90deg,$w1 20%,$w2 20% 80%,$w1 80%);
      border-radius: 0.25em;
      content: "";
      display: block;
      will-change: transform;
      width: 100%;
      height: 100%;
    }
    &:first-of-type {
      width: 4em;
      height: 4em;
      z-index: 1;
      &:before {
        background:
            // eyes
            radial-gradient(0.25em 0.25em at 1.25em 1.6em,$w1 48%,$w1T 50%),
            radial-gradient(0.75em 0.75em at 1.25em 1.75em,$bk 48%,$bkT 50%),
            radial-gradient(0.25em 0.25em at 2.75em 1.6em,$w1 48%,$w1T 50%),
            radial-gradient(0.75em 0.75em at 2.75em 1.75em,$bk 48%,$bkT 50%),
              // mouth
            radial-gradient(0.9em 0.8em at 1.5em 2.65em,$w1 48%,$w1T 50%),
            radial-gradient(0.9em 0.8em at 2.5em 2.65em,$w1 48%,$w1T 50%),
            radial-gradient(1em 0.8em at 1.6em 2.75em,$w3 48%,$w3T 50%),
            radial-gradient(1em 0.8em at 2.4em 2.75em,$w3 48%,$w3T 50%),
              // nose
            radial-gradient(0.75em 0.75em at 50% 2.5em,$pk 48%,$pkT 50%),
              // head
            radial-gradient(4em 3em at 50% 2em,$w1 48%,$w1T 50%),
            radial-gradient(4em 3em at 50% 2.2em,$w3 48%,$w3T 50%),
              // ears
            radial-gradient(1em 3em at 0.75em 1.5em,$pk 39%,$w1 40% 49%,$w1T 50%),
            radial-gradient(1em 3em at 3.25em 1.5em,$pk 39%,$w1 40% 49%,$w1T 50%),
              // paws
            radial-gradient(1em 2em at 0.5em 2.8em,$w1 48%,$w1T 50%),
            radial-gradient(1em 2em at 0.5em 3em,$w3 48%,$w3T 50%),
            radial-gradient(1em 2em at 3.5em 2.8em,$w1 48%,$w1T 50%),
            radial-gradient(1em 2em at 3.5em 3em,$w3 48%,$w3T 50%);
        background-repeat: no-repeat;
      }
    }
    &:last-of-type {
      width: 3em;
      height: 4em;
      &:before {
        background:
            linear-gradient(90deg,$w1 20%,$w2 20% 80%,$w1 80%) 0 1.5em / 3em 0.5em,
            radial-gradient(3em 2em at top center,$w2 30%,$w1 31% 48%,$w1T 50%) 0 2em /  3em 2em,
            radial-gradient(1em 4em at 0.5em 0,$w1 48%,$w1T 50%) 0 2em / 3em 2em,
            radial-gradient(1em 4em at 2.5em 0,$w1 48%,$w1T 50%) 0 2em / 3em 2em;
        background-repeat: no-repeat;
      }
    }
    $negAngleHalf: -$angleSpan/2;
    $angleInc: $angleSpan/$segments;
    @for $s from 1 through $segments {
      $rotateBy: $angleInc * ($s - 1);
      &:nth-of-type(#{$s}) {
        transform: translate(-50%,-50%) rotate($negAngleHalf + $rotateBy);
      }
      &:nth-of-type(#{$s}):before {
        animation-delay: $delayInc * ($s - 1);
        transform: translateX(6em);
      }
    }
  }
}

// animation
@keyframes loop {
  from {
    transform: rotate(0) translateX(6em);
  }
  to {
    transform: rotate(-1turn) translateX(6em);
  }
}
</style>