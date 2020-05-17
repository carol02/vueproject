<template>
  <div>
    <home-header></home-header>
    <home-banner :bannerList="swiperList"></home-banner>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner
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
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style>

</style>
