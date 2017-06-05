<template>
  <div>
    <div class="title">
      <h2>DASHBOARD</h2>
    </div>
    <div class="right-nav">
      <span><router-link to="/DashBoard">HOME</router-link></span>
      <span>/</span>
      <span><router-link to="/">下一个</router-link></span>
    </div>
  </div>
</template>
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
