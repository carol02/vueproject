<template>
  <header>
    <div class="top">
      <span class="iconfont" @click="goIndex">&#xe624;</span>
      <h5>城市选择</h5>
    </div>
    <input type="text" placeholder="请输入城市名或拼音"/>
  </header>
</template>
<script>
export default {
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
  input
    width 100%
    height 70px
    margin 40px 0 0
    padding 0 10px
    box-sizing border-box
    border-radius 5px
    text-align center
    font-size 30px
</style>
