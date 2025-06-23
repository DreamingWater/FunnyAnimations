<!--<template>-->
<!--  <div class="home-container">-->
<!--&lt;!&ndash;    <Css_3D_Effect></Css_3D_Effect>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->
<template>

  <div class="hero-area-wrap hero-area-bg d-lg-block out-container" >
    <div class="container" style="height: 80%">
      <div class="row"  >
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="hero-image-wrap">
<!--            <img class="image-wrap" style="width:100%; min-width: 500px " src="/src/assets/imgs/dragonsvg.png" />-->
            <img class="image-wrap" style="width:100%; min-width: 500px " src="/src/assets/imgs/dragon.jpg" />
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="hero-text-content">
            <h1 style="font-family: 'salsa';">Let &ensp;&ensp;&ensp;&ensp;becomes
              <div class="text-2024"><Css_3D_Effect /></div>
                more
              <span>incredible<img class="shape hero-text-img"  alt=""></span>
            </h1>
            <p class="text-muted"><strong>祝大家好运，好运，好运...</strong></p>
            <div class="hero-btn-wrap mt-70">
              <a class="common-btn design-1" href="http://8.219.87.42:9000/">龙运当头</a>
              <span><a class="common-btn design-2" href="/winter">龙行大运</a></span>
              <span><a class="common-btn design-2" href="/spring">龙图大展</a></span>
            </div>
          </div>
          <div class="dragon-class">
            <Dragon />
          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import  { onMounted, onBeforeMount} from "vue";
import Dragon from "@/components/Dragon/Dragon.vue";
import Menu from "@/views/Home/Firework/Menu/menu.vue";
import Init from "@/views/Home/Firework/Init/init.vue";
import Css_3D_Effect from "@/components/Css_3D_Effect.vue";
import Slider from "@/views/Home/Slider/index.vue"

////////////////////////////////////////// Firework
const add_script = (script_src:string)=>{
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = script_src;
  document.body.appendChild(script);
}
const add_style = (css_file) =>{
  var headTag = document.getElementsByTagName('head')[0]
  const linkforCSSfile = document.createElement("link");
      linkforCSSfile.href = css_file
      linkforCSSfile.type = 'text/html'
  linkforCSSfile.rel = 'stylesheet'
  headTag.appendChild(linkforCSSfile);
  document.body.appendChild(headTag);
}

onMounted(()=> {
  setTimeout(() => {

    add_script("https://cdn.jsdelivr.net/gh/fz6m/china-lantern@1.6/dist/china-lantern.min.js");
  }, 100)
})
onBeforeMount(()=>{
  add_style('/src/assets/css/bootstrap.css');
})
////////////////////////////////////////// Firework



</script>


<style scoped lang="css">
@font-face {
  font-family: 'salsa';
  src: url('@/assets/ttf/Salsa-Regular.ttf') format('truetype');
}

.out-container {
  height:100%;
  width: 100%;
  margin-top: 0;
  background: url("/src/assets/red-background/red-background.png") center;
  background-size: cover; /* Ensure the image covers the entire element */

}
h1{
  font-size: 150px;
  margin-bottom: 20px;
}
.image-wrap{
  display: flex;
  border-radius: 10px;
}

.dragon-class{
  justify-content: flex-end;
  display: flex;

}
.text-2024{
  position: relative;
  top: -300px;
  left: 40px;
}
.common-btn{
  font-size: 25px;
}
</style>