<script lang="ts" setup>
import { onMounted, watch, defineProps } from 'vue';

const props = defineProps({
  ball_hundred: { type: String, default: '' },
  ball_tens: { type: String, default: '' },
  ball_ones: { type: String, default: '' },
});


onMounted(() => {
  const querySelectorPattern = `.result_ball-wrap`
  const wrapper = document.querySelector(querySelectorPattern);

  // 监听百位变化
  watch(() => props.ball_hundred, (value) => {
    console.log('ball_hundred 发生变化:', value);    // 在 ball_hundred 发生变化时执行相应的操作
  });
  // 监听十位变化
  watch(() => props.ball_tens, (value) => {
    console.log('ball_tens 发生变化:', value);    // 在 ball_tens 发生变化时执行相应的操作
  });
  // 监听个位变化
  watch(() => props.ball_ones, (value) => {
    console.log('ball_ones 发生变化:', value);    // 在 ball_ones发生变化时执行相应的操作
  });
});
</script>

<template>
<!--  <div>{{props.ball_hundred}}</div>-->
  <div class="result_ball-wrap">
    <section class="stage">
      <figure class="ball">
        <span class="number" :data-number=props.ball_hundred>&nbsp;</span>
      </figure>
    </section>
    <section class="stage">
      <figure class="ball">
        <span class="number" :data-number=props.ball_tens>&nbsp;</span>
      </figure>
    </section>
    <section class="stage">
      <figure class="ball">
        <span class="number" :data-number=props.ball_ones>&nbsp;</span>
      </figure>
    </section>
  </div>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto');
$ball-radius:50px;
$text_size:30px;

@font-face {
  font-family: 'lemon';
  src: url('@/assets/ttf/Lemon-Regular.ttf') format('truetype');
}


.ball {
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 50%;
  position: relative;
  background: radial-gradient(circle at 50% 40%, #fcfcfc, #efeff1 66%, #9b5050 100%);
  overflow: hidden;
  animation: ballGrow 2s ease-out forwards;
  transform: scale(0.5);

  background: #f5cccc;
  box-shadow: inset 8px 8px 16px #d0adad,
  inset -8px -8px 16px #ffebeb;
}
.ball:after {
  content: "";
  position: absolute;
  top: 5%;
  left: 10%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%);
  -webkit-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
  -moz-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
  -ms-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
  -o-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
  transform: translateX(-80px) translateY(-90px) skewX(-20deg);

}

.stage {
  width: $ball-radius;
  height: $ball-radius;
  display: inline-block;
  margin: 20px;
  -webkit-perspective: 1200px;
  -moz-perspective: 1200px;
  -ms-perspective: 1200px;
  -o-perspective: 1200px;
  perspective: 1200px;
  -webkit-perspective-origin: 50% 50%;
  -moz-perspective-origin: 50% 50%;
  -ms-perspective-origin: 50% 50%;
  -o-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
}

.number {
  position: absolute;
  width: 100%;
  text-align: center;
  line-height:$ball-radius;
  font-size: $text_size;
  color: blue;
  font-family: 'lemon';
  animation: ballRoll 2s ease-out;
}

.number:after {
  content: attr(data-number);
  position: absolute;
  transform: translateX(-75%);
  opacity: 0;
  animation: numberReveal 0.1s 1.5s reverse forwards;
}

.number:before {
  content: '?';
  position: absolute;
  transform: translateX(-25%);
  animation: numberReveal 0.1s 1.5s forwards;
}

@keyframes ballRoll {
  0%, 20%, 50% {
    opacity: 1;
    transform: translateY(0) rotateX(0) scale(1);
  }
  10%, 35%, 75% {
    transform: translateY(100%) rotateX(170deg) scale(0.4);
  }
  11%, 36%, 76% {
    transform: translateY(-100%) rotateX(-170deg) scale(0.3);
    opacity: 0;
  }

}

@keyframes ballGrow {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes numberReveal {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.stage:nth-child(2) .ball,
.stage:nth-child(2) .number {
  animation-delay: 0.3s;
}

.stage:nth-child(2) .number:after,
.stage:nth-child(2) .number:before {
  animation-delay: 1.8s;
}

.stage:nth-child(3) .ball,
.stage:nth-child(3) .number {
  animation-delay: 0.6s;
}

.stage:nth-child(3) .number:after,
.stage:nth-child(3) .number:before {
  animation-delay: 2.1s;
}
</style>
<!--<style scoped>-->
<!--@import url('https://fonts.googleapis.com/css?family=Roboto');-->
<!--</style>-->