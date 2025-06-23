
<template>
  <div id="container">
    <svg id="svg"></svg>
  </div>
</template>

<script lang="ts" setup>
  import {onBeforeMount, onMounted} from "vue";

  const add_script = (script_src:string)=>{
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = script_src;
    document.body.appendChild(script);
  }
  onMounted(()=>{

    add_script('https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js');
    add_script('https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.0.1/Rx.min.js');

    setTimeout(() => {
      add_script('https://codepen.io/steveg3003/pen/zBVakw.js');
    }, 500)
    setTimeout(() => {
      add_script('/src/views/Decem/GhostHead/ghostHead.ts');
    }, 1500)
  })



</script>


<style  lang="scss">
  @import 'https://fonts.googleapis.com/css?family=Catamaran';

  html, body
  {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Catamaran', sans-serif;
    overflow: hidden;
    background: #222;
  }


  #container
  {
    margin: 0;
    padding: 0;
    height: 600px;
    width: 100%;
  }

  svg
  {
    z-index: 10;
    -webkit-backface-visibility: hidden;
  }
</style>