<template>
  <svg viewBox="0 0 50 50">
    <g>
      <circle id="secondsCirc" cy="-.5" r="14" stroke="#24303a" />
      <path id="secondsPath" d="" fill="transparent" stroke="#1ed5f6" ></path>

      <circle id="minCirc" cy="-.5" r="10" stroke="#24303a" />
      <path id="minPath" d="" fill="transparent" stroke="#f61ed5" ></path>

      <circle id="hoursCirc" cy="-.5" r="6" stroke="#24303a" />
      <path id="hoursPath" d="" fill="transparent" stroke="#d5f61e" ></path>


      <circle id="hub" cy="-.5" r="3.5" fill="#24303a" />
    </g>
    <text id="text"  class='show-text-number' transform="translate(25 5)">00:00:00</text>
    <text id="toggle" class='show-text' transform="translate(15 45)">停止</text>
    <text id="reset" class='show-text' transform="translate(37 45)">重置</text>
  </svg>
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
  add_script('/src/views/Decem/StopWatch/stopWatch.js');
})

</script>


<style  lang="scss">
body {
  background: #1e2730;
  font-family: Arial;
}
svg {
  width: 100vmin;
  margin: 0 auto;
  display: block;
}
circle {
  fill: none;
  stroke-width: 3;
}
#secondsPath {
  stroke-width: 3;
  pointer-events: none;
  stroke-linecap: round;
}
#minPath {
  stroke-width: 3;
  pointer-events: none;
  stroke-linecap: round;
}
#hoursPath {
  stroke-width: 3;
  pointer-events: none;
  stroke-linecap: round;
}
text {
  dominant-baseline: central;
  text-anchor: middle;
  font-size: 5px;
  fill: Linen;
}
svg text::selection {
  background: none;
}

#hub {
  fill: #24303a;
  stroke-width: 0;
}
#toggle,
#reset {
  cursor: pointer;
}
.show-text{
  font-family: AaWeiDuXinDong;
}
.show-text-number{
  font-family: Lemon, sans-serif;
}
</style>