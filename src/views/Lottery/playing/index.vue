<template>
<div class="playcontainer">
  <canvas class='playingcanvas'  id="playingCanvas"></canvas>

  <div class="left-right-distribution">
<!--    左-->
    <div class="play-ball-dispsition">
      <BallResult v-if="received_show_status" :ball_hundred=ball_hundred :ball_tens="ball_tens" :ball_ones="ball_ones"></BallResult>
          <div v-if="not_received_show_status" style="min-width: 270px" >&nbsp;</div>
    </div>
<!--    中-->
    <div class="result-number">

    </div>
<!--    右-->
    <div class="play-button-group">
      <div class="icon">
        <div class="icon__Save">
          <div id="draw_button" >Start</div></div>
        <div class="icon__Read">
          <div  @click="add_result_to_page">Save</div></div>
        <div class="icon__settings">
          <a href="/#" >Return</a></div>
      </div>
    </div>
  </div>
<!--  click anywhere to add balls-->
</div>

</template>

<script lang="js" setup>
 import {onMounted, ref ,computed} from "vue";
 import BallResult from "@/views/Lottery/playing/ballResult/index.vue";
 import { GenerateNumber,MaxNumber} from "@/utils/generateNumber"

 const generateNumber = new GenerateNumber();
 import ButtonGroup from "@/views/Lottery/playing/button/index.vue";
 const ball_hundred = ref('');
 const ball_tens = ref('');
 const ball_ones = ref('');
 const enable_choose_ball = ref(false)
 const enbale_eat = ref(false)
 let y=false;  // 用于控制动画是否停止
 const one_time_ball_number = ref(0)//`一次性生成的小球数量`
 let success_ball_list = []; // 成功入选的小球列表
 const this_selected_value = ref(0) // 当前选中的值



 const show_ballResult = ref(false) // 显示小球的结果
 const received_show_status = computed(() => {
   return show_ballResult.value;
 });
 const not_received_show_status = computed(() => {
   return !show_ballResult.value;
 });


 function rgb() {
   var x = Math.ceil(Math.random() * 100) + 155, // Setting a minimum threshold for lighter colors
       y = Math.ceil(Math.random() * 100) + 155,
       z = Math.ceil(Math.random() * 100) + 155;
   return 'rgb(' + x + ',' + y + ',' + z + ')';
   // return 'pink';
   // return 'rgb(255, 192, 203)'
 }


 function character(){
   let x = Math.floor(Math.random()*10);
   return x.toString();
 }

  const add_result_to_page = ()=>{
    const result_element = document.getElementsByClassName("result-number");
    result_element[0].innerHTML += `<div>${this_selected_value.value}</div>`;
  }

 onMounted(()=> {

   var canvas = document.getElementById("playingCanvas");
   var context = canvas.getContext("2d");
   var screenHeight = window.innerHeight;
   var screenWidth = window.innerWidth;

// Set the canvas width to full screen
   canvas.width = screenWidth;
// Set the canvas height to 80% of the screen height
   var canvasHeight = screenHeight * 0.8;
   canvas.height = canvasHeight;


   let balls=[];    // 与球有关的数组
   let Max_Ball_Radius = 20;
   // canvas 设置
   let BallRadius = 16;
   let SuccsssArea = BallRadius * 5 // 下底面中心左右50范围内的小球算是成功入选
   context.font='25px sans-serif';
   context.textAlign='center'
   context.textBaseline='middle'
   //canvas.height=window.innerHeight;
   //canvas.width=window.innerwidth;

   var ball = function() {
     this.r=BallRadius,
     this.x=Math.floor(Math.random()*1000)-20,
     this.y=Math.floor(Math.random()*500)-20,
     // this.x=Math.floor(Math.random()*canvas.weight)-20,
     // this.y=Math.floor(Math.random()*canvas.height)-20,
         this.opacity = Math.random() * 0.2 + 0.8,
     this.vx=Math.random()*10-5,
     this.vy=Math.random()*10-5,
     this.color=rgb();
     this.word=character();
     this.font_size = 20;
   }
   ball.prototype.draw = function() {
     context.beginPath();

     // 创建径向渐变，以小球位置为中心，从小球颜色到白色
     var gradient = context.createLinearGradient(this.x - this.r, this.y - this.r, this.x + this.r, this.y + this.r);
     gradient.addColorStop(0, this.color);
     gradient.addColorStop(0.8, lighterColor(this.color, 0.1));  // Transition to a slightly lighter shade
     // this.opacity
     // context.fillStyle = this.color; //gradient; // 设置填充样式为径向渐变
     // context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
     // context.closePath();
     // context.fill();
     // context.fillStyle = '#ffffff';
     // context.fillText(this.word, this.x, this.y);
     // Assuming this is inside your ball drawing function
// Calculate gradient for 3D effect


     // Assuming this is inside your ball drawing function
// // Calculate gradient for 3D effect
//      var gradient = context.createLinearGradient(this.x - this.r, this.y - this.r, this.x + this.r, this.y + this.r);
//      gradient.addColorStop(0, this.color);
//      gradient.addColorStop(0.9, lighterColor(this.color, 0.1));  // Transition to a slightly lighter shade
//      var gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
//      gradient.addColorStop(0, this.color); // Transition to a slightly lighter shade at the center
     // gradient.addColorStop(0.8, this.color); // Color at the edges
     // gradient.addColorStop(1, this.color); // Color at the edges

     context.globalAlpha = this.opacity; // 设置透明度为 50%
     context.fillStyle = gradient;

// Draw the ball with the 3D effect
     context.beginPath();
     context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
     context.closePath();
     context.fill();

// Add a highlight to the ball
     context.beginPath();
     context.arc(this.x - this.r * 0.3, this.y - this.r * 0.3, this.r * 0.2, 0, 2 * Math.PI, false);
     context.fillStyle = 'rgba(255, 255, 255, 0.5)';
     context.fill();

     // 绘制文字
     context.font = `italic bold ${this.font_size}px Arial`;  // Example font style, weight, size, and family
     context.fillStyle = 'white';  // Example font color
     context.shadowColor = 'white'; // 发光效果的颜色
     context.fillText(this.word, this.x, this.y);
// Function to lighten a color
     function lighterColor(color, percent) {
       var num = parseInt(color.slice(1), 16);
       var r = Math.min(255, (num >> 16) * (1 + percent));
       var g = Math.min(255, (num & 0x00FF) * (1 + percent));
       var b = Math.min(255, ((num >> 8) & 0x00FF) * (1 + percent));
       return '#' + (g | b << 8 | r << 16).toString(16).padStart(6, '0');
     }


   }
   ball.prototype.update=function(){
     for (var i=0; i<balls.length; i++){
       for (var j= 0; j < balls.length; j++) {
         if (i==j)
           continue
         else if(Math.pow(balls[i].x-balls[j].x,2)+Math.pow(balls[i].y-balls[j].y,2)<Math.pow(balls[i].r+balls[j].r,2) && (balls[i].r<Max_Ball_Radius && balls[j].r<Max_Ball_Radius) && enbale_eat.value){
           // 大球吃小球
           // balls[i].word+=balls[j].word;
           balls[i].word=balls[j].word;
           balls[i].r+=balls[j].r;
           balls[i].vx +=balls[j].vx;
           balls[i].font_size +=balls[j].font_size;
           balls.splice(j,1);

         }
       }
     }
    // 边界反弹逻辑
     if(this.vx!=0){
       this.x+=this.vx
       if (this.x+this.r>canvas.width){
         this.x=canvas.width-this.r;
         this.vx*=-1;
       }

       if (this.x-this.r<0){
         this.x=this.r;
         this.vx*=-1;
       }
     }

     if (Math.abs(this.vy)>0) {
       this.y-=this.vy
       if (this.y+this.r>canvas.height) {
         this.y = canvas.height - this.r;
         this.vy*=-1;
       }

       if (this.y-this.r<0) {
         this.y=this.r;
         this.vy*=-1;
       }
     }
     if (enable_choose_ball.value && Math.abs(this.y+this.r === canvas.height) && Math.abs(this.x-canvas.width/2)<SuccsssArea )
     {
       if (success_ball_list.includes(this))
         return
       // console.log(this)
       one_time_ball_number.value += 1
      success_ball_list.push(this)
       this.vy = 0
       this.vx = 0
       this.opacity = 0.3 + 0.05 * one_time_ball_number.value;
       if (one_time_ball_number.value === 3){
         one_time_ball_number.value = 0;
         console.log('successful get the number')
         let number_value = eval(success_ball_list[0].word)*100 + eval(success_ball_list[1].word)*10 + eval(success_ball_list[2].word);
         console.log(`origion number_value is ${number_value}`);
         number_value = number_value % MaxNumber;    //  取余数
         console.log(`number_value is ${number_value}`);
         number_value = generateNumber.judgeNumberValid(number_value)
         const ball_result = generateNumber.splitNumber(number_value)
         console.log(`ball_result is ${ball_result}`)
         this_selected_value.value = number_value;
         generateNumber.save(number_value)
         ball_hundred.value = ball_result.hundreds.toString();
         ball_tens.value = ball_result.tens.toString();
         ball_ones.value = ball_result.ones.toString();
         const draw_button = document.getElementById('draw_button');
         draw_button.click()

         document.getElementById('draw_button').innerHTML='Start';


         show_ballResult.value = true; // 显示小球结果
         success_ball_list = [];
         // reset_canvas();

       }
     }
   }

   function animate(){
     context.clearRect(0,0,canvas.width,canvas.height);
     for(let i=0;i<balls.length;i++){
       balls[i].draw();
       balls[i].update();
     }
     if (!y)
       window.requestAnimationFrame(animate);
   }


   function add_ball(e){
     e.preventDefault();
     var b = new ball();
     b.x=e.clientX;
     b.y=e.clientY;
     balls.push(b);
   }

   function reset_canvas(){
     for(let i=0;i<50;i++)
       balls[i]=new ball()
     enable_choose_ball.value = false;
     enbale_eat.value = false;
     return;
   }
   function start_pause_animation(){
     success_ball_list = [];//清空成功入选的小球列表
     one_time_ball_number.value = 0;
     const draw_button = document.getElementById('draw_button');
     if (draw_button.innerHTML === 'Start') {
       enable_choose_ball.value = true;
       enbale_eat.value = true;
       show_ballResult.value = false; // 隐藏小球结果
       if(!y){
         document.getElementById('draw_button').innerHTML='Stop';
       }
       else {
         reset_canvas();
         document.getElementById('draw_button').innerHTML='Draw';
       }

       console.log('begin to draw')
       return
     }
     y=!y // 取反
     if (!y){
       document.getElementById('draw_button').innerHTML='Stop';
       animate();
       enable_choose_ball.value = true;
     }
     else{
       document.getElementById('draw_button').value='Draw';
       document.getElementById('draw_button').innerHTML='Draw';
     }
   }

   canvas.addEventListener('click',add_ball,true);
   var draw_button = document.getElementById("draw_button");
   draw_button.addEventListener('click',start_pause_animation,true);

   animate();
   for(let i=0;i<50;i++)
     balls[i]=new ball()
 })
</script>



<style lang="scss">
body {
  background:#ecf0f1;
}
.playcontainer {
  background:#ecf0f1;
}
canvas {
  top: 0;
  left: 0;
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  //background: #d9a7c7;  /* fallback for old browsers */
  //background: -webkit-linear-gradient(to right, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
  //background: linear-gradient(to right, #fffcdc, #d9a7c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  //background-image: url("@/views/Lottery/playing/background/cool-background.svg");//* 使用线性渐变从蓝色到红色 */
  //background-size: cover;  // 设置背景图像自适应
  //border: 3px; /* 设置边框宽度为3px */
  //border-style: solid; /* 设置边框样式为实线 */
  //border-image: linear-gradient(to right,#e9defa, #fbfcdb) 1; /* 使用线性渐变作为边框图像，并且重复填充 */
  border: black 8px solid;
  border-radius: 15px;

}

.left-right-distribution {
  display: flex;
  height: auto;
  justify-content: space-between;
}
.play-button-group{
  position: relative;
  float: right;
  bottom: 0;
  text-align: center;
  align-items: center;
}
.result-number{
  font-family: 'lemon';
  column-count: 2;
  color: blue;
  div{
    font-size: 15px;
  }
}
</style>


<style lang="scss" scoped>
/*  ICONS  */
$greyLight-2: #c8d0e7;
$white: #FFFFFF;
$greyDark: #9baacf;

.icon {
  min-width: 15rem;
  display: flex;
  justify-content: space-between;

  &__Read, &__Save, &__settings {
    width: 4rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0.3rem 0.3rem 0.6rem $greyLight-2, -0.2rem -0.2rem 0.5rem $white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    color: $greyDark;
    transition: all 0.5s ease;

    &:active {
      box-shadow: inset 0.2rem 0.2rem 0.5rem $greyLight-2, inset -0.2rem -0.2rem 0.5rem $white;
      color: var(--primary);
    }

    &:hover {
      color: var(--primary);
    }
  }
}
</style>