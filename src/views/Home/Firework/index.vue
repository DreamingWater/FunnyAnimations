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
      }, 100)
    })
    ////////////////////////////////////////// Firework



</script>


<style scoped lang="css">
* {
  position:relative;
  box-sizing:border-box
}
html,body {
  height:100%
}
html {
  background-color: #f11a1a
}
body {
  overflow:hidden;
  color:rgba(255,255,255,0.5);
  font-family:"Russo One",arial,sans-serif;
  line-height:1.25;
  letter-spacing:.06em
}
.hide {
  opacity:0;
  visibility:hidden

}
.remove {
  display:none !important
}
.blur {
  filter:blur(12px)
}
.container {
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center
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
  background-color: red;
}
</style>