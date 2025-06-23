<template>
  <canvas class="scene"></canvas>
  <div class="credit">
    <p>made with <a href="https://zzz.dog/" target="blank">Z-dog</a></p>
  </div>
  <div class="controls">
    <button class="btn" id="bankLeft">bank left</button>
    <button class="btn" id="bankRight">bank right</button>

    <button class="btn" id="rollLeft">barrel roll left</button>
    <button class="btn" id="rollRight">barrel roll right</button>
  </div>
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
  add_script('https://unpkg.co/gsap@3/dist/gsap.min.js');
  add_script('https://unpkg.com/zdog@1/dist/zdog.dist.min.js');

  setTimeout(() => {
    add_script('/src/views/May/LovelyBees/lovelyBees.js');
  }, 500)
})

</script>


<style  lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #ccf3eb;
  overflow: hidden;
  position: relative;
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  color: #707070;
}

.btn {
  cursor: pointer;
  background-color: transparent;
  padding: 5px 10px;
  border: none;
}

a {
  text-decoration: none;
  font-weight: 600;
  color: inherit;
  color: #eeaa00;
}

.controls {
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.credit {
  position: absolute;
  top: 4%;
  left: 4%;
  width: max-content;
  padding: 10px;
  font-size: 0.8rem;
}

.active {
  color: #eeaa00;
  pointer-events: none;
}

</style>