<script setup>

</script>

<template>
<div class="container">
  <div class="handwrite">小疼</div>
</div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: 'QingNiaoHuaGuangFanXingKai';
  src: url('@/assets/ttf/QingNiaoHuaGuangFanXingKai.woff');
}



.container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
  }
  .handwrite{
    font-size: 35rem;
    font-family: 'QingNiaoHuaGuangFanXingKai',serif;
    font-weight: 700;
    position: relative;
    animation: write 2s steps(40) forwards;
  }
</style>