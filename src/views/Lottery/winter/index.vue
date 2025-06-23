<template>
  <canvas id="canvas" width="600" height="600"></canvas>
</template>

<script lang="js" setup> // 获取画布对象
  import {onMounted} from "vue";
   onMounted(()=>{

     var canvas = document.getElementById('canvas');
     var ctx = canvas.getContext('2d'); // 绘制数字路径

     var numberPath = [ [0, 0], [0, 100], [50, 100], [50, 0], [0, 0], [50, 0], [50, 50], [0, 50], [0, 0], [50, 0], [50, -50], [0, -50], [0, 0], [50, 0], [50, 50], [100, 50], [100, 0] ]; ctx.beginPath(); ctx.moveTo(numberPath[0][0], numberPath[0][1]);
     for (var i = 1; i < numberPath.length; i++)
     {
       ctx.lineTo(numberPath[i][0],
           numberPath[i][1]);
     }
     ctx.stroke(); // 雪花数组
     var snowflakes = []; // 随机函数
     function random(min, max)
     {
       return Math.random() * (max - min) + min;
     } // 雪花对象
     function Snowflake(x, y)
     {
       this.x = x; this.y = y;
       this.radius = random(1, 4);
       this.speed = random(1, 3);
       this.angle = random(0, 360) * Math.PI / 180;
       this.vx = this.speed * Math.cos(this.angle);
       this.vy = this.speed * Math.sin(this.angle);
     } // 雪花绘制函数
     function drawSnowflake(snowflake)
     {
       ctx.beginPath();
       ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
       ctx.fillStyle = 'white'; ctx.fill();
     } // 雪花更新函数
     function updateSnowflake(snowflake)
     {
       snowflake.x += snowflake.vx;
       snowflake.y += snowflake.vy;
       if (snowflake.x < -snowflake.radius || snowflake.x > canvas.width + snowflake.radius || snowflake.y < -snowflake.radius || snowflake.y > canvas.height + snowflake.radius)
       { return false; }
       return true;
     } // 雪花生成函数
     function generateSnowflakes()
     {
       var centerX = 50;
       var centerY = 50;
       var radius = 25;
       for (var i = 0; i < 1000; i++)
       { var x = random(centerX - radius, centerX + radius);
         var y = random(centerY - radius, centerY + radius);
         if (ctx.isPointInPath(x, y))
         { snowflakes.push(new Snowflake(x, y)); }
       }
     } // 动画循环
     function animate()
     {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       for (var i = 0; i < snowflakes.length; i++)
       {
         drawSnowflake(snowflakes[i]);
         if (!updateSnowflake(snowflakes[i]))
         { snowflakes.splice(i, 1); i--; }
       }
       requestAnimationFrame(animate);
     } // 启动动画
     generateSnowflakes();
     animate();
   })
</script>


<style lang="scss" scoped>
canvas{
  background-color: #1a1a1a;
}
</style>