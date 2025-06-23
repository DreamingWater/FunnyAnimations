<template>
<div class="heart-container">
   <div class="heart heart--1"></div>
   <div class="heart heart--2"></div>
   <div class="heart heart--3"></div>
   <div class="heart heart--4"></div>
</div>
</template>

<script setup>

</script>



<style scoped lang="scss">

$red-color: #e64356;
$duration: 2s;
$total-steps: 20;
$interval: 200ms;
$easing: ease-out;
$z-index-dog: 0;



.heart-container {
  position: absolute;
  top: 52%;
  width: 50vmin;
  height: 40vmin;
  z-index: $z-index-dog;
}
.heart{
  position: absolute;
  width: 6%;
  height: 7%;
  background-color: $red-color;
  border-bottom-right-radius: 23%;
  opacity: 0;
  animation-fill-mode: both;
  @keyframes heart-beat {
    0% { transform: scale(0.75) rotate(35deg); opacity: 1; }
    5%, 15%, 25% { transform: scale(1) rotate(35deg); }
    10%, 20% { transform: scale(0.75) rotate(35deg); }
    70% { opacity: 1;}
    100% {transform: rotate(35deg)  translateY(-10px) translateX(-10px); opacity: 0;}
  }
  &--1 {
    top: -25%;
    left: 15%;
    animation: heart-beat $duration $easing infinite 1.5s;
  }
  &--2 {
    top: -36%;
    left: 7%;
    animation: heart-beat $duration $easing infinite 1s;
  }
  &--3 {
    top: -48%;
    left: 14%;
    animation: heart-beat $duration $easing infinite 0.5s;
  }
  &--4 {
    top: -53%;
    left: -3%;
    animation: heart-beat $duration $easing infinite;
  }
}
.heart:before,
.heart:after{
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  border-radius: 50%;
  background-color: $red-color;
}
.heart:after{
  bottom: 0px;
  left: -53%;
}
.heart:before{
  top: -53%;
  right: 0px;
  transform: rotate(45deg);
}
</style>