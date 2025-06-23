<script setup>

</script>

<template lang="pug">
  .general-container.general-container
  .shadow
  .dragon1-container
    .tail-spikes
      .base
    .horns-left
    .horns-right
    .body
      .belly
      .spots
      .eye-R
      .eye-L
      .mouth

</template>

<style scoped lang="scss">
//$color-dragon1: #ccd1a7;
//$color-dragon1-belly: #faf3c0;
$color-dragon1: #f11a1a;
$color-dragon1-belly: #e31d1d;
$color-body-shadow: #7e859e;
$color-body-tail: #da2a2a;
$color-blush: pink;
$color-body-tail-triangle: #f54f4f;

.general-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.shadow {
  position: absolute;
  left: 20px;
  bottom: 10px;
  width: 120px;
  height: 30px;
  background-color: rgba(#000, 0.3);
  border-radius: 50%;
}

.dragon1-container {
  margin: 20px;
  position: relative;
}

.horns-left  {
  position: absolute;
  top: -25px;
  left: 15px;
  width: 31px;
  height: 31px;
  background: url("/src/components/Dragon/assets/horn-left.png") no-repeat;
  background-size: contain;
  z-index: 9;
  transform-origin: 150% 200%;
  transform: rotate(-5deg);
  animation: swingRight .5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;

}
.horns-right  {
  position: absolute;
  top: -25px;
  left: 60px;
  width: 31px;
  height: 31px;
  background: url("/src/components/Dragon/assets/horn-right.png") no-repeat;
  background-size: contain;
  z-index: 9;
  transform-origin: 150% 200%;
  transform: rotate(-5deg);
  animation: swingRight .5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;
}
//.horns {
//  position: absolute;
//  top: -30px;
//  left: 40px;
//  &:before {
//    content: '';
//    display: block;
//    height: 30px;
//    width: 20px;
//    background-color: $color-dragon1;
//    border: 1px solid #000;
//    border-top-left-radius: 10px 30px;
//    border-top-right-radius: 10px 30px;
//    transform: rotate(-30deg)                                                      translate(-35px,10px);
//  }
//  &:after {
//    content: '';
//    display: block;
//    height: 30px;
//    width: 20px;
//    background-color: $color-dragon1;
//    border: 1px solid #000;
//    border-top-left-radius: 10px 30px;
//    border-top-right-radius: 10px 30px;
//    transform: rotate(30deg) translate(20px,-17px);
//  }
//}


.body {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: $color-dragon1;
  border: 1px solid #000;
  border-top-left-radius: 50% 60%;
  border-top-right-radius: 50% 60%;
  border-bottom-left-radius: 50% 40%;
  border-bottom-right-radius: 50% 40%;
  box-shadow: inset -5px -7px rgba($color-body-shadow, 0.5);
  &:before {
    content:'';
    background-color: $color-dragon1;
    height: 30px;
    width: 20px;
    display: block;
    border: 1px solid #000;
    border-radius: 50%;
    border-width: 0 0 1px 0px;
    transform: translate(15px, 70px);
    z-index: 20;
    box-shadow: inset -2px -5px rgba($color-body-shadow, 0.5);
  }
  &:after {
    content:'';
    background-color: $color-dragon1;
    height: 30px;
    width: 20px;
    display: block;
    border: 1px solid #000;
    border-radius: 50%;
    border-width: 0 0 1px 0px;
    transform: translate(65px, 40px);
    box-shadow: inset -2px -5px rgba($color-body-shadow, 0.5);
  }
  &:hover .belly:before, &:hover .belly:after {
    background-color: $color-blush;
  }
}

.belly {
  z-index: 0;
  position: absolute;
  bottom: 1px;
  left: 25px;
  height: 25px;
  width: 50px;
  background-color: $color-dragon1-belly;
  border-radius: 50%;
  box-shadow: inset -2px -5px rgba($color-body-shadow, 0.3);
  &:before {
    transition: background-color linear .5s;
    content: '';
    display: block;
    height: 10px;
    width: 15px;
    background-color: transparent;
    border-radius: 5px;
    transform: translate(-17px, -37px);
  }
  &:after {
    transition: background-color linear .5s;
    content: '';
    display: block;
    height: 10px;
    width: 15px;
    background-color: transparent;
    border-radius: 5px;
    transform: translate(53px, -47px);
  }
}

.eye-R {
  background-color: #000;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  animation: blink 2s linear infinite alternate;
  &:after {
    display: block;
    content:'';
    background-color: #fff;
    height: 3px;
    width: 3px;
    border-radius: 50%;
    transform: translate(1px, 1px);
  }
}

.eye-L {
  background-color: #000;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 30px;
  animation: blink 2s linear infinite alternate;
  &:after {
    display: block;
    content:'';
    background-color: #fff;
    height: 3px;
    width: 3px;
    border-radius: 50%;
    transform: translate(1px, 1px);
  }
}

@keyframes blink {
  0%, 95% {
    transform: translate(15px, 30px) scaleY(1);
  }
  100% {
    transform: translate(15px, 30px) scaleY(0);
  }
}

.mouth {
  position: absolute;
  top: 33px;
  left: 40px;
  height: 10px;
  width: 20px;
  background-color: #e68e8e;
  border: 1px solid #000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.spots {
  position: absolute;
  left: 12px;
  top: 50px;
  height: 13px;
  width: 8px;
  background-color: $color-body-shadow;
  border-radius: 50%;
  transform: rotate(0deg) scale(.8);

  &:before {
    position: absolute;
    left: -8px;
    top: 10px;
    content: '';
    display: block;
    height: 10px;
    width: 6px;
    background-color: $color-body-shadow;
    border-radius: 50%;

  }
  &:after {
    position: absolute;
    left: -2px;
    top: 20px;
    content: '';
    display: block;
    height: 8px;
    width: 5px;
    background-color: $color-body-shadow;
    border-top-left-radius: 60% 60%;
    border-top-right-radius: 40% 40%;
    border-bottom-left-radius: 40% 40%;
    border-bottom-right-radius: 60% 60%;
  }
}


.tail-spikes {
  position: absolute;
  bottom: 0px;
  left: 50px;
  animation: shake 3s linear infinite alternate;
  &:before {
    position: absolute;
    bottom: 13px;
    left: 48px;
    content: '';
    display: block;
    height: 10px;
    width: 10px;
    background-color: $color-body-tail-triangle;
    border: 1px solid #000;
    transform: rotate(-23deg);
    transform-origin: left bottom;
    z-index: -10;
  }
  &:after {
    position: absolute;
    bottom: 7px;
    left: 60px;
    content: '';
    display: block;
    height: 10px;
    width: 10px;
    background-color: $color-body-tail-triangle;
    border: 1px solid #000;
    transform: rotate(-18deg);
    z-index: -10;
  }

  .base {
    position: absolute;
    bottom: 0px;
    height: 25px;
    width: 80px;
    background-color: $color-body-tail;
    border: 1px solid #000;
    border-top-right-radius: 100%;
    box-shadow: inset -2px -5px rgba($color-body-shadow, 0.5);
  }
}



@keyframes shake {
  0%, 85% {
    transform: rotate(0deg);
    //transform-origin: left bottom;
  }
  100% {
    transform: rotate(-10deg);
    transform-origin: left bottom;
  }
}
</style>