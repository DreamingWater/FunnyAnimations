<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet">

  <div class="container">
    <div class="header">
      <h1 class="title">Lofi Relax - Travel by Lofium</h1>
      <p class="cantor">Lofium</p>
    </div>
    <div class="view">
      <span class="current-time">0:0</span>
      <div class="input"><input step="0.01" class="state-bar" type="range" value="0.0"/></div>

      <span class="duration">0:0</span>
    </div>
    <div class="controllers">
      <button class="btn-radom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
          <path d="M19.5576 4L20.4551 4.97574C20.8561 5.41165 21.0566 5.62961 20.9861 5.81481C20.9155 6 20.632 6 20.0649 6C18.7956 6 17.2771 5.79493 16.1111 6.4733C15.3903 6.89272 14.8883 7.62517 14.0392 9M3 18H4.58082C6.50873 18 7.47269 18 8.2862 17.5267C9.00708 17.1073 9.50904 16.3748 10.3582 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19.5576 20L20.4551 19.0243C20.8561 18.5883 21.0566 18.3704 20.9861 18.1852C20.9155 18 20.632 18 20.0649 18C18.7956 18 17.2771 18.2051 16.1111 17.5267C15.2976 17.0534 14.7629 16.1815 13.6935 14.4376L10.7038 9.5624C9.63441 7.81853 9.0997 6.9466 8.2862 6.4733C7.47269 6 6.50873 6 4.58082 6H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <group class="group-buttons">
        <button class="btn-prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M8.06492 12.6258C8.31931 13.8374 9.67295 14.7077 12.3802 16.4481C15.3247 18.3411 16.797 19.2876 17.9895 18.9229C18.3934 18.7994 18.7654 18.5823 19.0777 18.2876C20 17.4178 20 15.6118 20 12C20 8.38816 20 6.58224 19.0777 5.71235C18.7654 5.41773 18.3934 5.20057 17.9895 5.07707C16.797 4.71243 15.3247 5.6589 12.3802 7.55186C9.67295 9.29233 8.31931 10.1626 8.06492 11.3742C7.97836 11.7865 7.97836 12.2135 8.06492 12.6258Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M4 4L4 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
        <button class="btn-start">
          <svg id="icon-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          </svg>
        </button>
        <button class="btn-next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M8.06492 12.6258C8.31931 13.8374 9.67295 14.7077 12.3802 16.4481C15.3247 18.3411 16.797 19.2876 17.9895 18.9229C18.3934 18.7994 18.7654 18.5823 19.0777 18.2876C20 17.4178 20 15.6118 20 12C20 8.38816 20 6.58224 19.0777 5.71235C18.7654 5.41773 18.3934 5.20057 17.9895 5.07707C16.797 4.71243 15.3247 5.6589 12.3802 7.55186C9.67295 9.29233 8.31931 10.1626 8.06492 11.3742C7.97836 11.7865 7.97836 12.2135 8.06492 12.6258Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M4 4L4 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
      </group>
      <button class="btn-repeat">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"> <path d="M16.3884 3L17.3913 3.97574C17.8393 4.41165 18.0633 4.62961 17.9844 4.81481C17.9056 5 17.5888 5 16.9552 5H9.19422C5.22096 5 2 8.13401 2 12C2 13.4872 2.47668 14.8662 3.2895 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />    <path d="M7.61156 21L6.60875 20.0243C6.16074 19.5883 5.93673 19.3704 6.01557 19.1852C6.09441 19 6.4112 19 7.04478 19H14.8058C18.779 19 22 15.866 22 12C22 10.5128 21.5233 9.13383 20.7105 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />  <path d="M9 12H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted,onBeforeMount } from 'vue';
import { add_script } from '@/utils/AppendCSSJS';

onMounted(() => {
  setTimeout(() => {
    add_script('/src/views/May/ColorAudioPlayer/colorAudioPlayer.js');
  }, 1000);

});
</script>


<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

body {
  background: #000;
  background-image: url("https://images.unsplash.com/photo-1693407549523-9a75912e828b?q=80&w=1637&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Oxygen", sans-serif;
}

.container {
  width: calc(100% - 32px);
  min-width: 320px;
  max-width: 400px;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to right top, #313131aa, #efefef55);
  backdrop-filter: blur(12px);
  border: 1px solid #f0f0f025;
  overflow: hidden;
  font-family: "Oxygen", sans-serif;
  gap: 24px;
}

.container .header {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  width: 100%;
}

.container .title {
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.4px;
}

.container .cantor {
  font-size: 14px;
  color: #ddd;
}

.container .view {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.container .view .duration,
.container .view .current-time {
  min-width: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container .view input {
  flex-grow: 1;
}

.input {
  --input-width: 0%;
  position: relative;
  width: 100%;
  height: 6px;
  border-radius: 6px;
  overflow-y: visible;
  bottom: -1px;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  background-color: #33333355;
  height: 6px;
  border-radius: 6px;
  position: relative;
  z-index: 10;
  user-select: none;
  pointer-events: none;
  cursor: default;
  position: absolute;
  top: 50%;
  transform: translatey(-50%)
}

.input::before {
  content: "";
  width: calc(var(--input-width));
  background: white;
  height: 6px;
  display: block;
  position: absolute;
  top: calc(50%);
  left: 0px;
  transform: translateY(-50%);
  z-index: 20;
  border-radius: 6px;
  transition: --input-width 0.1s ease-in-out;
}

.input::after {
  content: "";
  background: #fff;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  left: calc(var(--input-width, 0%) - 1px);
  z-index: 1000;
  display: block;
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  transition: left 0.1s ease-in-out;
  flex-shrink: 0px;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 6px;
  width: 100%;
  transition: --input-width 0.1s ease-in-out;
}

input[type="range"]::-webkit-slider-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  -webkit-appearance: none;
  display: none;
}

.container .controllers {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.container .controllers .group-buttons {
  display: flex;
  gap: 6px;
}

.container .controllers button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  height: 42px;
  flex-shrink: 0;
  padding: 12px;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 4px;
}

.container .controllers button:hover {
  background: #33333355;
  color: #f0f0f0f0;
}

.container .controllers button svg path {
  stroke: #ddd;
}

.container .group-buttons button.btn-start{
  background: #333333a1;
  border-radius: 50%;
}

.container #icon-start{
  fill: #ddd;
}

.btn-next {
  transform: scale(-1);
}

</style>