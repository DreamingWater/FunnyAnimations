<template>

  <div class="scene">
    <canvas class="background"></canvas>
    <div class="scene-content">Congratulations! <br>S14 Winner is <strong>T1</strong>!</div>
    <canvas class="foreground"></canvas>
  </div>
  <div class="swiper-class" v-drag>
    <SwiperCube  />
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import { add_script } from "@/utils/AppendCSSJS";
import SwiperCube from "@/components/Animations/swiper/SwiperCube/SwiperCube.vue";
onMounted (()=>{

  add_script('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.js');
  setTimeout(()=>{
    add_script('/src/views/Decem/T1Winner/T1Winner.js');
  })


})
</script>



<style  lang="scss">
/* Styles go here */
.scene {
  display: flex;
  position: relative;
  width: 100%;
  min-height: 550px;
  align-items: center;
  justify-content: center;
}

.scene > canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.background {
  filter: blur(1.5px);
}

.scene-content {
  position: absolute;
  left:50px;
  width: auto;
  height: auto;
  padding: 30px;
  font-size: 4rem;
  font-family: Helvetica;
  color: hsla(255, 80%, 80%, 1);
  animation: hue-shift 60s infinite linear;
}

@keyframes hue-shift {
  0% {
    color: hsla(0, 80%, 80%, 1);
  }
  25% {
    color: hsla(120, 80%, 80%, 1);
  }
  75% {
    color: hsla(240, 80%, 80%, 1);
  }
  100% {
    color: hsla(360, 80%, 80%, 1);
  }
}
.swiper-class{
  position: absolute;
  left: 600px;
  top: -60px;

}
</style>