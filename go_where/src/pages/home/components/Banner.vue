<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="hasBanner">
      <swiper-slide v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'banner',
  props: {
    bannerList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    hasBanner () {
      return this.bannerList.length
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner >>> .swiper-pagination-bullet{
  width 15px
  height 15px
  background #ccc
  opacity .5
}
.banner >>> .swiper-pagination-bullet-active{
  background #fff
  opacity 1
}
.banner
  height:0
  overflow: hidden
  padding-bottom 32%
  img
    width 100%
    height auto
</style>
