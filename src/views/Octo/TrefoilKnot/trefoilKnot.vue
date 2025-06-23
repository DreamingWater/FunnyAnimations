<template>
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
      add_script('/src/views/Octo/TrefoilKnot/trefoilKnot.js');
    }, 1000)
  })

</script>


<style  lang="scss">
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
</style>