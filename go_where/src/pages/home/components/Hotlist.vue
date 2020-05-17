<template>
  <div class="hot">
    <h3>热销推荐</h3>
    <ul>
      <li tag='li' v-for="item in hotlist" :key='item.id' class="border-bottom">
        <img :src="item.imgUrl" alt="">
        <div class="left">
          <h6>{{item.title}}</h6>
          <p>{{item.desc}}</p>
          <span>查看详情</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    hotlist: Array
  }
}
</script>
<style lang="stylus" scoped>
h3
  font-size 26px
  background #eee
  padding 20px 10px
li
  padding 10px 0 10px 5px
  border-color #eee
  display flex
  img
    width 150px
    margin-right 20px
  h6
    font-size 26px
    color #333
  p
    font-size 24px
    color #ccc
    padding 20px 0
  span
    display inline-block
    padding 10px 15px
    color #fff
    font-size 26px
    background orange
    border-radius 5px
</style>
