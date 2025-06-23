<template>
  <h1 v-show="show">Happy Birthday</h1>
  <canvas id="birthday"></canvas>
</template>

<script lang="ts" setup>
  import {ref,onMounted} from "vue";
  const show = ref(false);
  const add_script = (script_src:string)=>{
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = script_src;
    document.body.appendChild(script);
  }
  onMounted(()=>{
    setTimeout(() => {
      add_script('/src/components/Firework/firework.js');
      show.value = true;
    }, 13000)
  })
</script>



<style lang="css" scoped>

canvas{display:block}
h1 {
  font-family: "lemon";
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 5em;
  font-weight: 900;
  -webkit-user-select: none;
  user-select: none;
}
</style>