
<template>
  <div class="container">
    <div class="george">
      <div class="shadow"></div>
      <div class="george_flower"></div>
      <div class="george_head">
        <div class="line"></div>
        <div class="cheek"></div>
        <div class="eye"></div>
        <div class="eye"></div>
      </div>
      <div class="pot_top"></div>
      <div class="pot_body"></div>
      <div class="pot_plate"></div>
    </div>
  </div>
  <div class="text-box-1" v-drag>看看我嘛！</div>
  <div class="text-box-2" v-drag>૮꒰ ˶• ༝ •˶꒱ა</div>
</template>

<style scoped lang="scss">
$pot-width: 20vh;
$pot-color: #e5a26b;
$george-color: #98d30c;
$flower-color: #e2641b;
$eye-color: #464d5b;
$cheek-color: #f2a4ca;

.container {
  align-items: flex-start;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  height: 100%;
  background-color: #e4e7ec !important;
}

.george {
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: absolute;
  padding-top: $pot-width * 1.5;

  .shadow, .george_head, .pot_top, .pot_body, .pot_plate {
    opacity: 0;
    animation: fadeIn 1s forwards;
  }

  .shadow {
    animation-delay: 0s;
  }

  .george_head {
    animation-delay: 1s;
  }

  .pot_top {
    animation-delay: 1.5s;
  }

  .pot_body {
    animation-delay: 2s;
  }

  .pot_plate {
    animation-delay: 2.5s;
  }

  .pot_top {
    width: $pot-width * 1.5;
    height: 0;
    border-top: $pot-width / 4 solid darken($pot-color, 10);
    border-left: $pot-width / 22 solid transparent;
    border-right: $pot-width / 22 solid transparent;
    border-radius: 3px 3px 1px 1px; /* Add rounded corners */
  }

  .pot_body {
    width: $pot-width * 1.1;
    height: 0;
    border-top: $pot-width * 0.85 solid $pot-color;
    border-left: $pot-width / 5 solid transparent;
    border-right: $pot-width / 5 solid transparent;
    border-radius: 1px 1px 2px 2px; /* Add rounded corners */
  }

  .pot_plate {
    width: $pot-width;
    height: 0;
    border-top: $pot-width / 5 solid darken($pot-color, 10);
    border-left: $pot-width / 25 solid transparent;
    border-right: $pot-width / 25 solid transparent;
    border-radius: 2px; /* Add rounded corners */
  }

  .george_flower {
    position: absolute;
    top: 0;
    left: $pot-width * .3 + $pot-width / 4;
    height: $pot-width / 3;
    width: $pot-width / 4;
    border-radius: 0 100% 0 100%;
    background-color: $flower-color;
    animation: shake 2s infinite; /* Apply the shake animation */

    &:before {
      content: "";
      top: 0;
      left: $pot-width / 4;
      transform: rotate(70deg);
      position: absolute;
      height: $pot-width / 3;
      width: $pot-width / 4;
      border-radius: 0 100% 0 100%;
      background-color: $flower-color;
    }
  }

  .george_head {
    position: absolute;
    z-index: -1;
    top: $pot-width / 3;
    left: $pot-width * .1;
    height: $pot-width * 1.5;
    width: $pot-width * 1.4;
    background-color: $george-color;
    border-radius: 100%;

    .line {
      height: $pot-width * 1.5;
      width: $pot-width / 20;
      background-color: lighten($george-color, 25);
      position: absolute;
      left: $pot-width / 20 * 13;
    }

    &:before {
      content: "";
      display: block;
      height: $pot-width * 1.5;
      width: $pot-width * 1.4 / 1.35;
      border: solid $pot-width / 20 lighten($george-color, 25);
      border-radius: 100%;
      position: absolute;
      left: $pot-width * .125;
    }

    &:after {
      content: "";
      display: block;
      height: $pot-width * 1.5;
      width: $pot-width * 1.4 / 3;
      border: solid $pot-width / 20 lighten($george-color, 25);
      border-radius: 100%;
      position: absolute;
      left: $pot-width * .4;
    }

    .eye {
      height: $pot-width / 2.5;
      width: $pot-width / 2.5;
      position: absolute;
      background-color: $eye-color;
      border-radius: 100%;
      z-index: 1;
      top: $pot-width / 2;
      left: 0;

      &:before {
        content: "";
        display: block;
        position: absolute;
        height: $pot-width / 12;
        width: $pot-width / 12;
        background-color: #ffffff;
        border-radius: 100%;
        bottom: $pot-width / 20;
        right: $pot-width / 12;
        animation: shimmer .25s infinite alternate;
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        height: $pot-width / 4;
        width: $pot-width / 4;
        background-color: #ffffff;
        border-radius: 100%;
        bottom: $pot-width / 10;
        right: $pot-width / 10;
        animation: shimmer .25s infinite alternate;
      }
    }

    .eye:last-of-type {
      left: $pot-width / 1.75;
    }

    .cheek {
      height: $pot-width / 8;
      width: $pot-width / 3.5;
      border-radius: 60%;
      background-color: $cheek-color;
      position: absolute;
      top: $pot-width / 2 + $pot-width / 3;
      left: -$pot-width / 10;
      z-index: 5;

      &:after {
        content: "";
        height: $pot-width / 8;
        width: $pot-width / 3.5;
        border-radius: 60%;
        background-color: $cheek-color;
        position: absolute;
        left: $pot-width / 1.15;
        z-index: 5;
      }
    }
  }

  .shadow {
    height: $pot-width / 4;
    width: $pot-width * 3;
    position: absolute;
    bottom: -$pot-width / 8;
    right: -$pot-width * .75;
    background-color: $eye-color;
    opacity: .25;
    border-radius: 100%;
    z-index: -10;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-$pot-width / 300) translateY($pot-width / 300);
  }

  50% {
    transform: translateX(-$pot-width / 300) translateY(-$pot-width / 300);
  }

  100% {
    transform: translateX($pot-width / 300) translateY($pot-width / 300);
  }
}

@keyframes shake {
  0%, 100% {
    transform: rotatey(0deg);
  }
  25% {
    transform: rotatey(-40deg);
  }
  75% {
    transform: rotatey(40deg);
  }
}

.text-box-1 {
  position: absolute;
  left: 902px;
  top: 131px;
  width: 600px;
  right: 10px;
  padding: 10px;
  color: $george-color;
  font-family: AaWeiDuXinDong, sans-serif;
  font-weight: bold;
  font-size: 45px;
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: 3s;
}

.text-box-2 {
  position: absolute;
  left: 902px;
  top: 166px;
  width: 600px;
  right: 10px;
  padding: 10px;
  color: $george-color;
  font-family: AaWeiDuXinDong, sans-serif;
  font-weight: bold;
  font-size: 45px;
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: 3.5s;
}

.george_flower {
  position: absolute;
  top: 0;
  left: $pot-width * .3 + $pot-width / 4;
  height: $pot-width / 3;
  width: $pot-width / 4;
  border-radius: 0 100% 0 100%;
  background-color: $flower-color;
  animation: shake 2s infinite, fadeIn 1s forwards;
  animation-delay: 0.5s;

  &:before {
    content: "";
    top: 0;
    left: $pot-width / 4;
    transform: rotate(70deg);
    position: absolute;
    height: $pot-width / 3;
    width: $pot-width / 4;
    border-radius: 0 100% 0 100%;
    background-color: $flower-color;
  }
}

</style>
