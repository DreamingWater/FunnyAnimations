<template>
  <!--

    CSS Blossoming Flowers at Magical Night.
    I've taken some inspiration by Yup Nguyen's Artwork: https://dribbble.com/shots/11096994-Virtual-Garden.
    Made with Pure CSS & ♥
  -->

<div class="spring-container">

  <div class="night"></div>
  <div class="flowers">
    <div class="flower flower--1">
      <div class="flower__leafs flower__leafs--1">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>
<!--        <div class="ball"></div>-->

        <div class="flower__light flower__light--1" data-label="1"></div>
        <div class="flower__light flower__light--2" data-label="2"></div>
        <div class="flower__light flower__light--3" data-label="3"></div>
        <div class="flower__light flower__light--4" data-label="4"></div>
        <div class="flower__light flower__light--5" data-label="5"></div>
        <div class="flower__light flower__light--6" data-label="6"></div>
        <div class="flower__light flower__light--7" data-label="7"></div>
        <div class="flower__light flower__light--8" data-label="8"></div>

      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
        <div class="flower__line__leaf flower__line__leaf--5"></div>
        <div class="flower__line__leaf flower__line__leaf--6"></div>
      </div>
    </div>

    <div class="flower flower--2">
      <div class="flower__leafs flower__leafs--2">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>
<!--        <div class="ball"></div>-->

        <div class="flower__light flower__light--1" data-label="1"></div>
        <div class="flower__light flower__light--2" data-label="2"></div>
        <div class="flower__light flower__light--3" data-label="3"></div>
        <div class="flower__light flower__light--4" data-label="4"></div>
        <div class="flower__light flower__light--5" data-label="5"></div>
        <div class="flower__light flower__light--6" data-label="6"></div>
        <div class="flower__light flower__light--7" data-label="7"></div>
        <div class="flower__light flower__light--8" data-label="8"></div>

      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
      </div>
    </div>

    <div class="flower flower--3">
      <div class="flower__leafs flower__leafs--3">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>
<!--        <div class="ball"></div>-->

        <div class="flower__light flower__light--1"  data-label="1"></div>
        <div class="flower__light flower__light--2"  data-label="2"></div>
        <div class="flower__light flower__light--3"  data-label="3"></div>
        <div class="flower__light flower__light--4"  data-label="0"></div>
        <div class="flower__light flower__light--5"  data-label="1"></div>
        <div class="flower__light flower__light--6"  data-label="2"></div>
        <div class="flower__light flower__light--7"  data-label="3"></div>
        <div class="flower__light flower__light--8"  data-label="0"></div>

      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:1.2s">
      <div class="flower__g-long">
        <div class="flower__g-long__top"></div>
        <div class="flower__g-long__bottom"></div>
      </div>
    </div>

    <div class="growing-grass">
      <div class="flower__grass flower__grass--1">
        <div class="flower__grass--top"></div>
        <div class="flower__grass--bottom"></div>
        <div class="flower__grass__leaf flower__grass__leaf--1"></div>
        <div class="flower__grass__leaf flower__grass__leaf--2"></div>
        <div class="flower__grass__leaf flower__grass__leaf--3"></div>
        <div class="flower__grass__leaf flower__grass__leaf--4"></div>
        <div class="flower__grass__leaf flower__grass__leaf--5"></div>
        <div class="flower__grass__leaf flower__grass__leaf--6"></div>
        <div class="flower__grass__leaf flower__grass__leaf--7"></div>
        <div class="flower__grass__leaf flower__grass__leaf--8"></div>
<!--        <div class="flower__grass__overlay"></div>-->
      </div>
    </div>

    <div class="growing-grass">
      <div class="flower__grass flower__grass--2">
        <div class="flower__grass--top"></div>
        <div class="flower__grass--bottom"></div>
        <div class="flower__grass__leaf flower__grass__leaf--1"></div>
        <div class="flower__grass__leaf flower__grass__leaf--2"></div>
        <div class="flower__grass__leaf flower__grass__leaf--3"></div>
        <div class="flower__grass__leaf flower__grass__leaf--4"></div>
        <div class="flower__grass__leaf flower__grass__leaf--5"></div>
        <div class="flower__grass__leaf flower__grass__leaf--6"></div>
        <div class="flower__grass__leaf flower__grass__leaf--7"></div>
        <div class="flower__grass__leaf flower__grass__leaf--8"></div>
        <div class="flower__grass__overlay"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:2.4s">
      <div class="flower__g-right flower__g-right--1">
        <div class="leaf"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:2.8s">
      <div class="flower__g-right flower__g-right--2">
        <div class="leaf"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:2.8s">
      <div class="flower__g-front">
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__line"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:3.2s">
      <div class="flower__g-fr">
        <div class="leaf"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
      </div>
    </div>

    <div class="long-g long-g--0">
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:2.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3.4s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--1">
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:3.8s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--2">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:4.4s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:4.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--3">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--4">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--5">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--6">
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.4s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:4.6s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:4.8s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--7">
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:3.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3.5s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>
  </div>

</div>
<div class="button-content">
<div class="button-group">
  <button class='this-draw' id="begin_to_draw">Stop</button>
  <button class='this-draw' id="begin_to_generate" >开始抽奖</button>
</div>
</div>
  <div class="flower_buttom_content">
    <button class="btn">
      <div class="wrapper" >
        <a class="text" href="http://8.219.87.42:9001/">神秘大奖</a>

        <div class="flower flower1">
          <div class="petal one"></div>
          <div class="petal two"></div>
          <div class="petal three"></div>
          <div class="petal four"></div>
        </div>
        <div class="flower flower2">
          <div class="petal one"></div>
          <div class="petal two"></div>
          <div class="petal three"></div>
          <div class="petal four"></div>
        </div>
        <div class="flower flower3">
          <div class="petal one"></div>
          <div class="petal two"></div>
          <div class="petal three"></div>
          <div class="petal four"></div>
        </div>
        <div class="flower flower4">
          <div class="petal one"></div>
          <div class="petal two"></div>
          <div class="petal three"></div>
          <div class="petal four"></div>
        </div>
        <div class="flower flower5">
          <div class="petal one"></div>
          <div class="petal two"></div>
          <div class="petal three"></div>
          <div class="petal four"></div>
        </div>
        <div class="flower flower6">
          <div class="petal one"></div>
          <div class="petal two"></div>
          <div class="petal three"></div>
          <div class="petal four"></div>
        </div>
      </div>
    </button>

  </div>
</template>


<script lang="ts" setup>
  import { onMounted} from "vue";
  import { GenerateNumber} from "@/utils/generateNumber";
  const generateNumber = new GenerateNumber();
  onMounted(()=>{
    const create_element_animation_style = (flower_index:Number,value:Number,edge_light:String,center_color, edge_color)=>{
      // 获取样式表
      const styleSheet = document.styleSheets[0];
      // 创建一个新的keyframes规则
      const upAndGrow_name = `upAndGrow_${flower_index}`
      const keyframes =
          `
          @keyframes ${upAndGrow_name}{
              0% {
                transform: translateY(0) scale(0);
                box-shadow: 0 0 20px 10px ${edge_light}; // 增加发光效果的范围
              }
              50% {
                transform: translateY(-100px) scale(0.75); // 调整上升高度
                box-shadow: 0 0 30px 15px ${edge_light}; // 增加发光效果的范围
              }
              100% {
                transform: translateY(-200px) scale(1.5); // 调整上升高度
                box-shadow: 0 0 40px 20px ${edge_light}; // 增加发光效果的范围
              }
            }
`;
// 创建一个新的类选择器规则
      const balllclassRule = `ball${flower_index}`
      const classRule = `
  .${balllclassRule} {
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, ${center_color}, ${edge_color});
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: ${upAndGrow_name} 5s forwards cubic-bezier(0.25, 0.1, 0.25, 1);
    &::after {
      content: '${value}';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: black;
      font-size: 30px;
      // font-weight: bold;
      font-family: 'lemon';
      }
    }
`;

// 添加类选择器规则到样式表中
      styleSheet.insertRule(classRule, styleSheet.cssRules.length);
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }


  const create_element = (flower_index:Number)=>{
    const flower_index_class = `.flower--${flower_index}`
    const querySelectorPattern = `${flower_index_class} .flower__white-circle`
    // 找到具有 flower__white-circle 类的元素
    const whiteCircle = document.querySelector(querySelectorPattern);

// 创建一个新的div元素
    const ballElement = document.createElement('div');
    ballElement.classList.add(`ball${flower_index}`);

// 将新创建的div元素插入到 flower__white-circle 元素的下面
    whiteCircle.insertAdjacentElement('afterend', ballElement);
  }

  const disable_light_number = (flower_index:Number)=>{
    const flower_index_class = `.flower--${flower_index}`
    const querySelectorPattern = `${flower_index_class} .flower__light`
    const flowerLights = document.querySelectorAll(querySelectorPattern);
    flowerLights.forEach(light => {
      light.classList.add('disable-label');
      light.classList.remove('enable-light-label');
    });
  }
  const enable_light_number = ()=>{
      var array = [1,2,3];
      array.forEach((element,index)=>{
        const flower_index_class = `.flower--${element}`
        const querySelectorPattern = `${flower_index_class} .flower__light`
        const flowerLights = document.querySelectorAll(querySelectorPattern);
        flowerLights.forEach(light => {
          light.classList.add('enable-light-label');
        });
      })
  }

  function create_result(index:Number,value:Number,delay_times_ms:Number,center_color,edge_color){
    setTimeout(()=>{
          create_element(index);
          create_element_animation_style(index,value,'whitesmoke',center_color,edge_color);
          disable_light_number(index);
        }
        ,delay_times_ms)
  }
  function generateRandomNumber(Max_number:Number){
    // 生成一个0到400之间的随机数
    const randomNumber = Math.floor(Math.random() * Max_number);
    // 计算百位、十位和个位
    const hundreds = Math.floor(randomNumber / 100);
    const tens = Math.floor((randomNumber % 100) / 10);
    const ones = randomNumber % 10;

    // 返回百位、十位和个位
    return {
      hundreds,
      tens,
      ones
    };
  }

  const begin_to_draw = ()=>{
    // 调用函数并输出结果
    const result = generateNumber.generateSplitNumber();
    create_result(3,result.hundreds,1000,'white','white');
    create_result(1,result.tens,5000,'#83f07d', 'rgb(178 241 86)');
    create_result(2,result.ones,9000,'white','white');
    generateNumber.save(result.randomNumber);
  }
    var draw_button = document.getElementById("begin_to_draw");
    draw_button.addEventListener('click',begin_to_draw,true);

    var generate_button = document.getElementById("begin_to_generate");
    generate_button.addEventListener('click',enable_light_number,true);
  })



</script>


<style lang="scss" scoped>
$ball-color: blue;
$glow-color: rgba(0, 0, 255, 0.5);
$light-radius: 3.5vmin;
$light-number: 30px;

@font-face {
  font-family: 'lemon';
  src: url('@/assets/ttf/Lemon-Regular.ttf') format('truetype');
}



*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.spring-container  {
  --dark-color: #000;
}

.spring-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--dark-color);
  overflow: hidden;
  perspective: 1000px;
}

.night {
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  filter: blur(0.1vmin);
  background-image: radial-gradient(
      ellipse at top,
      transparent 0%,
      var(--dark-color)
  ),
  radial-gradient(
      ellipse at bottom,
      var(--dark-color),
      rgba(145, 233, 255, 0.2)
  ),
  repeating-linear-gradient(
      220deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 19px,
      transparent 19px,
      transparent 22px
  ),
  repeating-linear-gradient(
      189deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 19px,
      transparent 19px,
      transparent 22px
  ),
  repeating-linear-gradient(
      148deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 19px,
      transparent 19px,
      transparent 22px
  ),
  linear-gradient(90deg, rgb(0, 255, 250), rgb(240, 240, 240));
}

.flowers {
  position: relative;
  transform: scale(0.9);
}

.flower {
  position: absolute;
  bottom: 10vmin;
  transform-origin: bottom center;
  z-index: 10;

  --fl-speed: 0.8s;

  &--1 {
    animation: moving-flower-1 4s linear infinite;
    .flower__line {
    $delay: 0.3s;

      height: 70vmin;
      animation-delay: $delay;

      &__leaf {
        &--1 {
          animation: blooming-leaf-right var(--fl-speed) 1.6s backwards;
        }

        &--2 {
          animation: blooming-leaf-right var(--fl-speed) 1.4s backwards;
        }

        &--3 {
          animation: blooming-leaf-left var(--fl-speed) 1.2s backwards;
        }

        &--4 {
          animation: blooming-leaf-left var(--fl-speed) 1s backwards;
        }

        &--5 {
          animation: blooming-leaf-right var(--fl-speed) 1.8s backwards;
        }

        &--6 {
          animation: blooming-leaf-left var(--fl-speed) 2s backwards;
        }
      }
    }
  }

  &--2 {
    left: 50%;
    transform: rotate(20deg);
    animation: moving-flower-2 4s linear infinite;
    .flower__line {
      height: 60vmin;
      animation-delay: 0.6s;

      &__leaf {
        &--1 {
          animation: blooming-leaf-right var(--fl-speed) 1.9s backwards;
        }

        &--2 {
          animation: blooming-leaf-right var(--fl-speed) 1.7s backwards;
        }

        &--3 {
          animation: blooming-leaf-left var(--fl-speed) 1.5s backwards;
        }

        &--4 {
          animation: blooming-leaf-left var(--fl-speed) 1.3s backwards;
        }
      }
    }
  }

  &--3 {
    left: 50%;
    transform: rotate(-15deg);
    animation: moving-flower-3 4s linear infinite;
    .flower__line {
      animation-delay: 0.9s;
      &__leaf {
        &--1 {
          animation: blooming-leaf-right var(--fl-speed) 2.5s backwards;
        }

        &--2 {
          animation: blooming-leaf-right var(--fl-speed) 2.3s backwards;
        }

        &--3 {
          animation: blooming-leaf-left var(--fl-speed) 2.1s backwards;
        }

        &--4 {
          animation: blooming-leaf-left var(--fl-speed) 1.9s backwards;
        }
      }
    }
  }

  &__leafs {
    position: relative;
    animation: blooming-flower 2s backwards;

  $delay: 0.8;
  $inc: 0.3;

    @for $i from 1 through 3 {
      &--#{$i} {
      $delay: $delay + $inc;
        animation-delay: #{$delay}s;
      }
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-50%, -100%);
      width: 8vmin;
      height: 8vmin;
      background-color: #6bf0ff;
      filter: blur(10vmin);
    }
  }

  &__leaf {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 8vmin;
    height: 11vmin;
    border-radius: 51% 49% 47% 53% / 44% 45% 55% 69%;
    background-color: #a7ffee;
    background-image: linear-gradient(to top, #54b8aa, #a7ffee);
    transform-origin: bottom center;
    opacity: 0.9;
    box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);

    &--1 {
      transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg);
    }

    &--2 {
      transform: translate(-50%, -4%) rotateX(40deg);
    }

    &--3 {
      transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg);
    }

    &--4 {
      width: 8vmin;
      height: 8vmin;
      transform-origin: bottom left;
      border-radius: 4vmin 10vmin 4vmin 4vmin;
      transform: translate(-0%, 18%) rotateX(70deg) rotate(-43deg);
      background-image: linear-gradient(to top, #39c6d6, #a7ffee);
      z-index: 1;
      opacity: 0.8;
    }
  }

  &__white-circle {
    position: absolute;
    left: -3.5vmin;
    top: -3vmin;
    width: 9vmin;
    height: 4vmin;
    border-radius: 50%;
    background-color: #fff;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 60%;
      border-radius: inherit;
      background-image: repeating-linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          67.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          112.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          112.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          22.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          22.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          157.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          67.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      repeating-linear-gradient(
          67.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
      ),
      linear-gradient(90deg, rgb(255, 235, 18), rgb(255, 206, 0));
    }
  }

  &__line {
    height: 55vmin;
    width: 1.5vmin;
    background-image: linear-gradient(
        to left,
        rgb(0, 0, 0, 0.2),
        transparent,
        rgba(255, 255, 255, 0.2)
    ),
    linear-gradient(to top, transparent 10%, #14757a, #39c6d6);
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
    animation: grow-flower-tree 4s backwards;

    &__leaf {
      --w: 7vmin;
      --h: calc(var(--w) + 2vmin);
      position: absolute;
      top: 20%;
      left: 90%;
      width: var(--w);
      height: var(--h);
      border-top-right-radius: var(--h);
      border-bottom-left-radius: var(--h);
      background-image: linear-gradient(
          to top,
          rgba(20, 117, 122, 0.4),
          #39c6d6
      );

      &--1 {
        transform: rotate(70deg) rotateY(30deg);
      }

      &--2 {
        top: 45%;
        transform: rotate(70deg) rotateY(30deg);
      }

      &--3,
      &--4,
      &--6 {
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        border-top-left-radius: var(--h);
        border-bottom-right-radius: var(--h);
        left: -460%;
        top: 12%;
        transform: rotate(-70deg) rotateY(30deg);
      }

      &--4 {
        top: 40%;
      }

      &--5 {
        top: 0;
        transform-origin: left;
        transform: rotate(70deg) rotateY(30deg) scale(0.6);
      }

      &--6 {
        top: -2%;
        left: -450%;
        transform-origin: right;
        transform: rotate(-70deg) rotateY(30deg) scale(0.6);
      }
    }
  }

  &__light {
    position: absolute;
    bottom: 0vmin;
    width: $light-radius;
    height: $light-radius;
    background-color: rgb(255, 251, 0);
    border-radius: 50%;
    filter: blur(0.2vmin);
    animation: light-ans 4s linear infinite backwards;

    &:nth-child(odd) {
      background-color: #23f0ff;
    }

    &--1 {
      left: -2vmin;
      animation-delay: 1s;
    }

    &--2 {
      left: 3vmin;
      animation-delay: 0.5s;
    }

    &--3 {
      left: -6vmin;
      animation-delay: 0.3s;
    }

    &--4 {
      left: 6vmin;
      animation-delay: 0.9s;
    }

    &--5 {
      left: -1vmin;
      animation-delay: 1.5s;
    }

    &--6 {
      left: -4vmin;
      animation-delay: 3s;
    }

    &--7 {
      left: 3vmin;
      animation-delay: 2s;
    }

    &--8 {
      left: -6vmin;
      animation-delay: 3.5s;
    }
    &::after {
      content:''; // 使用伪元素添加数字;
      position: absolute;
      font-size: $light-number;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: indianred;
    }
  }

  &__grass {
    --c: #159faa;
    --line-w: 1.5vmin;

    position: absolute;
    bottom: 12vmin;
    left: -7vmin;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 20;
    transform-origin: bottom center;
    transform: rotate(-48deg) rotateY(40deg);

    &--1 {
      animation: moving-grass 2s linear infinite;
    }

    &--2 {
      left: 2vmin;
      bottom: 10vmin;
      transform: scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg);
      opacity: 0.8;
      z-index: 0;
      animation: moving-grass--2 1.5s linear infinite;
    }

    &--top {
      width: 7vmin;
      height: 10vmin;
      border-top-right-radius: 100%;
      border-right: var(--line-w) solid var(--c);
      transform-origin: bottom center;
      transform: rotate(-2deg);
    }

    &--bottom {
      margin-top: -2px;
      width: var(--line-w);
      height: 25vmin;
      background-image: linear-gradient(to top, transparent, var(--c));
    }

    &__leaf {
      --size: 10vmin;
      position: absolute;
      width: calc(var(--size) * 2.1);
      height: var(--size);
      border-top-left-radius: var(--size);
      border-top-right-radius: var(--size);
      background-image: linear-gradient(
          to top,
          transparent,
          transparent 30%,
          var(--c)
      );
      z-index: 100;

    $speed-leaf: 2s;

      &--1 {
        top: -6%;
        left: 30%;
        --size: 6vmin;
        transform: rotate(-20deg);
        animation: growing-grass-ans--1 $speed-leaf 2.6s backwards;
        @keyframes growing-grass-ans--1 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-20deg) scale(0);
          }
        }
      }

      &--2 {
        top: -5%;
        left: -110%;
        --size: 6vmin;
        transform: rotate(10deg);
        animation: growing-grass-ans--2 $speed-leaf 2.4s linear backwards;
        @keyframes growing-grass-ans--2 {
          0% {
            transform-origin: bottom right;
            transform: rotate(10deg) scale(0);
          }
        }
      }

      &--3 {
        top: 5%;
        left: 60%;
        --size: 8vmin;
        transform: rotate(-18deg) rotateX(-20deg);
        animation: growing-grass-ans--3 $speed-leaf 2.2s linear backwards;
        @keyframes growing-grass-ans--3 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-18deg) rotateX(-20deg) scale(0);
          }
        }
      }

      &--4 {
        top: 6%;
        left: -135%;
        --size: 8vmin;
        transform: rotate(2deg);
        animation: growing-grass-ans--4 $speed-leaf 2s linear backwards;
        @keyframes growing-grass-ans--4 {
          0% {
            transform-origin: bottom right;
            transform: rotate(2deg) scale(0);
          }
        }
      }

      &--5 {
        top: 20%;
        left: 60%;
        --size: 10vmin;
        transform: rotate(-24deg) rotateX(-20deg);
        animation: growing-grass-ans--5 $speed-leaf 1.8s linear backwards;
        @keyframes growing-grass-ans--5 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-24deg) rotateX(-20deg) scale(0);
          }
        }
      }

      &--6 {
        top: 22%;
        left: -180%;
        --size: 10vmin;
        transform: rotate(10deg);
        animation: growing-grass-ans--6 $speed-leaf 1.6s linear backwards;
        @keyframes growing-grass-ans--6 {
          0% {
            transform-origin: bottom right;
            transform: rotate(10deg) scale(0);
          }
        }
      }

      &--7 {
        top: 39%;
        left: 70%;
        --size: 10vmin;
        transform: rotate(-10deg);
        animation: growing-grass-ans--7 $speed-leaf 1.4s linear backwards;
        @keyframes growing-grass-ans--7 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-10deg) scale(0);
          }
        }
      }

      &--8 {
        top: 40%;
        left: -215%;
        --size: 11vmin;
        transform: rotate(10deg);
        animation: growing-grass-ans--8 $speed-leaf 1.2s linear backwards;
        @keyframes growing-grass-ans--8 {
          0% {
            transform-origin: bottom right;
            transform: rotate(10deg) scale(0);
          }
        }
      }
    }

    &__overlay {
      position: absolute;
      top: -10%;
      right: 0%;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      filter: blur(1.5vmin);
      z-index: 100;
    }
  }

  &__g-long {
    --w: 2vmin;
    --h: 6vmin;
    --c: #159faa;
    position: absolute;
    bottom: 10vmin;
    left: -3vmin;
    transform-origin: bottom center;
    transform: rotate(-30deg) rotateY(-20deg);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    animation: flower-g-long-ans 3s linear infinite;

    @keyframes flower-g-long-ans {
      0%,
      100% {
        transform: rotate(-30deg) rotateY(-20deg);
      }

      50% {
        transform: rotate(-32deg) rotateY(-20deg);
      }
    }

    &__top {
      top: calc(var(--h) * -1);
      width: calc(var(--w) + 1vmin);
      height: var(--h);
      border-top-right-radius: 100%;
      border-right: 0.7vmin solid var(--c);
      transform: translate(-0.7vmin, 1vmin);
    }

    &__bottom {
      width: var(--w);
      height: 50vmin;
      transform-origin: bottom center;
      background-image: linear-gradient(to top, transparent 30%, var(--c));
      box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
      clip-path: polygon(35% 0, 65% 1%, 100% 100%, 0% 100%);
    }
  }

  &__g-right {
    position: absolute;
    bottom: 6vmin;
    left: -2vmin;
    transform-origin: bottom left;
    transform: rotate(20deg);

    .leaf {
      width: 30vmin;
      height: 50vmin;
      border-top-left-radius: 100%;
      border-left: 2vmin solid #079097;
      background-image: linear-gradient(
          to bottom,
          transparent,
          var(--dark-color) 60%
      );
      -webkit-mask-image: linear-gradient(to top, transparent 30%, #079097 60%);
    }

    &--1 {
      animation: flower-g-right-ans 2.5s linear infinite;
    }

    &--2 {
      left: 5vmin;
      transform: rotateY(-180deg);
      animation: flower-g-right-ans--2 3s linear infinite;

      .leaf {
        height: 75vmin;
        filter: blur(0.3vmin);
        opacity: 0.8;
      }
    }

    @keyframes flower-g-right-ans {
      0%,
      100% {
        transform: rotate(20deg);
      }

      50% {
        transform: rotate(24deg) rotateX(-20deg);
      }
    }

    @keyframes flower-g-right-ans--2 {
      0%,
      100% {
        transform: rotateY(-180deg) rotate(0deg) rotateX(-20deg);
      }

      50% {
        transform: rotateY(-180deg) rotate(6deg) rotateX(-20deg);
      }
    }
  }

  &__g-front {
    position: absolute;
    bottom: 6vmin;
    left: 2.5vmin;
    z-index: 100;
    transform-origin: bottom center;
    transform: rotate(-28deg) rotateY(30deg) scale(1.04);
    animation: flower__g-front-ans 2s linear infinite;

    @keyframes flower__g-front-ans {
      0%,
      100% {
        transform: rotate(-28deg) rotateY(30deg) scale(1.04);
      }
      50% {
        transform: rotate(-35deg) rotateY(40deg) scale(1.04);
      }
    }

    &__line {
      width: 0.3vmin;
      height: 20vmin;
      background-image: linear-gradient(
          to top,
          transparent,
          #079097,
          transparent 100%
      );
      position: relative;
    }

    &__leaf-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: bottom left;
      transform: rotate(10deg);

      &:nth-child(even) {
        left: 0vmin;
        transform: rotateY(-180deg) rotate(5deg);
        animation: flower__g-front__leaf-left-ans 1s ease-in backwards;
      }

      &:nth-child(odd) {
        animation: flower__g-front__leaf-ans 1s ease-in backwards;
      }

      &--1 {
        top: -8vmin;
        transform: scale(0.7);
        animation: flower__g-front__leaf-ans 1s 5.5s ease-in backwards !important;
      }

      &--2 {
        top: -8vmin;
        transform: rotateY(-180deg) scale(0.7) !important;
        animation: flower__g-front__leaf-left-ans-2 1s 4.6s ease-in backwards !important;
      }

      &--3 {
        top: -3vmin;
        animation: flower__g-front__leaf-ans 1s 4.6s ease-in backwards;
      }

      &--4 {
        top: -3vmin;
        transform: rotateY(-180deg) scale(0.9) !important;
        animation: flower__g-front__leaf-left-ans-2 1s 4.6s ease-in backwards !important;
      }

      @keyframes flower__g-front__leaf-left-ans-2 {
        0% {
          transform: rotateY(-180deg) scale(0);
        }
      }

      &--5,
      &--6 {
        top: 2vmin;
      }

      &--7,
      &--8 {
        top: 6.5vmin;
      }

      &--2 {
        animation-delay: 5.2s !important;
      }

      &--3 {
        animation-delay: 4.9s !important;
      }

      &--5 {
        animation-delay: 4.3s !important;
      }

      &--6 {
        animation-delay: 4.1s !important;
      }

      &--7 {
        animation-delay: 3.8s !important;
      }

      &--8 {
        animation-delay: 3.5s !important;
      }

      @keyframes flower__g-front__leaf-ans {
        0% {
          transform: rotate(10deg) scale(0);
        }
      }

      @keyframes flower__g-front__leaf-left-ans {
        0% {
          transform: rotateY(-180deg) rotate(5deg) scale(0);
        }
      }
    }

    &__leaf {
      width: 10vmin;
      height: 10vmin;
      border-radius: 100% 0% 0% 100% / 100% 100% 0% 0%;
      box-shadow: inset 0 2px 1vmin hsla(184, 97%, 58%, 0.2);
      background-image: linear-gradient(
          to bottom left,
          transparent,
          var(--dark-color)
      ),
      linear-gradient(
          to bottom right,
          #159faa 50%,
          transparent 50%,
          transparent
      );

      -webkit-mask-image: linear-gradient(
          to bottom right,
          #159faa 50%,
          transparent 50%,
          transparent
      );
      mask-image: linear-gradient(
          to bottom right,
          #159faa 50%,
          transparent 50%,
          transparent
      );
    }
  }

  &__g-fr {
    position: absolute;
    bottom: -4vmin;
    left: vmin;
    transform-origin: bottom left;
    z-index: 10;

    animation: flower__g-fr-ans 2s linear infinite;

    @keyframes flower__g-fr-ans {
      0%,
      100% {
        transform: rotate(2deg);
      }
      50% {
        transform: rotate(4deg);
      }
    }

    .leaf {
      width: 30vmin;
      height: 50vmin;
      border-top-left-radius: 100%;
      border-left: 2vmin solid #079097;
      -webkit-mask-image: linear-gradient(to top, transparent 25%, #079097 50%);
      position: relative;
      z-index: 1;
    }

    &__leaf {
      position: absolute;
      top: 0;
      left: 0;
      width: 10vmin;
      height: 10vmin;
      border-radius: 100% 0% 0% 100% / 100% 100% 0% 0%;
      box-shadow: inset 0 2px 1vmin hsla(184, 97%, 58%, 0.2);
      background-image: linear-gradient(
          to bottom left,
          transparent,
          var(--dark-color) 98%
      ),
      linear-gradient(
          to bottom right,
          #23f0ff 45%,
          transparent 50%,
          transparent
      );

      -webkit-mask-image: linear-gradient(
          135deg,
          #159faa 40%,
          transparent 50%,
          transparent
      );

      &--1 {
        left: 20vmin;
        transform: rotate(45deg);

        animation: flower__g-fr-leaft-ans-1 0.5s 5.2s linear backwards;

        @keyframes flower__g-fr-leaft-ans-1 {
          0% {
            transform-origin: left;
            transform: rotate(45deg) scale(0);
          }
        }
      }

      &--2 {
        left: 12vmin;
        top: -7vmin;
        transform: rotate(25deg) rotateY(-180deg);
        animation: flower__g-fr-leaft-ans-6 0.5s 5s linear backwards;
      }

      &--3 {
        left: 15vmin;
        top: 6vmin;
        transform: rotate(55deg);
        animation: flower__g-fr-leaft-ans-5 0.5s 4.8s linear backwards;
      }

      &--4 {
        left: 6vmin;
        top: -2vmin;
        transform: rotate(25deg) rotateY(-180deg);
        animation: flower__g-fr-leaft-ans-6 0.5s 4.6s linear backwards;
      }

      &--5 {
        left: 10vmin;
        top: 14vmin;
        transform: rotate(55deg);
        animation: flower__g-fr-leaft-ans-5 0.5s 4.4s linear backwards;

        @keyframes flower__g-fr-leaft-ans-5 {
          0% {
            transform-origin: left;
            transform: rotate(55deg) scale(0);
          }
        }
      }

      &--6 {
        left: 0vmin;
        top: 6vmin;
        transform: rotate(25deg) rotateY(-180deg);
        animation: flower__g-fr-leaft-ans-6 0.5s 4.2s linear backwards;

        @keyframes flower__g-fr-leaft-ans-6 {
          0% {
            transform-origin: right;
            transform: rotate(25deg) rotateY(-180deg) scale(0);
          }
        }
      }

      &--7 {
        left: 5vmin;
        top: 22vmin;
        transform: rotate(45deg);
        animation: flower__g-fr-leaft-ans-7 0.5s 4s linear backwards;

        @keyframes flower__g-fr-leaft-ans-7 {
          0% {
            transform-origin: left;
            transform: rotate(45deg) scale(0);
          }
        }
      }

      &--8 {
        left: -4vmin;
        top: 15vmin;
        transform: rotate(15deg) rotateY(-180deg);
        animation: flower__g-fr-leaft-ans-8 0.5s 3.8s linear backwards;

        @keyframes flower__g-fr-leaft-ans-8 {
          0% {
            transform-origin: right;
            transform: rotate(15deg) rotateY(-180deg) scale(0);
          }
        }
      }
    }
  }
}

.long-g {
  position: absolute;
  bottom: 25vmin;
  left: -42vmin;
  transform-origin: bottom left;

  &--1 {
    bottom: 0vmin;
    transform: scale(0.8) rotate(-5deg);

    .leaf {
      -webkit-mask-image: linear-gradient(
          to top,
          transparent 40%,
          #079097 80%
      ) !important;

      &--1 {
        --w: 5vmin;
        --h: 60vmin;
        left: -2vmin;
        transform: rotate(3deg) rotateY(-180deg);
      }
    }
  }

  &--2,
  &--3 {
    bottom: -3vmin;
    left: -35vmin;
    transform-origin: center;
    transform: scale(0.6) rotateX(60deg);

    .leaf {
      -webkit-mask-image: linear-gradient(
          to top,
          transparent 50%,
          #079097 80%
      ) !important;

      &--1 {
        left: -1vmin;
        transform: rotateY(-180deg);
      }
    }
  }

  &--3 {
    left: -17vmin;
    bottom: 0vmin;
    .leaf {
      -webkit-mask-image: linear-gradient(
          to top,
          transparent 40%,
          #079097 80%
      ) !important;
    }
  }

  &--4 {
    left: 25vmin;
    bottom: -3vmin;
    transform-origin: center;
    transform: scale(0.6) rotateX(60deg);

    .leaf {
      -webkit-mask-image: linear-gradient(
          to top,
          transparent 50%,
          #079097 80%
      ) !important;
    }
  }

  &--5 {
    left: 42vmin;
    bottom: 0vmin;
    transform: scale(0.8) rotate(2deg);
  }

  &--6 {
    left: 0vmin;
    bottom: -20vmin;
    z-index: 100;
    filter: blur(0.3vmin);
    transform: scale(0.8) rotate(2deg);
  }

  &--7 {
    left: 35vmin;
    bottom: 20vmin;
    z-index: -1;
    filter: blur(0.3vmin);
    transform: scale(0.6) rotate(2deg);
    opacity: 0.7;
  }

  .leaf {
    --w: 15vmin;
    --h: 40vmin;
    --c: #1aaa15;

    position: absolute;
    bottom: 0;
    width: var(--w);
    height: var(--h);
    border-top-left-radius: 100%;
    border-left: 2vmin solid var(--c);
    -webkit-mask-image: linear-gradient(
        to top,
        transparent 20%,
        var(--dark-color)
    );

    transform-origin: bottom center;

    &--0 {
      left: 2vmin;
      animation: leaf-ans-1 4s linear infinite;
    }

    &--1 {
      --w: 5vmin;
      --h: 60vmin;
      animation: leaf-ans-1 4s linear infinite;
    }

    &--2 {
      --w: 10vmin;
      --h: 40vmin;
      left: -0.5vmin;
      bottom: 5vmin;
      transform-origin: bottom left;
      transform: rotateY(-180deg);
      animation: leaf-ans-2 3s linear infinite;
    }

    &--3 {
      --w: 5vmin;
      --h: 30vmin;
      left: -1vmin;
      bottom: 3.2vmin;
      transform-origin: bottom left;
      transform: rotate(-10deg) rotateY(-180deg);
      animation: leaf-ans-3 3s linear infinite;
    }
  }
}

@keyframes leaf-ans-1 {
  0%,
  100% {
    transform: rotate(-5deg) scale(1);
  }

  50% {
    transform: rotate(5deg) scale(1.1);
  }
}

@keyframes leaf-ans-2 {
  0%,
  100% {
    transform: rotateY(-180deg) rotate(5deg);
  }

  50% {
    transform: rotateY(-180deg) rotate(0deg) scale(1.1);
  }
}

@keyframes leaf-ans-3 {
  0%,
  100% {
    transform: rotate(-10deg) rotateY(-180deg);
  }

  50% {
    transform: rotate(-20deg) rotateY(-180deg);
  }
}

.grow-ans {
  animation: grow-ans 2s var(--d) backwards;
}

@keyframes grow-ans {
  0% {
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes light-ans {
  0% {
    opacity: 0;
    transform: translateY(0vmin);
  }

  25% {
    opacity: 1;
    transform: translateY(-5vmin) translateX(-2vmin);
  }

  50% {
    opacity: 1;
    transform: translateY(-15vmin) translateX(2vmin);
    filter: blur(0.2vmin);
  }

  75% {
    transform: translateY(-20vmin) translateX(-2vmin);
    filter: blur(0.2vmin);
  }

  100% {
    transform: translateY(-30vmin);
    opacity: 0;
    filter: blur(1vmin);
  }
}

@keyframes moving-flower-1 {
  0%,
  100% {
    transform: rotate(2deg);
  }

  50% {
    transform: rotate(-2deg);
  }
}

@keyframes moving-flower-2 {
  0%,
  100% {
    transform: rotate(18deg);
  }

  50% {
    transform: rotate(14deg);
  }
}

@keyframes moving-flower-3 {
  0%,
  100% {
    transform: rotate(-18deg);
  }

  50% {
    transform: rotate(-20deg) rotateY(-10deg);
  }
}

@keyframes blooming-leaf-right {
  0% {
    transform-origin: left;
    transform: rotate(70deg) rotateY(30deg) scale(0);
  }
}

@keyframes blooming-leaf-left {
  0% {
    transform-origin: right;
    transform: rotate(-70deg) rotateY(30deg) scale(0);
  }
}

@keyframes grow-flower-tree {
  0% {
    height: 0;
    border-radius: 1vmin;
  }
}

@keyframes blooming-flower {
  0% {
    transform: scale(0);
  }
}

@keyframes moving-grass {
  0%,
  100% {
    transform: rotate(-48deg) rotateY(40deg);
  }

  50% {
    transform: rotate(-50deg) rotateY(40deg);
  }
}

@keyframes moving-grass--2 {
  0%,
  100% {
    transform: scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg);
  }

  50% {
    transform: scale(0.5) rotate(79deg) rotateX(10deg) rotateY(-200deg);
  }
}

.growing-grass {
  animation: growing-grass-ans 1s 2s backwards;
}

@keyframes growing-grass-ans {
  0% {
    transform: scale(0);
  }
}

.not-loaded * {
  animation-play-state: paused !important;
}


@keyframes upAndGrow {
  0% {
    transform: translateY(0) scale(0);
    box-shadow: 0 0 20px 10px glow-color; // 增加发光效果的范围 } 50% { transform: translateY(-80px) scale(0.75); // 调整上升高度 box-shadow: 0 0 30px 15px glow-color; // 增加发光效果的范围
  }
  100% {
    transform: translateY(-160px) scale(1.5); // 调整上升高度
    box-shadow: 0 0 40px 20px $glow-color; // 增加发光效果的范围
  }
}

.ball {
  width: 40px;
  height: 40px;
  background-color: $ball-color;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: upAndGrow 5s forwards cubic-bezier(0.25, 0.1, 0.25, 1);
  &::after {
    content: '2';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: black;
  }
}




// 失能 light的数字效果
.disable-label::after {
  content: none;
}

.enable-light-label::after {
  content: attr(data-label);
}
</style>

<style scoped>

.this-draw {
  margin-top: 20px;
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  color: #fff;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
}

.this-draw:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

.this-draw:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

.this-draw:hover::before {
  filter: blur(20px);
}

.this-draw:active {
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
}

.button-content{
  position: relative;
  //z-index.vue: 1;
  right: 10px;
  bottom: 200px;
  .button-group{
    display: flex;
    flex-direction: column;

  }
}
</style>

<style lang="scss" scoped>
.flower_buttom_content{
  position: relative;
  float: right;
  bottom: 200px;

  .btn {
    height: 4em;
    width: 12em;
    //display: flex;
    //align-items: center;
    //justify-content: center;
    background: transparent;
    border: 0px solid black;
    cursor: pointer;
  }

  .wrapper {
    height: 2em;
    width: 8em;
    position: relative;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    font-size: 17px;
    z-index: 1;
    color: #000;
    padding: 4px 12px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.7);
    transition: all 0.5s ease;
  }

  .flower {
    display: grid;
    grid-template-columns: 1em 1em;
    position: absolute;
    transition: grid-template-columns 0.8s ease;
  }

  .flower1 {
    top: -12px;
    left: -13px;
    transform: rotate(5deg);
  }

  .flower2 {
    bottom: -5px;
    left: 8px;
    transform: rotate(35deg);
  }

  .flower3 {
    bottom: -15px;
    transform: rotate(0deg);
  }

  .flower4 {
    top: -14px;
    transform: rotate(15deg);
  }

  .flower5 {
    right: 11px;
    top: -3px;
    transform: rotate(25deg);
  }

  .flower6 {
    right: -15px;
    bottom: -15px;
    transform: rotate(30deg);
  }

  .petal {
    height: 1em;
    width: 1em;
    border-radius: 40% 70% / 7% 90%;
    background: linear-gradient(#07a6d7, #93e0ee);
    border: 0.5px solid #96d1ec;
    z-index: 0;
    transition: width 0.8s ease, height 0.8s ease;
  }

  .two {
    transform: rotate(90deg);
  }

  .three {
    transform: rotate(270deg);
  }

  .four {
    transform: rotate(180deg);
  }

  .btn:hover .petal {
    background: linear-gradient(#0761d7, #93bdee);
    border: 0.5px solid #96b4ec;
  }

  .btn:hover .flower {
    grid-template-columns: 1.5em 1.5em;
  }

  .btn:hover .flower .petal {
    width: 1.5em;
    height: 1.5em;
  }

  .btn:hover .text {
    background: rgba(255, 255, 255, 0.4);
  }

  .btn:hover div.flower1 {
    animation: 15s linear 0s normal none infinite running flower1;
  }

  @keyframes flower1 {
    0% {
      transform: rotate(5deg);
    }

    100% {
      transform: rotate(365deg);
    }
  }

  .btn:hover div.flower2 {
    animation: 13s linear 1s normal none infinite running flower2;
  }

  @keyframes flower2 {
    0% {
      transform: rotate(35deg);
    }

    100% {
      transform: rotate(-325deg);
    }
  }

  .btn:hover div.flower3 {
    animation: 16s linear 1s normal none infinite running flower3;
  }

  @keyframes flower3 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .btn:hover div.flower4 {
    animation: 17s linear 1s normal none infinite running flower4;
  }

  @keyframes flower4 {
    0% {
      transform: rotate(15deg);
    }

    100% {
      transform: rotate(375deg);
    }
  }

  .btn:hover div.flower5 {
    animation: 20s linear 1s normal none infinite running flower5;
  }

  @keyframes flower5 {
    0% {
      transform: rotate(25deg);
    }

    100% {
      transform: rotate(-335deg);
    }
  }

  .btn:hover div.flower6 {
    animation: 15s linear 1s normal none infinite running flower6;
  }

  @keyframes flower6 {
    0% {
      transform: rotate(30deg);
    }

    100% {
      transform: rotate(390deg);
    }
  }

}
</style>