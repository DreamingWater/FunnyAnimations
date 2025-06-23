<script lang="js" setup>
  import {onMounted} from "vue";
  onMounted(()=> {
        var flakes = [],
            flakeCount = 400,
            mX = -100,
            mY = -100;
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d'); // 绘制数字路径
        canvas.style.background='red';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = 99999;
        canvas.style.pointerEvents = 'none';

        function snow() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.font = '100px Arial';
          ctx.fillText('124', 500, 100);
          ctx.fillText('34', 500, 200);
          ctx.fillText('87', 500, 300);
          ctx.fillText('286', 500, 400);
          ctx.fillText('4', 500, 500);
          // 雪花字符 ❄❉❅❆✻✼❇❈❊✥✺

          for (var i = 0; i < flakeCount; i++) {
            var flake = flakes[i],
                x = mX,
                y = mY,
                minDist = 150,
                x2 = flake.x,
                y2 = flake.y;
            var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
                dx = x2 - x,
                dy = y2 - y;

            if(Math.abs(flake.x-500)<50 && Math.abs(flake.y-500)<50)
            {
              ctx.fillText(flake.text, flake.x, flake.y);
              ctx.fill();
            }
            else {
              if (dist < minDist) {
                var force = minDist / (dist * dist),
                    xcomp = (x - x2) / dist,
                    ycomp = (y - y2) / dist,
                    deltaV = force / 2;
                flake.velX -= deltaV * xcomp;
                flake.velY -= deltaV * ycomp;
              } else {
                flake.velX *= 0.98;
                if (flake.velY <= flake.speed) {
                  flake.velY = flake.speed;
                }
                flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
              }

              ctx.fillStyle = 'rgba(255,255,255,' + flake.opacity + ')';
              flake.y += flake.velY;
              flake.x += flake.velX;
              if (flake.y >= canvas.height || flake.y <= 0) {
                reset(flake);
              }
              if (flake.x >= canvas.width || flake.x <= 0) {
                reset(flake);
              }
              ctx.font = `${flake.size}px monospace`;

              ctx.fillText(flake.text, flake.x, flake.y);
              ctx.fill();
            }
            // ctx.beginPath();
            // ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);


          }
          requestAnimationFrame(snow);
        }

        function reset(flake) {
          flake.x = Math.floor(Math.random() * canvas.width);
          flake.y = Math.floor(0.1 *canvas.height);
          // flake.size = Math.random() * 20 + 10;
          // flake.speed = flake.speed;
          flake.velY = flake.speed;
          flake.velX = 0;
          flake.opacity = Math.random() + 0.1;
        }

        function init() {
          // 修复重复创建的问题
          if (document.getElementById('snow')) {
            return;
          }
          document.body.appendChild(canvas);
          for (var i = 0; i < flakeCount; i++) {
            var x = Math.floor(Math.random() * canvas.width),
                y = Math.floor(Math.random() * canvas.height),
                size = Math.random() * 5+5 ,
                speed = Math.random() * 4 + 4,
                opacity = Math.random() + 0.1;
            let snowText = '❄❉❅❆✻✼❇❈❊✥✺';
            const text = snowText.charAt(Math.floor(Math.random() * snowText.length));
            flakes.push({
              speed: speed,
              velY: speed,
              velX: 0,
              x: x,
              y: y,
              size: size,
              stepSize: (Math.random() / 30) * 1,
              step: 0,
              angle: 180,
              opacity: opacity,
              text,
            });
          }
          snow();
        }
        // document.addEventListener('mousemove', function (e) {
        //   (mX = e.clientX), (mY = e.clientY);
        // });
        window.addEventListener('resize', function () {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        });
        setTimeout(() => {
          init();
        }, 300);

  })
</script>

<template>
  <canvas id="canvas" ></canvas>
</template>

<style scoped>

</style>