<template>
  <section class="firmcontainer">
      <ul class="coursecontainer">
        <li class="common__course-item">
          <div class="common__course select">
            <span class="common__course-pkg">
              <em class="common__course-pkg1 common__course-not1">未评价</em>
              <em class="common__course-pkg2 common__course-not2"></em>
            </span>
          </div>
          <router-link :to="{path:'/CourseGradeList/CourseGradeList'}" class="common__course-link">
            <div class="common__course-cover-wrap">
              <img src="../../../assets/img/casecover.png" class="common__course-cover">
            </div>
            <h4 class="common__course-title">特朗普五连“推”怒怼哈雷公司：以后卖回美国需</h4>
            <div class="common__course-time">
              <span><i class="icon iconfont icon-shipin2"></i>2018-6-27 16:11:55</span>
              <span class="ma-right"><i class="icon iconfont icon-zan"></i>355</span>
            </div>
          </router-link>
        </li>
        <li class="common__course-item">
          <div class="common__course select">
            <span class="common__course-pkg">
              <em class="common__course-pkg1 common__course-are1">已评价</em>
              <em class="common__course-pkg2 common__course-are2"></em>
            </span>
          </div>
          <a href="javascript:void(0);" class="common__course-link">
            <div class="common__course-cover-wrap">
              <img src="../../../assets/img/casecover.png" class="common__course-cover">
            </div>
            <h4 class="common__course-title">特朗普五连“推”怒怼哈雷公司：以后卖回美国需</h4>
            <div class="common__course-time">
              <span><i class="icon iconfont icon-shipin2"></i>2018-6-27 16:11:55</span>
              <span class="ma-right"><i class="icon iconfont icon-zan"></i>355</span>
            </div>
          </a>
        </li>
      </ul>
  </section>
</template>
<script>
    export default {
        name: 'name',
        data () {
            return {}
        },
        methods: {}
    }
</script>
<style scoped>
  .firmcontainer{
    padding-bottom: 0;
    display: block;
    width: 100%;
    background: white;
  }
  .coursecontainer{
    margin-top: 0.3448275862068966rem;
    padding: 0 0.1724137931034483rem 0 0.1724137931034483rem;
    font-size: 0;
  }
  .common__course-item{
    display: inline-block;
    margin-bottom: 0.1724137931034483rem;
    width: 50%;
    vertical-align: top;
    position: relative;
  }
  .common__course{
    position: absolute;
    right: 0.10344827586206896rem;
    top: 0.10344827586206896rem;
  }
  .common__course-pkg{
    float: right;
    position: relative;
    margin-right: 0.034482758620689655rem;
    height: 0.3103448275862069rem;
    color: #777;
  }
  .common__course-pkg1{
    display: inline-block;
    position: relative;
    z-index: 2;
    border-radius: 0.034482758620689655rem;
    padding: 0 0.034482758620689655rem;
    height: 0.27586206896551724rem;
    font-size: 0.13793103448275862rem;
    font-style: normal;
    line-height: 0.22413793103448276rem;
  }
  .common__course-pkg2{
    position: absolute;
    top: 0.034482758620689655rem;
    left: 0.034482758620689655rem;
    z-index: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 0.034482758620689655rem;
    width: 100%;
    height: 100%;
    font-style: normal;
  }
  .common__course-not1{
    border: 0.017241379310344827rem solid #bbb;
    background: #fff;
    color: #777;
  }
  .common__course-not2{
    border: 0.017241379310344827rem solid #bbb;
    background: #efeff4;
  }
  .common__course-are1{
    border: 0.017241379310344827rem solid #2dabe4;
    background: #4eb6e5;
    color: #fff;
  }
  .common__course-are2{
    border: 0.017241379310344827rem solid #32a4d8;
    background: #56beed;
  }
  .common__course-link{
    display: block;
    border-radius: 0.06896551724137931rem;
    font-size: 0;
  }
  .common__course-item:nth-child(odd) .common__course-link{
    margin-right: 0.08620689655172414rem;
  }
  .common__course-item:nth-child(even) .common__course-link{
    margin-left: 0.08620689655172414rem;
  }
  .common__course-cover-wrap{
    overflow: hidden;
    position: relative;
    border-radius: 0.06896551724137931rem;
    padding-top: 56%;
    width: 100%;
  }
  .common__course-cover{
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.06896551724137931rem;
    width: 100%;
    height: 100%;
  }
  .common__course-title{
    position: relative;
    margin-top: 0.15517241379310345rem;
    padding: 0 0.06896551724137931rem;
    font-size: 0.20689655172413793rem;
    line-height: 0.3448275862068966rem;
    color: #101010;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .common__course-time{
    padding: 0 0.06896551724137931rem;
    font-size: 0.13793103448275862rem;
    color: #BBBBBB;
    line-height: 0.3103448275862069rem;
  }
  .common__course-time span{
    vertical-align: middle;
  }
  .common__course-time span i{
    padding-right: 0.08620689655172414rem;
    vertical-align: middle;
  }
  .ma-right{
    float: right;
  }
</style>
