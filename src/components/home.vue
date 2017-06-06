<template>
  <div class="wrappar">
    <top></top>
    <Sidebar></Sidebar>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
  
    </div>
  </div>
</template>
<script>
import top from './comment/header'
import Sidebar from './comment/Sidebar'
export default {
  components: {
    top,
    Sidebar
  }
}
</script>
<style lang="stylus">
  .wrappar
    width:100%;
    height:100%;
    overflow: hidden;
    .content
      background: none repeat scroll 0 0 #f0f3f4;
      position: absolute;
      left: 200px;
      right: 0;
      top: 66px;
      bottom:0;
      width: auto;
      padding:25px 40px 25px 40px;
      box-sizing: border-box;
      overflow-y: scroll;
</style>
