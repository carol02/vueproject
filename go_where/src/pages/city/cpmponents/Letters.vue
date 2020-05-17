<template>
  <ul>
    <li v-for="(item, key) in cities" :key="key">{{key}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    cities: Object
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
ul
  position fixed
  right 10px
  top 50%
  transform translateY(-40%)
  color $color
  width 50px
  text-align center
  li
    padding 5px 0
    font-size 28px
</style>
