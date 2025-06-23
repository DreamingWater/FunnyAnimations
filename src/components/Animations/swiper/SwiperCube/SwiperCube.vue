

<template>
  <div class="swiper-introduction-home">

    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide.imgSrc" />
          <div class="cost" :class="{'dark-text': slide.darkText}">{{ slide.cost }}</div>
          <div class="overlay">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
            <div class="ratings">
              <div class="stars">
                <ion-icon v-for="star in slide.stars" :key="star" class="star" :name="star"></ion-icon>
              </div>
              <span>{{ slide.reviews }} 冠王</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'

const slides = [
  {
    imgSrc: '/src/views/Decem/T1Winner/imgs/4.jpg',
    cost: 'Faker',
    title: 'Faker',
    description: 'Faker延续了Bo5对战LPL100%胜率，10战10胜,保持着Bo5对战LPL的绝对统治力',
    stars: ['star', 'star', 'star', 'star', 'star-half-outline'],
    reviews: 5,
    darkText: false
  },
  {
    imgSrc: '/src/views/Decem/T1Winner/imgs/3.jpg',
    cost: 'Faker',
    title: 'Faker',
    description: '他送过，失败过，哭过，绝望过，也曾一度怀疑自己是否还能继续坚持打职业比赛',
    stars: ['star', 'star', 'star', 'star', 'star-half-outline'],
    reviews: 5,
    darkText: false
  },
  {
    imgSrc: '/src/views/Decem/T1Winner/imgs/1.jpg',
    cost: 'Faker',
    title: 'Faker',
    description: '但是没有放弃过，他一直坚持着，坚持着自己的梦想，坚持着自己的信念',
    stars: ['star', 'star', 'star', 'star', 'star-half-outline'],
    reviews: 5,
    darkText: false
  },
  {
    imgSrc: '/src/views/Decem/T1Winner/imgs/5.jpg',
    cost: 'Faker',
    title: 'Faker',
    description: '即使在28岁的年纪，Faker依然保持着高水平的竞技状态，带领团队T1又一次站在世界之巅',
    stars: ['star', 'star', 'star', 'star', 'star-half-outline'],
    reviews: 5,
    darkText: false
  },
  {
    imgSrc: '/src/views/Decem/T1Winner/imgs/2.jpg',
    cost: 'Faker',
    title: 'Faker',
    description: '不知道已经免除兵役的Faker未来还要统治英雄联盟多久，五冠王的传奇还在继续，让我们拭目以待吧',
    stars: ['star', 'star', 'star', 'star', 'star-half-outline'],
    reviews: 5,
    darkText: false
  },

];


onMounted(()=>{
  const add_script = (url: string) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  };
  add_script('https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js');
  add_script('https://cdn.jsdelivr.net/npm/tsparticles@1.26.0/dist/tsparticles.min.js');
  add_script('https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js');
  add_script('https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js');
  setTimeout(()=>{
    var swiper = new Swiper(".swiper", {
      effect: "cube",
      grabCursor: true,
      loop: true,
      speed: 1000,
      cubeEffect: {
        shadow: false,
        slideShadows: true,
        shadowOffset: 10,
        shadowScale: 0.94,
      },
      autoplay: {
        delay: 2600,
        pauseOnMouseEnter: true,
      },
    });


  },500)
})
</script>

<style lang="css">
@import url("https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@300;600&display=swap");


.swiper-introduction-home {
  display: grid;
  grid-template-columns: 50% 45%;
  place-items: center;
  gap: 60px;
  min-height: 100vh;
  padding: 20px 60px;
}

/* SLIDER */

.swiper {
  position: relative;
  width: 400px;
  height: 430px;
}

.swiper-slide {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.3);
  user-select: none;
  border-radius: 10px;
}

.cost {
  position: absolute;
  top: 8px;
  right: 6px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding: 6px 10px;
  color: #fff;
  font-size: clamp(0.8rem, 4vw, 0.9rem);
  font-weight: 600;
}

.dark-text {
  color: #202134;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  padding: 10px 20px;
  background: rgba(93, 95, 145, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  border-radius: 0 0 20px 20px;
}

.overlay h1 {
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  font-weight: 600;
}

.overlay p {
  font-size: clamp(0.8rem, 4vw, 0.9rem);
  font-weight: 300;
  line-height: 1.3;
}

.ratings {
  display: flex;
  column-gap: 10px;
  margin-top: -6px;
}

.ratings span {
  font-size: clamp(0.8rem, 4vw, 0.9rem);
  font-weight: 300;
}

.star {
  color: #afe312;
}

.logo {
  position: fixed;
  right: -20px;
  bottom: -30px;
  z-index: 10;
}

.logo img {
  width: 120px;
}

@media (max-width: 890px) {
  .logo {
    right: -10px;
    bottom: -20px;
  }

  .logo img {
    width: 80px;
  }
}

@media (max-width: 1050px) {
  .swiper {
    width: 350px;
    height: 450px;
  }
}

@media (max-width: 930px) {
  section {
    grid-template-columns: 100%;
    grid-template-rows: 55% 40%;
    grid-template-areas:
      "slider"
      "content";
    place-items: center;
    gap: 64px;
    padding: 60px;
  }

  .swiper {
    grid-area: slider;
  }

  .content {
    grid-area: content;
    text-align: center;
  }

  .content h1 {
    margin-bottom: 20px;
  }
}

@media (max-width: 470px) {
  section {
    padding: 40px 40px 60px;
  }

  .swiper {
    width: 300px;
    height: 400px;
  }
}

</style>
