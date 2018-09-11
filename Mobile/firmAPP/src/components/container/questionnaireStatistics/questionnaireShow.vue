<template>
    <section class="firmcontainer">
      <div class="header-title">
        <span>已提交数据</span>
        <span class="alignRight">一分钟前更新</span>
      </div>
      <ve-gauge :data="chartData" style="width: 100%;display: block"></ve-gauge>
      <div class="submitted">已提交人数( 人 )<span> 75 </span></div>
      <div class="CreationTime">创建时间 : 2018-4-26 10:54:47</div>
    </section>
</template>
<script>
    export default {
        name: 'name',
        data () {
          return {
            chartData: {
              columns: ['type', 'a', 'b', 'value'],
              rows: [
                { type: '人数', value: 100, a: 75, b: 2 }
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
  .submitted{
    line-height: 36px;
    text-align: center;
    color: #101010;
    font-size: 14px;
  }
  .submitted span{
    color: #ff2222;
  }
  .CreationTime{
    position: fixed;
    left: 0;
    bottom: 0;
    line-height: 44px;
    text-align: center;
    width: 100%;
    background: white;
    color: #C2C0C2;
    -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
  }
</style>
