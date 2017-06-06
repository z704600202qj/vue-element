  <template>
    <div>
      <pageTitle vtitle="富文本"></pageTitle>
      <div style="clear:both"></div>
      <el-row :gutter="30">
        <el-col :xs="24":sm="24":md="24" >
          <div class="contentbox">
            <quillEditor
            v-model="content"
            >{{text}}</quillEditor>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="30">
      <el-col :xs="24":sm="24":md="24" >
          <div class="content1"v-html="content"></div>
        </el-col>
        </el-row>
    </div>
  </template>
<script>
import pageTitle from '../comment/pageTitle'
import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    pageTitle, quillEditor
  },
  data () {
    return {
      content: null
    }
  },
  created () {
  },
  computed: {
    text: function () {
      console.log(this.content)
    }
  }
}
</script>
<style lang='stylus'>
  .contentbox
    height auto
    .ql-container
      height 300px  
      .quill-editor
        height 300px  
  .content1
    height 18.75rem
    border 1px solid #ddd
</style>
