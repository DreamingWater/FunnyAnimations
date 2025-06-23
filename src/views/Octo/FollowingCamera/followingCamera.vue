<template>
  <div id="wrapper">
    <canvas id="canvas3d"></canvas>
    <div id="bg"></div>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/356608/distraction.jpg" id="intro">
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
    add_script('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js');
    add_script('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js');
    add_script('https://cdnjs.cloudflare.com/ajax/libs/three.js/r77/three.min.js');



    setTimeout(() => {

      add_script('https://s3-us-west-2.amazonaws.com/s.cdpn.io/356608/Utils.js');
      add_script('https://s3-us-west-2.amazonaws.com/s.cdpn.io/356608/OBJLoader.js');
    }, 500)
    setTimeout(() => {
      add_script('/src/views/Octo/FollowingCamera/followingCamera.js');
    }, 1500)
  })

</script>



<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

#wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}

#intro {
  position: absolute;
  max-height: 90%;
  max-width: 90%;
  opacity: 0;
  -webkit-box-shadow: 7px 9px 0px 0px rgba(0,0,0,0.51);
  -moz-box-shadow: 7px 9px 0px 0px rgba(0,0,0,0.51);
  box-shadow: 7px 9px 0px 0px rgba(0,0,0,0.51);
}

#bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff83f;
}
</style>