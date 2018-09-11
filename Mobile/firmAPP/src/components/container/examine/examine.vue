<template>
  <section class="firmcontainer">
    <scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: .79rem;background-color: #f8f8f8;">
      <!-- custom refresh spinner, use default `spinner` & viewBox 0,0,64,64 class -->
      <svg class="spinner" style="stroke: #03A9F4;" slot="refresh-spinner" viewBox="0 0 64 64">
        <g stroke-width="7" stroke-linecap="round"><line x1="10" x2="10" y1="27.3836" y2="36.4931"><animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate></line><line x1="24" x2="24" y1="18.6164" y2="45.3836"><animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate></line><line x1="38" x2="38" y1="16.1233" y2="47.8767"><animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate></line><line x1="52" x2="52" y1="16" y2="48"><animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate></line></g></svg>

      <ul>
        <li class="item-list"  v-for="(item, index) in items"  @click="todetails">
          <router-link :to="{path:'/testPaper/testPaper'}">
            <div  v-if="item.examineType === 1000" class="label haveread">已阅</div>
            <div  v-if="item.examineType === 1001" class="label NotatThe">未开始</div>
            <div  v-if="item.examineType === 1002" class="label DidnotRead">未阅</div>
            <div  v-if="item.examineType === 1003" class="label NotThrough">未通过</div>
            <div  v-if="item.examineType === 1004" class="label expired">已过期</div>
            <h4>
              <span>测试</span>
              {{item.name}}
            </h4>
            <div class="Introduction">
              <div class="Introduction-item">
                <span class="time">{{item.startTime}}</span>
                <p class="time-text">开始时间</p>
              </div>
              <div class="Introduction-item">
                <span class="time">{{item.endTime}}</span>
                <p class="time-text">结束时间</p>
              </div>
              <div class="Introduction-item">
                <span class="through">{{item.ThroughPoints}}</span><b class="fullmark">/{{item.fullmark}}</b>
                <p class="time-text">通过分/满分</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <!-- custom infinite spinner -->
      <svg class="spinner" style="fill: #ec4949;" slot="infinite-spinner" viewBox="0 0 64 64">
        <g><circle cx="16" cy="32" stroke-width="0" r="3"><animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate></circle><circle cx="32" cy="32" stroke-width="0" r="3.09351"><animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate></circle><circle cx="48" cy="32" stroke-width="0" r="4.09351"><animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate></circle></g></svg>

    </scroller>
    <!--分类菜单-->
    <search-mask ref="mask">
      <div id="paneldefault">
        <i class="icon iconfont icon-guanbi1" @click="closemenu"></i>
        <div class="panel panel-default">
          <div>
            <a>
              <i class="icon iconfont icon-icon-kaoshijilu"></i>
              <p>全部</p>
            </a>
          </div>
          <div>
            <a>
              <i class="icon iconfont icon-yiyue"></i>
              <p>已阅</p>
            </a>
          </div>
          <div>
            <a>
              <i class="icon iconfont icon-renwuweikaishi"></i>
              <p>未阅</p>
            </a>
          </div>
        </div>
        <div class="panel panel-default">
          <div>
            <a>
              <i class="icon iconfont icon-dkw_shenheweitongguo"></i>
              <p>未通过</p>
            </a>
          </div>
          <div>
            <a>
              <i class="icon iconfont icon-weibofang-xue"></i>
              <p>未开始</p>
            </a>
          </div>
          <div>
            <a>
              <i class="icon iconfont icon-yiguoqi"></i>
              <p>已过期</p>
            </a>
          </div>
        </div>
      </div>
    </search-mask>
  </section>
</template>
<script>
  import AppVue from '../../../assets/eventBus.js';
  import searchmask from '@/components/commonality/search-mask.vue';
    export default {
        name: 'name',
        data () {
            return {
              items: []
            }
        },
      mounted: function () {
        this.axios.get('/api/seller')
          .then((response) =>  {
            let list = response.data.data.examine.examineList;
            for(var i = 0 ; i < list.length; i++)
            {
              this.items.push(list[i]);
            }
            console.log(this.items)
          })
          .catch((response) => {
            console.log(response);
          });
        this.top = 1;
        this.bottom = 20;
      },
      created(){
        console.log(this.$route.params.id);
        AppVue.$on('menu', () => {
          this.$refs.mask.closemenu();
        });
      },
        methods: {
          closemenu:function () {
            this.$refs.mask.closemenu();
          },
          refresh: function (done) {
              //下拉触发
            var self = this
            setTimeout(function () {
              var start = self.top - 1
              self.gitexamineList('refresh');
              self.top = self.top - 10;
              done();
            }, 1500)
          },

          infinite: function (done) {
            //上拉触发
        /*
            //没有更多数据
        if (this.bottom >= 30) {
              setTimeout(() => {
                done(true)
              }, 1500)
              return;
            }*/



            var self = this
            setTimeout(function () {
              var start = self.bottom + 1;
              self.gitexamineList('infinite');
              self.bottom = self.bottom + 10;
              done();
            }, 1500)
          },
          gitexamineList:function (type) {
            this.axios.get('/api/seller')
              .then((response) =>  {
                let list = response.data.data.examine.examineList,
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
                console.log(this.items)
              })
              .catch((response) => {
                console.log(response);
              });
            this.top = 1;
            this.bottom = 20;
          },
          todetails:function () {
            this.$refs.mask.menu = false;
            this.$parent.getData();
          }
        },
      components:{
        'search-mask':searchmask
      }
    }
</script>
<style scoped>
  .firmcontainer{
    width: 100%;
    background-color: #f8f8f8;
  }
  .firmcontainer ul{
    padding: 0 0.26785714285714285rem 0.603448275862069rem;
  }

  .item-list{
    margin-top: 0.3125rem;
    width: 100%;
    display: block;
    position: relative;
    background: white;
    overflow: hidden;
    box-shadow: 0rem 0.125rem 0.25rem rgba(7, 17, 27, 0.1);
  }
  .item-list h4{
    font-size: 0.1875rem;
    font-weight: 100;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.15625rem;
    padding-right: .87rem;
  }
  .item-list h4 span{
    border: 1px solid #04A9F4;
    font-size: 0.1875rem;
    line-height: 0.5rem;
    margin-left: 0.15625rem;
    color: #04A9F4;
    padding: 0 0.03125rem;
  }
  .item-list .label{
    width: 1.40625rem;
    height: 0.625rem;
    line-height: 0.859375rem;
    font-size: 0.21875rem;
    text-align: center;
    color: #fff;
    position: absolute;
    top: -0.109375rem;
    right: -0.46875rem;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }
  .item-list .label.haveread{
    background: #04A9F4;
  }
  .item-list .label.NotatThe{
    background: #BBBBBB;
  }
  .item-list .label.DidnotRead{
    background: #259B24;
  }
  .item-list .label.NotThrough{
    background: #FF9800;
  }
  .item-list .label.expired{
    background: #E51C23;
  }
  .Introduction{
    margin: 0.3125rem 0.15625rem;
    margin-top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
  }
  .Introduction-item{
    text-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
  }
  .Introduction-item:first-child{
    border-right: 0.015625rem solid #E5E1E6;
  }
  .Introduction-item .time{
    font-size: 0.203125rem;
    color: #8BC34A;
    height: 0.625rem;
    display: inline-block;
  }
  .Introduction-item .time-text{
    font-size: 0.15625rem;
    color: #DBD9DB;
  }
  .Introduction-item .through{
    color: #E51C23;
    font-size: 0.1875rem;
    margin: 0 0.078125rem;
    vertical-align: super;
  }
  .Introduction-item .fullmark{
    color: #039BE5;
    font-size: 0.21875rem;
    display: inline-block;
    height: 0.625rem;
    line-height: 0.625rem;
  }


 /* .search-mask {
    z-index: 900;
  }
  .m-search-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: rgba(0,0,0,.3);
    opacity: 0;
    -webkit-transition: -webkit-transform .5s ease;
  }
  .m-search-page, .m-search-input-list {
    display: block;
    overflow: hidden;
    position: fixed;
    top: -100%;
    left: 0;
    z-index: 912;
    width: 100%;
    background-color: #FFFFFF;
  }
  .search-mask .m-search-page {
    -webkit-transition: -webkit-transform .5s ease;
    -webkit-transform: translate3d(0,-100%,0);
  }
  .search-mask .m-search-page.z-open {
    -webkit-transition: -webkit-transform .5s ease;
    -webkit-transform: translate3d(0,0,0);
  }
  .search-mask .m-search-mask.mask-open {
    -webkit-transition: -webkit-transform .5s ease;
    opacity: 1;
    z-index: 910;
  }
*/



  .panel {
    border: solid 1px transparent;
    background-color: #fff;
    box-shadow: 0.017241379310344827rem 0.017241379310344827rem 0.08620689655172414rem rgba(126, 142, 159, 0.1);
    border-radius: 0;
  }
  .panel.panel-default {
    border-color: #fafafb;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    text-align: center;
    display: -webkit-flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .panel.panel-default div{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    zoom: 1.1;
  }



  #paneldefault{
    position: relative;
    margin: 0.5172413793103449rem auto 0.1724137931034483rem;
  }
  .icon-guanbi1{
    position: absolute;
    font-size: 0.3793103448275862rem;
    color: #999;
    right: 0.1724137931034483rem;
    top: -0.3924137931034483rem;
    z-index: 912;
  }

  .panel.panel-default div .iconfont{
    font-size: 0.51875rem;
  }
  .panel.panel-default div p{
    font-size: 0.1875rem;
    color: #333;
  }
  .icon-icon-kaoshijilu{
    color: rgb(80, 170, 240);
  }
  .icon-yiyue{
    color: #04A9F4;
  }
  .icon-renwuweikaishi{
    color: #259B24;
  }
  .icon-dkw_shenheweitongguo{
    color: #FF9800;
  }
  .icon-weibofang-xue{
    color: #BBBBBB;
  }
  .icon-yiguoqi{
    color: #E51C23;
  }
</style>
