<template>
  <canvas id="projector">Your browser does not support the Canvas element.</canvas>
</template>
<script lang="js" setup>
import { onMounted, onBeforeMount } from "vue";
import { add_script, add_css_style } from "@/utils/AppendCSSJS";
import XiaoTeng from "@/components/Animations/XiaoTeng/xiaoTeng.vue";

onMounted(() => {
  add_script('https://code.createjs.com/easeljs-0.7.1.min.js');
  add_script('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js');
  setTimeout(() => {
    add_script('/src/views/Decem/GrayscaleAmbient/grayscaleAmbient.js');

  }, 300);

});


</script>
<style  lang="scss">
html, body {
  width:100%;
  height:100%;
  padding:0px;
  margin:0px;
  overflow: hidden;
  background: #191d1e; /* Old browsers */
  background: -moz-linear-gradient(0deg,  #191d1e 50%, #283139 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right bottom, color-stop(50%,#191d1e), color-stop(100%,#283139)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(0deg,  #191d1e 50%,#283139 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(0deg,  #191d1e 50%,#283139 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(0deg,  #191d1e 50%,#283139 100%); /* IE10+ */
  background: linear-gradient(0deg,  #191d1e 50%,#283139 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#191d1e', endColorstr='#283139',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  background-attachment: fixed
}

#projector {
  position: absolute;
  top: 0px;
  left: 0px;
  width:100%;
  height:100%;
}

.center-div {
  width:580px;
  height:374px;
  position:absolute;
  left:50%;
  top:50%;
  margin-left: -290px;
  margin-top:  -187px;
}

#preloaderDiv
{
  position:absolute;
  left:50%;
  top:50%;
  margin-left: -27px;
  margin-top:  -27px;
}

#logo{
  opacity:0;
  filter: alpha(opacity=0);
}

#date2014
{
  position:absolute;
  padding-left: 210px;
  padding-top:15px;
  opacity:0;
  top:303px;
  left:0;
  filter: alpha(opacity=0);
}
</style>