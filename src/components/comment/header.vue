<template>
  <div class="header">
    <el-row>
      <!--name-->
      <el-col :xs="12" :sm="12" :md="4">
        <div class="logo">
          <span class="logo_prefix">JSPang</span>
          <span class="logo_suffix">Admin</span>
        </div>
      </el-col>
      <!--SEARCH-->
      <el-col :xs="12" :sm="12" :md="8">
        <el-autocomplete
          size="small"
          v-model="text"
          placeholder="请输入内容"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="false"
          @select="handleSelect"
        >
          <el-button slot="append" icon="search"></el-button>
        </el-autocomplete>

      </el-col>
      <!--web-->
      <el-col :md="4">
        <div class="website">
          <span>Website:</span>
          <span>www.jspang.com</span>
        </div>
      </el-col>
      <!--avatar-->
      <el-col :md="{span:2,offset: 4}">
        <div class="msg">
          <el-col :span="10">
            <el-dropdown menu-align="start">
              <el-badge :value="5">
                <span><i class="el-icon-message"></i></span>
              </el-badge>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <span class="pop-title">You have new messages! </span>
                </el-dropdown-item>
                <el-dropdown-item v-for="item in msg" :key="item.time" divided>
                  <div class="box">
                    <div class="pic"><img :src="item.header" alt=""></div>
                    <div class="content">{{item.content}}</div>
                    <div class="time">{{item.time}}</div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="8">
            <el-dropdown menu-align="start">
              <el-badge value="3">
                <span><i class="el-icon-date"></i></span>
              </el-badge>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <span class="pop-title">You have new messages! </span>
                </el-dropdown-item>
                <el-dropdown-item v-for="item in tasks":key="item.id" divided>
                  <div class="rank">
                    <div class="tab">
                      <el-tag type="success"v-if="item.rank===1">标签四</el-tag>
                      <el-tag type="warning"v-if="item.rank===2">标签五</el-tag>
                      <el-tag type="danger"v-if="item.rank===3">标签六</el-tag>
                    </div>
                    <div class="text" style="">{{item.content}}</div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </div>
      </el-col>
      <el-col :md="2">
        <div class="avatar">
          <el-dropdown trigger="click" menu-align="start">
            <img src="../../../static/images/b_header.jpg" alt="">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div class="setting-div">
                  <span class="setting-string"> Profile  个人</span>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="stylus">
  .header
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 66px;
    font-size: 14px;
    line-height: 66px;
    background-color: #324157;
    box-shadow: 2px 0 3px rgba(0, 0, 0, .5);
    z-index: 1000;
    padding: 0 32px 0 40px;
    overflow: hidden;
    .el-col
      height 66px
    .logo
      color #fff
      float: left;
      cursor: pointer;
      font-size: 22px;
    .website
      span:first-child
        margin 0 10px
        color #fff
      span:last-child
        color #209e91
    .msg
      padding-top: 25px;
      line-height: 10px;
      span
        display: inline-block;
        margin-left: 14px;
        font-size: 18px;
        color: #fff;
        line-height: 1px;
        height: 18px;
        cursor: pointer;
        :hover
          color #209e91
    .avatar
      line-height: 10px;
      padding-top: 7px;
      font-size: 12px;
      img
        border-radius: 50%;
        cursor: pointer;
  .pop-title
    color #209e91
  .rank
    .tab
      float left
    .text
      width: 160px
      line-height: 16px
      margin-left: 10px
      padding: 5px
      font-size: 10px
  .box
    height: 55px;
    clear both
    .pic
      float left
    .content
      display: block;
      font-size: 12px;
      line-height: 14px;
      padding-top: 15px;
      margin-left: 60px;
    .time
      display: block;
      float: right;
      font-size: 10px;
      color: #ccc;
</style>
<script>
  export default {
    data () {
      return {
        text: null,
        msg: [
          {header: '../../static/images/b_header2.jpg', content: '11我有一个Style样式需要您帮忙处理以下。', time: '3'},
          {header: '../../static/images/b_header3.jpg', content: '中午一起吃个饭吧，我请客。', time: '15'},
          {header: '../../static/images/b_header.jpg', content: '需要处理一下POP展示的白边样式。', time: '18'},
          {header: '../../static/images/b_header2.jpg', content: '下午3点开需求会议，准时参加。', time: '24'},
          {header: '../../static/images/b_header3.jpg', content: '晚上我开车送你回家，你请我吃晚饭。', time: '45'}
        ],
        tasks: [
          {id: 1, rank: 1, content: '完成JSPangAdmin头部头部组件的编写。', overTime: '2017/3/9'},
          {id: 2, rank: 2, content: '完成GitHub仓库的初始化工作。', overTime: '2017/3/15'},
          {id: 3, rank: 3, content: '在阿里云进行网站备案，完成后通知组长。', overTime: '2017/3/20'}

        ]
      }
    },
    methods: {
      handleSelect: function (a) {
        console.log(a)
      },
      querySearch: function (queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        cb(results)
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      loadAll () {
        return [
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号', 'id': 'asdasd'},
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'},
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'},
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'},
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'},
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'},
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'}
        ]
      }
    },
    mounted () {
      this.restaurants = this.loadAll()
    }
  }
</script>
