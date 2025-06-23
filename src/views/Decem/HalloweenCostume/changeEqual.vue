<template>
 <div class="equal-container">
   <div class="st-loader">
     <span class="equal"></span>
   </div>
 </div>
</template>

<script lang="js" setup>
import { onMounted } from "vue";
import { add_script } from "@/utils/AppendCSSJS";

onMounted(() => {
  add_script('http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js');
});
</script>

<style lang="css">
@keyframes loading {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3em);
  }
  100% {
    transform: translateX(0);
  }
}

.equal-container{
  display: flex;
  margin: 0 auto;
  align-self: center;
  content:'';
}
.st-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 2.5em;
  margin: 0 auto;
  box-sizing: border-box;
}

.st-loader:before,
.st-loader:after {
  content: "";
  display: block;
  width: 1.5em;
  height: 100%;
  box-sizing: border-box;
  border: 0.25em solid #705AB5;
}

.st-loader:before {
  margin-right: 0em;
  border-right: 0;
}

.st-loader:after {
  margin-left: 3em;
  border-left: 0;
}

.st-loader .equal {
  display: block;
  height: 1em;
  width: 1.66667em;
  border: 0.25em solid #705AB5;
  box-sizing: border-box;
  border-width: 0.25em 0;
  animation: loading 1.5s infinite ease-in-out;
}
</style>