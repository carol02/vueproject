<template>
  <div>
    <city-header></city-header>
    <div ref="wrapper" class="wrapper">
      <div class="content">
        <city-list :hotCities="hotCities" :city="city"></city-list>
        <city-cts :cities="cities" ref="citys"></city-cts>
      </div>
    </div>
    <city-letters :cities="cities" @toList="handleClick"></city-letters>
  </div>
</template>
<script>
import CityHeader from './cpmponents/Header'
import CityList from './cpmponents/List'
import CityCts from './cpmponents/Citiys'
import CityLetters from './cpmponents/Letters'
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  components: {
    CityHeader,
    CityList,
    CityCts,
    CityLetters
  },
  data () {
    return {
      city: '',
      hotCities: [],
      cities: {},
      scroll: null
    }
  },
  methods: {
    getData () {
      axios.get('/api/city.json').then(this.getDataScuss)
    },
    getDataScuss (res) {
      const data = res.data.data
      this.city = data.city
      this.hotCities = data.hotCities
      this.cities = data.cities
    },
    handleClick (key) {
      const list = this.$refs.citys.$refs[key][0]
      this.scroll.scrollToElement(list)
    }
  },
  mounted () {
    this.getData()
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 2
    })
    // 当dom发生变化时刷新
    this.scroll.refresh()
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  position absolute
  top 185px
  left 0
  right 0
  bottom 0
  bounce: false
  overflow hidden
</style>
