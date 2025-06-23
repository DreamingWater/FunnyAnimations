<template>
<div class="pumpkin-evil-container">
  <div class="container smoke">
    <svg width="0">
      <filter id="filter">
        <feTurbulence id="turbulence" type="fractalNoise" baseFrequency=".03" numOctaves="30" />
        <feDisplacementMap in="SourceGraphic" scale="20" />
      </filter>
    </svg>

  </div>
</div>
</template>



<script lang="js" setup>
import { onMounted, onBeforeMount } from "vue";
import { add_script, add_css_style } from "@/utils/AppendCSSJS";

onMounted(() => {
setTimeout(()=>{
  add_script('/src/views/Decem/EvilPumpkin/evilPumpkin.js');
})

});


</script>


<style scoped lang="scss">
.pumpkin-evil-container {
  background-color: black;
  color: white;
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  height: 100%;
  width: 100%; /* Past zich aan de breedte van het scherm aan */
  background-image: url("https://img.zcool.cn/community/01c6c25dbad604a801209e1f408739.gif");
  background-size: contain; /* 使图片自适应 */
  background-position: center; /* 使图片居中 */
  background-repeat: repeat; /* 使图片平铺 */
}

.smoke {
  filter: url("#filter");
}

</style>