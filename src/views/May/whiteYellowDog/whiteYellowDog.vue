<template>
  <div class="white-dog-container">
    <div class="dog">
      <div class="dog-body">
        <div class="dog-tail">
          <div class="dog-tail">
            <div class="dog-tail">
              <div class="dog-tail">
                <div class="dog-tail">
                  <div class="dog-tail">
                    <div class="dog-tail">
                      <div class="dog-tail"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dog-torso"></div>
      <div class="dog-head">
        <div class="dog-ears">
          <div class="dog-ear"></div>
          <div class="dog-ear"></div>
        </div>
        <div class="dog-eyes">
          <div class="dog-eye"></div>
          <div class="dog-eye"></div>
        </div>
        <div class="dog-muzzle">
          <div class="dog-tongue"></div>
        </div>
      </div>
    </div>

    <div class="ball" tabindex="0"></div>
  </div>

</template>

<script setup>

</script>



<style scoped lang="scss">
$dog-width: 100px;
$interval: 200ms;
$color-gray: #EAEBEC;
$easing: ease-in-out;

.white-dog-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.ball {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-top: 4rem;
  z-index: 0;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: inset 0 -8px 0 0 rgba(black, 0.2);
    background: #6E64F0;
    z-index: 1;
  }

  &:focus {
    outline: none;

    &:after {
      animation: bounce $interval * 2 infinite alternate;
    }

    @keyframes bounce {
      from {
        transform: scale(2);
        animation-timing-function: ease-in;
      }
      to {
        transform: scale(0.8);
        animation-timing-function: cubic-bezier(0, 0, 0, 1);
      }
    }

    @keyframes bounce-shadow {
      from {
        transform: scale(2.5, 2.6) translateY(-50%);
        animation-timing-function: ease-in;
      }
      to {
        transform: scale(0.5) translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0, 1);
      }
    }

    &:before {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgba(black, 0.05);
      animation: bounce-shadow $interval * 2 infinite alternate;
      z-index: -10;
    }
  }
}

.dog {
  width: $dog-width;
  height: $dog-width;
  z-index: 1;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(black, 0.03);
    transform: translateY(-30%) scale(1.5);
  }

  * {
    position: absolute;
  }
}

.dog-body {
  top: -50%;
  animation: dog-body $interval $easing infinite alternate;

  &:before {
    content: '';
    position: absolute;
    bottom: 90%;
    right: 50%;
    width: 90%;
    height: 90%;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 10%;
    border-top-right-radius: 10%;
    background: rgba(white, 0.4);
    // transform: rotate(45deg);
    transform-origin: right bottom;
    animation: dog-tail-blur $interval $interval / 6 $easing infinite alternate both;

    @keyframes dog-tail-blur {
      from {
        transform: rotate(0);
        opacity: 0;
      }
      50% {
        // transform: rotate(45deg);
        opacity: 1;
      }
      to {
        transform: rotate(90deg);
        opacity: 0;
      }
    }
  }

  @keyframes dog-body {
    from {
      transform: translateX(-10%);
    }
    to {
      transform: translateX(10%);
    }
  }
}

.dog-head {
  animation: dog-head $interval * 9 cubic-bezier(0.11, 0.79, 0, 0.99) infinite;

  @keyframes dog-head {
    from, to {
      transform: rotate(45deg);
    }
    33.3% {
      transform: rotate(-45deg);
    }
    66.6% {
      transform: rotate(0);
    }
  }
}

.dog-torso {
  top: -20%;
  animation: dog-torso $interval $easing infinite alternate-reverse;

  @keyframes dog-torso {
    from {
      transform: translateX(-5%);
    }
    to {
      transform: translateX(5%);
    }
  }
}

.dog-eyes {
  width: 60%;
  top: 55%;
  left: 20%;
  z-index: 1;

  &:before {
    content: '';
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    position: absolute;
    background: orange;
    top: -10px;
    left: -10px;
    z-index: 0;
    border: 4px solid white;
    border-left-width: 0;
    border-bottom-width: 0;
    border-top-width: 0;
    transform: rotate(-45deg);
  }
}

.dog-eye {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #000;
  z-index: 1;
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

  &:first-child {
    left: 0;
  }
  &:last-child {
    right: 0;
  }
}

.dog-muzzle {
  width: 60%;
  left: 20%;
  height: 50%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  background: white;
  bottom: -15%;

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
  }

  &:before {
    width: 6px;
    height: 20px;
    bottom: 0;
    left: calc(50% - 3px);
    background: $color-gray;
  }

  &:after {
    background: black;
    width: 20px;
    height: 15px;
    bottom: 12px;
    left: calc(50% - 10px);
    border-bottom-left-radius: 60% 60%;
    border-bottom-right-radius: 60% 60%;
    border-top-left-radius: 50% 40%;
    border-top-right-radius: 50% 40%;
  }
}

@function p($v) {
  @return percentage($v);
}

.dog-tongue {
  width: 40px;
  height: 100%;
  left: calc(50% - 20px);
  z-index: -1;
  transform-origin: center top;
  animation: dog-tongue $interval * 9 -50ms ease-in-out infinite;

  @keyframes dog-tongue {
    from, to {
      transform: rotate(0);
    }
    #{p(1/6)} {
      transform: rotate(30deg);
    }
    #{p(2/6)}, #{p(4/6)} {
      transform: rotate(0);
    }
    #{p(3/6)}, #{p(5/6)} {
      transform: rotate(-20deg);
    }
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 40px;

    background: #FD3163;
    animation: dog-tongue-inner $interval / 2 $easing infinite alternate;

    @keyframes dog-tongue-inner {
      from {
        transform: translateY(5%);
      }
      to {
        transform: translateY(22%);
      }
    }
  }
}

.dog-ears {
  width: 40%;
  top: 25%;
  left: 30%;
  animation: dog-ears $interval * 9 $interval / 2 ease infinite;

  @keyframes dog-ears {
    42.3%, 71.6% {
      transform: rotate(-5deg);
    }
    50.3%, 79.6% {
      transform: rotate(5deg);
    }
    5% {
      transform: rotate(5deg);
    }
    12% {
      transform: rotate(-5%);
    }
    from, 33.3%, 66%, to {
      transform: rotate(0);
    }
  }
}

.dog-ear {
  bottom: -10px;
  height: 50px;
  width: 50px;
  background: $color-gray;
  animation-duration: $interval * 2;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-iteration-count: infinite;

  &:first-child {
    border-bottom-left-radius: 80%;
    border-top-right-radius: 80%;
    right: 100%;
    box-shadow: inset -15px 15px 0 1px white;
    transform-origin: right bottom;
    transform: rotate(10deg);
  }

  &:last-child {
    border-top-left-radius: 80%;
    border-bottom-right-radius: 80%;
    left: 100%;
    box-shadow: inset 15px 15px 0 0 white;
    transform-origin: left bottom;
    transform: rotate(-10deg);
  }
}

.dog-tail {
  $tail-width: 22px;
  width: $tail-width;
  height: $tail-width * 1.1;
  background: white;
  bottom: 40%;
  border-radius: $tail-width / 2;
  left: calc(50% - #{$tail-width / 2});
  transform-origin: center bottom;

  .dog-tail {
    animation: dog-tail-segment $interval $easing infinite alternate;

    @keyframes dog-tail-segment {
      from {
        transform: rotate(-10deg);
      }
      to {
        transform: rotate(10deg);
      }
    }
  }
}

.dog-body > .dog-tail {
  bottom: 90%;
  animation: dog-tail $interval $easing infinite alternate;

  @keyframes dog-tail {
    from {
      transform: rotate(-45deg);
    }
    to {
      transform: rotate(45deg);
    }
  }
}

.dog-body,
.dog-torso,
.dog-head {
  border-radius: 50%;
  background: white;
  position: absolute;
  height: 100%;
  width: 100%;
}

.dog-body, .dog-torso {
  box-shadow: inset 0 -15px 0 0 $color-gray;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

html, body {
  background: #FFE16E;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
  position: relative;
}
</style>