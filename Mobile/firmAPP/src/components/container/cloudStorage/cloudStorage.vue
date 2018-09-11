<template>
    <section class="firmcontainer">
      <ul class="table-view">
        <li class="table-view-cell mui-media" v-for="item in items">
          <a href="javascript:void(0);">
            <i v-if="item.fileType == 1000" class="media-object icon iconfont icon-folder"></i>
            <i v-if="item.fileType == 1001" class="media-object icon iconfont icon-mp"></i>
            <i v-if="item.fileType == 1002" class="media-object icon iconfont icon-jianzhuanquan-"></i>
            <i v-if="item.fileType == 1003" class="media-object icon iconfont icon-dashboard_pdf"></i>
            <i v-if="item.fileType == 1004" class="media-object icon iconfont icon-word"></i>
            <div class="media-body">
              {{item.name}}
              <p class="mui-ellipsis">{{item.uploadTime}}</p>
            </div>
          </a>
          <div class="StudyTime el-icon-arrow-right"></div>
        </li>
      </ul>
    </section>
</template>
<script>
    export default {
        data () {
            return {
              items:[
                {
                  "name": "需求沟通录音速记",
                  "uploadTime": "2018-7-5 14:37:47",
                  "fileType": 1000,
                  "fileId": 1476
                },
                {
                  "name": "领导力宣传片.mp4",
                  "uploadTime": "2018-7-5 14:37:47",
                  "fileType": 1001,
                  "fileId": 1476
                },
                {
                  "name": "领导力宣传片.mp3",
                  "uploadTime": "2018-7-5 14:37:47",
                  "fileType": 1002,
                  "fileId": 1476
                },
                {
                  "name": "【博志成】项目总研修班（31期）2018.1.30.pdf",
                  "uploadTime": "2018-7-5 14:37:47",
                  "fileType": 1003,
                  "fileId": 1476
                },
                {
                  "name": "【博志成】项目总研修班（31期）2018.1.30.wor",
                  "uploadTime": "2018-7-5 14:37:47",
                  "fileType": 1004,
                  "fileId": 1476
                }
              ]
            }
        },
        methods: {}
    }
</script>
<style scoped>
  .table-view{
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
  }
  .table-view:before {
    position: absolute;
    right: 0;
    left: 0;
    height: 0.017241379310344827rem;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
    top: -0.017241379310344827rem;
  }
  .table-view:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 0.017241379310344827rem;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
  }
  .table-view-cell{
    position: relative;
    overflow: hidden;
    padding: 0.1896551724137931rem 0.25862068965517243rem;
    -webkit-touch-callout: none;
    padding-right: 1.1206896551724137rem;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .table-view-cell:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0.25862068965517243rem;
    height: 0.017241379310344827rem;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
    margin-right:0.25862068965517243rem;
  }
  .table-view-cell>a:not(.mui-btn){
    position: relative;
    display: block;
    overflow: hidden;
    margin: -0.1896551724137931rem -0.25862068965517243rem;
    padding: inherit;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: inherit;
  }
  .table-view-cell>a:not(.mui-btn) {
    margin-right: -1.1206896551724137rem;
  }
  .media-object{
    float: left;
    line-height: 0.7241379310344828rem;
    max-width: 0.7241379310344828rem;
    margin-right: 0.1724137931034483rem;
    width: 0.7241379310344828rem;
    height: 0.7241379310344828rem;
    border-radius: 0.06896551724137931rem;
    font-size: 34px;
  }
  .media-body{
    overflow: hidden;
    font-size: 0.20689655172413793rem;
    text-overflow: ellipsis;
  }

  .mui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .table-view-cell p {
    color: #999999;
    margin-bottom: 0;
    font-size: 0.13793103448275862rem;
    margin-top: 0.08620689655172414rem;
  }
  .StudyTime {
    position: absolute;
    top: 26px;
    right: 0.43103448275862066rem;
    color: #5b5b65;
    font-size: 0.20689655172413793rem;
  }
  .icon-folder{
    color: ;
  }
.icon-dashboard_pdf{
  color: #03a9f4;
}

</style>
