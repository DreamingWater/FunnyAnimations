
<template>
  <p>Please mouse over the canvas</p>
  <canvas id="canvas"></canvas>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";


const add_script = (script_src:string)=>{
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = script_src;
  document.body.appendChild(script);
}
onMounted(()=>{
  setTimeout(()=>{
    add_script('/src/views/Octo/MobiusStrip/mobiusStrip.js');
  }, 1000)
})

</script>



<style scoped lang="scss">
body {
  background-color: #222;
  font-family: Arial, sans-serif;
}

canvas {
  display: block;
  margin: 0 auto;
  margin: calc(50vh - 200px) auto 0;
  background-color: #000;
}

p {
  text-align: center;
  color: #ccc;
}
</style>