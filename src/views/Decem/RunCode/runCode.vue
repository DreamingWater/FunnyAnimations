

<template>
<div class="run-code-container">
  <GlitchEffect/>
  <CssLoading />
</div>
</template>
<script setup>
  import GlitchEffect from "@/components/Animations/GlitchEffect/glitchEffect.vue";
  import CssLoading from "@/components/Animations/Loading/CssLoading.vue";

  // const props = defineProps({
  //   color: { type: String, default: '#f3adad' },
  //   background_color:  { type: String, default: '#f3adad' }
  // });

</script>
<style scoped lang="scss">
.run-code-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 1100px;
  align-self: center;
  background-color: #d3d3f8;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
}
</style>