<template>
  <div class="yinyang"></div>
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
    add_script('https://codepen.io/steveg3003/pen/zBVakw.js');
  })

</script>



<style scoped lang="scss">
body, html
{
  width: 100%;
  height: 100%;
}

body
{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightslategray;
}

.yinyang
{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(to bottom,black 0%,black 50%,white 50%,white 100%);
  display: block;
  box-shadow: 6px 6px 27px 4px rgba(0,0,0,0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 5px solid white;
  animation: 2s rotate linear infinite;

}

.yinyang:after, .yinyang:before
{
  content: '';
  display: block;
  border-radius: 50%;
}

.yinyang:after
{
  width: 75%;
  height: 75%;
  background: radial-gradient(ellipse at center, black 0%, black 25%, white 25%, white 100%);
  animation: inner-size 3s ease-in-out infinite;
  animation-delay: -1.5s;
}

.yinyang:before
{
  width: 25%;
  height: 25%;
  background: radial-gradient(ellipse at center, white 0%, white 25%, black 25%, black 100%);
  animation: inner-size 3s ease-in-out infinite;
}

@keyframes inner-size {
  0%, 100% {
    width: 75%;
    height: 75%;
  }

  50% {
    width: 25%;
    height: 25%;
  }
}

@keyframes rotate {
  to {transform: rotate(-360deg)}
}
</style>