<script setup>

</script>

<template>
  <div class="egg"></div>
</template>

<style  lang="scss">
body {
  background-color: #69639e;
  justify-content: space-around;
  display:flex;
  algin-items:center;
}

.egg {
  top: 20px;
  height:320px;
  width:270px;
  background: radial-gradient(
          ellipse at 60% 20%,
          #ffffff 0%,
          #f4D9BD 14%,
          #edcfaa 35%,
          #907080 80%);
  position: relative;
  border-radius: 50%;
  box-shadow:
      -15px 120px 40px -30px #474666,
      0px 50px 40px -10px #8B7D97,
      10px -45px 40px -20px #937E90 inset,
      0px -10px 60px 0px #69639e inset;
}

.egg::after,
.egg::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  width: 160px;
  height: 300px;
  clip-path: polygon(18% 31%, 16% 21%, 26% 19%, 44% 14%, 33% 21%, 40% 33%, 49% 39%, 68% 30%, 80% 14%, 70% 34%, 51% 43%, 49% 51%, 59% 60%, 60% 68%, 66% 71%, 59% 77%, 45% 76%, 39% 71%, 32% 75%, 24% 62%, 21% 70%, 17% 82%, 13% 68%, 15% 57%, 10% 54%, 7% 46%, 1% 48%, 2% 37%, 10% 33%, 11% 24%);
}

.egg::after {
  left: 7px;
  background: radial-gradient(
          ellipse at 70% 45%,
          #FDC286 20%,
          #AB8441 50%,
          #8A7372 60%);
  box-shadow:
      0px 110px 140px -30px #474666 inset;
}

.egg::before {
  top: 5px;
  left: 5px;
  background: linear-gradient(
          #ffe9cD 0%,
          #b090a0 100%);
}

</style>