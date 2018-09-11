<template>
  <section class="firmcontainer">
    <swiper :options="swiperOption"  ref="mySwiper"  class="homeNav swiper-container clearfix">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="(item,index) in navData">
          <a href="javascript:void(0);" :class="{ 'router-link-active': index == 0 }" @click="tapactive(index,item.navid)">{{item.navname}}</a>
      </swiper-slide>
    </swiper>

    <scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 1.4rem;">
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
      <ul class="coursecontainer">
        <li class="common__course-item" v-for="(itme,index) in items">
          <div class="common__course select" v-if="itme.coursetake == 1000" @touchstart="coursetake(index,itme.coursetake)">
            <span class="common__course-pkg">
              <em class="common__course-pkg1 common__course-not1">选修</em>
              <em class="common__course-pkg2 common__course-not2"></em>
            </span>
          </div>
          <div class="common__course select" v-else="itme.coursetake == 1001" @touchstart="coursetake(index,itme.coursetake)">
            <span class="common__course-pkg">
              <em class="common__course-pkg1 common__course-are1">已选修</em>
              <em class="common__course-pkg2 common__course-are2"></em>
            </span>
          </div>
          <a href="javascript:void(0);" class="common__course-link">
            <div class="common__course-cover-wrap">
              <img src="../../../assets/img/casecover.png" class="common__course-cover">
            </div>
            <div class="state-course" v-if="itme.coursetype">New</div>
            <h4 class="common__course-title">{{itme.coursename}}</h4>
            <p class="common__course-time">{{itme.coursetime}}</p>
          </a>
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
      <div class="searchcontainer">
          <div style="z-index: 10;position: fixed;background: #f3f5f7;width: 100%">
            <div class="comments-input">
              <div class="inupt-box">
                <input type="text" placeholder="请输入搜索关键词" v-model="search" v-on:input="changeText()"/>
                <i class="icon iconfont icon-guanbi1" v-show="searchtype"  @touchstart="emptysearch"></i>
                <i class="icon iconfont icon-search" @touchstart="searchCourse"></i>
              </div>
              <div class="submit-btn" @click.stop="cancelSearch">取消</div>
            </div>
            <div  v-show="!searchtype">
              <h4 class="search-tit">热门搜索</h4>
              <dl class="clearfix">
                <dd>
                  <a href="javascript:void(0);">人力资源</a>
                </dd>
                <dd>
                  <a href="javascript:void(0);">营销</a>
                </dd>
                <dd>
                  <a href="javascript:void(0);">策划</a>
                </dd>
                <dd>
                  <a href="javascript:void(0);">员工培训</a>
                </dd>
                <dd>
                  <a href="javascript:void(0);">90后</a>
                </dd>
                <dd>
                  <a href="javascript:void(0);">新一线</a>
                </dd>
                <dd>
                  <a href="javascript:void(0);">供应多元化</a>
                </dd>
                <dd>
                  <a href="javascript:void(0);">楼市规则</a>
                </dd>
                <dd>
                  <a href="javascript:void(0);">文旅产业</a>
                </dd>
              </dl>
            </div>
            <div class="Recent-search"  v-show="!searchtype" v-if="historylist != ''">
              <h4 class="Recent">最近搜索<span @touchstart="deleteHistory('historylist')">清除历史</span></h4>
            </div>
          </div>
          <div class="Recent-search" v-show="!searchtype">
            <scroller
              ref="scroller"
              :snapping="snapping"
              :snap-height="snapHeight"
              :animationDuration="animationDuration"
              style="padding-top: 232px">
              <ul class="recentsearch">
                <li v-for="(item,index) in historylist">
                  <span>{{item}}</span>
                  <i class="icon iconfont icon-guanbi1" @touchstart="deleteHistory(index)"></i>
                </li>
              </ul>
            </scroller>
          </div>
        <scroller
          ref="scroller"
          :snapping="snapping"
          :snap-height="snapHeight"
          :animationDuration="animationDuration"
          style="padding-top:44px"   v-show="searchtype">
          <ul class="search-container">
            <li>
              <span>政府和社会资本合作项目</span>
            </li>
            <li>
              <span>管理精英领导功夫系列课程</span>
            </li>
            <li>
              <span>互联网社区的创新要点</span>
            </li>
            <li>
              <span>如何制定了合理的项目开发周期基准</span>
            </li>
            <li>
              <span>对话未来，房地产新玩法</span>
            </li>
          </ul>
        </scroller>

      </div>
    </search-mask-bottom>
  </section>
</template>
<script>
  import AppVue from '../../../assets/eventBus.js';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import searchmaskbottom from '@/components/commonality/search-mask-bottom.vue';
    export default {
        name: 'name',
        data () {
            return {
              "snapping": true,
              "snapHeight": 50,
              "animationDuration": 150,
              "items":[],
              "historylist":[],
              "history":[],
              "search":'',
              "searchtype":false,
              "navData":[
                  {"navname":"投融资", "navid":2},
                  {"navname":"前期开发", "navid":3},
                  {"navname":"定位策划", "navid":4},
                  {"navname":"设计管理", "navid":5},
                  {"navname":"成本招采", "navid":6},
                  {"navname":"工程管理", "navid":7},
                  {"navname":"营销管理", "navid":8},
                  {"navname":"社区运营", "navid":9},
                  {"navname":"品牌客服", "navid":10},
                  {"navname":"定位策划", "navid":12},
                  {"navname":"设计工程", "navid":13},
                  {"navname":"商业物业", "navid":14},
                  {"navname":"产业地产", "navid":16},
                  {"navname":"战略运营", "navid":20},
                  {"navname":"企业管理", "navid":21},
                  {"navname":"产品线", "navid":22},
                  {"navname":"财务税筹", "navid":23},
                  {"navname":"人力资源", "navid":24},
                  {"navname":"行政会议", "navid":25},
                  {"navname":"信息化", "navid":26},
                  {"navname":"办公技巧", "navid":27},
                  {"navname":"通用管理", "navid":28},
                ],
              "swiperOption": {
                  "freeMode": true,
                  "freeModeMomentumRatio": 0.5,
                  "slidesPerView": 5,
                  "sensitivity" : 0.1,
                  "slideToClickedSlide": true,
                  "centeredSlides" : false,
                  "on": {
                      touchStart: function(swiper, event){
                      }
                  }
                }
            }
        },
        created:function () {
          AppVue.$on('menu', () => {
            this.$refs.bottomMask.closemenu();
        });


        },
        mounted:function () {
          $('.searchcontainer').css({
              "width":$(window).width(),
              "height":$(window).height()
          });
          $(".search-container").css({
            "width":$(window).width(),
          });
          /*获取本地储存的收搜历史记录*/
          for (var i in JSON.parse(localStorage.getItem('historylist'))){
            this.historylist.push(JSON.parse(localStorage.getItem('historylist'))[i])
          }
        },
        methods: {
          /*
          点击分类导航
          * */
          tapactive:function (index,id) {
            $(".homeNav  .router-link-active").removeClass('router-link-active')
            $(".homeNav a").eq(index).addClass('router-link-active');
          },
          /*
          下拉触发
          * */
          refresh: function (done) {
            var self = this;
            setTimeout(function () {
              var start = self.top - 1
              self. gitteamList('refresh');
              self.top = self.top - 10;
              done();
            }, 1500)
          },

          /*
          上拉触发
          * */
          infinite: function (done) {
             //没有更多数据
             if (this.bottom >= 30) {
             setTimeout(() => {
             done(true)
             }, 1500);
             return;
             }

            var self = this;
            setTimeout(function () {
              var start = self.bottom + 1;
              self. gitteamList('infinite');
              self.bottom = self.bottom + 10;
              done();
            }, 1500)
          },
          /*
          获取页面数据
          * */
          gitteamList:function (type) {
            this.axios.get('/api/seller')
              .then((response) =>  {
                let list = response.data.data.totalcourse.totalcourseList,
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
          /*
          选修课程样式切换
          * */
          coursetake:function (index,type) {
            if(type == '1000'){
              this.items[index].coursetake = '1001';
            }else if(type == '1001')
            {
              this.items[index].coursetake = '1000';
            }
          },
          /*
          关闭组件
          * */
          cancelSearch:function () {
            this.$refs.bottomMask.closemenu();
          },
          /*
          收搜框
          * */
          changeText:function () {
            if(this.search.length > 0)
            {
              this.searchtype = true;
            }else {
              this.searchtype = false;
            }
          },
          /*
          清空收搜框
          * */
          emptysearch:function () {
            this.search = ' ';
            this.searchtype = false;
          },
          /*
          开始收搜将收搜记录存人localStorage
          * */
          searchCourse:function () {
            if(this.searchtype)
            {
              this.historylist.push(this.search);
              this.historylist = [...new Set(this.historylist)];
              localStorage.setItem('historylist', JSON.stringify(this.historylist));
            }else {
                this.openmessage("请输入搜索关键词");
                return false;
            }
          },
          /*
          删除历史记录
          * */
          deleteHistory:function (index) {
            if(index == 'historylist')
            {
              this.historylist = [];
              this.history = [];
              localStorage.removeItem('historylist');
            }else {
              this.historylist.splice(index,1);
              localStorage.setItem('historylist', JSON.stringify(this.historylist));
            }
          },
          openmessage(message) {
            this.$toast(message,1500,'icon-weiwancheng');
          }
        },
      components: {
        'search-mask-bottom':searchmaskbottom,
        swiper,
        swiperSlide
      }
    }

</script>
<style scoped>
.firmcontainer{
  padding-bottom: 0;
  padding-top: 1.58rem;
  display: block;
  width: 100%;
  background: white;
}
  .swiper-container{
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    text-align: center;
    position: fixed;
    left: 0;
    font-size: 0;
    top: .79rem;
    background: #fff;
    font-family: \\5FAE\8F6F\96C5\9ED1;
    white-space: nowrap;
    z-index: 899;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    box-shadow: 0 1px 3px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
  }
.swiper-container::-webkit-scrollbar {
  display: none;
}
.swiper-container .swiper-slide{
  display: inline-block;
  height:0.6551724137931034rem;
  line-height: 0.6551724137931034rem;
  font-size: 0.20689655172413793rem;
  padding: 0 0.1724137931034483rem;
}
.swiper-container .swiper-slide a{
  color: #000;
}
.swiper-container .swiper-slide a.router-link-active{
  color: #03a9f4;
  font-size: 0.2413793103448276rem;
  font-weight: 700;
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
.common__course {
  position: absolute;
  right: 0.10344827586206896rem;
  top: 0.10344827586206896rem;
}
.common__course-pkg {
  float: right;
  position: relative;
  margin-right: 0.034482758620689655rem;
  height: 0.3103448275862069rem;
  color: #777;
}
.common__course-pkg1 {
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
.common__course-not1 {
  border: 0.017241379310344827rem  solid #bbb;
  background: #fff;
  color: #777;
}
.common__course-pkg2 {
  position: absolute;
  top: 0.034482758620689655rem;
  left: 0.034482758620689655rem;
  z-index: 1;
  box-sizing: border-box;
  border-radius: 0.034482758620689655rem;
  width: 100%;
  height: 100%;
  font-style: normal;
}
.common__course-not2 {
  border: 0.017241379310344827rem  solid #bbb;
  background: #efeff4;
}
.common__course-link {
  display: block;
  border-radius: 0.06896551724137931rem;
  padding-bottom: 0.1724137931034483rem;
  font-size: 0;
}
.common__course-item:nth-child(odd) .common__course-link {
  margin-right: 0.08620689655172414rem;
}
.common__course-item:nth-child(even) .common__course-link {
  margin-left: 0.08620689655172414rem;
}
.common__course-cover-wrap {
  overflow: hidden;
  position: relative;
  border-radius: 0.06896551724137931rem;
  padding-top: 56%;
  width: 100%;
}
.common__course-cover {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.06896551724137931rem;
  width: 100%;
  height: 100%;
}
.state-course {
  width: 0.5172413793103449rem;
  height: 0.5172413793103449rem;
  line-height: 0.4482758620689655rem;
  text-align: center;
  font-size: 0.13793103448275862rem;
  background: #fc7829;
  border: 2px solid #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 0.7758620689655172rem;
  left: 0.1724137931034483rem;
  color: #fff;
}
.common__course-title {
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
    margin-top: 0.034482758620689655rem;
    padding: 0 0.06896551724137931rem;
    font-size: 0.13793103448275862rem;
    color: #BBBBBB;
  }
.common__course-are1 {
  border: 0.017241379310344827rem  solid #2dabe4;
  background: #4eb6e5;
  color: #fff;
}
.common__course-are2 {
  border: 0.017241379310344827rem  solid #32a4d8;
  background: #56beed;
}


.searchcontainer{
  width: 100%;
  height: 100%;
  background: #f3f5f7;
  position: relative;
}
.comments-input{
  color: #302e2e;
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
  height: auto;
  min-height: inherit;
  padding: 0.1724137931034483rem 0 0.1724137931034483rem 0.13793103448275862rem;
  box-shadow: 0 0 0.1724137931034483rem 0.017241379310344827rem rgba(7,17,27,.1);
  background: #fff;
}
.comments-input .inupt-box{
  -webkit-box-flex: 4;
  -ms-flex: 4;
  flex: 4;
  background: #F3F5F7;
  font-size: 0.21428571428571427rem;
  padding: 0.07142857142857142rem 0.10714285714285714rem;
  border-radius: 0.17857142857142858rem;
  text-align: left;
  line-height: inherit;
  min-height: 0.26785714285714285rem;
  max-height: 1.25rem;
  width: 4.375rem;
  position: relative;
}
.comments-input .inupt-box .icon-guanbi1{
  position: absolute;
  right: 0.603448275862069rem;
  top: 0rem;
  font-size: 0.2413793103448276rem;
  width: 0.4827586206896552rem;
  height: 0.4827586206896552rem;
  text-align: center;
  line-height: 0.4827586206896552rem;
  color: #B7BBBF;
}
.comments-input .inupt-box .icon-search{
  position: absolute;
  right: 0.1206896551724138rem;
  top: 0;
  font-size: 0.2413793103448276rem;
  width: 0.4827586206896552rem;
  height: 0.4827586206896552rem;
  text-align: center;
  line-height: 0.4827586206896552rem;
  color: #B7BBBF;
}
.comments-input .inupt-box input{
  width: 80%;
  height: 100%;
  border: 0;
  font-size: 0.20689655172413793rem;
  color: #B7BBBF;
  box-sizing: border-box;
  background: transparent;
}
.comments-input .submit-btn{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -ms-flex-item-align: end;
  align-self: flex-end;
  line-height: 0.42857142857142855rem;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  font-size: 0.20689655172413793rem;
}
.search-tit{
  padding: 0.13793103448275862rem 0.1724137931034483rem;
  font-size: 0.2413793103448276rem;
  color: #2B333B;
  background: #fff;
  margin-top: 0.05172413793103448rem;
  font-weight: 100;
  }
.searchcontainer dl{
  padding: 0 0.1724137931034483rem;
  padding-bottom: 0.25862068965517243rem;
  background: #fff;
}
.searchcontainer dl dd{
  float: left;
  margin-right: 0.13793103448275862rem;
  margin-bottom: 0.13793103448275862rem;
}
.searchcontainer dl dd a{
  display: block;
  font-size: 0.20689655172413793rem;
  color: #71777D;
  letter-spacing: 0;
  padding: 0.10344827586206896rem 0.20689655172413793rem;
  background: #F3F5F7;
  border-radius: 0.05172413793103448rem;
}
  .Recent-search{
    margin-top: 0.1724137931034483rem;
    background: #fff;
    padding: 0 0.1724137931034483rem;
  }
  .Recent-search h4{
    font-size: 0.2413793103448276rem;
    color: #2B333B;
    background: #fff;
    margin-top: 0.05172413793103448rem;
    font-weight: 100;
    line-height: 0.6551724137931034rem;
    overflow: hidden;
  }
.Recent-search h4 span{
  float: right;
  font-size: 0.20689655172413793rem;
  color: #03a9f4;
  line-height: 0.6551724137931034rem;
}
.Recent-search ul{
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0 0.1724137931034483rem;
  background: white;
}
.Recent-search ul li{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 0.6551724137931034rem;
  border-top: 0.017241379310344827rem solid #f3f5f7;
}
.Recent-search ul li span{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 0.25862068965517243rem;
  font-size: 0.20689655172413793rem;
}
.Recent-search ul li .icon-guanbi1{
  font-size: 0.20689655172413793rem;
  color: silver;
  }
  .search-container{
    padding: 0 0.1724137931034483rem;
    background: #fff;
    margin-top: 0.05172413793103448rem;
  }
.search-container li{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 0.6551724137931034rem;
  border-top: 0.017241379310344827rem solid #f3f5f7;
}
.search-container li span{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 0.25862068965517243rem;
  font-size: 0.20689655172413793rem;
}

</style>
