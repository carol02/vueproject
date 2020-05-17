<template>
  <div>
    <div class="nowCity">
      <h5>当前城市</h5>
      <ul>
        <li>{{ city }}</li>
      </ul>
    </div>
    <div class="hotCity">
      <h5>热门城市</h5>
      <ul>
        <li v-for="item in hotCities" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    city: String,
    hotCities: Array
  }
}
</script>
<style lang="stylus" scoped>
h5
  background #eee
  color #666
  padding 20px 15px
ul
  padding 20px 90px 20px 15px
  display flex
  justify-content space-between
  flex-wrap wrap
  li
    padding 15px 0
    width 30%
    border 2px solid #ccc
    text-align center
    margin-bottom 20px
    border-radius 6px
</style>
