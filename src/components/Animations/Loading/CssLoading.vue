<template>

  <div class="cssloading-content">
    <div class="load-wrapp">
      <div class="load-5">
        <div class="ring-2">
          <div class="ball-holder">
            <div class="ball"></div>
          </div>
        </div>
      </div>
    </div>
<!--    <p class="cssloading-text">Loading</p>-->
  </div>
  <div class="clear"></div>
</template>
<script setup>

</script>



<style scoped lang="css">
/* -----------------------------------------
  =Default css to make the demo more pretty
-------------------------------------------- */



.cssloading-content {
  padding: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.cssloading-text{
  color: red;
  font-size: 20px;
  font-style: italic;
}
h1 {
  padding-bottom: 15px;
  border-bottom: 1px solid #d8d8d8;
  font-weight: 600;
}

h1 span {
  font-family: monospace, serif;
}

h3 {
  padding-bottom: 20px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1), 0 2px 0 rgba(255, 255, 255, 0.9);
}

p {
  margin: 0;
  padding: 10px 0;
  color: #777;
}

.clear {
  clear: both;
}

/* -----------------------------------------
  =CSS3 Loading animations
-------------------------------------------- */

/* =Elements style
---------------------- */
.load-wrapp {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  text-align: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.load-wrapp p {
  padding: 0 0 20px;
}
.load-wrapp:last-child {
  margin-right: 0;
}

.line {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #fcfcfc;
}

.ring-1 {
  width: 10px;
  height: 10px;
  margin: 0 auto;
  padding: 10px;
  border: 7px dashed #ffffff;
  border-radius: 100%;
}

.ring-2 {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border: 6px solid #ffffff;
  border-radius: 100%;
}

.ball-holder {
  position: absolute;
  width: 12px;
  height: 45px;
  left: 17px;
  top: 0px;
}

.ball {
  position: absolute;
  top: -11px;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: #fafafa;
}

.letter-holder {
  padding: 16px;
}

.letter {
  float: left;
  font-size: 14px;
  color: #777;
}

.square {
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: #4b9cdb;
}

.spinner {
  position: relative;
  width: 45px;
  height: 45px;
  margin: 0 auto;
}

.bubble-1,
.bubble-2 {
  position: absolute;
  top: 0;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #4b9cdb;
}

.bubble-2 {
  top: auto;
  bottom: 0;
}

.bar {
  float: left;
  width: 15px;
  height: 6px;
  border-radius: 2px;
  background-color: #4b9cdb;
}

/* =Animate the stuff
------------------------ */
.load-1 .line:nth-last-child(1) {
  animation: loadingA 1.5s 1s infinite;
}
.load-1 .line:nth-last-child(2) {
  animation: loadingA 1.5s 0.5s infinite;
}
.load-1 .line:nth-last-child(3) {
  animation: loadingA 1.5s 0s infinite;
}

.load-2 .line:nth-last-child(1) {
  animation: loadingB 1.5s 1s infinite;
}
.load-2 .line:nth-last-child(2) {
  animation: loadingB 1.5s 0.5s infinite;
}
.load-2 .line:nth-last-child(3) {
  animation: loadingB 1.5s 0s infinite;
}

.load-3 .line:nth-last-child(1) {
  animation: loadingC 0.6s 0.1s linear infinite;
}
.load-3 .line:nth-last-child(2) {
  animation: loadingC 0.6s 0.2s linear infinite;
}
.load-3 .line:nth-last-child(3) {
  animation: loadingC 0.6s 0.3s linear infinite;
}

.load-4 .ring-1 {
  animation: loadingD 1.5s 0.3s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
}

.load-5 .ball-holder {
  animation: loadingE 1.3s linear infinite;
}

.load-6 .letter {
  animation-name: loadingF;
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  animation-direction: linear;
}

.l-1 {
  animation-delay: 0.48s;
}
.l-2 {
  animation-delay: 0.6s;
}
.l-3 {
  animation-delay: 0.72s;
}
.l-4 {
  animation-delay: 0.84s;
}
.l-5 {
  animation-delay: 0.96s;
}
.l-6 {
  animation-delay: 1.08s;
}
.l-7 {
  animation-delay: 1.2s;
}
.l-8 {
  animation-delay: 1.32s;
}
.l-9 {
  animation-delay: 1.44s;
}
.l-10 {
  animation-delay: 1.56s;
}

.load-7 .square {
  animation: loadingG 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
}

.load-8 .line {
  animation: loadingH 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
}

.load-9 .spinner {
  animation: loadingI 2s linear infinite;
}
.load-9 .bubble-1,
.load-9 .bubble-2 {
  animation: bounce 2s ease-in-out infinite;
}
.load-9 .bubble-2 {
  animation-delay: -1s;
}

.load-10 .bar {
  animation: loadingJ 2s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
}

@keyframes loadingA {
0 {
  height: 15px;
}
50% {
  height: 35px;
}
100% {
  height: 15px;
}
}

@keyframes loadingB {
0 {
  width: 15px;
}
50% {
  width: 35px;
}
100% {
  width: 15px;
}
}

@keyframes loadingC {
0 {
  transform: translate(0, 0);
}
50% {
  transform: translate(0, 15px);
}
100% {
  transform: translate(0, 0);
}
}

@keyframes loadingD {
0 {
  transform: rotate(0deg);
}
50% {
  transform: rotate(180deg);
}
100% {
  transform: rotate(360deg);
}
}

@keyframes loadingE {
0 {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}

@keyframes loadingF {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes loadingG {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(70px, 0) rotate(360deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

@keyframes loadingH {
  0% {
    width: 15px;
  }
  50% {
    width: 35px;
    padding: 4px;
  }
  100% {
    width: 15px;
  }
}

@keyframes loadingI {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

@keyframes loadingJ {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(80px, 0);
    background-color: #f5634a;
    width: 25px;
  }
}

</style>