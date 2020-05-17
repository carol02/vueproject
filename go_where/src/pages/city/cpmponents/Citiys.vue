<template>
  <div>
    <div v-for="(item, key) in cities" :key="key">
      <h5 :ref="key">{{key}}</h5>
      <ul>
        <li v-for="its in item" :key="its.id" class="border-bottom">{{its.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cities: Object
  }
}
</script>
<style lang="stylus" scoped>
h5
  background #eee
  color #666
  padding 20px 15px
li
  line-height 70px
  padding 0 90px 0 15px
  border-color #eee
</style>
