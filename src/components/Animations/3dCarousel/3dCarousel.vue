<template>
  <div class="container">
    <div
        v-for="(img, index) in images"
        :key="index"
        class="img-holder"
        ref="imgHolders"
    >
      <img :src="img">
      <div class="img-ref">
        <img :src="img">
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
  import { onMounted } from "vue";
  const images = [
      'https://img2.baidu.com/it/u=4254873462,4035339645&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
      'https://n.sinaimg.cn/ent/4_img/upload/1f0ce517/20170921/Js-F-fymesmp0834012.jpg',
      'https://ww1.sinaimg.cn/mw690/0082G3I5gy1hrwn8t6js1j30j60srac3.jpg',
      'https://ww2.sinaimg.cn/mw690/008qhgzBgy1hrslp8qogej31qg334npd.jpg',
      'https://wx4.sinaimg.cn/mw690/0085wbd4gy1hr6qj14mgej32ms3y87wi.jpg',
      'https://inews.gtimg.com/om_bt/OdhJNDgA-zRngFxX-gHNR-bIqSYWUeKZVXKxY3kpmbJEQAA/641',
      'https://ww3.sinaimg.cn/mw690/006eoJaKly1hq4dz1sfx5j60u01hdwjs02.jpg',
    ];

  const add_script = (script_src:string)=>{
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = script_src;
    document.body.appendChild(script);
  }
  onMounted(()=>{
  setTimeout(() => {
    add_script('http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js');
    add_script('http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.8/TweenMax.min.js');
    add_script('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.8/utils/Draggable.min.js');
    add_script('/src/components/Animations/3dCarousel/3dCarousel.js');
  }, 1000)
  })

</script>

<style scoped lang="css">
body{
  height:0; /*not sure but codepen has some kind of height*/
}
.container .img-holder {
  height:400px;
  position:absolute;
  background-color:#fff;
  box-shadow:0px 1px 6px 3px #ccc;
  visiblity:hidden;
  opacity:0;
  top:50px;
  left:395px;
  cursor:pointer;
  z-index:99;
}

.container .img-holder img {margin-top:5px;}

.container{
  position:relative;
  height:500px;
  width:1040px;
  left:20px;
  top:100px;
  //border:2px solid #ccc;
  text-indent:4px;
  font-weight:bold;
}

.controller{
  top:120px;
  left:20px;
  width:300px;
  margin:0 auto;
  position:relative;
}

.scrolller-container{
  width:800px;
  height:15px;
  border:1px solid #ccc;
  border-radius:10px;
  position:relative;
  top:150px;
  left:130px;
  cursor:pointer;
}
.scrolller-container .scroller{
  width:100px;
  height:15px;
  background-color:#ddd;
  border-radius:10px;
  position:absolute;
  left:0px;
}

/* For reflection */
.container .img-ref{
  position:relative;
  left:0;
  z-index:-1;
}
.container .img-ref img {
  -webkit-transform: scaleY(-1);
  -moz-transform: scaleY(-1);
  -ms-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  transform: scaleY(-1);
}
.container .img-ref:after {
  content: "";
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #000000;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(38%, rgba(255, 255, 255, 0)), color-stop(40% rgba(255, 255, 255, 0.67)), color-stop(65% #fff));
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.67) 40%, #fff 65%);
  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.67) 40%, #fff 65%);
  background: -ms-linear-gradient(top, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.67) 40%, #fff 65%);
  background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.67) 40%, #fff 65%);
  background: linear-gradient(top, rgba(255, 255, 255, 0) 38%, rgba(0, 0, 0, 0.67) 40%, #fff 65%);
}
img {
  height: 400px;
}
</style>