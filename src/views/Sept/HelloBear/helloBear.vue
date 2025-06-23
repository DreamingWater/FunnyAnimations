<template>
<!--  <Firework/>-->
  <div class="container">
    <div class="ear earLeft"></div>
    <div class="ear earRight"></div>
    <div class="head">
      <div class="highlight"></div>
      <div class="moon"></div>
      <div class="face">
        <div class="eye eyeLeft"></div>
        <div class="eye eyeRight"></div>
        <div class="nose"></div>
        <div class="mouth">
          <div class="tongue"></div>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="faceshadow"></div>
      <div class="armLeft">
        <span class="claw clawleft"></span>
        <span class="claw clawmiddle"></span>
        <span class="claw clawright"></span>
      </div>
      <div class="armRight">
        <span class="claw clawleft"></span>
        <span class="claw clawmiddle"></span>
        <span class="claw clawright"></span>
      </div>
      <div class="bottomshadow"></div>
      <div class="legLeft">
        <span class="footmark footmarkLeft"></span>
        <span class="claw toeleft"></span>
        <span class="claw toeright"></span>
      </div>
      <div class="legRight">
        <span class="footmark footmarkRight"></span>
        <span class="claw toeleft"></span>
        <span class="claw toeright"></span>
      </div>
    </div>

  </div>
  <div class="message-box" v-drag>  <typeWithDelete/> </div>

<!--  <div class="codeshow"  v-drag>-->
<!--    <ColorCodePic/>-->
<!--  </div>-->
  <div class="xiaoteng"  v-drag>
    <XiaoTeng color="#E2A455" timeScale='2s' />
  </div>
</template>


<script setup>
  import typeWithDelete from '@/components/Animations/TypeWithDelete/typeWithDelete.vue'
  import XiaoTeng from "@/components/Animations/XiaoTeng/xiaoTeng.vue";
  import ColorCodePic from "@/components/Animations/ColorCodePic/colorCodePic.vue";
</script>



<style  lang="css">
:root{
  --maincolor: #E2A455;
  --outline: #2B211E;
  --moon: #F9F3DD;
  --highlight: #F6E89F;
  --gray: #61748D;
  --mouthinside: #552028;
  --tongue:#D8968A;
  --tongueshadow:#AC5F5B;
  --shadow: #C7782F;
  --footmark:#E0CF60;
  --message-box: #F9F3DD;
}



body{
  height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  background-color: #FBAB7E;
  background-image: linear-gradient(62deg, #91acc7 0%, #daeafc 100%);

}

.container{
  width: 480px;
  height: 480px;
  position: relative;
  margin-top: 50px;
}

.head{
  height: 234px;
  width: 285px;


  background: var(--maincolor);
  border-radius:50%;
  transform: rotate(20deg);
  position: absolute;
  top: 83px;
  left: 103px;
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 -2px 0 7px var(--outline);
}
.faceshadow{
  background: rgba(195, 121, 50, .5);
  height: 60px;
  width: 170px;
  position: absolute;
  top: -6px;
  border-radius: 100%;
  z-index: 1;
  transform: rotate(24deg);
}

.ear{
  width: 148px;
  height: 118px;
  background: var(--maincolor);
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
}

.earLeft{
  transform: rotate(-27deg);
  top: 10px;
  left:78px;
  z-index: 0;
  box-shadow: 0 -6px 0 5px var(--outline);

}

.earLeft::before{
  content: '';
  display: block;
  background: var(--shadow);
  width: 40px;
  height: 40px;
  position: absolute;
  left: 15px;
  top: 40px;
  border-radius: 100%;
  transform: rotate(25deg);
  box-shadow: 2px -2px 0 0 var(--outline),
  0 0 5px 15px var(--shadow);
}

.earLeft::after{
  content: '';
  display: block;
  width: 20px;
  height: 30px;
  position: absolute;
  left: 35px;
  top: 50px;
  background: var(--outline);
  border-radius: 100%;
  transform: rotate(25deg);
}

.earRight{
  transform: rotate(90deg);
  top: 115px;
  right: -3px;
  z-index: 0;
  box-shadow: -2px -6px 0 5px var(--outline);
}

.earRight::before{
  content: '';
  display: block;
  background: var(--shadow);
  width: 40px;
  height: 30px;
  position: absolute;
  left: 90px;
  top: 30px;
  border-radius: 100%;
  box-shadow: -2px 2px 0 0 var(--outline),
  0 0 5px 25px var(--shadow);
}

.earRight::after{
  content: '';
  display: block;
  width: 20px;
  height: 30px;
  position: absolute;
  left: 100px;
  top: 39px;
  background: var(--outline);
  border-radius: 100%;
  transform: rotate(90deg);
}

.highlight{
  width: 177px;
  height: 110px;
  background:var(--highlight);
  border-radius: 50%;
  position: absolute;
  bottom: -5px;
  left:55px;
}

.moon{
  width: 100px;
  height: 105px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: -24px 4px 0 20px var(--moon);
  position: absolute;
  left: 125px;
  top: 16px;
}

.face{
  width: 147px;
  height: 114px;
  position: absolute;
  bottom: 0;
  left: 75px;
}

.eye{
  width: 35px;
  height: 35px;
  background: black;
  border-radius: 50%;
  position: absolute;
}

.eye::before{
  content: '';
  display: block;
  width: 17px;
  height: 17px;
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 2px;
}

.eye::after{
  content: '';
  display: block;
  width: 14px;
  height: 7px;
  background: var(--gray);
  border-radius: 50%;
  position: absolute;
  left: 10px;
  bottom: 1px;
}

.eyeLeft{
  left: 0;
  top: 0;
}

.eyeRight{
  right: 0;
  top: 0;
}

.nose{
  width: 25px;
  height: 10px;
  background: var(--gray);
  border-radius: 100%;
  position: absolute;
  left: 60px;
  top: 20px;
  border: solid .5px var(--outline);
}

.mouth{
  width: 55px;
  height: 50px;
  background-color: var(--mouthinside);
  position: absolute;
  top: 50px;
  left: 45px;
  border-radius: 0 0 50% 50%;
  overflow: hidden;
  border: solid .5px var(--outline);
}

.tongue{
  width: 55px;
  height: 40px;
  border-radius: 50%;
  background: var(--tongue);
  position: absolute;
  bottom: -10px;
  box-shadow: 0 -12px 0 0 var(--tongueshadow);
}

.body{
  width:155px;
  height: 150px;
  background: var(--maincolor);
  border-radius: 70% 50% 50% 50%;
  position: absolute;
  bottom: 50px;
  left: 130px;
  box-shadow: 0 2px 0 6px var(--outline);
  z-index: 1;
}



.armLeft, .armRight{
  height:120px;
  width: 48px;
  background: var(--maincolor);
  border-radius: 50px;
  position: absolute;
  z-index: 0;
}

.armLeft{
  transform: rotate(140deg);
  top: -55px;
  left: -30px;
  box-shadow: 2px 7px 0 4px var(--outline);
}

.armRight{
  transform: rotate(40deg);
  top: 20px;
  right: 15px;
  box-shadow: 0 4px 0 4px var(--outline);
}

.claw{
  width: 15px;
  height: 15px;
  background-color: white;
  position: absolute;
  clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
  border: solid 3px var(--outline);
  border-radius: 0 0 0 20%;
}

.clawmiddle{
  bottom: -15px;
  left: 16px;
  transform: rotate(-45deg);
}

.clawleft{
  bottom: -10px;
  left: 4px;
  transform: rotate(-2deg);
}

.clawright{
  bottom: -9px;
  left: 30px;
  transform: rotate(-90deg);
}

.legLeft, .legRight{
  width: 60px;
  height: 80px;
  background: var(--maincolor);
  border-radius: 100%;
  position: absolute;
}

.legLeft{
  box-shadow: -1px 2px 0 5px var(--outline);
  top: 80px;
  left: -30px;
  transform: rotate(-35deg);
}

.footmark{
  border-radius: 100%;
  width: 20px;
  height: 35px;
  background: var(--footmark);
  position: absolute;
  border: solid 1px var(--outline);
}

.footmarkLeft{
  top: 30px;
  left: 7px;
  box-shadow:3px -7px 5px 10px var(--shadow);
}

.footmarkRight{
  top: 40px;
  left: 30px;
  box-shadow:-3px -7px 5px 10px var(--shadow);
}

.toeleft{
  transform: rotate(110deg);
  top: -5px;
  left: 12px;
}

.toeright{
  transform: rotate(150deg);
  top: -5px;
  left: 30px;
}

.legRight{
  box-shadow: -2px -6px 0 4px var(--outline);
  top: 90px;
  left: 110px;
  transform: rotate(40deg);
  box-shadow: -1px 2px 0 5px var(--outline);
}

@keyframes wave {
  0% { transform: rotate(140deg); }
  50% { transform: rotate(120deg); }
  100% { transform: rotate(140deg); }
}

.armLeft {
  animation: wave 2s infinite;
}

@keyframes eyeTurn {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(5px, 5px); }
}

.eye::before {
  animation: eyeTurn 3s infinite;
}
@keyframes tongueMove {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

.tongue {
  animation: tongueMove 2s infinite;
}



.message-box {
  position: absolute;
  left: 871px;
  top: 88px;
  transform: translateX(50%);
  width: 200px;
  padding: 20px;
  font-size: 16px;
  text-align: center;
}

@keyframes legMove {
  0%, 100% { transform: rotate(40deg); }
  50% { transform: rotate(30deg); }
}

.legRight {
  animation: legMove 2s infinite;
}


/*
.codeshow {
  position: absolute;
  bottom: 20px;
  right: 80px;
  z-index: 1000;
  opacity: 0.2;
}
*/
.codeshow {
  position: relative;
  bottom: 240px;
  right: -420px;
  opacity: 0.1;

}
.xiaoteng{
  position: absolute;
  left: 1240px;
  top: 520px;
}

</style>