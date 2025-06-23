<template>
  <div>
    <canvas ref="canvas" width="800" height="700"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // const canvas = this.$refs.canvas;
      // const ctx = canvas.getContext('2d');

      // 设置字体样式
      // ctx.font = "italic bold 70px lemon";
      // ctx.fillStyle = 'white';
      // ctx.shadowColor = 'blue'; // 发光效果的颜色
      // ctx.shadowBlur = 10; // 发光效果的模糊程度
      // ctx.fillText('125', 50, 100); // 绘制发光的字符串
      // 判断坐标是否在文本路径内
      // const mouseX = 100;
      // const mouseY = 120;
      //
      // if (ctx.isPointInPath(mouseX, mouseY)) {
      //   console.log('坐标在文本路径内');
      // } else {
      //   console.log('坐标不在文本路径内');
      // }

      function colorPixelsOutsideText(canvas, text, x, y, fontStyle, textColor, outsideColor) {
        const ctx = canvas.getContext('2d');
        ctx.font = fontStyle;
        ctx.fillStyle = textColor;
        ctx.fillText(text, x, y);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const x = (i / 4) % canvas.width;
          const y = Math.floor(i / 4 / canvas.width);
          const pixelColor = [data[i], data[i + 1], data[i + 2], data[i + 3]];

          if (!ctx.isPointInPath(x, y)) {
            data[i] = outsideColor[0]; // 设置像素为黄色
            data[i + 1] = outsideColor[1];
            data[i + 2] = outsideColor[2];
          }
          // else {
          //   data[i] = 255; // 设置像素为黄色
          //   data[i + 1] = 0;
          //   data[i + 2] = 255;
          // }
        }

        ctx.putImageData(imageData, 0, 0);
      }
      const canvas = this.$refs.canvas;
      const text = '125';
      const x = 50;
      const y = 100;
      const fontStyle = 'italic bold 70px lemon';
      // ctx.fillStyle = 'white';
      const textColor = 'white';
      const outsideColor = [255,255,0]; // 黄色

      colorPixelsOutsideText(canvas, text, x, y, fontStyle, textColor, outsideColor);

    }
  }
};
</script>
<style lang="css" scoped>
@font-face {
  font-family: 'lemon';
  src: url('@/assets/ttf/Lemon-Regular.ttf') format('truetype');
}

  canvas{
    background-color: #1a1a1a;
  }
</style>