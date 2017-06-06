<template>
  <div>
    <pageTitle vtitle="表单"></pageTitle>
    <div style="clear:both"></div>
    <div class="input-box">
      <el-col :md="12">
        <el-card>
          <el-form label-width="80px" :model="from" :rules="rules">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="from.name"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;" v-model="from.time"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" style="width: 100%;" v-model="from.time1"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch on-text="" off-text="" v-model="from.delivery"></el-switch>
            </el-form-item>
            <el-button type="primary" @click="submitForm(from)">立即创建</el-button>
          </el-form>
        </el-card>
      </el-col>
    </div>
  </div>
</template>
<script>
import pageTitle from '../comment/pageTitle'
export default {
  components: {
    pageTitle
  },
  data () {
    return {
      from: {
        name: '',
        time1: '',
        time: '',
        area: '',
        chooes: '',
        text: '',
        delivery: false
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm: function (event) {
      console.log(event)
    }
  }
}
</script>
<style lang='stylus'>
  .input-box
    margin-top 20px
</style>

