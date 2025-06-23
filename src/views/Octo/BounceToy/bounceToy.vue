<template>
  <div id="controls">
    <a class="btn btn-default" href="javascript:open();">Open/Jump</a>
    <a class="btn btn-default" href="javascript:close();">Close</a>
  </div>

</template>
<script lang="ts" setup>
import {onBeforeMount, onMounted} from "vue";

const add_css_style = (css_file) =>{
  var headTag = document.getElementsByTagName('head')[0]
  const linkforCSSfile = document.createElement("link");
  linkforCSSfile.href = css_file
  linkforCSSfile.type = 'text/html'
  linkforCSSfile.rel = 'stylesheet'
  headTag.appendChild(linkforCSSfile);
  document.body.appendChild(headTag);
}

const add_script = (script_src:string)=>{
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = script_src;
  document.body.appendChild(script);
}
onMounted(()=>{
  add_script('https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.min.js');
  add_script('https://codepen.io/steveg3003/pen/zBVakw.js');
  add_script('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js');
  add_script('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js');

  setTimeout(() => {
    add_script('/src/views/Octo/BounceToy/bounceToy.js');
  }, 500)
})

onBeforeMount(()=>{
  add_css_style('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
})

</script>


<style scoped lang="scss">
  body
  {
    margin: 0;
    overflow: hidden;
  }

  #controls
  {
    position: absolute;
    z-index: 100;
    margin: 10px;
    width: 100%;
    text-align: center;
  }

  #controls span
  {
    color: white;
    padding: 0 10px 0 20px;
  }


</style>