<template>
  <canvas id="c">Happy Easter 2025 to all of you.</canvas>
  <p>Click those eggs again for some extra wobbliness.</p>
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
  add_script('/src/views/Decem/ColorEggs/colorEggs.js');
})

</script>

<style scoped lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Tangerine);
  body {
    margin: 0;
    color:#777;
    text-align:center;
    font-family:Times;
  }
  canvas {
    display: block;
    margin: 1em auto;
    margin:calc(50vh - 200px) auto 0;
    background:#fff;
    border-radius:10px;
    box-shadow: 0px 0px 15px 3px #ccc;
  }

</style>