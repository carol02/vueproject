<template>
  <div class="top">
    <div class="back">
      <span class="iconfont" @click="goIndex">&#xe624;</span>
    </div>
    <img :src="detailData.bannerImg" alt="">
    <div class="bot">
      <p>{{detailData.sightName}}</p>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailData: Object
  },
  methods: {
    goIndex () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl";

</style>
