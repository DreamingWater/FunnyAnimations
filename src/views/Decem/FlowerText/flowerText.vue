<template>
  <div id="app">
    <svg id="stage" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <g id="branchGroup"></g>
      <g id="thornGroup"></g>
      <g id="leafGroup"></g>
      <g id="flowerGroup"></g>
    </svg>
  </div>

</template>

<script lang="ts" setup>
import {onBeforeMount, onMounted} from "vue";

const add_script = (script_src:string)=>{
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = script_src;
  document.body.appendChild(script);
}
onMounted(()=>{

  add_script('https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.0.1/Rx.min.js');
  add_script('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js');
  add_script('https://codepen.io/steveg3003/pen/zBVakw.js');

  setTimeout(() => {
    add_script('/src/views/Decem/FlowerText/flowerText.ts');
  }, 1000)
})
</script>



<style lang="scss">
html, body
{
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  user-select: none;
  color: #111;
  font-family: serif;
}

$color-back: #f0f0f0;
$color-text: #303030;
$color-link: darken($color-back, 10%);

body
{
  background-color: $color-back;
  cursor: pointer;
  //background-image: url(https://images.unsplash.com/photo-1502133403818-87a56b4e3daf?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=f195c8c8b7dbe326ddf2c6fc74ee2590);
  background-size: cover;
  background-position: center center;
  //background-image: url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6bbc6adeacb6d8a8ff01b5a18339cfbf);
  background-image: url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b019c08e464380701b3625f9e5cc98d1);
}

#app
{
  width: 100%;
  height: 100%;
  // background-image: url(https://images.unsplash.com/photo-1520699514109-b478c7b48d3b?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=e37a3dad9c305d5a477a2d1ff2163b73);
  // background-position: center center;
  // background-size: cover;



}

#stage
{
  backface-visibility: visible;

  //overflow: visible;
}

#download-button
{
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  display: inline-block;
  margin: 10px;
  background-color: $color-back;
  color: $color-text;
  border-radius: 4px;
  cursor: pointer;
  border-bottom: solid 3px $color-back;

  &:hover
  {
    border-bottom: solid 3px $color-link;
  }
}
</style>