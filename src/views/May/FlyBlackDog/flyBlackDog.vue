<template>
<div class="fly-dog-container">
  <span class="cloud  cloud-fg cloud1"></span>
  <span class="cloud cloud-fg cloud2"></span>
  <span class="cloud cloud-fg cloud3"></span>
  <div class="dog">
		<span class="wing wing2">
			<span class="feather"></span>
			<span class="feather"></span>
			<span class="feather"></span>
			<span class="feather"></span>
			<span class="feather"></span>
		</span>
    <span class="shoulder shoulder3">
			<span class="paw paw3"></span>
			<span class="leg leg3"></span>
		</span>
    <span class="body body1"></span>
    <span class="body body2"></span>
    <span class="body body3"></span>
    <span class="body body4"></span>
    <span class="head darkergray head2"></span>
    <span class="head gray head1"></span>
    <span class="head head3"></span>
    <span class="head head4"></span>
    <span class="head head5"></span>
    <span class="ear"></span>
    <span class="eye">
      <span class="eyeball"></span>
    </span>
    <span class="nose"></span>
    <span class="tail"></span>
    <span class="shoulder shoulder1">
			<span class="paw paw1"></span>
			<span class="leg leg1"></span>
		</span>
    <span class="shoulder shoulder2">
			<span class="paw paw2"></span>
			<span class="leg leg2"></span>
		</span>
    <span class="wing wing1">
			<span class="feather"></span>
			<span class="feather"></span>
			<span class="feather"></span>
			<span class="feather"></span>
			<span class="feather"></span>
		</span>
  </div>
  <span class="cloud-more cloud-fg cloud-more1"></span>
  <span class="cloud-more cloud-fg cloud-more2"></span>


</div>
</template>

<script setup>

</script>



<style  lang="scss">
$dog-size: 180px;
$dog-size-sm: 100px;
$dog-offset-top: $dog-size * 60/180;
$dog-offset-left: $dog-size * 30/180;
$dog-offset-top-sm: $dog-size-sm * 60/180;
$dog-offset-left-sm: $dog-size-sm * 30/180;

$cloud-size: 50px;
$cloud-size-sm: 25px;

$gray-base: #7d7d7d;
$gray-dark: #636363;
$gray-darker: #535353;
$white-base: white;
$white-dark: #f7f7f7;
$white-darker: #eaeaea;
$blue-base:  #9eecff;
$black-base: black;

$fly-animation-duration: 5s;
$fly-back-animation-delay: 0.15s;
$blink-animation-duration: 10s;
$wiggle-animation-duration: 0.5s;
$wiggle-animation-delay: 0.1s;
$cloud-animation-duration: 10s;
$cloud-parallax-delta: 1s;

.white { background-color: $white-base !important; }
.darkwhite { background-color: $white-dark !important; }
.darkerwhite { background-color: $white-darker !important; }
.gray { background-color: $gray-base !important; }
.darkgray { background-color: $gray-dark !important; }
.darkergray { background-color: $gray-darker !important; }

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $blue-base;
  margin: 0;
  overflow: hidden;
}

.dog {
  width: $dog-size;
  height: $dog-size;
  position: relative;
  left: $dog-offset-left;
  top:  $dog-offset-top;
  & * {
    position: absolute;
    left: 0;
    top: 0;
  }
  animation: upNdown $fly-animation-duration ease-in-out infinite;
}

.body {
  background-color: $gray-base;
  //border: 1px solid black
}
.body1 {
  width: 117%;
  height: 60%;
  border-radius: 0 39% 78% 30% / 0 32% 60% 60%;
}
.body2 {
  width: 80%;
  height: 30%;
  top: -5%;
  left: 3%;
  transform: rotate(32deg);
}
.body3 {
  width: 46%;
  height: 64%;
  top: -24%;
  left: -15%;
  border-radius: 100% 0 0 0 / 100% 0 0 0;
  transform: rotate(-35deg);
}
.body4 {
  width: 31%;
  height: 38%;
  top: -40%;
  left: -2%;
  transform: rotate(-20deg);
}

.head {
  background-color: $white-dark;
  //border: 1px solid black;
}
.head1 {
  width: 50%;
  height: 56%;
  top: -68%;
  left: -17%;
  border-radius: 41% 53% 21% 0 / 26% 33% 63% 0;
}
.head2 {
  @extend .head1;
  top: -72%;
  left: -22%;
}
.head3 {
  width: 50%;
  height: 50%;
  top: -56%;
  left: -60%;
  transform: rotate(-16deg);
  border-radius: 20% 10% 10% 20% / 40% 41% 50% 60%;
}
.head4 {
  width: 10%;
  height: 10%;
  top: -10%;
  left: -46%;
  transform: rotate(-45deg);
  border-radius: 0% 0% 0% 36% / 0% 0% 0% 20%;
}
.head5 {
  width: 27%;
  height: 20%;
  top: -23%;
  left: -44%;
  transform: rotate(23deg);
  border-radius: 0% 0% 66% 0% / 0% 0% 20% 0%;
}

.ear {
  background-color: $gray-dark;
  width: 30%;
  height: 30%;
  top: -80%;
  left: -1%;
  border-radius: 120% 30% 30% 30% / 120% 30% 30% 30%;
  transform: rotate(45deg);
}
.eye {
  background-color: $black-base;
  width: 13%;
  height: 13%;
  top: -57%;
  left: -21%;
  border-radius: 100%;
  animation: blink $blink-animation-duration linear infinite;
}

.nose {
  background-color: black;
  width: 12%;
  height: 14%;
  top: -50%;
  left: -61%;
  border-radius: 33% 12% 80% 11% / 60% 13% 80% 10%;
}

.tail {
  background-color: $gray-base;
  //border: 1px solid black;
  width: 9%;
  height: 13%;
  top: 0%;
  left: 107%;
  transform: rotate(55deg);
  border-radius: 10% 30% 0% 0% / 70% 60% 0% 0%;
  transform-origin: 30% 80%;
  animation: wiggle $wiggle-animation-duration ease-out infinite;

  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: inherit;
    border: inherit;
    width: 82%;
    height: 80%;
    left: 5%;
    top: -58%;
    transform: rotate(-10deg);
    border-radius: 40% 40% 0% 0% / 70% 60% 0% 0%;
    animation: wiggle2 $wiggle-animation-duration ease-out infinite;
    transform-origin: 30% 80%;
    animation-delay: $wiggle-animation-delay;
  }
}

.shoulder {
  background-color: $gray-dark;
  //border: 1px solid black;
}
.shoulder1 {
  width: 30%;
  height: 38%;
  top: 24%;
  left: 19%;
  border-radius: 50% 40% 40% 36% / 40% 40% 40% 40%;
  transform: rotate(-38deg);
  animation: shoulder1Hang $fly-animation-duration ease-out infinite;
}
.shoulder2 {
  width: 28%;
  height: 41%;
  top: 21%;
  left: 78%;
  border-radius: 62% 60% 30% 60% / 66% 40% 50% 30%;
  transform: rotate(-120deg);
  animation: shoulder2Hang $fly-animation-duration ease-out infinite;
}

.shoulder3 {
  @extend .shoulder1;
  left: 0;
  animation-delay: $fly-back-animation-delay;
  background-color: $gray-darker;
}

.leg {
  background-color: $gray-dark;
  //border: 1px solid black;
}
.leg1 {
  width: 63%;
  height: 111%;
  top: 17%;
  left: -50%;
  border-radius: 30% 70% 0% 0% / 20% 80% 0% 0%;
  transform: rotate(-87deg);
}
.leg2 {
  width: 63%;
  height: 111%;
  top: -20%;
  left: -30%;
  border-radius: 72% 30% 80% 40% / 90% 60% 50% 30%;
  transform: rotate(-120deg);
}
.leg3 {
  @extend .leg1;
  background-color: $gray-darker;
}

.paw {
  background-color: $white-dark;
  //border: 1px solid black;
}
.paw1 {
  width: 40%;
  height: 56%;
  transform: rotate(4deg);
  top: 64%;
  left: -89%;
  border-radius: 80% 0% 40% 61% / 60% 0% 20% 90%;
}
.paw2 {
  width: 45%;
  height: 35%;
  transform: rotate(-44deg);
  top: 16%;
  left: -93%;
  border-radius: 39% 50% 0% 0% / 20% 110% 0% 0%;
}
.paw3 {
  @extend .paw1;
  background-color: $white-darker;
}


.wing {
  //border: 1px solid black;
}
.wing1 {
  width: 100%;
  height: 100%;
  top: -90%;
  left: 37%;
  transform-origin: 5% 90%;
  transform: rotate(20deg);
  animation: flap $fly-animation-duration ease-in-out infinite;
  animation-delay: -$fly-back-animation-delay;
}
.wing2 {
  width: 90%;
  height: 90%;
  top: -88%;
  left: 22%;
  transform-origin: 5% 90%;
  transform: rotate(20deg);
  animation: flap $fly-animation-duration ease-in-out infinite;
  animation-delay: $fly-back-animation-delay;
  & .feather {
    background-color: $white-darker;
  }
}
.feather {
  transform-origin: 4% -28%;
  width: 69%;
  height: 10%;
  top: 90%;
  left: 0;
  background-color: $white-dark;
}
@for $i from 1 through 5 {
  .feather:nth-child(#{$i}) {
    border-radius: 20% 50% 60% 20%/60% 60% 60% 60%;
    transform: rotate( $i * -10  + deg) scale(1 + $i * 0.15);
  }
}

.cloud {
  position: absolute;
  width: $cloud-size;
  height: $cloud-size/2;
  border-radius :$cloud-size;
  background-color: $white-base;
  left: 0%;
  top: 0%;
  animation: moveRight linear infinite;
  &::after {
    content: '';
    position: inherit;
    width: 100%;
    height: 90%;
    border-radius: inherit;
    background-color: white;
    left: 43%;
    top: 33%;
  }
  &::before {
    content: '';
    position: inherit;
    width: 70%;
    height: 80%;
    border-radius: inherit;
    background-color: white;
    left: 44%;
    top: -32%;
  }
}

@for $i from 1 through 5 {
  .cloud#{$i} {
    top: -15% + 20% *$i;
    left: -5% - 10%*$i;
    transform: scale(1 + 1 * $i);
    animation-delay: random(10) * -0.5s;
    animation-duration:
        $cloud-animation-duration - $cloud-parallax-delta * $i;
  }
}


.cloud-more {
  position: absolute;
  width: $cloud-size;
  height: $cloud-size / 2;
  border-radius: $cloud-size / 2;
  background-color: $white-base;
  left: 0%;
  top: 0%;
  animation: moveRight linear infinite;

  &::after {
    content: '';
    position: inherit;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background-color: white;
    left: 20%;
    top: -20%;
  }

  &::before {
    content: '';
    position: inherit;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: white;
    left: 10%;
    top: 10%;
  }
}

@for $i from 1 through 5 {
  .cloud-more#{$i} {
    top: -15% + 20% * $i;
    left: -5% - 10% * $i;
    transform: scale(1 + 0.2 * $i);
    animation-delay: random(10) * -0.5s;
    animation-duration: $cloud-animation-duration - $cloud-parallax-delta * $i;
  }
}
// ANIMATIONS
@keyframes upNdown {
  50% {transform: translateY(20%);}
  100% {transform: transateY(-320%);}
}
@keyframes shoulder1Hang {
  50% {transform: rotate(-18deg);}
  100% {transform: rotate(-38deg);}
}
@keyframes shoulder2Hang {
  50% {transform: rotate(-130deg);}
  100% {transform: rotate(-120deg);}
}
@keyframes flap {
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(20deg);
  }
}
@keyframes blink {
  1% {transform: scaleY(0.1);}
  2% {transform: scaleY(1);}

  15% {transform: scaleY(1);}
  16% {transform: scaleY(0.1);}
  17% {transform: scaleY(1);}

  28% {transform: scaleY(1);}
  29% {transform: scaleY(0.1);}
  30% {transform: scaleY(1);}
  31% {transform: scaleY(1);}
  32% {transform: scaleY(0.1);}
  33% {transform: scaleY(1);}

  75% {transform: scaleY(1);}
  76% {transform: scaleY(0.1);}
  77% {transform: scaleY(1);}
}
@keyframes wiggle {
  50% {transform: rotate(75deg)}
  100%{transform: rotate(55deg)}
}
@keyframes wiggle2 {
  50% {transform: rotate(10deg)}
  100%{transform: rotate(-10deg)}
}
@keyframes moveRight {
  100% { left: 200vw }
}

@media screen and (max-width: 900px) {
  .dog{
    width: $dog-size-sm;
    height: $dog-size-sm;
    left: $dog-offset-left-sm;
    top:  $dog-offset-top-sm
  }
  .cloud {
    width: $cloud-size-sm;
    height: $cloud-size-sm/2;
  }

}
@keyframes flipEye {
  0% { transform: scaleX(3); }
  50% { transform: scaleX(-3); }
  100% { transform: scaleX(3); }
}
.eyeball {
   background-color: $white-base;
   width: 10px;
   height: 10px;
   border-radius: 100%;
 }


.fly-dog-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>