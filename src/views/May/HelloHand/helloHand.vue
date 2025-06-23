<template>
  <h1>Hi Friends!</h1>
  <div class="wave"><span>👋</span></div>
</template>

<script setup>

</script>



<style scoped lang="scss">
body {
  background: #7C9EB2;
  overflow: hidden;
}

h1 {
  text-align: center;
  font-family: 'Pacifico', cursive;
  font-size: 80px;
  font-weight: 400;
  color: #383F51;
}

.wave {
  font-size: 120px;
  position: relative;
}

span {
  transform: translate(-50%, 0) rotate(-10deg);
  transform-origin: 100% 100%;
  left: 50%;
  display: block;
  position: absolute;
  animation: wave 350ms ease-in-out infinite alternate;
}

@keyframes wave {
  0% {
    transform: translate(-50%, 0) rotate(15deg);
  }
  100% {
    transform: translate(-50%, 0) rotate(-10deg);
  }
}
</style>