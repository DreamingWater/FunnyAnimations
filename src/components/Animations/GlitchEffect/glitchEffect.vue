
<template>

<div class="glitch-container">
  <div class="TextGlitch" id="title">
    <div class="TextGlitch-clip">
      <div class="TextGlitch-word"></div>
      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendA"></div>
      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendB"></div>
    </div>
    <div class="TextGlitch-clip">
      <div class="TextGlitch-word"></div>
      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendA"></div>
      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendB"></div>
    </div>
    <div class="TextGlitch-clip">
      <div class="TextGlitch-word"></div>
      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendA"></div>
      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendB"></div>
    </div>
  </div>
</div>

</template>
<script lang="js" setup>
import { onMounted, onBeforeMount } from "vue";
import { add_script, add_css_style } from "@/utils/AppendCSSJS";
import XiaoTeng from "@/components/Animations/XiaoTeng/xiaoTeng.vue";

onMounted(() => {

  setTimeout(() => {
    add_script('/src/components/Animations/GlitchEffect/glitchEffect.js');

  }, 100);

});


</script>


<style scoped lang="scss">
@import "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Fira+Mono:wght@500&display=swap";
html,
body {
  height: 100%;
}
.glitch-container {
  margin: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
.}

/* ..................................................... */
.TextGlitch {
  --TextGlitch-blendSize: .08em;
  --TextGlitch-blendColorA: #77f8;
  --TextGlitch-blendColorB: #ff68;

  position: relative;
  color: #fff;
  line-height: 1em;
  letter-spacing: -.1ch;
  font-size: 8vw;
  font-family: "Fira Code", monospace;
}

.TextGlitch::after {
  display: none;
  content: "";
  position: absolute;
  left: 100%;
  bottom: 0;
  width: .7ch;
  height: 1em;
  margin-left: .35ch;
  border-radius: 2px;
  background-color: currentColor;
  animation: cursorAnim 1s ease infinite;
}
@keyframes cursorAnim {
  0% { opacity: .5; }
  45% { opacity: .5; }
  55% { opacity: 0; }
  100% { opacity: 0; }
}

.TextGlitch-clip {
  position: relative;
  display: flex;
  align-items: baseline;
}
.TextGlitch-clip + .TextGlitch-clip {
  position: absolute;
  top: 0;
}
.TextGlitch:not( .TextGlitch-blended ) .TextGlitch-clip + .TextGlitch-clip {
  display: none;
}

.TextGlitch-word {
  margin: 0;
  white-space: nowrap;
}

.TextGlitch-blend {
  position: absolute;
  top: 0;
  opacity: 0;
  transition: .1s;
  transition-property: opacity;
}
.TextGlitch-blendA {
  color: var( --TextGlitch-blendColorA );
  margin: calc( var( --TextGlitch-blendSize ) * -1 ) 0 0 var( --TextGlitch-blendSize );
  mix-blend-mode: darken;
}
.TextGlitch-blendB {
  color: var( --TextGlitch-blendColorB );
  margin: var( --TextGlitch-blendSize ) 0 0 calc( var( --TextGlitch-blendSize ) * -1 );
  mix-blend-mode: color-burn;
}
.TextGlitch-blended .TextGlitch-blend {
  opacity: .4;
}

</style>