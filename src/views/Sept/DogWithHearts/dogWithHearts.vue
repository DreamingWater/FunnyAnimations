<template>
  <div class="dog">
    <div class="heart heart--1"></div>
    <div class="heart heart--2"></div>
    <div class="heart heart--3"></div>
    <div class="heart heart--4"></div>
    <div class="head">
      <div class="year year--left"></div>
      <div class="year year--right"></div>
      <div class="nose"></div>
      <div class="face">
        <div class="eye eye--left"></div>
        <div class="eye eye--right"></div>
        <div class="mouth"></div>
      </div>
    </div>
    <div class="body">
      <div class="cheast"></div>
      <div class="back"></div>
      <div class="legs">
        <div class="legs__front legs__front--left"></div>
        <div class="legs__front legs__front--right"></div>
        <div class="legs__back legs__back--left"></div>
        <div class="legs__back legs__back--right"></div>
      </div>
      <div class="tail"></div>
    </div>
  </div>
</template>

<script setup>

</script>



<style lang="scss">
//color variables

$bg-color: #3f3456;
$main-color: #f79e38;
$prime-color: #e99036;
$white-color: #fff;
$black-color: #000;
$red-color: #e64356;

//z-index

$z-index-dog: 0;
$z-index-body: 3;
$z-index-head: 4;
$z-index-tail: 2;
$z-index-legs: 2;
$z-index-cheast: 4;
$z-index-hair: 2;
$z-index-face: 6;
$z-index-mouth: 6;
$z-index-eyes: 6;
$z-index-years: 1;
$z-index-nose: 7;

//animation variables

$duration: 2s;
$total-steps: 20;
$interval: 200ms;
$easing: ease-out;

html, body {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $bg-color;
  background-size: fill;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.dog {
  position: absolute;
  top: 52%;
  width: 50vmin;
  height: 40vmin;
  z-index: $z-index-dog;
}
.heart{
  position: absolute;
  width: 6%;
  height: 7%;
  background-color: $red-color;
  border-bottom-right-radius: 23%;
  opacity: 0;
  animation-fill-mode: both;
  @keyframes heart-beat {
    0% { transform: scale(0.75) rotate(35deg); opacity: 1; }
    5%, 15%, 25% { transform: scale(1) rotate(35deg); }
    10%, 20% { transform: scale(0.75) rotate(35deg); }
    70% { opacity: 1;}
    100% {transform: rotate(35deg)  translateY(-10px) translateX(-10px); opacity: 0;}
  }
  &--1 {
    top: -25%;
    left: 15%;
    animation: heart-beat $duration $easing infinite 1.5s;
  }
  &--2 {
    top: -36%;
    left: 7%;
    animation: heart-beat $duration $easing infinite 1s;
  }
  &--3 {
    top: -48%;
    left: 14%;
    animation: heart-beat $duration $easing infinite 0.5s;
  }
  &--4 {
    top: -53%;
    left: -3%;
    animation: heart-beat $duration $easing infinite;
  }
}
.heart:before,
.heart:after{
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  border-radius: 50%;
  background-color: $red-color;
}
.heart:after{
  bottom: 0px;
  left: -53%;
}
.heart:before{
  top: -53%;
  right: 0px;
  transform: rotate(45deg);
}
.body {
  position: absolute;
  width: 100%;
  height: 50%;
  background-color: $main-color;
  border-top-right-radius: 17% 40%;
  border-top-left-radius: 25%;
  border-bottom-right-radius: 5% 13%;
  border-bottom-left-radius: 30% 40%;
  z-index: $z-index-body;
}
.cheast {
  position: absolute;
  width: 45%;
  height: 100%;
  background-color: $white-color;
  border-top-right-radius: 17% 40%;
  border-top-left-radius: 25%;
  border-bottom-right-radius: 40% 40%;
  border-bottom-left-radius: 40% 40%;
  z-index: $z-index-cheast;
  &:after,
  &:before {
    position: absolute;
    content: '';
    width: 7%;
    height: 55%;
    border-radius: 39%;
    background-color: $white-color;
  }
  &:after {
    top: 36%;
    left: 3%;
    transform: rotate(-1deg);
  }
  &:before {
    top: 19%;
    left: -4%;
  }
}
.head {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: $z-index-head;
  animation: dog-head 1s $easing infinite;
  animation-fill-mode: both;
  animation-direction: alternate;
  @keyframes dog-head {
    to {
      transform: translateX(-3px) rotate(3deg);
    }
  }
}
.tail {
  position: absolute;
  top: -14%;
  left: 92%;
  width: 10%;
  height: 45%;
  background-color: $main-color;
  border-top-right-radius: 30% 30%;
  border-top-left-radius: 40% 30%;
  border-bottom-right-radius: 30% 40%;
  border-bottom-left-radius: 40% 40%;
  z-index: $z-index-tail;
  transform: rotate(20deg);
  animation: dog-tail 170ms $easing infinite;
  @keyframes dog-tail {
    from, to {
      transform: rotate(10deg);
    }
    50%, 60% {
      transform: rotate(70deg) translateX(10px) translateY(2px);
    }
  }
  &:before {
    position: absolute;
    content: '';
    top: -8%;
    left: -7%;
    width: 100%;
    height: 50%;
    background-color: $main-color;
    border-radius: 50%;
    animation: dog-tail-before 160ms $easing infinite;
    @keyframes dog-tail-before {
      from, to {
        transform: translateX(0);
      }
      50% {
        transform:  translateX(3px);
      }
    }
  }
}
.legs {
  position: absolute;
  top: 97%;
  left: 0;
  width: 100%;
  height: 30%;
  z-index: $z-index-legs;
  animation: dog-legs 1s $easing infinite 1.5s;
  animation-fill-mode: both;
  animation-direction: alternate;
  @keyframes dog-legs {
    from {
      transform: translateY(-1px);
    }
    to {
      transform: translateY(0px);
    }
  }
  &__front,
  &__back {
    width: 10%;
    height: 100%;
    background-color: $main-color;
    position: absolute;
    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 100%;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      width: 100%;
      height: 49%;
      background-color: $white-color;
      border-bottom-right-radius: 100%;
      border-bottom-left-radius: 100%;
    }
  }
  &__front {
    &--left {
      left: 38%;
      transform: rotate(1deg);
    }
    &--right {
      left: 20%;
      transform: rotate(-4deg);
    }
  }
  &__back {
    &--left {
      left: 69%;
      transform: rotate(-7deg);
    }
    &--right {
      left: 85%;
      transform: rotate(2deg);
    }
  }
}
.face {
  height: 40%;
  width: 42%;
  position: absolute;
  top: -13%;
  left: -3%;
  background-color: $white-color;
  border-top-right-radius: 45% 50%;
  border-top-left-radius: 35% 50%;
  border-bottom-left-radius: 35% 21%;
  z-index: $z-index-face;
  &:after,
  &:before {
    content: '';
    position: absolute;
    background-color: $main-color;
  }
  &:after {
    width: 27%;
    left: 7%;
    height: 23%;
    border-top-right-radius: 100% 100%;
    border-bottom-left-radius: 49% 100%;
    transform: rotate(-64deg);
    top: -1%;
    border-top-left-radius: 0% -20%;
    border-bottom-right-radius: 52% 0%;
    box-shadow: rgba(0, 0, 0, 0.1) 2px -6px 11px 1px
  }
  &:before {
    width: 55%;
    left: 42%;
    top: 0%;
    height: 35%;
    border-radius: 23% 7% 16% 12%;
    transform: rotate(0deg) scaleX(-1);
  }
}
.eye {
  width: 6%;
  height: 6%;
  position: absolute;
  border-radius: 100%;
  top: 24%;
  background-color: $black-color;
  z-index: $z-index-eyes;
  animation: dog-eye $interval * 9 infinite;
  @keyframes dog-eye {
    from, to {
      animation-timing-function: step-end;
      opacity: 1;
    }
    50%, 55% {
      animation-timing-function: step-start;
      opacity: 0;
    }
  }
  &--left {
    left: 27%;
  }
  &--right {
    left: 46%;
  }
}
.mouth {
  background-color: transparent;
  border-color: $black-color;
  width: 44%;
  border-style: solid;
  border-width: 0.7vmin;
  height: 48%;
  z-index: $z-index-mouth;
  position: absolute;
  bottom: 35%;
  left: 14%;
  border-top-color: transparent;
  border-bottom-left-radius: 72% 100%;
  border-bottom-right-radius: 77% 100%;
  border-right-color: transparent;
  border-top-right-radius: 50%;
  border-left-color: transparent;
  transform: rotate(-41deg);
}
.year {
  position: absolute;
  &--left {
    top: -40%;
    left: 3%;
    height: 47%;
    width: 19%;
    z-index: $z-index-years;
    background-color: $prime-color;
    border-top-left-radius: 68% 100%;
    border-top-right-radius: 100% 100%;
    transform-origin: bottom center;
    animation: left-year 1000ms ease-out infinite;
    animation-fill-mode: both;
    animation-direction: alternate;
    @keyframes left-year {
      from {
        transform: rotate(-26deg);
      }
      25% {
        transform: rotate(-35deg);
      }
      50% {
        transform: rotate(-26deg);
      }
      to {
        transform: rotate(-40deg);
      }
    }
  }
  &--right {
    top: -39%;
    left: 19%;
    height: 38%;
    width: 18%;
    z-index: $z-index-years;
    background-color: $main-color;
    border-top-left-radius: 56% 100%;
    border-top-right-radius: 100% 100%;
    transform-origin: bottom center;
    border-bottom-right-radius: 14% 38%;
    animation: right-year 1000ms ease-out infinite;
    animation-fill-mode: both;
    animation-direction: alternate;
    @keyframes right-year {
      from {
        transform: rotate(-331deg);
      }
      25% {
        transform: rotate(-320deg);
      }
      50% {
        transform: rotate(-331deg);
      }
      to {
        transform: rotate(-320deg);
      }
    }
  }
}
.nose {
  position: absolute;
  width: 24%;
  height: 24%;
  background-color: $white-color;
  z-index: $z-index-nose;
  left: -12%;
  top: -3%;
  border-bottom-left-radius: 50% 88%;
  border-top-left-radius: 11% 43%;
  transform: rotate(12deg);
  &:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 55%;
    background-color: $black-color;
    border-radius: 100%;
    left: -7%;
    top: -18%;
  }
}
</style>