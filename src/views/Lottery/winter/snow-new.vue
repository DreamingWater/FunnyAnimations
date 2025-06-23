<script lang="js" setup>
import { onMounted } from "vue";

onMounted(() => {
  let flakes = [];
  let Flower_number = 50; // 屏幕中雪花的数量
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let numberColor = {
    alpha: 1,
    color: 'black'
  };

  function initFlakes() {
    for (let i = 0; i < Flower_number; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 5 + 2;
      const speed = Math.random() * 4 + 1;
      flakes.push({ x, y, size, speed });
    }
  }

  function drawFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawNumber(); // 绘制数字
    for (let i = 0; i < flakes.length; i++) {
      const flake = flakes[i];
      flake.y += flake.speed;
      if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
      } else if (flake.y > canvas.height / 2 - 48 && flake.x > 20 && flake.x < 20 + 48 * 3) {
        flakes.splice(i, 1); // 当雪花落到数字路径上时移除雪花
        updateNumberColor(flakes.length); // 更新数字的颜色
      } else {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
    }
    requestAnimationFrame(drawFlakes);
  }

  function drawNumber() {
    ctx.fillStyle = `rgba(255, 255, 255, ${numberColor.alpha})`; // 使用上一次的透明度信息
    ctx.fillRect(20, canvas.height / 2 - 48, 48 * 3, 48); // 重建数字
    ctx.fillStyle = 'black';
    ctx.font = "48px Arial";
    ctx.fillText("125", 20, canvas.height / 2); // 在画布中央绘制数字
  }

  function updateNumberColor(flakeCount) {
    numberColor.alpha = Math.min(flakeCount * 0.01, 1); // 根据雪花数量计算透明度，最大为1
  }

  initFlakes();
  drawFlakes();
});

</script>

<template>
  <canvas id="canvas" style="background-color: black"></canvas>
</template>

<style scoped>

</style>