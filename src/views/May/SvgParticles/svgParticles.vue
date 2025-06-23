<template>
  <canvas id="canvas"></canvas>
</template>

<script lang="ts" setup>
  import { ref, onMounted,onBeforeMount } from 'vue';
  import { add_script } from '@/utils/AppendCSSJS';



  onMounted(() => {

    setTimeout(() => {
      add_script('/src/views/May/SvgParticles/svgParticles.js');
    }, 1000);

  });
</script>

<style lang="scss">
body{
  background-color: #000000;
}
canvas {
  width: 100%;
  height: 100%;

}

#canvas {
  cursor: url('@/assets/imgs/roit.svg'), auto;
}

</style>