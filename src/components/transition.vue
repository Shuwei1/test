<template>
  <div>
    <button @click="isShow=!isShow">show</button>
    <p v-if="isShow">
      {{msg}}
    </p>
  </div>
</template>
<script>
  export default {
    name: 'transition',
    data() {
      return {
        msg: 'show',
        isShow: true
      }
    }
  }

</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */

    {
    opacity: 0;
  }

</style>
