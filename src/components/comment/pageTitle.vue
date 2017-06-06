<template>
  <div>
    <div class="title">
      <h2>{{vtitle}}</h2>
    </div>
    <div class="right-nav">
      <span>
        <router-link to="/1">HOME</router-link>
      </span>
      <span>/</span>
      <span >
        返回
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['vtitle']
}
</script>

<style lang="stylus">
  .title
    float left
    padding-bottom  40px
    h2
      font-size: 20px;
      color: #ccc;
  .right-nav
    float right
    color #000000
    a
      color #000000
      text-decoration none
    .router-link-exact-active
      color aqua
</style>
