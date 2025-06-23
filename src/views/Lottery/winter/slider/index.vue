<template>
  <!-- Slider main container -->
<div class="swiper_outcontainer">
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <div class="picture">
          <img src="/src/assets/imgs/ssd.png" alt="">
        </div>

      </div>
      <div class="swiper-slide">
        <div class="picture">
          <img src="/src/assets/imgs/bluetooth.png" alt="">
        </div>

      </div>
      <div class="swiper-slide">
        <div class="picture">
          <img src="/src/assets/imgs/boxes.png" alt="">
        </div>

      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <!--     <div class="swiper-button-prev"></div> -->
    <!--     <div class="swiper-button-next"></div> -->

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</div>
</template>


<script setup>
import Swiper from 'swiper';

import {onMounted} from "vue";
// import 'swiper/css';
onMounted(()=>{
  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });
})
</script>

<style lang="scss" scoped >
$slider-width:12rem;
$slider-height:12rem;
.swiper_outcontainer {
  position: relative;
  top: 10px;
  left: 10px;
  min-height: 100vh;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: $slider-width;
  background-color: #fff;
  overflow: hidden;
  border-radius: 8px;
}

.picture {
  width: $slider-height;
  height: $slider-height;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.detail {
  padding: 25px 20px;
  font-weight: 600;
  text-align: center;

  h3 {
    margin: 0;
    font-size: 20px;
  }

  span {
    display: block;
    font-size: 16px;
    color: #f44336;
  }
}
</style>