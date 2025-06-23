
<template>
  <div class="player">
    <div class="player__bar">
      <div class="player__album">
      </div>
      <div class="player__controls">

        <div class="player__prev" @click="click_next">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M26.695 34.434v31.132L54.5 49.998z"/><path d="M24.07 34.434v31.132c0 2.018 2.222 3.234 3.95 2.267l27.804-15.568c1.706-.955 1.707-3.578 0-4.533L28.02 32.168c-2.957-1.655-5.604 2.88-2.649 4.533l27.805 15.564v-4.533L25.371 63.3l3.95 2.267V34.435c-.001-3.387-5.251-3.387-5.251-.001z"/><g><path d="M55.5 34.434v31.132l27.805-15.568z"/><path d="M52.875 34.434v31.132c0 2.018 2.222 3.234 3.949 2.267 9.27-5.189 18.537-10.379 27.805-15.568 1.705-.955 1.705-3.578 0-4.533L56.824 32.168c-2.957-1.655-5.604 2.88-2.648 4.533l27.803 15.564v-4.533L54.176 63.3l3.949 2.267V34.435c0-3.387-5.25-3.387-5.25-.001z"/></g></svg>
        </div>

        <div class="player__play" @click="click_next">
          <svg class="icon play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M51.109 30.335l-36-24A2 2 0 0 0 12 8v48a2.003 2.003 0 0 0 2 2c.388 0 .775-.113 1.109-.336l36-24a2 2 0 0 0 0-3.329z"/></svg>
          <svg class="icon pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M22.537 8.046h17.791c1.104 0 2.003.898 2.003 1.993v79.912a2.005 2.005 0 0 1-2.003 2.003h-17.79a2.005 2.005 0 0 1-2.003-2.003V10.04c0-1.095.898-1.993 2.002-1.993zM59.672 8.046h17.8c1.095 0 1.993.898 1.993 1.993v79.912a2.003 2.003 0 0 1-1.993 2.003h-17.8a1.997 1.997 0 0 1-1.993-2.003V10.04c0-1.095.889-1.993 1.993-1.993z"/></svg>
        </div>

        <div class="player__next" @click="click_next">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M26.695 34.434v31.132L54.5 49.998z"/><path d="M24.07 34.434v31.132c0 2.018 2.222 3.234 3.95 2.267l27.804-15.568c1.706-.955 1.707-3.578 0-4.533L28.02 32.168c-2.957-1.655-5.604 2.88-2.649 4.533l27.805 15.564v-4.533L25.371 63.3l3.95 2.267V34.435c-.001-3.387-5.251-3.387-5.251-.001z"/><g><path d="M55.5 34.434v31.132l27.805-15.568z"/><path d="M52.875 34.434v31.132c0 2.018 2.222 3.234 3.949 2.267 9.27-5.189 18.537-10.379 27.805-15.568 1.705-.955 1.705-3.578 0-4.533L56.824 32.168c-2.957-1.655-5.604 2.88-2.648 4.533l27.803 15.564v-4.533L54.176 63.3l3.949 2.267V34.435c0-3.387-5.25-3.387-5.25-.001z"/></g></svg>
        </div>
      </div>
    </div>
    <div class="player__timeline">
      <p class="player__author"></p>
      <p class="player__song"></p>
      <div class="player__timelineBar"><div id="playhead"></div></div>
    </div>
  </div>
  <div class="result-control">
    <div class="song_name" id="song-name"></div>
    <div class="result">
      <div class="result__left">{{left_result}}</div>
      <div class="result__right">{{right_result}}</div>
    </div>
    <div class="play-button-group">
      <div class="play-icon">
        <div class="play-icon__Save">
          <div @click="click_left_win">Left Win</div></div>
        <div class="play-icon__Read">
          <div  @click="click_level">Level</div></div>
        <div class="play-icon__settings">
          <a  @click="click_right_win">Right Win</a></div>
      </div>
    </div>
  </div>


  <!-- github  -->
  <!--  <a  class="github-corner" aria-label="View source on GitHub">-->
  <!--    <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#ffeff5; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>-->

</template>
<script lang="ts" setup>
import  { onMounted, ref} from "vue";
const left_result = ref(0);
const right_result = ref(0);

const add_script = (script_src:string)=>{
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = script_src;
  document.body.appendChild(script);
}

const song_result = ["阳光男孩阳光女孩","last dance（伍佰）","当（动力火车）","彩虹的微笑（王心凌）","我的天空（南征北战）","夜曲（周杰伦）","情歌王（古巨基）","奢香夫人（凤凰传奇）","不再犹豫（beyond）","算你狠（陈小春）","海芋恋","倔强","superstar"]

const add_one_element_to_page = (music_name)=>{
  let song_element = `
  <div class="player__albumImg"
  data-author="2024"
  data-song="疯狂猜歌名"
  data data-src="${music_name}" style="background-image: url('/src/assets/imgs/music.jpeg')">
    </div>`
  const result_element = document.querySelectorAll('.player__album');
  if (result_element[0].innerHTML == ''){
    song_element = `
  <div class="player__albumImg active-song"
  data-author="2024"
  data-song="疯狂猜歌名"
  data data-src="${music_name}" style="background-image: url('/src/assets/imgs/music.jpeg')">
    </div>`
  }
  result_element[0].innerHTML += song_element;
}


const generate_songs = ()=>{
  for(var i=1;i<14;i++){
    let song_name = `/src/assets/music/${i}.mp3`
    add_one_element_to_page(song_name);
  }
}

const generate_songs_test = ()=>{
  add_one_element_to_page(`http://m10.music.126.net/20240119113115/4b0175ff17811bc43f7310761d388003/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3179122585/a5f6/40f1/51af/c3812759e0c7853dfa0b38dd72cc5d39.mp3`);
}


onMounted(()=> {
  add_script('/src/views/Music/jquery.min.js');
  add_script('/src/views/Music/TweenMax.min.js');
  setTimeout(()=>{
    add_script('/src/views/Music/music.js');
  },100);

  // generate_songs_test();
  generate_songs();
})

const click_left_win = ()=>{
  show_song_name();
  left_result.value += 1;
}
const click_right_win = ()=>{
  show_song_name();
  right_result.value += 1;
}

const click_next = ()=>{
  disable_song_name()
}
const click_level = ()=>{
  show_song_name();
}
const get_current_song_index = ()=>{
  const result_element = document.querySelectorAll('.player__album div');
  let Index = Array.from(result_element).findIndex((element) => element.classList.contains('active-song'));
  return Index
}
const show_song_name = () =>{
  const song_element = document.getElementById('song-name');
  const song_index = get_current_song_index();
  if (song_index >= 0 && song_index < song_result.length){
    song_element.innerHTML = song_result[song_index];
  }
}
const disable_song_name = () =>{
  const song_element = document.getElementById('song-name');
  song_element.innerHTML = ''
}
</script>

<style lang="scss">
.icon {
  display: inline-block;
  width: 2em;
  height: 2em;
  font-size: 30px;
  fill: #fda727;
  transition: all .2s ease-in-out;
}


html, body {
  height: 100%;
}

body {
  background: url("/src/assets/red-background/red-background.png") center;
  background-size: cover; /* Ensure the image covers the entire element */
}
.player {
  //background: #f61166 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &.play {
    .player__timeline {
      transform: translateY(-90%);
    }
    .player__album:after {
      box-shadow: 0px 30px 28px -10px rgba(0,0,0,.2);
    }
    .player__album {
      top: -65px;
    }
    .pause {
      display: inline-block;
    }
    .play {
      display: none;
    }
  }
  &__album {
    width: 112px;
    height: 112px;
    border-radius: 50%;
    margin-right: 22px;
    position: relative;
    top: -50px;
    transition: all .4s ease-in-out;
    &:before {
      content: '';
      width: 25px;
      height: 25px;
      position: absolute;
      z-index: 3;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 50%;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 50%;
      box-shadow: none;
      transition: all .3s ease-in-out;
    }
  }
  &__albumImg {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    display: none;
    &.active-song {
      display: block;
    }
  }
  &__bar {
    background: #f86262;
    padding: 10px 25px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    box-shadow: 0 30px 56px 6px rgba(0,0,0,0.1);
    position: relative;
    z-index: 3;
  }
  &__controls {
    display: flex;
    align-items: center;
  }
  &__prev {
    transform: rotate(180deg);
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 15px;
    transition: all .2s ease-in-out;
    margin-right: 3px;
    &:hover {
      background: #D7DCE2;
      svg {
        fill: #fff;
      }
    }
  }
  &__play {
    cursor: pointer;
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: all .2s ease-in-out;
    margin-right: 3px;
    position: relative;
    &:hover {
      background: #D7DCE2;
      svg {
        fill: #fff;
      }
    }
    svg {
      font-size: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &.pause {
        display: none;
      }
    }
  }
  &__next {
    cursor: pointer;
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: all .2s ease-in-out;
    margin-left: -8px;
    &:hover {
      background: #D7DCE2;
      svg {
        fill: #fff;
      }
    }
  }
  &__timeline {
    background: #fff6fb;;
    height: 95px;
    border-radius: 15px;
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    transform: translateY(0);
    transition: all .3s ease-in-out;
    z-index: 1;
    padding-left: 160px;
    flex-direction: column;
    justify-content: center;
  }
  &__timelineBar {
    background: #E7E7E7;
    width: 95%;
    height: 4px;
    border-radius: 15px;
    margin-top: 13px;
    position: relative;
  }
  #playhead {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
    width: 0;
    height: 100%;
    background: #fd6d94;
  }
  &__author {
    line-height: 1;
    font-weight: bold;
    margin-bottom: 6px;
    margin-top: 15px;
  }
  &__song {
    line-height: 1;
    margin: 0;
    font-size: 12px;
    color: #949494;
  }
}

.result-control{
  position: absolute;
  bottom: 200px;
  right: 100px;
  .song_name{
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
    color: white;
  }
  .result{
    display: flex;
    justify-content: space-around;
    border-radius: 10px;
    margin-bottom: 30px;
    background: linear-gradient(209deg, #f57272,white);
    box-shadow: 0 30px 56px 6px rgba(0,0,0,0.1);
    color: red;
    .result__left{
      font-size: 40px;
      font-weight: bold;
    }
    .result__right{
      font-size: 40px;
      font-weight: bold;
    }
  }
}


</style>


<style lang="scss" scoped>
/*  ICONS  */
$greyLight-2: #c8d0e7;
$white: #FFFFFF;
$greyDark: #9baacf;

.play-icon {
  min-width: 20rem;
  display: flex;
  justify-content: space-between;

  &__Read, &__Save, &__settings {
    width: 5rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0.3rem 0.3rem 0.6rem $greyLight-2, -0.2rem -0.2rem 0.5rem $white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    color: $greyDark;
    transition: all 0.5s ease;

    &:active {
      box-shadow: inset 0.2rem 0.2rem 0.5rem $greyLight-2, inset -0.2rem -0.2rem 0.5rem $white;
      color: var(--primary);
    }

    &:hover {
      color: var(--primary);
    }
  }
}
</style>