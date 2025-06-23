<template>

  <div class="outcontainer">
   <div class="slider-content">
     <Slider />
   </div>
    <SnowCss></SnowCss>
    <div class="winter-container">
<!--      <SnowCss></SnowCss>-->
      <!--      <div class="text" style="&#45;&#45;j:0">-->
      <!--        <span style="&#45;&#45;i:0">2</span>-->
      <!--        <span style="&#45;&#45;i:1">3</span>-->
      <!--        <span style="&#45;&#45;i:2">4</span>-->
      <!--        <span style="&#45;&#45;i:3">5</span>-->
      <!--      </div>-->
      <div class="text" style="--j:1">
        <span style="--i:0">0</span>
        <span style="--i:1">1</span>
        <span style="--i:2">2</span>
        <span style="--i:3">3</span>
      </div>
      <div class="text" style="--j:2">
        <span style="--i:0">0</span>
        <span style="--i:1">1</span>
        <span style="--i:2">2</span>
        <span style="--i:3">3</span>
      </div>
      <div class="text" style="--j:3">
        <span style="--i:0">0</span>
        <span style="--i:1">1</span>
        <span style="--i:2">2</span>
        <span style="--i:3">3</span>
      </div>
    </div>
<!--    <h2>Happy New Year </h2>-->
    <div class="content-container">
      <div class="result-number">
      </div>
      <div class="icon-content-container">
        <div class="icon">
          <div class="icon__Save">
            <div  id="draw-element">停止摇动</div></div>
          <div class="icon__Read">
            <div id="save-element" @click="start_rotate">开始抽奖</div></div>
          <div class="icon__settings">
            <a href="/#">Return</a></div>
        </div>
      </div>

    </div>
    <div class="glowing">
      <span style="--i:1"></span>
      <span style="--i:2"></span>
      <span style="--i:3"></span>
    </div>
    <div class="glowing">
      <span style="--i:1"></span>
      <span style="--i:2"></span>
      <span style="--i:3"></span>
    </div>
    <div class="glowing">
      <span style="--i:1"></span>
      <span style="--i:2"></span>
      <span style="--i:3"></span>
    </div>
    <div class="glowing">
      <span style="--i:1"></span>
      <span style="--i:2"></span>
      <span style="--i:3"></span>
    </div>

  </div>

</template>


<script lang="ts" setup>
    import { onMounted,ref } from "vue";
    import SnowCss from "@/views/Lottery/winter/snowcss.vue";
    import Slider from "@/views/Lottery/winter/slider/index.vue";
    import { GenerateNumber,MaxNumber} from "@/utils/generateNumber";

    const NeedRunning = ref(false);
    const generateNumber = new GenerateNumber();
    const this_selected_value = ref(0); // 当前选中的值
    let TextElementJungles = [0,0,0]; // 文本的转动角度
    let TextElementNumber = [[0,1,2,3],[0,1,2,3],[0,1,2,3]]; // 文本的数值
    let CurrentPageIndex = [0,0,0]; // 当前正面所在的元素
    function change_element_number(element, index) {
      const current_element_angle = TextElementJungles[index]; // 获取当前元素所在的旋转角度
      const current_page = (4 - Math.floor(current_element_angle / 90)%4 ) % 4; // 获取当前元素所在的页数 + 4
      const Max_Value = 10; // 限制最大值
      if (index === 0){
        return
      }
      function getRandomValue() {
        const usedValues = new Set(TextElementNumber[index]); // 创建已使用的数字集合
        const availableValues = Array.from({ length: Max_Value-4 }, (_, i) => i).filter(value => !usedValues.has(value)); // 获取未使用的数字数组
        return availableValues[Math.floor(Math.random() * availableValues.length)]||0; // 从未使用的数字数组中随机选择一个值
      }


      const back_page_value = getRandomValue();
      element.getElementsByTagName('span')[(current_page+1)%4].innerHTML = back_page_value; // 背面数值改变
      TextElementNumber[index][(current_page+1)%4] = back_page_value;

      const top_page_value = getRandomValue();
      element.getElementsByTagName('span')[(current_page +2) % 4].innerHTML = top_page_value; // 顶面数值改变
      TextElementNumber[index][(current_page +2) % 4] = top_page_value;
    }

    const rotate_90_degree = (element:any,index:Number,angles:any)=>{
      change_element_number(element,index);
      element.style.transform = `rotateX(${angles}deg)`;
      TextElementJungles[index] = angles;
    }

    const rotate_boxes = ()=>{
      // NeedRunning.value = false;
      const result_element = document.querySelectorAll('.winter-container .text');
      result_element.forEach((element,index)=>{
        const angles = Math.floor((Math.random()*40))*90;
        TextElementJungles[index] = angles;
        rotate_90_degree(element,index,angles);
      })
    }
    setInterval(()=>{
      if (NeedRunning.value){
        rotate_boxes();
      }
    },3000)

    const start_rotate = ()=>{
      NeedRunning.value = true;
      console.log(NeedRunning.value)
    }
    const delays_animation_element  = (element:any,index:Number,data_value)=>{
      // 计算每个text元素需要旋转的角度
      let rotationAngle = TextElementJungles[index] + Math.floor((Math.random()*3))*90;
      while (TextElementJungles[index] !== rotationAngle){
        let thisRotation = TextElementJungles[index]; // 获取当前元素所在的旋转角度

        let rotationStepAngle = rotationAngle>thisRotation?thisRotation+90:thisRotation-90; // 计算旋转一次的结果
        rotate_90_degree(element,index,rotationStepAngle);
        // console.log(rotationStepAngle);
      }
      const current_page = (4 - Math.floor(rotationAngle / 90)%4 ) % 4; // 获取当前元素所在的页数 + 4
      // console.log(`result:${current_page}`)
      CurrentPageIndex[index] = current_page
      const result_element = document.querySelectorAll('.winter-container .text');
      const this_element =  result_element[index];
      this_element.getElementsByTagName('span')[current_page].innerHTML = data_value;
      // return eval(this_element.getElementsByTagName('span')[which_page].innerHTML)
    }

    const add_result_to_page = ()=>{
      function getElementValue(index,which_page){
        const result_element = document.querySelectorAll('.winter-container .text');
        const this_element =  result_element[index];
        return eval(this_element.getElementsByTagName('span')[which_page].innerHTML)
      }

      console.log(CurrentPageIndex)
      this_selected_value.value = 100 * getElementValue(0,CurrentPageIndex[0]) + 10 * getElementValue(1,CurrentPageIndex[1]) + getElementValue(2,CurrentPageIndex[2]);
      console.log(this_selected_value.value);
      const result_element = document.getElementsByClassName("result-number");
      result_element[0].innerHTML += `<div>${this_selected_value.value}</div>`;
    }

    onMounted(() => {


      let draw_click = document.querySelector('#draw-element');
      let textElements = document.querySelectorAll('.winter-container .text');

      const element_variation = ()=>
      {
        NeedRunning.value = false;
        const data = generateNumber.generateRandomNumber();
        const result = generateNumber.splitNumber(data);
        const result_array = [result.hundreds, result.tens , result.ones];
        textElements.forEach((text,index) => {
          setTimeout(()=>{
            delays_animation_element(text,index,result_array[index]);
          },index*1000)
        });
        generateNumber.save(data);
        setTimeout(()=>{
          add_result_to_page();
        },5000)
      }
      draw_click.addEventListener('click',()=>{
        console.log(NeedRunning.value)
        NeedRunning.value = false;
        element_variation();
        // console.log(TextElementJungles);

        },true);

    });

</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap');

@font-face {
  font-family: 'lemon';
  src: url('@/assets/ttf/Lemon-Regular.ttf') format('truetype');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif;
}

.outcontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  background: #3d3d3d;
}

.winter-container {
  position: absolute;
  display: flex;
  transform-style: preserve-3d;
  gap: 10px;
  transform: rotateY(30deg) rotateX(10deg);
}


.text {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transition: 2.5s ease-in-out;
  transition-delay: calc(0.25s * var(--j));
}

.text span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 4em;
  cursor: default;
  background: linear-gradient(#434343, #535353);
  transform-style: preserve-3d;
  transform: rotateX(calc(90deg * var(--i)))translateZ(100px);
}

.text::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #373737;
  transform-origin: left;
  transform: rotateY(90deg) translateX(-100px);
}
.text:first-child::before {
  content: '❆';
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 90px;
}
.text:last-child span {
  background: linear-gradient(#29c040,#32ed4e);
}
.text:last-child span::before {
  background: #11a728;
}
.text:last-child::before{
  background: #11a728;
}


.content-container {
  position: fixed;
  bottom: 50px;
  color: #252525;
  font-size: 2em;
  transition: 0.5s;
  cursor: pointer;
  right:100px;

}
.result-number{

  column-count: 2;
  color: white;
  font-family: "lemon" !important;
  font-size: 52px;
}
  .icon-content-container{
    margin-top: 20px;
  }


.glowing {
  position: relative;
  min-width: 550px;
  height: 500px;
  pointer-events: none;
  margin: -150px;
  transform-origin: right;
  animation: colorChange 5s linear infinite;
}

@keyframes colorChange {
  0% {
    filter: hue-rotate(0deg);
    transform: rotate(0deg);
  }
  0% {
    filter: hue-rotate(360deg);
    transform: rotate(360deg);
  }
}

.glowing:nth-child(even) {
  transform-origin: left;
}

.glowing span {
  position: absolute;
  top: calc(80px * var(--i));
  left: calc(80px * var(--i));
  bottom: calc(80px * var(--i));
  right: calc(80px * var(--i));
  border-radius: 50%;
  box-sizing: border-box;
}

.glowing span::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: -8px;
  width: 15px;
  height: 15px;
  background: #f00;
}

@keyframes animate-reverse {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.glowing span:nth-child(3n + 1) {
  animation: animate 10s alternate infinite;
}
.glowing span:nth-child(3n + 2) {
  animation: animate-reverse 13s alternate infinite;
}
.glowing span:nth-child(3n + 3) {
  animation: animate 8s alternate infinite;
}

@keyframes animate {
  0%{
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.glowing span:nth-child(3n + 1)::before {
  background: rgba(134, 255, 0, 1);
  box-shadow: 0 0 20px rgba(134, 255, 0, 1),
  0 0 40px rgba(134, 255, 0, 1),
  0 0 60px rgba(134, 255, 0, 1),
  0 0 80px rgba(134, 255, 0, 1),
  0 0 4px rgba(134, 255, 0, 0.1);
}
.glowing span:nth-child(3n + 2)::before {
  background: rgba(255, 214, 0, 1);
  box-shadow: 0 0 20px rgba(255, 214, 0, 1),
  0 0 40px rgba(255, 214, 0, 1),
  0 0 60px rgba(255, 214, 0, 1),
  0 0 80px rgba(255, 214, 0, 1),
  0 0 4px rgba(134, 255, 0, 0.1);
}
.glowing span:nth-child(3n + 3)::before {
  background: rgb(0, 226, 255,1);
  box-shadow: 0 0 20px rgba(0, 226, 255,1),
  0 0 40px rgba(0, 226, 255,1),
  0 0 60px rgba(0, 226, 255,1),
  0 0 80px rgba(0, 226, 255,1),
  0 0 4px rgba(0,226, 255,0.1);
}

@media only screen and (max-width: 600px) {
  meta[name="viewport"] {
    initial-scale: 0.25;
  }
}
</style>


<style lang="scss" scoped>


/*  ICONS  */
$greyLight-2: #c8d0e7;
$white: #FFFFFF;
$greyDark: #9baacf;



.icon {
  min-width: 36rem;
  display: flex;
  justify-content: space-between;

  &__Read, &__Save, &__settings {
    width: 10rem;
    height: 6rem;
    border-radius: 50%;
    box-shadow: 0.3rem 0.3rem 0.6rem $greyLight-2, -0.2rem -0.2rem 0.5rem $white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
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
.slider-content{
  position: relative;
  top: 50px;
  left: 0;
}
</style>

