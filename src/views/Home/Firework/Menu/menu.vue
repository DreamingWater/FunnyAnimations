<script setup>

</script>

<template>
  <div class="controls">
    <div class="btn pause-btn">
      <svg fill="white" width="24" height="24">
        <use href="#icon-pause" xlink:href="#icon-pause">
        </use>
      </svg>
    </div>
    <div class="btn sound-btn">
      <svg fill="white" width="24" height="24">
        <use href="#icon-sound-off" xlink:href="#icon-sound-off">
        </use>
      </svg>
    </div>
    <div class="btn settings-btn">
      <svg fill="white" width="24" height="24">
        <use href="#icon-settings" xlink:href="#icon-settings">
        </use>
      </svg>
    </div>
  </div>
  <div class="menu hide">
    <div class="menu__inner-wrap">
      <div class="btn btn--bright close-menu-btn">
        <svg fill="white" width="24" height="24">
          <use href="#icon-close" xlink:href="#icon-close">
          </use>
        </svg>
      </div>
      <div class="menu__header">
        设置
      </div>
      <div class="menu__subheader">
        若想了解更多信息 请点击任意标签
      </div>
      <form>
        <div class="form-option form-option--select">
          <label class="shell-type-label">
            烟花类型
          </label>
          <select class="shell-type">
          </select>
        </div>
        <div class="form-option form-option--select">
          <label class="shell-size-label">
            烟花大小
          </label>
          <select class="shell-size">
          </select>
        </div>
        <div class="form-option form-option--select">
          <label class="quality-ui-label">
            画质
          </label>
          <select class="quality-ui">
          </select>
        </div>
        <div class="form-option form-option--select">
          <label class="sky-lighting-label">
            照亮天空
          </label>
          <select class="sky-lighting">
          </select>
        </div>
        <div class="form-option form-option--select">
          <label class="scaleFactor-label">
            缩放
          </label>
          <select class="scaleFactor">
          </select>
        </div>
        <div class="form-option form-option--checkbox">
          <label class="auto-launch-label">
            自动放烟花
          </label>
          <input class="auto-launch" type="checkbox" />
        </div>
        <div class="form-option form-option--checkbox form-option--finale-mode">
          <label class="finale-mode-label">
            同时放更多的烟花
          </label>
          <input class="finale-mode" type="checkbox" />
        </div>
        <div class="form-option form-option--checkbox">
          <label class="hide-controls-label">
            隐藏控制按钮
          </label>
          <input class="hide-controls" type="checkbox" />
        </div>
        <div class="form-option form-option--checkbox form-option--fullscreen">
          <label class="fullscreen-label">
            全屏
          </label>
          <input class="fullscreen" type="checkbox" />
        </div>
        <div class="form-option form-option--checkbox">
          <label class="long-exposure-label">
            保留烟花的火花
          </label>
          <input class="long-exposure" type="checkbox" />
        </div>
      </form>

    </div>
  </div>
</template>

<style scoped>

</style>