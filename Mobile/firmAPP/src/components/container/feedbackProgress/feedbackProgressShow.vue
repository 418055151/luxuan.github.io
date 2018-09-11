<template>
  <section class="firmcontainer">
    <div class="header-title">
      <span>已提交数据</span>
      <span class="alignRight">一分钟前更新</span>
    </div>
    <ve-pie :data="chartData" style="display: block;margin-top: 70px" width="100%" height="400px"></ve-pie>
    <div class="CreationTime">
      <span>已提交 ( 条 )<b style="color: #03A9F4">4</b></span>
      <span class="text-right">未提交 ( 条 )<b style="color: #E51C23">96</b></span>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'name',
    data () {
      return {
        chartData: {
          columns: ['统计', '人数'],
          rows: [
            { '统计': '已提交', '人数': 4 },
            { '统计': '未提交', '人数': 96 }
          ]
        }
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .header-title{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: white;
    padding: 0 10px;
    -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
  }
  .header-title span{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #101010;
    font-size: 12px;
    line-height: 34px;
  }
  .header-title span.alignRight{
    text-align: right;
  }
  .CreationTime{
    padding: 0 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    line-height: 44px;
    width: 100%;
    background: white;
    color: #333;
    -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 12px;
  }
  .CreationTime span{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .CreationTime span b{
    font-size: 14px;
    padding-left: 5px;
    vertical-align: middle;
  }
  .text-right{
    text-align: right;
  }
</style>
