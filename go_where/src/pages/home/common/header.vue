<template>
  <header>
    <div class="left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="mid">
      <span class="iconfont">&#xe632;</span>
      请输入城市/景点/游玩主题
    </div>
    <div class="right">
      三亚
      <span class="iconfont">&#xe64a;</span>
    </div>
  </header>
</template>
<script>
export default {
  name: 'MyHeader'
}
</script>
<style lang="stylus" scope>
  @import '~styles/varibles.styl'
  header
    background : $color;
    display flex
    font-size 30px
    justify-content space-between
    color $color-white
    line-height 60px
    div
      display inline-flex
      align-items center
    .left
      padding 0 35px 0 20px
      font-size 60px
      font-weight bold
    .mid
      height 60px
      background $color-white
      flex 1
      margin 15px 0
      border-radius 5px
      color #ccc
      padding-left 10px
      span
        font-size 30px
        margin-right 10px
    .right
      padding 0 22px 0
      span
        margin-left 5px
</style>
