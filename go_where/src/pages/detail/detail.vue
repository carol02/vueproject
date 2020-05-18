<template>
  <div>
    <detail-header v-if="!!false"></detail-header>
    <detail-top :detailData="detailData"></detail-top>
  </div>
</template>
<script>
import DetailHeader from './components/Header'
import DetailTop from './components/Top'
import axios from 'axios'
export default {
  components: {
    DetailHeader,
    DetailTop
  },
  data () {
    return {
      detailData: null
    }
  },
  methods: {
    getData () {
      axios.get('/api/detail.json').then(this.getDataScuss)
    },
    getDataScuss (res) {
      const data = res.data.data
      this.detailData = data
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang="stylus" scoped>

</style>
