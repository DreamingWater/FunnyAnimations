<template>
  <div class="container">
    <div id="totoro">
      <div class="head">
        <div class="ear ear-left"></div>
        <div class="ear ear-right"></div>
        <div class="eye eye-left">
          <div class="pupil"></div>
        </div>
        <div class="eye eye-right">
          <div class="pupil"></div>
        </div>
        <div class="nose"></div>
        <div class="mouth">
          <div class="mouth-upper">
            <div class="tooth"></div>
            <div class="tooth"></div>
            <div class="tooth"></div>
            <div class="tooth"></div>
            <div class="tooth"></div>
            <div class="tooth"></div>
          </div>
          <div class="mouth-lower">
            <div class="tooth"></div>
            <div class="tooth"></div>
            <div class="tooth"></div>
            <div class="tooth"></div>
            <div class="tooth"></div>
            <div class="tooth"></div>
          </div>
        </div>
        <div class="whiskas whiskas-left">
          <div class="whiska whiska-top"></div>
          <div class="whiska"></div>
          <div class="whiska whiska-bottom"></div>
        </div>
        <div class="whiskas whiskas-right">
          <div class="whiska whiska-top"></div>
          <div class="whiska"></div>
          <div class="whiska whiska-bottom"></div>
        </div>
      </div>
      <div class="body">
        <div class="belly">
          <div class="chevron chevron-large chevron-left"></div>
          <div class="chevron chevron-large chevron-center"></div>
          <div class="chevron chevron-large chevron-right"></div>
          <div class="chevron chevron-small chevron-left"></div>
          <div class="chevron chevron-small chevron-center-left"></div>
          <div class="chevron chevron-small chevron-center-right"></div>
          <div class="chevron chevron-small chevron-right"></div>
        </div>
        <div class="arm arm-left">
          <div class="nail"></div>
          <div class="nail"></div>
          <div class="nail"></div>
        </div>
        <div class="arm arm-right">
          <div class="nail"></div>
          <div class="nail"></div>
          <div class="nail"></div>
        </div>
        <div class="leg leg-left"></div>
        <div class="leg leg-right"></div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>



<style scoped lang="scss">
@import 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300';
$primary-color: #bdb4b4;
$primary-color-dark: darken( $primary-color, 4% );
$primary-color-tint: lighten( $primary-color, 15% );
$primary-font: "Roboto Condensed", sans-serif;
$black: darken($primary-color-dark, 20%);
$white: lighten($primary-color-tint, 10%);

* { box-sizing: border-box; }
body {
  background-color: $primary-color-tint;
  font-family: $primary-font;
  font-size: 16px;
  line-height: 1.875em;
}
.container {
  margin: 100px auto;
  padding: 30px;
  max-width: 500px;
}


#totoro {
  position: relative;
  cursor: pointer;

  .head {
    position: absolute;
    left: 40px;
    height: 240px;
    width: 320px;
    // border-bottom-left-radius: 45% 25%;
    // border-bottom-right-radius: 45% 25%;
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    background-color: $primary-color;
  }

  .ear {
    position: absolute;
    top: -60px;
    height: 80px;
    width: 50px;
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
    border-top-left-radius: 30px 100%;
    border-top-right-radius: 30px 100%;
    background-color: $primary-color;
    transform-origin: center 145px;

    &::after {
      content: '';
      position: absolute;
      top: calc(100% - 5px);
      left: 50%;
      transform: translateX(-50%);
      height: 70px;
      width: 30px;
      background-color: $primary-color;
    }

    &-left {
      left: 45px;
      transform: rotate(-15deg);
      animation-name: twitch;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    &-right {
      right: 45px;
      transform: rotate(15deg);
    }
  }

  .eye {
    position: absolute;
    z-index: 15;
    top: 50px;
    height: 45px;
    width: 45px;
    border-bottom-left-radius: 50% 45%;
    border-bottom-right-radius: 50% 45%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    background-color: $white;
    transition: 0.35s 0.2s;

    &-left {
      left: 50px;

      .pupil {
        left: 23px;

        &::after {
          left: 7px;
        }
      }
    }

    &-right {
      right: 50px;

      .pupil {
        right: 23px;

        &::after {
          right: 7px;
        }
      }
    }
  }

  .pupil {
    position: absolute;
    top: 10px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: $black;
    transition: 0.35s 0.2s;

    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      top: 4px;
      height: 5px;
      width: 4px;
      background-color: $white;
    }
  }

  .nose {
    position: absolute;
    z-index: 15;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    height: 20px;
    width: 50px;
    border-bottom-left-radius: 55% 50%;
    border-bottom-right-radius: 55% 50%;
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    background-color: $black;
    transition: 0.35s 0.2s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 12px;
      background-color: $primary-color;
      border-radius: 50%;
      height: 20px;
      width: 43px;
    }
    &::before {
      left: -20px;
    }
    &::after {
      right: -20px;
    }
  }

  .mouth {
    position: absolute;
    z-index: 10;
    top: 125px;
    left: 50%;
    transform: translateX(-50%);
    width: 7px;
    height: 10px;
    border-radius: 50%;
    background-color: $black;
    overflow: hidden;
    transition: 0.6s;

    &-upper,
    &-lower {
      position: absolute;
      left: 50%;
      height: 40px;
      width: 100%;
      overflow: hidden;
      visibility: hidden;
      transition: 0.4s 0.1s;
    }
    &-upper {
      z-index: 6;
      top: -20px;
      border-radius: 100%;
      transform: translateX(-50%) translateY(-100px);
    }
    &-lower {
      bottom: -22px;
      transform: translateX(-50%) translateY(100px);
      // &::after {
      // 	content: '';
      // 	position: absolute;
      // 	z-index: 5;
      // 	bottom: 25px;
      // 	left: 50%;
      // 	width: 150%;
      // 	height: 100px;
      // 	border-radius: 100%;
      // 	background-color: $black;
      // 	transform: translateX(-50%);
      // }
    }
  }

  .tooth {
    position: absolute;
    height: 40px;
    width: 40px;
    border-radius: 6px;
    border: 2px solid $black;
    background-color: $white;

    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        left: -10px + (40 * ($i - 1));
        @if $i == 3 or $i == 4 { top: 5px; }
        @if $i == 2 or $i == 5 { top: 3px; }
      }
    }
  }

  .whiskas {
    position: absolute;
    z-index: 10;
    top: 120px;
    transition: 0.4s 0.15s;

    &-left {
      left: 25px;

      .whiska {
        right: 0;
        transform-origin: bottom right;

        &-top {
          transform: rotate(10deg);
        }

        &-bottom {
          transform: rotate(-10deg);
        }
      }
    }

    &-right {
      right: 25px;

      .whiska {
        left: 0;
        transform-origin: bottom left;

        &-top {
          transform: rotate(-10deg);
        }

        &-bottom {
          transform: rotate(10deg);
        }
      }
    }
  }
  .whiska {
    position: absolute;
    width: 90px;
    height: 2px;
    border-radius: 2px;
    background-color: $black;
    transition: 0.6s;

    &-top {
      top: -10px;
      width: 80px;
    }

    &-bottom {
      top: 10px;
      width: 70px;
    }
  }

  .body {
    position: relative;
    top: 50px;
    width: 400px;
    height: 420px;
    border-bottom-left-radius: 45% 30%;
    border-bottom-right-radius: 45% 30%;
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    background-color: $primary-color;
    display: inline-block;
  }

  .belly {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 380px;
    height: 300px;
    border-bottom-left-radius: 45% 35%;
    border-bottom-right-radius: 45% 35%;
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    background-color: $primary-color-tint;
    transition: 0.6s;
  }

  .chevron,
  .chevron::after {
    position: absolute;
    background-color: $primary-color;
    border-bottom-left-radius: 20px 100px;
    border-bottom-right-radius: 20px 100px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .chevron {
    &::after {
      content: '';
      left: -4px;
      top: 10px;
      transform-origin: top;
      transform: rotate(-135deg);
    }

    &-large,
    &-large::after {
      height: 40px;
      width: 15px;
    }

    &-large {
      &.chevron-center {
        top: 15px;
        left: calc(50% - 20px);
        transform: rotate(70deg);
      }

      &.chevron-left,
      &.chevron-right {
        top: 35px;
      }
      &.chevron-left {
        left: 65px;
        transform: rotate(60deg);
      }
      &.chevron-right {
        right: 90px;
        transform: rotate(80deg);
      }
    }

    &-small,
    &-small::after {
      height: 35px;
      width: 12px;
    }

    &-small {
      &.chevron-center-left,
      &.chevron-center-right {
        top: 70px;
      }
      &.chevron-center-left {
        left: calc(50% - 55px);
        transform: rotate(65deg);
      }
      &.chevron-center-right {
        left: calc(50% + 25px);
        transform: rotate(75deg);
      }

      &.chevron-left,
      &.chevron-right {
        top: 90px;
      }
      &.chevron-left {
        left: 40px;
        transform: rotate(55deg);
      }
      &.chevron-right {
        right: 60px;
        transform: rotate(85deg);
      }
    }
  }

  .arm {
    position: absolute;
    z-index: -1;
    top: 90px;
    height: 160px;
    width: 90px;
    background-color: $primary-color-dark;
    transition: 1s;

    &-left {
      left: 50px;
      border-bottom-left-radius: 50px 80%;
      border-bottom-right-radius: 40px 65%;
      border-top-left-radius: 30px;
      border-top-right-radius: 15px;
      transform-origin: top left;
      transform: rotate(35deg);

      .nail {
        &:nth-child(1) {
          left: 35px;
        }
        &:nth-child(2) {
          bottom: -13px;
          left: 47px;
        }
        &:nth-child(3) {
          left: 59px;
        }
      }
    }

    &-right {
      right: 50px;
      border-bottom-left-radius: 40px 65%;
      border-bottom-right-radius: 50px 80%;
      border-top-left-radius: 15px;
      border-top-right-radius: 30px;
      transform-origin: top right;
      transform: rotate(-35deg);

      .nail {
        &:nth-child(1) {
          right: 35px;
        }
        &:nth-child(2) {
          bottom: -13px;
          right: 47px;
        }
        &:nth-child(3) {
          right: 59px;
        }
      }
    }

    .nail {
      bottom: -10px;
    }
  }

  .leg {
    position: absolute;
    z-index: -1;
    bottom: -5px;
    width: 150px;
    height: 70px;
    background-color: $primary-color-dark;

    &-left {
      right: calc(50% + 5px);
      border-radius: 30px;
      border-bottom-left-radius: 70% 100%;
      border-bottom-right-radius: 15px;
      border-top-left-radius: 50% 15px;
      border-top-right-radius: 15px;
    }

    &-right {
      left: calc(50% + 5px);
      border-radius: 30px;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 70% 100%;
      border-top-left-radius: 15px;
      border-top-right-radius: 50% 15px;
    }
  }

  .nail {
    position: absolute;
    z-index: 10;
    height: 20px;
    width: 5px;
    background-color: $white;
    border-bottom-left-radius: 2px 70%;
    border-bottom-right-radius: 2px 70%;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    transform-origin: top center;
  }

  &:hover {
    .eye-left {
      transform: translateY(-6px) scaleY(0.93) scaleX(1.02) rotate(-15deg);
      .pupil {
        transform: translate(-8px, -3px);
      }
    }
    .eye-right {
      transform: translateY(-6px) scaleY(0.93) scaleX(1.02) rotate(15deg);
      .pupil {
        transform: translate(8px, -3px);
      }
    }
    .nose {
      transform: translate(-50%, -3px) scale(0.97);
    }
    .mouth {
      width: 220px;
      height: 55px;
      border-bottom-left-radius: 60px 60%;
      border-bottom-right-radius: 60px 60%;
      border-top-left-radius: 40px 40%;
      border-top-right-radius: 40px 40%;
      transform: translate(-50%, -20px);
      transition: transform 0.8s, width 0.6s, height 0.6s 0.2s;

      &-upper,
      &-lower {
        visibility: visible;
        transition: 0.4s 0.3s;
      }
      &-upper {
        transform: translateX(-50%) translateY(0);
      }
      &-lower {
        transform: translateX(-50%) translateY(0);
      }
    }

    .whiskas {
      &-left {
        transform: translateX(-5px) scaleX(0.95);

        .whiska {
          &-bottom {
            transform: rotate(-5deg);
          }
        }
      }
      &-right {
        transform: translateX(5px) scaleX(0.95);

        .whiska {
          &-bottom {
            transform: rotate(5deg);
          }
        }
      }
    }

    .belly {
      height: 270px;
      border-top-left-radius: 50% 57%;
      border-top-right-radius: 50% 57%;
    }

    .arm {
      &-left {
        top: 105px;
        left: 75px;
        transform: rotate(100deg);
      }
      &-right {
        top: 105px;
        right: 75px;
        transform: rotate(-100deg);
      }
    }
  }
}

@keyframes twitch {
  0%, 26%, 35%, 47%, 100% { transform: rotate(-15deg) }
  30% { transform: rotate(-17deg) scaleY(0.95) }
  40% { transform: rotate(-21deg) scaleY(0.91) }
}
</style>