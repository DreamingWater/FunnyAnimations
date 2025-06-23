<template>
  <div class="loading-container">
    <LoadingCat />
    <div class="loading-text">别走<br>等我再转一圈</div>
  </div>
  <div class="xiaoteng"  v-drag>
    <XiaoTeng color="#FFFFF0" />
  </div>
</template>

<script setup>
import XiaoTeng from "@/components/Animations/XiaoTeng/xiaoTeng.vue";
import LoadingCat from "@/components/Animations/Loading/LoadingWhiteCat/LoadingCat.vue";
</script>

<style scoped lang="scss">
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsl(213, 32%, 89%);
}

.loading-text {
  font-size: 50px;
  font-weight: bold;
  font-family: AaWeiDuXinDong;
  background: linear-gradient(to right, #97b0b7, hsl(213, 32%, 43%)); // Adjusted gradient colors
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  margin-left: 50px; /* Adjust as needed for spacing */
  max-width: 350px; /* Adjust the width as needed */
  white-space: pre-wrap; /* Preserve whitespace */
}
.xiaoteng{
  position: absolute; left: 857px; top: 411px;
}
</style>