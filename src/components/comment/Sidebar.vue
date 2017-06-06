<template>
  <div class="sider">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <el-menu-item index="1">
       仪表板
      </el-menu-item>
         <el-submenu index="2">
          <template slot="title">功能列表</template>
          <el-menu-item index="2-1">富文本</el-menu-item>
          <el-menu-item index="2-2">表单</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style lang="stylus">
  .sider
    position: absolute;
    width: 200px;
    left: 0;
    top: 66px;
    bottom: 0;
    background: #324157;
</style>
<script>
  export default {
    computed: {
      onRoutes () {
        return this.$route.path.replace('/', '')
      }
    }
  }
</script>
