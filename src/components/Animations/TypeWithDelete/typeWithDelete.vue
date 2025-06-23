<template>
  <span class="msg-icn">.</span>
</template>

<script setup>
  import {onMounted} from "vue";
  onMounted(()=>{
    // This isn't necessary but more for demonstration purposes

    const typSpd = 60;
    const  deleteSpd = 1;
    const waitTime = 400;
    const text3 = [
      "👋 " +
      "小疼带你穿越Html编织的数字世界，" +
      "用代码编织不一样的浪漫。🌈✨",
    ];
    const text = [
      "想象一下，当朋友们收到你用HTML编写的独特问候时，他们会有多惊讶！😮"
    ];
    const text1 = [
      "👋 创意启航，技术领航！" +
      "小疼带你穿越Html编织的数字世界，" +
      "编织不凡的网页创意梦想。🌈✨",
    ];
    // const text = [
    //   "👋 你的朋友圈怎么木发，(补个招呼)",
    // ];
    var mi = 0;

    function writeString(e, str, i) {
      e.innerHTML = e.innerHTML + str[i];

      if (e.innerHTML.length == str.length && mi != text.length)
        setTimeout(slowlyDelete, waitTime, e);
    }

    function deleteString(e) {
      e.innerHTML = e.innerHTML.substring(0, e.innerHTML.length - 1);

      if (e.innerHTML.length == 0)
        slowlyWrite(e, text[mi++]);
    }

    function slowlyDelete(e) {
      for (var i = 0; i < e.innerHTML.length; i++) {
        setTimeout(deleteString, deleteSpd / 2 * i, e);
      }
    }

    function slowlyWrite(e, str) {
      for (var i = 0; i < str.length; i++) {
        setTimeout(writeString, typSpd * i, e, str, i);
      }
    }

    const msg = document.querySelector(".msg-icn");

    slowlyDelete(msg);
  })
</script>



<style scoped lang="css">

.msg-icn {
  display: inline-block;
  position: relative;
  padding:  10px 20px;
  color: #352f2f;
  max-width: 1200px;
  min-width: 400px;
  min-height: 90px;
  font-family: AaWeiDuXinDong, sans-serif;
  font-size: 30px;
}
.msg-icn:before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 5px solid #f69a3a;
  border-radius: 10px;
  box-sizing: border-box;
  clip-path: polygon(0% 105%, 0% 0%, 105% 0%, 105% 105%, 43px 105%, 43px 80%, 21px 80%, 21px 105%);
}
.msg-icn:after {
  content: "";
  position: absolute;
  display: block;
  width: 25px;
  height: 20px;
  background: #f69a3a;
  top: calc(100% - 1px);
  left: 20px;
  box-sizing: border-box;
  clip-path: polygon(0 0, 0% 100%, 100% 0%, calc(100% - 5px) 0, 5px calc(100% - 5px), 5px 0);
}
</style>