<template>
  <header>
    <div class="top">
      <span class="iconfont" @click="goIndex">&#xe624;</span>
      <h5>景点详情</h5>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      searchValue: ''
    }
  },
  watch: {
    searchValue: function (val) {
      this.$emit('handleSearch', val)
    }
  },
  methods: {
    goIndex () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl";
header
  background $color
  padding 20px
  font-size 36px
  text-align center
  .top
    position relative
    color $color-white
    span
      position absolute
      left -20px
      top 50%
      transform translateY(-50%)
      padding 0 20px
      font-size 36px
</style>
