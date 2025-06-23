<template>
  <div class="container">

    <Init></Init>

    <div class="stage-container remove">

      <div class="canvas-container">
        <Css_3D_Effect></Css_3D_Effect>
        <canvas id="trails-canvas">
        </canvas>
        <canvas id="main-canvas">
        </canvas>
<!--        <Slider></Slider>-->
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import  { onMounted} from "vue";
import Menu from "@/views/Home/Firework/Menu/menu.vue";
import Init from "@/views/Home/Firework/Init/init.vue";
import Css_3D_Effect from "@/components/Css_3D_Effect.vue";
import Slider from "@/views/Home/Slider/index.vue"
////////////////////////////////////////// Firework
const add_script = (script_src:string)=>{
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = script_src;
  document.body.appendChild(script);
}
onMounted(()=> {
  add_script('/src/views/Home/Firework/js/Stage.js');
  setTimeout(() => {
    add_script("/src/views/Home/Firework/js/script.js");
    add_script("https://cdn.jsdelivr.net/gh/fz6m/china-lantern@1.6/dist/china-lantern.min.js");
  }, 100)
})
////////////////////////////////////////// Firework



</script>


<style scoped lang="css">
* {
  position:relative;
  box-sizing:border-box
}


.container {
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;

  background: -webkit-linear-gradient(209deg, #fa0000,#f50f0f,#f45252);/* Chrome 10-25, Safari 5.1-6 */                          background: linear-gradient(209deg, #fa0000,#f50f0f,#f45252);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.loading-init {
  width:100%;
  align-self:center;
  text-align:center;
  text-transform:uppercase
}
.loading-init__header {
  font-size:2.2em
}
.loading-init__status {
  margin-top:1em;
  font-size:.8em;
  opacity:.75
}
.stage-container {
  overflow:hidden;
  box-sizing:initial;
  border:1px solid #222;
  margin:-1px
}
@media(max-width:840px) {
  .stage-container {
    border:0;
    margin:0
  }
}.canvas-container {
   width:100%;
   height:100%;
   transition:filter .3s
 }
.canvas-container canvas {
  position:absolute;
  mix-blend-mode:lighten;
  transform:translateZ(0)
}
.controls {
  position:absolute;
  top:0;
  width:100%;
  padding-bottom:50px;
  display:flex;
  justify-content:space-between;
  transition:opacity .3s,visibility .3s
}
@media(min-width:840px) {
  .controls {
    visibility:visible
  }
  .controls.hide:hover {
    opacity:1
  }
}

.credits a {
  color:rgba(255,255,255,0.5);
  text-decoration:none
}
.credits a:hover,.credits a:active {
  color:rgba(255,255,255,0.75);
  text-decoration:underline
}

#main-canvas{
  //background-color: red;
  background: url("/src/assets/red-background/red_background.jpg") !important;
  background-size: cover; /* Ensure the image covers the entire element */
  //background-size:100% 100%;
  //background: -webkit-linear-gradient(209deg, #fa0000,#f50f0f,#f45252);/* Chrome 10-25, Safari 5.1-6 */                          background: linear-gradient(209deg, #fa0000,#f50f0f,#f45252);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>