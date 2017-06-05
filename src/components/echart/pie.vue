<template>
  <div class="pie-chart">
    <IEcharts :option="bar" style='height:100%'>{{bar}}</IEcharts>
  </div>
</template>
<script>
  import IEcharts from 'vue-echarts-v3'
  export default {
    components: {
      IEcharts
    },
    data () {
      return {
        bar: {
          title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      }
    }
  }
</script>
<style lang="stylus">
  .pie-chart
    height: 400px;
    width: 100%;
</style>
