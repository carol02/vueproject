<template>
  <div class="navs">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in list" :key="index">
        <div class="navList">
          <div v-for="item1 in item" :key="item1.id">
            <img :src="item1.imgUrl" alt="">
            <p>{{item1.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'navs',
  props: {
    navsList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    list () {
      const arr = []
      this.navsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!arr[page]) {
          arr[page] = []
        }
        arr[page].push(item)
      })
      return arr
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl';
.navList
  display flex
  flex-wrap wrap
  justify-content space-between
  div
    width 130px
    padding 10px 20px
    img
      width 100%
      height 130px
    p
      font-size 24px
      text-align center
      padding 10px 0 0
      ellipsis()
</style>
