<template>


    <div class="heart">
      <div class="bird-back"></div>
      <div class="back-ear"></div>
      <div class="head">
        <div class="spot-1"></div>
      </div>
      <div class="ear"></div>
      <div class="ear-border-1"></div>
      <div class="top-ear"></div>
      <div class="ear-border-2"></div>
      <div class="bottom-ear"></div>
      <div class="jowl"></div>
      <div class="mouth"></div>
      <div class="mouth-border"></div>
      <div class="nose"></div>
      <div class="eye"></div>
      <div class="eye-2"></div>
      <div class="back"></div>
      <div class="back-border"></div>

      <div class="bird-body"></div>
      <div class="bird-head"></div>
      <div class="bird-neck"></div>
      <div class="bird-wing"></div>
      <div class="bird-wing-2"></div>
      <div class="feather"></div>
      <div class="feather-2"></div>
      <div class="bird-peak"></div>
      <div class="bird-eye"></div>

      <div class="cat-belly"></div>
      <div class="belly-border"></div>
      <div class="tail-fur"></div>
      <div class="tail-base"></div>
      <div class="tail"></div>
    </div>

</template>
<script setup>

</script>

<style lang="css">
body {
  min-height: 100vh;
  background-color: #FDF3D6;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Colors */
  --body: #8C887A;
  --shadow: #7A7668;
  --spots: #726B5D;
  --border: #43213B;
  --rose: #E59DB7;
  --dark_rose: #D78AA9;
  --white: #E0D9D0;
  --green: #96C155;
  --dark_green: #78983C;
  --orange: #E67440;
  --yellow: #F7EC54;
}

.heart {
  position: relative;
}
.heart * {
  position: absolute;
}
.heart *:before, .heart *:after {
  content: "";
  position: absolute;
}

/* Cat */
.head {
  background-color: var(--body);
  height: 100px;
  width: 170px;
  left: -180px;
  top: -100px;
  border-radius: 100px 100px 0 0;
  border: 10px solid;
  border-color: var(--border) var(--border) transparent;
  transform: rotate(-40deg);
  overflow: hidden;
  box-shadow: inset 20px 0 var(--shadow);
}
.head .spot-1 {
  background-color: var(--spots);
  height: 40px;
  width: 40px;
  border-radius: 5px;
  right: -25px;
  top: 25px;
  transform: rotate(-10deg) skewX(50deg);
  box-shadow: -36px 31px var(--spots);
}
.ear {
  height: 50px;
  width: 50px;
  background-color: var(--rose);
  transform: rotate(20deg) skewX(40deg);
  border-radius: 35%;
  left: -140px;
  top: -100px;
  overflow: hidden;
}
.ear:before {
  width: 50px;
  height: 50px;
  transform: skewX(-40deg);
  background-color: var(--dark_rose);
  border-radius: 50%;
  left: 25px;
  top: -15px;
}
.ear:after {
  transform: skewX(-40deg) rotate(27deg);
  height: 50px;
  width: 50px;
  background-color: var(--body);
  left: 15px;
  top: 10px;
}
.ear-border-1 {
  height: 42px;
  width: 10px;
  border: 10px solid #000;
  border-color: transparent transparent transparent var(--border);
  border-radius: 50%;
  top: -118px;
  left: -142px;
  transform: rotate(-20deg);
}
.ear-border-1:before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--border);
  bottom: -4px;
  left: -7px;
}
.top-ear {
  height: 16px;
  width: 41px;
  background-color: var(--body);
  top: -108px;
  left: -120px;
  border-radius: 10px;
  transform: skew(40deg);
}
.top-ear:before {
  transform: skew(-40deg) rotate(-87deg);
  width: 9px;
  height: 57px;
  background-color: var(--border);
  top: -24px;
  left: 14px;
}
.ear-border-2 {
  height: 46px;
  width: 10px;
  border: 10px solid #000;
  border-color: transparent var(--border) transparent transparent;
  border-radius: 50%;
  top: -124px;
  left: -136px;
  transform: rotate(-69deg);
}
.ear-border-2:before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--border);
  top: -4px;
  left: 6px;
}
.bottom-ear {
  width: 15px;
  height: 5px;
  background-color: var(--body);
  border: solid;
  border-width: 6px 0 0 10px;
  border-color: var(--border) transparent transparent var(--border);
  border-radius: 20px;
  transform: rotate(-20deg) skewX(40deg);
  top: -90px;
  left: -120px;
}
.bottom-ear:before {
  transform: skewX(-40deg) rotate(-10deg);
  width: 10px;
  height: 3px;
  background-color: var(--border);
  border-radius: 50%;
  left: -11px;
  top: 4px;
}
.back-ear {
  height: 40px;
  width: 40px;
  background-color: var(--shadow);
  border: 10px solid var(--border);
  border-radius: 15px;
  transform: rotate(-13deg) skewX(30deg);
  left: -167px;
  top: -55px;
}
.jowl {
  height: 55px;
  width: 170px;
  border-radius: 50%;
  background-color: var(--white);
  transform: rotate(-40deg);
  left: -130px;
  top: -25px;
}
.mouth {
  height: 30px;
  width: 30px;
  background-color: var(--white);
  border-radius: 50%;
  left: -130px;
  top: 40px;
}
.mouth-border {
  height: 26px;
  width: 50px;
  border: 8px solid transparent;
  border-left-color: var(--border);
  border-radius: 50%;
  left: -140px;
  top: 20px;
  transform: rotate(-68deg);
}
.mouth-border:before {
  height: 14px;
  width: 8px;
  background-color: var(--border);
  transform: rotate(49deg);
  top: -8px;
  left: 2px;
}
.mouth-border:after {
  width: 100px;
  height: 8px;
  background-color: var(--border);
  transform: rotate(42deg);
  top: 51px;
  left: -13px;
}
.nose {
  height: 5px;
  width: 10px;
  background-color: var(--rose);
  border: 6px solid var(--border);
  border-radius: 8px 8px 15px 15px;
  left: -128px;
  top: 36px;
  transform: rotate(-34deg);
}
.eye {
  height: 9px;
  width: 30px;
  border: solid;
  border-width: 8px 3px;
  border-color: var(--border) transparent transparent;
  border-radius: 50%;
  left: -100px;
  top: -4px;
  transform: rotate(-45deg);
}
.eye:before {
  height: 9px;
  width: 5px;
  background-color: var(--border);
  border-radius: 50%;
  left: -1px;
  top: -5px;
  transform: rotate(47deg);
}
.eye:after {
  height: 5px;
  width: 11px;
  background-color: var(--border);
  border-radius: 50%;
  left: 23px;
  top: -3px;
  transform: rotate(37deg);
}
.eye-2 {
  height: 5px;
  width: 13px;
  border: solid;
  border-width: 5px 2px;
  border-color: transparent transparent var(--border);
  border-radius: 50%;
  left: -145px;
  top: 35px;
  transform: rotate(-20deg);
}
.back {
  background-color: var(--body);
  height: 70px;
  width: 170px;
  left: -4px;
  top: -80px;
  border-radius: 100px 100px 0 0;
  border: 10px solid;
  border-color: var(--border) var(--border) transparent;
  transform: rotate(40deg);
  overflow: hidden;
}
.back:before {
  background-color: var(--spots);
  height: 40px;
  width: 40px;
  border-radius: 5px;
  transform: rotate(-74deg) skewX(50deg);
  box-shadow: -54px 34px var(--spots);
  left: 115px;
  top: -29px;
}
.back:after {
  background-color: var(--spots);
  height: 40px;
  width: 40px;
  border-radius: 5px;
  transform: rotate(-124deg) skewX(50deg);
  box-shadow: -46px 30px var(--spots);
  left: 24px;
  top: -33px;
}
.back-border {
  height: 70px;
  width: 170px;
  left: -4px;
  top: -80px;
  border-radius: 100px 100px 0 0;
  border: 10px solid;
  border-color: var(--border) var(--border) transparent;
  transform: rotate(40deg);
  overflow: hidden;
}
.cat-belly {
  width: 170px;
  height: 110px;
  border-radius: 50%;
  background-color: var(--shadow);
  transform: rotate(-76deg);
  left: -23px;
  top: -27px;
  overflow: hidden;
}
.cat-belly:before {
  width: 160px;
  height: 120px;
  border-radius: 50% 0;
  background-color: var(--body);
  left: 15px;
  top: 10px;
}
.belly-border {
  width: 165px;
  height: 100px;
  border-radius: 50%;
  border: 8px solid;
  border-color: transparent transparent var(--border) transparent;
  transform: rotate(106deg);
  left: -31px;
  top: -29px;
}
.belly-border:before {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--border);
  left: 12px;
  top: 80px;
}
.tail-fur {
  height: 40px;
  width: 50px;
  background-color: var(--body);
  top: 76px;
}
.tail-fur:before {
  width: 20px;
  height: 34px;
  background-color: var(--body);
  left: 50px;
}
.tail-base {
  height: 116px;
  width: 40px;
  border-radius: 50%;
  border: 11px solid;
  border-color: transparent var(--border) transparent transparent;
  left: 52px;
  top: 1px;
  transform: rotate(55deg);
  overflow: hidden;
}
.tail-base:before {
  width: 30px;
  height: 50px;
  background-color: var(--body);
  top: 11px;
  left: 9px;
  transform: rotate(-5deg);
}

.tail-base:after {
  background-color: var(--spots);
  height: 40px;
  width: 40px;
  border-radius: 5px;
  transform: rotate(-224deg) skewX(50deg);
  box-shadow: -74px 40px var(--spots);
  left: 34px;
  top: 37px;
}
.tail {
  height: 30px;
  width: 112px;
  background-color: var(--body);
  border: solid;
  border-width: 10px 0 10px 7px;
  border-color: var(--border) transparent var(--border) var(--border);
  border-radius: 50% 0 0 50%;
  top: 60px;
  left: -104px;
  transform: rotate(10deg);
}
.tail:before {
  width: 40px;
  height: 23px;
  border: solid;
  border-radius: 50%;
  border-width: 0 5px 8px 23px;
  border-color: transparent transparent var(--border);
  left: 83px;
  top: -33px;
  transform: rotate(-18deg);
}
.tail:after {
  width: 67px;
  height: 10px;
  border-radius: 50%;
  border: 10px solid;
  border-color: transparent transparent var(--border);
  left: 80px;
  top: 8px;
  transform: rotate(-11deg);
}

/* Bird */
.bird-back {
  height: 30px;
  width: 30px;
  background-color: var(--green);
  top: 38px;
  left: -20px;
}
.bird-head {
  height: 60px;
  width: 70px;
  background-color: var(--orange);
  border-radius: 50%;
  transform: rotate(-120deg);
  left: -30px;
  top: -69px;
}
.bird-head:before {
  top: -9px;
  left: 2px;
  height: 60px;
  width: 55px;
  border: 8px solid;
  border-radius: 50%;
  border-color: transparent var(--border) var(--border) transparent;
}
.bird-body {
  height: 130px;
  width: 70px;
  background-color: var(--dark_green);
  border-radius: 0 0 50% 50%;
  left: -66px;
  top: -40px;
  transform: rotate(30deg);
  overflow: hidden;
}
.bird-body:before {
  height: 130px;
  width: 90px;
  border-radius: 0 0 50% 50%;
  background-color: var(--green);
  bottom: 30px;
}
.bird-neck {
  width: 8px;
  height: 20px;
  background-color: var(--border);
  top: -48px;
  left: -36px;
  transform: rotate(16deg);
}
.bird-wing {
  height: 130px;
  width: 40px;
  border: 9px solid;
  border-color: transparent transparent transparent var(--border);
  border-radius: 50%;
  left: -69px;
  top: -45px;
  transform: rotate(20deg);
}
.bird-wing:before {
  width: 12px;
  height: 9px;
  background-color: var(--border);
  top: 24px;
  left: 35px;
  transform: rotate(10deg);
}
.bird-wing:after {
  height: 9px;
  width: 9px;
  border-radius: 50%;
  background-color: var(--border);
  top: 23px;
  left: 31px;
}
.bird-wing-2 {
  height: 70px;
  width: 30px;
  border: 9px solid;
  border-radius: 50%;
  border-color: transparent var(--border) transparent transparent;
  left: -72px;
  top: 12px;
  transform: rotate(70deg);
}
.bird-wing-2:before {
  height: 33px;
  width: 9px;
  background-color: var(--border);
  transform: rotate(-36deg);
  left: 13px;
  top: -26px;
}
.bird-wing-2:after {
  height: 30px;
  width: 28px;
  border: 9px solid;
  border-color: var(--border) transparent transparent;
  border-radius: 50%;
  top: -34px;
  left: -29px;
  transform: rotate(5deg);
}
.feather {
  height: 13px;
  width: 13px;
  border: 3px solid;
  border-width: 1px 2px 2px 1px;
  border-color: transparent var(--dark_green) var(--dark_green) transparent;
  border-radius: 50%;
  transform: rotate(80deg) skew(11deg, 10deg);
  top: 16px;
  left: -24px;
}
.feather:before {
  height: 13px;
  width: 13px;
  border: 3px solid;
  border-width: 1px 2px 2px 1px;
  border-color: transparent var(--dark_green) var(--dark_green) transparent;
  border-radius: 50%;
  left: -11px;
  top: 10px;
}
.feather-2 {
  height: 8px;
  width: 8px;
  border: 3px solid;
  border-width: 1px 2px 2px 1px;
  border-color: transparent var(--dark_green) var(--dark_green) transparent;
  border-radius: 50%;
  transform: rotate(80deg) skew(11deg, 10deg);
  top: 40px;
  left: -34px;
}
.feather-2:before {
  height: 8px;
  width: 8px;
  border: 3px solid;
  border-width: 1px 2px 2px 1px;
  border-color: transparent var(--dark_green) var(--dark_green) transparent;
  border-radius: 50%;
  left: -7px;
  top: 6px;
}
.bird-peak {
  width: 13px;
  height: 13px;
  border: 5px solid var(--border);
  border-radius: 50% 50% 5px;
  background-color: var(--yellow);
  left: 13px;
  top: -51px;
  transform: rotate(70deg);
}
.bird-eye {
  width: 9px;
  height: 6px;
  border: 4px solid;
  border-radius: 50%;
  border-color: transparent transparent var(--border);
  left: -9px;
  top: -64px;
  transform: rotate(15deg);
}
.bird-eye:before {
  height: 4px;
  width: 5px;
  border-radius: 50%;
  background-color: var(--border);
  top: 5px;
  left: -2px;
  transform: rotate(20deg);
}
.bird-eye:after {
  height: 4px;
  width: 5px;
  border-radius: 50%;
  background-color: var(--border);
  top: 5px;
  left: 6px;
  transform: rotate(-20deg);
}
</style>
