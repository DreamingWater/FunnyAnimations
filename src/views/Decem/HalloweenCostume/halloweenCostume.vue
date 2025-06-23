<template>
  <div class="halloween-container">
    <div class="emoji-container">
      <img class="emoji" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f921/emoji.svg" alt="emoji1">
      <img class="emoji" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f608/emoji.svg" alt="emoji2">
      <img class="emoji" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f383/emoji.svg" alt="emoji3">
      <img class="emoji" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a9/emoji.svg" alt="emoji4">
      <img class="emoji" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f47e/emoji.svg" alt="emoji5">
    </div>

    <div class="plus-section">
      <h1>➕</h1>
      <img class="ghost" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f47b/emoji.svg" alt="Ghost">
    </div>
    <div class="equal-section">
      <changeEqual ></changeEqual>
    </div>
    <div class="result-section">

      <img id="costume-image" class="hidden" src="https://via.placeholder.com/200/FFFFFF" alt="Costume Image">
    </div>
  </div>

</template>

<script lang="js" setup>
import { onMounted,ref } from "vue";
import { add_script } from "@/utils/AppendCSSJS";
import changeEqual from '@/views/Decem/HalloweenCostume/changeEqual.vue'
const showXiaoTeng = ref(false);
onMounted(() => {
  add_script('/src/views/Decem/HalloweenCostume/halloweenCostume.js');

  const emojis = document.querySelectorAll('.emoji');
  let currentIndex = 0;

  setInterval(() => {
    emojis[currentIndex].click();
    currentIndex = (currentIndex + 1) % emojis.length;
  }, 2000); // Change image every second
  setTimeout(() => {
    showXiaoTeng.value = true;
  }, 2000); // Show XiaoTeng after 2 seconds
});

</script>

<style scoped lang="scss">
.halloween-container {
  width: 100%;
  height: 800px;
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg,#E0C3FC 0%, #b77dd7 100%);

  padding-left:100px;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: row;
}
h1 {
  font-size: 2em;
  margin-bottom: -10px;
}
p {
  color: orange;
}

.emoji-container {
  align-self: center;
  margin-left: 50px;
}

.emoji {
  cursor: pointer;
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 2px solid transparent;
  transition: transform 0.2s, border 0.2s;
}

.emoji.selected {
  border-color: orange;
  transform: scale(1.1);
}

.ghost {
  width: 60px;
}

.plus-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.hidden {
  display: none;
}

#costume-image {
  width: 160px;
  margin: 0 auto;
  align-self: center;
}
.equal-section{
  width: 150px;
  display: flex;
}
.result-section {
  text-align: center;
  display: flex;
  margin-left: 50px;
}
</style>

<style scoped lang="scss">
@keyframes costumeAnimation {
  0% {
    transform: scale(0.9);
  }
  100% {
       transform: scale(1.3);
     }
}

#costume-image {
  width: 160px;
  margin: 0 auto;
  align-self: center;
  animation: costumeAnimation 2s infinite; /* Apply the animation */
}

.xiaoteng{
  position: absolute; left: 642px; top: 575px;
}
</style>