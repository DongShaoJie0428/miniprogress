<template>
  <web-view :src="src"></web-view>
</template>

<script>
export default {
  data(){
    return {
      src:""
    }
  },
  onShow(){
    this.src = this.$root.$mp.query.src
  }
}
</script>

<style>

</style>
