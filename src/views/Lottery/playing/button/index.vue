<template>
  <div class="icon">
    <div class="icon__Save">
      <ion-icon name="Draw">Draw</ion-icon></div>
    <div class="icon__Read">
      <ion-icon name="Save">Save</ion-icon></div>
    <div class="icon__settings">
      <ion-icon name="settings">Return</ion-icon></div>
  </div>
</template>


<style lang="scss" scoped>
    /*  ICONS  */
$greyLight-2: #c8d0e7;
$white: #FFFFFF;
$greyDark: #9baacf;

.icon {
  min-width: 15rem;
  display: flex;
  justify-content: space-between;

  &__Read, &__Save, &__settings {
    width: 4rem;
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
<script setup>
</script>