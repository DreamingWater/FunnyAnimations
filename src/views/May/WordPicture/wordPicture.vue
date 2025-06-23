<template>
<div class="word-picture">
  <img src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=f19a8fc678bb87aedd5f5959022bbf71" />
  <h1 contenteditable class="word-picture-word">你好</h1>

</div>

</template>

<script setup>

</script>



<style \ lang="scss">
.word-picture {
  background: #fff;
  height: 100%;
  overflow: hidden;
}

h1 {
  font-family: 'Lobster', cursive;
  color: #000;
  font-size: 30vw;
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow:
      -1px -1px 0 rgba(255, 255, 255, .7),
      1px -1px 0 rgba(255, 255, 255, .7),
      -1px 1px 0 rgba(255, 255, 255, .7),
      1px 1px 0 rgba(255, 255, 255, .7),
      -1px 2px 1px #a0a0a0,
      -2px 4px 2px #a0a0a0,
      -3px 6px 3px rgba(#a0a0a0, 0.6),
      -4px 8px 4px rgba(#a0a0a0, 0.5),
      -5px 10px 5px rgba(#a0a0a0, 0.4),
      -6px 12px 6px rgba(#a0a0a0, 0.3),
      -7px 13px 7px rgba(#a0a0a0, 0.2),
      -8px 15px 8px rgba(#a0a0a0, 0.2),
      -9px 17px 9px rgba(#a0a0a0, 0.2),
      -10px 19px 10px rgba(#a0a0a0, 0.2),
      -11px 20px 11px rgba(#a0a0a0, 0.1),
      -12px 22px 12px rgba(#a0a0a0, 0.1),
      -13px 24px 13px rgba(#a0a0a0, 0.1),
      -14px 26px 14px rgba(#a0a0a0, 0.1),
      -15px 28px 15px rgba(#a0a0a0, 0.1),
      -16px 30px 16px rgba(#a0a0a0, 0.1),
      -17px 32px 17px rgba(#a0a0a0, 0.1),
      -18px 34px 18px rgba(#a0a0a0, 0.1),
      -19px 36px 19px rgba(#a0a0a0, 0.1),
      -20px 38px 20px rgba(#a0a0a0, 0.1),
      -21px 39px 21px rgba(#a0a0a0, 0.1);
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: lighten;
  animation: moveit 10s infinite ease-in-out forwards;
  -webkit-filter: blur(2px);
  pointer-events: none;
}

@keyframes moveit {
  0% {
    transform: translate(0%, 0%);
    filter: blur(2px);
  }
  15% {
    filter: blur(0);
  }
  50% {
    transform: translate(3%, 3%);
  }
  100% {
    filter: blur(2px);
  }
}

.word-picture-word{
  font-family: AaWeiDuXinDong;
}
</style>