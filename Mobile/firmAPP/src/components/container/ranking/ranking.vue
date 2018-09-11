<template>
    <section class="firmcontainer">
      <div class="rankingcontainer">
        <div class="dengguan">
          <img src="../../../assets/img/dengguan.png"/>
          <img src="../../../assets/img/dengguan.png"/>
          <img src="../../../assets/img/dengguan.png"/>
        </div>
        <div class="pkContainer">
          <div class="containermask kingone">
              <div class="rankingContainer">
                <a href="javascript:void(0);" class="img-media-Box">
                  <img src="../../../assets/img/crown.png" class="crown">
                  <img src="../../../assets/img/badge1.png" class="badge">
                  <img src="http://mobile.dichanxuetang.com/data/userheader/845d07eae6af3ac2f051ab10.jpg">
                </a>
                <div class="name">{{ranking[0].name}}</div>
                <div class="ranking">第一名</div>
              </div>
          </div>
          <div class="kingVs">
            <b class="Vtext">V</b>
            <b class="Stext">S</b>
          </div>
          <div class="containermask">
            <div class="rankingContainer">
              <a href="javascript:void(0);" class="img-media-Box">
                <img src="../../../assets/img/badge2.png" class="badge">
                <img src="../../../assets/img/casecover.png">
              </a>
              <div class="name">{{ranking[1].name}}</div>
              <div class="ranking">第二名</div>
            </div>
          </div>
        </div>
        <div class="myranking">
          <h4>我的当前排名 <b>第<span>20</span>名</b></h4>
        </div>
      </div>
      <scroller :on-refresh="refresh" :on-infinite="infinite" style="margin-top: 4.29rem;background-color: #f8f8f8;">
        <!-- custom refresh spinner, use default `spinner` & viewBox 0,0,64,64 class -->
        <svg class="spinner" style="stroke: #03A9F4;" slot="refresh-spinner" viewBox="0 0 64 64">
          <g stroke-width="7" stroke-linecap="round">
            <line x1="10" x2="10" y1="27.3836" y2="36.4931">
              <animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate>
              <animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate>
              <animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate>
            </line>
            <line x1="24" x2="24" y1="18.6164" y2="45.3836">
              <animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate>
              <animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate>
              <animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate>
            </line>
            <line x1="38" x2="38" y1="16.1233" y2="47.8767">
              <animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate>
              <animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate>
              <animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate>
            </line>
            <line x1="52" x2="52" y1="16" y2="48">
              <animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate>
              <animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate>
              <animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate>
            </line>
          </g>
        </svg>
        <ul class="table-view">
          <li class="table-view-cell mui-media" v-for="item in items">
            <span>{{item.ranking}}</span>
            <a href="javascript:void(0);">
              <img class="media-object" alt="艾微" src="../../../assets/img/casecover.png">
              <div class="media-body">
                {{item.name}}
                <p class="mui-ellipsis">部门:{{item.department}}</p>
              </div>
            </a>
            <div class="StudyTime">{{item.learningTime}}分钟</div>
          </li>
        </ul>
        <!-- custom infinite spinner -->
        <svg class="spinner" style="fill: #ec4949;" slot="infinite-spinner" viewBox="0 0 64 64">
          <g>
            <circle cx="16" cy="32" stroke-width="0" r="3">
              <animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate>
              <animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="32" cy="32" stroke-width="0" r="3.09351">
              <animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate>
              <animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="48" cy="32" stroke-width="0" r="4.09351">
              <animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate>
              <animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate>
            </circle>
          </g>
        </svg>
      </scroller>
      <search-mask-bottom  ref="bottomMask">
        <ul>
          <li v-for="(item,index) in address" class="waves">{{item}}<span v-if="index == 0"></span></li>
          <li class="cancel waves" @touchstart="gitimage">取消</li>
        </ul>
      </search-mask-bottom>
    </section>
</template>
<script>
  import AppVue from '../../../assets/eventBus.js';
  import searchmaskbottom from '@/components/commonality/search-mask-bottom.vue';
    export default {
        data () {
            return {
              items:[],
              ranking:[
                {
                  name: '**',
                  img:''
                },
                {
                  name: '**',
                  img:''
                }
              ],
              startX : 0 ,
              endX : 0,
              address:['本月','本季度','本年']
            }
        },
        created:function () {
          AppVue.$on('menu', () => {
            this.$refs.bottomMask.closemenu();
          });
        },
        methods: {
          refresh: function (done) {
            //下拉触发
            var self = this
            setTimeout(function () {
              var start = self.top - 1
              self.rankingList('refresh');
              self.top = self.top - 10;
              done();
            }, 1500)
          },
          infinite: function (done) {
            //上拉触发
             //没有更多数据
             if (this.bottom >= 10) {
             setTimeout(() => {
             done(true)
             }, 1500)
             return;
             }



            var self = this
            setTimeout(function () {
              var start = self.bottom + 1;
              self.rankingList('infinite');
              self.bottom = self.bottom + 10;
              done();
            }, 1500)
          },
          rankingList:function (type) {
            this.axios.get('/api/seller')
              .then((response) =>  {
                let list = response.data.data.ranking.rankingList,
                  arr = [];
                for(var i = 0 ; i < list.length; i++)
                {
                  if(type == "infinite")
                  {
                    this.items.push(list[i]);
                  }else if(type == "refresh")
                  {
                    arr.push(list[i]);
                    this.items = arr;
                  }
                }
                this.ranking[0].name = this.items[0].name;
                this.ranking[1].name = this.items[1].name;
                $("._v-container").css({
                    "height":$(window).height() - ($(".rankingcontainer").outerHeight() + $(".mu-appbar").height())
                })
              })
              .catch((response) => {
                console.log(response);
              });
            this.top = 1;
            this.bottom = 20;
          },
          gitimage:function () {
            this.$refs.bottomMask.closemenu();
          },
        },
      components:{
        'search-mask-bottom':searchmaskbottom
      }
    }

</script>
<style scoped>
  .firmcontainer{
    width: 100%;
    height: auto;
    display: block;
    padding: 4.29rem 0 0;
  }
  .rankingcontainer{
    width: 100%;
    height: 3.5rem;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: .79rem;
    z-index: 800;
  }
  .dengguan{
    display: flex;
    width: 100%;
    height: 0;
    position: relative;
  }
  .dengguan img{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    padding: 0 0.2413793103448276rem;
    height: 0.603448275862069rem;
    z-index: 889;
    margin-top: -0.05172413793103448rem;
    opacity: .8;
  }
  .pkContainer{
    width: 100%;
    height: 2.7rem;
    display: flex;
    background-color: #72778F;
    position: relative;
  }
  .containermask{
    -webkit-box-flex: 5;
    -webkit-flex: 5;
    -ms-flex: 5;
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .containermask .rankingContainer{
    position: relative;
  }

  .containermask .img-media-Box{
    position: relative;
    display: inline-block;
    width: 0.8620689655172413rem;
    height: 0.8620689655172413rem;
  }
  .containermask .img-media-Box .crown{
    position: absolute;
    top: -0.2413793103448276rem;
    right: -0.20689655172413793rem;
    z-index: 10;
    width: 0.603448275862069rem;
    height: 0.5172413793103449rem;
  }
  .containermask .img-media-Box .badge{
    position: absolute;
    width: 0.8620689655172413rem;
    height: 0.43103448275862066rem;
    bottom: -0.1724137931034483rem;
    left: 0;
    z-index: 10;
  }
  .containermask .img-media-Box img{
    width: 100%;
    height: 100%;
    border-radius: 0.06896551724137931rem;
  }
  .containermask .name{
    color: white;
    font-size: 0.20689655172413793rem;
    line-height: 0.4827586206896552rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 0.8620689655172413rem;
    margin: 0.08620689655172414rem auto 0;
  }
  .containermask .ranking{
    color: white;
    font-size: 0.13793103448275862rem;
    padding: 0 0.1724137931034483rem;
    border-radius: 0.05172413793103448rem;
    background-color: #B5B5B5;
  }
  .containermask.kingone .ranking{
    background-color: #FFC700;
  }
  .kingone{
    background-color: #03A9F4;
  }
  .kingVs{
    height: 0;
    width: 0;
    border-top: 2.7rem solid #03A9F4;
    border-right: 1rem solid transparent;
    position: relative;
  }
  .kingVs b{
    color: white;
    font-weight: bolder;
    font-size: 0.3448275862068966rem;
    position: absolute;
  }
  .kingVs b.Vtext{
    left: 0.3103448275862069rem;
    top: -1.8rem;
  }
  .kingVs b.Stext{
    left: 0.5517241379310345rem;
    top: -1.6rem;
  }
  .myranking{
    background-color:#03A9F4 ;
    line-height: .8rem;
    color: white;
    font-size: 0.20689655172413793rem;
  }
  .myranking h4{
    padding: 0 0.3448275862068966rem;
    font-weight: 100;
  }
  .myranking h4 b{
    padding-left: 0.1724137931034483rem;
  }
  .myranking h4 b span{
    padding: 0 0.08620689655172414rem;
  }
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
  .table-view-cell span {
    position: absolute;
    top: 0.25862068965517243rem;
    left: 0.1724137931034483rem;
    font-size: 0.20689655172413793rem;
    font-weight: bolder;
    color: #009bfc;
    width: 0.5172413793103449rem;
    height: 0.5172413793103449rem;
    line-height: 0.5172413793103449rem;
    display: block;
    text-align: center;
  }
  .table-view-cell:nth-of-type(1) span{
    font-size: 0.3103448275862069rem;
  }
  .table-view-cell:nth-of-type(1) span:after{
    display: table;
    content: '';
    position: absolute;
    top: 0;
    left: 0.05172413793103448rem;
    width: 0.3448275862068966rem;
    height: 0.5172413793103449rem;
    z-index: 10;
    background: url(../../../assets/img/Popular01.png)no-repeat;
    background-size: 100%;
    transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    -o-transform: rotate(-15deg);
    -moz-transform: rotate(-15deg);
  }
  .table-view-cell:nth-of-type(1) .media-body,.table-view-cell:nth-of-type(1) .StudyTime{
    color: #ffc700;
  }
  .table-view-cell:nth-of-type(2) span{
    font-size: 0.27586206896551724rem;
  }
  .table-view-cell:nth-of-type(2) span:after{
    display: table;
    content: '';
    position: absolute;
    top: 0;
    left: 0.05172413793103448rem;
    width: 0.3448275862068966rem;
    height: 0.5172413793103449rem;
    z-index: 10;
    background: url(../../../assets/img/Popular02.png)no-repeat;
    background-size: 100%;
    transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    -o-transform: rotate(-15deg);
    -moz-transform: rotate(-15deg);
  }
  .table-view-cell:nth-of-type(2) .media-body,.table-view-cell:nth-of-type(2) .StudyTime{
    color: #94a8b0;
  }
  .table-view-cell:nth-of-type(3) span{
    font-size: 0.2413793103448276rem;
  }
  .table-view-cell:nth-of-type(3) span:after{
    display: table;
    content: '';
    position: absolute;
    top: 0;
    left: 0.05172413793103448rem;
    width: 0.3448275862068966rem;
    height: 0.5172413793103449rem;
    z-index: 10;
    background: url(../../../assets/img/Popular03.png)no-repeat;
    background-size: 100%;
    transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    -o-transform: rotate(-15deg);
    -moz-transform: rotate(-15deg);
  }
  .table-view-cell:nth-of-type(3) .media-body,.table-view-cell:nth-of-type(3) .StudyTime{
    color: #9b3b01;
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
    padding-left: 0.7758620689655172rem;
  }
  .media-object{
    float: left;
    line-height: 0.7241379310344828rem;
    max-width: 0.7241379310344828rem;
    margin-right: 0.1724137931034483rem;
    width: 0.7241379310344828rem;
    height: 0.7241379310344828rem;
    border-radius: 0.06896551724137931rem;
    font-size: .002rem;
  }
  .media-body{
    overflow: hidden;
    font-size: 0.20689655172413793rem;
  }

  .mui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .table-view-cell p {
    margin-bottom: 0;
    font-size: 0.13793103448275862rem;
    margin-top: 0.08620689655172414rem;
  }
  .StudyTime {
    position: absolute;
    top: 0.3448275862068966rem;
    right: 0.43103448275862066rem;
    color: #5b5b65;
    font-size: 0.20689655172413793rem;
  }



  .m-search-page ul{
    background: #f1f1f1;
  }
  .m-search-page ul li{
    text-align: center;
    padding: 0.09375rem 0;
    line-height: 0.5rem;
    border-bottom: 0.015625rem solid #f2f0f0;
    background: #fff;
    position: relative;

  }
  .m-search-page ul li.cancel{
    margin-top: 0.15625rem;
    border: none;

  }
  .m-search-page ul li span{
    width: 0.078125rem;
    height: 0.078125rem;
    border-radius: 0.078125rem;
    background: red;
    display: inline-block;
    vertical-align: text-top;
    margin-left: 0.0625rem;

  }
</style>
