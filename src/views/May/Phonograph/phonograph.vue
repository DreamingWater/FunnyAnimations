<template>
  <button id="play">Play</button>
  <button id="stop">Stop</button>
  <div id="needle"></div>
  <div id="vinyl"></div>
</template>


<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { add_script } from '@/utils/AppendCSSJS';



onMounted(() => {
  add_script('https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js?r=5426');
  add_script('https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollTrigger.min.js');

  setTimeout(() => {
    add_script('/src/views/May/Phonograph/phonograph.js');
  }, 500);

});
</script>


<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/lcd");

body {
  pointer-events: none;
  height: 500vh;
  --speed: 1;
  --cursor: grab;
  background: url("https://assets.codepen.io/383755/woodgrain.jpg") 50% 50% /
    100vw 100vh no-repeat fixed;
  cursor: var(--cursor);
  * {
    font-family: "LCD", sans-serif;
    font-family: "LCD2", sans-serif;
    font-family: "LCDMono2", sans-serif;
    font-family: "LCDMono", sans-serif;
    font-family: "Digitalism", sans-serif;
    text-transform: uppercase;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &.playing {
    #vinyl {
      pointer-events: all;
      animation-play-state: running;
    }
    #needle {
      transform: rotate(0deg);
    }
  }
  &:after {
    font-family: "Futura", sans-serif;
    font-size: 12px;
    content: "Scroll up & down on the record to scratch";
    color: #222;
    position: fixed;
    top: 2.5vmin;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &:before {
    content: "";
    position: absolute;
    width: 80vmin;
    height: 80vmin;
    border-radius: 100%;
    top: calc(50% - 40vmin);
    left: calc(50% - 40vmin);
    position: fixed;
    transform: translateY(1vmin);
    background: linear-gradient(to right, #333 25%, #777, #333 75%);
    box-shadow: 0 1.5vmin 3vmin rgba(0, 0, 0, 0.5);
  }
}

#needle {
  position: fixed;
  height: 2vmin;
  width: calc(50vw - 37.5vmin);
  background: linear-gradient(
          to left,
          rgba(0, 0, 0, 0.25),
          rgba(0, 0, 0, 0.001)
  ),
  linear-gradient(to bottom, #777, #ccc, #777);
  top: calc(50% - 1vmin);
  z-index: 9;
  transform-origin: -5vmin 50%;
  transition: 0.75s ease-in-out;
  transform: rotate(-95deg) scale(1.2);
  &:before {
    content: "";
    position: absolute;
    left: calc(100% - 0.5vmin);
    top: calc(50% - 1.5vmin);
    height: 3vmin;
    width: 6vmin;
    background: linear-gradient(
            to left,
            darken(#da3743, 10%) 2px,
            transparent 2px
    ),
    radial-gradient(circle at center, transparent 0.5vmin, #555 0.5vmin, #666),
    linear-gradient(
            45deg,
            #888 calc(50% - 0.1vmin),
            #222 calc(50% - 0.1vmin),
            #222 calc(50% + 0.1vmin),
            #888 calc(50% + 0.1vmin)
    );
    clip-path: polygon(0 0, 100% 10%, 100% 90%, 0% 100%);
  }
}

#vinyl {
  z-index: 1;
  position: fixed;
  width: 80vmin;
  height: 80vmin;
  pointer-events: none;
  background: radial-gradient(
          circle at center,
          #ccc -0.5vmin,
          #777 1.5vmin,
          transparent 1vmin,
          transparent 26%,
          #111 27.5%,
          #111
  ),
  url("https://assets.codepen.io/383755/squeezeme.jpg") 50% 50% / 43% 43%
  no-repeat;
  border-radius: 100%;
  top: calc(50% - 40vmin);
  left: calc(50% - 40vmin);
  animation: spin calc(var(--speed) * 0.3s + 3s) linear infinite 1s;
  animation-play-state: paused;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: repeating-radial-gradient(
            circle at center,
            #222 1px,
            transparent 0.5px,
            transparent 4px,
            #222 4px,
            #222 4.5px
    );
    border-radius: inherit;
    -webkit-mask: radial-gradient(
            circle at center,
            transparent 27.5%,
            #000 27.5%
    );
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}

#play,
#stop {
  position: fixed;
  top: calc(100vh - 65px);
  left: calc(50vw - 250px);
  z-index: 2;
  opacity: 1;
  padding: 0.5rem 1rem 0.25rem;
  border: none;
  color: #30ac18;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-shadow: 0 0.5px 5px;
  pointer-events: all;
  background:transparent;
  &:hover {
    color: #f3ebde;
    text-shadow: 0 1px 10px #f3ebde;
  }
  &:active,
  &:hover {
    transform: translateY(2.5px);
    &:before {
      box-shadow: 0 7.5px 0 #000;
    }
    &:after {
      box-shadow: 0 7.5px 0 5px #888;
    }
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    transition: inherit;
    border-radius: 8px;
  }
  &:after {
    box-shadow: 0 10px 0 5px #888;
    z-index: -2;
  }
  &:before {
    background:#222;
    box-shadow: 0 10px 0 #000;
  }
}

#stop {
  left: auto;
  right: calc(50vw - 250px);
  color: #da3743;
}


</style>