<template>
  <div>
    <div>
      <page-title vtitle="仪表盘"></page-title>
    </div>
    <div class="clear"></div>
    <el-row :gutter="20">
      <el-col :xs="12" :md="12" :sm="12" :lg="6">
        <el-card class="box-card">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <el-progress type="circle" :percentage="25" :width=80></el-progress>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <div class="cart-string">
                <span>New Visits</span>
                <span><h2>57,820</h2></span>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12">
        <el-card class="pie">
          <pie></pie>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12">
        <el-card class="pie">
          <ea></ea>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="9" style="margin-top: 20px">
        <el-card>
          <h2 class="list-title">你要做的事!!</h2>
          <list></list>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="9" style="margin-top: 20px">
        <el-card>
          <h2 class="list-title">你要安排的日期!!</h2>
          <tab></tab>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="stylus">
  .clear
    clear both

  .box-card
    height 110px
    .cart-string
      height: 100px;
      padding-top: 10px;
      font-size: 1.1rem;

  .pie
    height 420px
    margin-top 20px

  .list-title
    padding-bottom 20px
    font-size 18px
    color #ccc
</style>
<script>
  import pageTitle from '../comment/pageTitle'
  import ea from '../echart/area'
  import pie from '../echart/pie'
  import list from '../form/list.vue'
  import tab from '../form/table.vue'
  export default {
    components: {
      pageTitle, pie, ea, list, tab
    }
  }
</script>
