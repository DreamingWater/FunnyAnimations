<template>
  <div class="shyGhost-container">
    <div class="scene-container stars-out" tabindex="1">
      <div class="ghost-container">
        <div class="ghost">
          <div class="ghost-head">
            <div class="ghost-face">
              <div class="eyes-row">
                <div class="eye left"></div>
                <div class="eye right"></div>
              </div>
              <div class="mouth-row">
                <div class="cheek left"></div>
                <div class="mouth">
                  <div class="mouth-top"></div>
                  <div class="mouth-bottom"></div>
                </div>
                <div class="cheek right"></div>
              </div>
            </div>
          </div>
          <div class="ghost-body">
            <div class="ghost-hand hand-left"></div>
            <div class="ghost-hand hand-right"></div>
            <div class="ghost-skirt">
              <div class="pleat down"></div>
              <div class="pleat up"></div>
              <div class="pleat down"></div>
              <div class="pleat up"></div>
              <div class="pleat down"></div>
            </div>
          </div>
        </div>
        <div class="stars">
          <div class="star orange pointy star-1"><div class="star-element"></div></div>
          <div class="star orange pointy star-2"><div class="star-element"></div></div>
          <div class="star yellow pointy star-3"><div class="star-element"></div></div>
          <div class="star yellow pointy star-4"><div class="star-element"></div></div>
          <div class="star blue round star-5"><div class="star-element"></div></div>
          <div class="star blue round star-6"><div class="star-element"></div></div>
        </div>
      </div>
      <div class="shadow-container">
        <div class="shadow"></div>
        <div class="shadow-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import { onMounted, onBeforeMount } from "vue";
import { add_script, add_css_style } from "@/utils/AppendCSSJS";
onMounted(() => {
  add_script('https://codepen.io/z-/pen/a8e37caf2a04602ea5815e5acedab458.js')
  setTimeout(()=>{
    add_script('/src/views/Decem/ShyGhost/shyGhost.js');
  },500)

});
</script>

<style scoped lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css');
$dark-bg: #090909;
$shadow: #1B1D18;
$ghost-white: #f1f0e5;
$face-dark: #271917;
$face-pink: #F5C1B6;

$ghost-width: 80px;
$ghost-height: 115px;

$star-blue: #83D0BC;
$star-yellow: #FFD186;
$star-orange: #DF814D;

// Animation timings
$ghost-exit-speed: 800ms;
$ghost-entrance-speed: 1000ms;
$waving-speed: 400ms;
$blink-speed: 50ms;
$mouth-speed: 150ms;
$shadow-disappear-speed: 400ms;
$shadow-appear-speed: 400ms;
$star-entrance-speed: 500ms;
$star-exit-speed: 400ms;
$star-exit-delay: 200ms;
$star-entrance-delay: 200ms;

@keyframes hover {
  0% { top: 0; }
  100% { top: 8px; }
}

@keyframes star-entrance {
  0% { transform: rotate(-735deg) scale(0, 0) }
  100% { transform: rotate(0) scale(1, 1) }
}
@keyframes star-exit {
  0% { transform: rotate(0) scale(1, 1) }
  100% { transform: rotate(360deg) scale(0, 0) }
}

@keyframes twinkle {
  0% { transform: rotate(0deg) scale(1, 1); }
  25% { transform: rotate(10deg) scale(0.8, 0.8); }
  50% { transform: rotate(0deg) scale(0.9, 0.9); }
  75% { transform: rotate(-20deg) scale(0.6, 0.6); }
  100% { transform: rotate(0deg) scale(1, 1); }
}

@keyframes waving {
  0% { transform: rotate(-45deg); }
  25% { transform: rotate(-55deg); }
  50% { transform: rotate(-45deg); }
  75% { transform: rotate(-55deg); }
  100% { transform: rotate(-45deg); }
}

html {
  height: 100%;
}

.shyGhost-container {
  margin-left: 200px;
  margin-top: 200px;
  width: 1300px;
  height:750px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: $dark-bg;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  cursor: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c0860373-721d-47e1-acfa-f792c86579d2), auto;
}

.scene-container {
  position: relative;
  width: 140px;
  height: 160px;
  &:focus {
    outline: none;
  }
  &.run-away {
    .ghost {
      transform: rotateX(-10deg) scale3d(1.4, 4, 1) translate3d(0, 130%, -30px);
      transition: transform $ghost-exit-speed ease;
    }
  }
  &.descend {
    .ghost {
      transform: translate3d(0, 130%, 0);
    }
  }
}

.ghost-container {
  position: relative;
  height: $ghost-height + 25px;
  padding: 20px 30px 0 30px;
  overflow: hidden;
  perspective: 30px;
  cursor: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c0860373-721d-47e1-acfa-f792c86579d2), auto;

}

.ghost {
  position: relative;
  height: $ghost-height;
  z-index: 1;
  transition: transform $ghost-entrance-speed ease-out;
  &.hover {
    animation: hover 600ms ease-in-out infinite alternate;
  }
}

.ghost-head {
  position: relative;
  width: $ghost-width;
  height: 0;
  padding-top: 100%;
  border-radius: 100%;
  background-color: $ghost-white;
  .ghost-face {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 50px;
    height: 30px;
    z-index: 1
  }
}
.eyes-row,
.mouth-row {
  position: relative;
  height: 10px;
}
.mouth-row {
  margin-top: 3px;
}
.eye {
  height: 10px;
  width: 10px;
  background-color: $face-dark;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  transition: height $blink-speed ease;
  &.left {
    left: 5px;
  }
  &.right {
    right: 5px;
  }
  &.blink {
    height: 0;
  }
}
.mouth {
  position: absolute;
  left: 50%;
  top: 0;
  height: 10px;
  transform: translate3d(-50%, 0, 0);
  .mouth-top {
    width: 18px;
    height: 2px;
    border-radius: 2px 2px 0 0;
    background-color: $face-dark;
  }
  .mouth-bottom {
    position: absolute;
    width: 18px;
    height: 8px;
    bottom: 0;
    overflow: hidden;
    transition: height $mouth-speed ease;
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 18px;
      height: 16px;
      border-radius: 100%;
      background-color: $face-dark;
    }
  }
  &.open {
    .mouth-bottom {
      height: 16px;
    }
  }
  &.closed {
    .mouth-bottom {
      height: 0;
    }
  }
}
.cheek {
  position: absolute;
  top: 0;
  width: 12px;
  height: 4px;
  background-color: $face-pink;
  border-radius: 100%;
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
}

.ghost-body {
  position: absolute;
  top: $ghost-width/2;
  height: 0;
  width: $ghost-width;
  padding-top: 85%;
  background-color: $ghost-white;
}

.ghost-hand {
  height: 36px;
  width: 22px;
  background: $ghost-white;
  border-radius: 100%/90%;
  position: absolute;
  &.hand-left {
    left: -12px;
    top: 10px;
    transform: rotateZ(-45deg);
    left: 0;
    top: 5px;
    transform-origin: bottom center;
    &.waving {
      animation: waving $waving-speed linear;
    }
  }
  &.hand-right {
    right: -12px;
    top: 10px;
    transform: rotateZ(45deg);
  }
}
.ghost-skirt {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  transform: translateY(50%);
  .pleat {
    width: 20%;
    height: 8px;
    border-radius: 100%;
    &.down {
      background-color: $ghost-white;
    }
    &.up {
      background-color: $dark-bg;
      position: relative;
      top: 1px;
    }
  }
}

.shadow-container {
  transition: transform $shadow-appear-speed ease;
  &.disappear {
    transform: scale3d(0, 1, 1);
    transition: transform $shadow-disappear-speed ease;
  }
}
.shadow {
  position: absolute;
  top: calc(100% - 4px);
  left: 0;
  width: 100%;
  height: 8px;
  background-color: $shadow;
  border-radius: 100%;
  z-index: -1;
}
.shadow-bottom {
  position: absolute;
  top: 100%;
  left: 0;
  height: 4px;
  width: 100%;
  overflow: hidden;
  &:after {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    height: 8px;
    left: 0;
    bottom: 0;
    border-radius: 100%;
    background-color: $shadow;
    z-index: 2;
  }
}

.star {
  position: absolute;
  animation: twinkle 2s infinite linear;
  transition: top $star-exit-speed ease-out, left $star-exit-speed ease-out;
  &.round {
    .star-element {
      height: 9px;
      width: 9px;
      border-radius: 100%;
    }
  }
  &.pointy {
    transform: rotate(-15deg);
    .star-element {
      height: 6px;
      width: 6px;
      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        background: green;
        border-radius: 6px;
      }
      &:before {
        height: 6px;
        width: 12px;
        left: -3px;
        top: 0;
        transform: skewX(60deg);
      }
      &:after {
        height: 12px;
        width: 6px;
        right: 0;
        bottom: -3px;
        transform: skewY(-60deg);
      }
    }
  }
  &.orange .star-element {
    &, &:before, &:after {
      background-color: $star-orange;
    }
  }
  &.yellow .star-element {
    &, &:before, &:after {
      background-color: $star-yellow;
    }
  }
  &.blue .star-element {
    &, &:before, &:after {
      background-color: $star-blue;
    }
  }
}
@for $i from 1 through 6 {
  .star-#{$i} {
    top: 130%;
    left: 40% + 4% * ($i - 1);
    transition-delay: $star-exit-delay + 50ms * ($i - 1);
    animation-delay: $star-entrance-delay * ($i - 1);
    @if $i % 2 == 1 {
      z-index: 2;
    }
  }
}
.move-stars-out {
  .star-element {
    animation: star-entrance $star-entrance-speed;
  }
}
.stars-out {
  .star {
    transition: top $star-entrance-speed ease-out, left $star-entrance-speed ease-out;
  }
  .star-1 {
    top: 75%;
    left: 6%;
  }
  .star-2 {
    top: 35%;
    left: 88%;
  }
  .star-3 {
    top: 8%;
    left: 20%;
  }
  .star-4 {
    top: 70%;
    left: 92%;
  }
  .star-5 {
    top: 35%;
    left: 4%;
  }
  .star-6 {
    top: 2%;
    left: 70%;
  }
  @for $i from 1 through 6 {
    .star-#{$i} {
      $delay: $star-entrance-delay * ($i - 1);
      transition-delay: $delay, $delay;
      .star-element {
        animation-delay: $delay;
      }
    }
  }
}
.move-stars-in {
  .star-element {
    animation: star-exit $star-exit-speed linear;
  }
  @for $i from 1 through 6 {
    .star-#{$i} .star-element {
      animation-delay: $star-exit-delay - 100ms + 50ms * ($i - 1);
    }
  }
}
</style>