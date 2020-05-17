<template>
  <div>
    <home-header></home-header>
    <home-banner :bannerList="swiperList"></home-banner>
    <home-navs :navsList='iconList'></home-navs>
    <home-hotlist :hotlist='recommendList'></home-hotlist>
    <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
import HomeNavs from './components/Nav'
import HomeHotlist from './components/Hotlist'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeNavs,
    HomeHotlist,
    HomeWeekend
  },
  data () {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  methods: {
    getData () {
      axios.get('/api/index.json').then(
        this.getDataScuss
      )
    },
    getDataScuss (res) {
      let data = res.data.data
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.swiperList = data.swiperList
      this.weekendList = data.weekendList
      console.log(this.recommendList)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style>

</style>
