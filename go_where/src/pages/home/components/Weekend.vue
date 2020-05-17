<template>
  <div class="hot">
    <h3>周末去哪</h3>
    <ul>
      <li tag='li' v-for="item in weekendList" :key='item.id'>
        <img :src="item.imgUrl" alt="">
        <h6>{{item.title}}</h6>
        <p>{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
h3
  font-size 26px
  background #eee
  padding 20px 10px
li
  padding 0 10px 20px
  img
    width 100%
  h6
    font-size 26px
    color #333
    padding-top 20px
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
