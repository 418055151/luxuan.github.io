<template>
  <section class="firmcontainer">
      <scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: .79rem;background-color: #f8f8f8;">
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
        <ul>
          <li v-for="(item,index) in items" class="li-list-item"  data-type="0">
            <div class="item-container"  @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip">
              <div class="list-item">
                <div class="item-img">
                  <img  src="../../../assets/img/casecover.png"/>
                </div>
                <div class="item-take">
                  <h4>{{item.name}}</h4>
                  <div class="item-take-text">
                    <p>{{item.teacher}}</p>
                    <p class="alignRight">{{item.releasedate}}</p>
                  </div>
                  <div class="item-take-text">
                    <p><i class="icon iconfont icon-zan"></i>{{item.praise}}</p>
                    <p class="alignRight">{{item.watch}}人看了该课程</p>
                  </div>
                </div>
              </div>
              <div class="progress">
                <div class="progress-div">
                  <div class="progress-width" :style="{width:item.progress}"></div>
                </div>
                <div class="progress-text">{{item.progress}}</div>
              </div>
            </div>
            <div class="delete icon iconfont icon-delete" @touchstart="deleteItem" :data-index="index"></div>
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
      <search-mask ref="mask">
        <div id="paneldefault">
          <i class="icon iconfont icon-guanbi1" @click="closemenu"></i>
          <div class="panel panel-default">
            <div>
              <a>
                <i class="icon iconfont icon-gongsiquanbushengchandingdanguanli"></i>
                <p>全部</p>
              </a>
            </div>
            <div>
              <a>
                <i class="icon iconfont icon-yiwancheng"></i>
                <p>已完成</p>
              </a>
            </div>
            <div>
              <a>
                <i class="icon iconfont icon-weiwancheng"></i>
                <p>未完成</p>
              </a>
            </div>
          </div>
        </div>
      </search-mask>
      <search-mask-bottom  ref="bottomMask">
        <div class="warning-text">
          <a href="javascript:void(0);"   @touchstart="gitimage">取消</a>
          确认移除此选修课程吗?
        </div>
        <div class="warning-btn">
          <a href="javascript:void(0);" @touchstart="removeData">确认移除</a>
        </div>
      </search-mask-bottom>
  </section>
</template>
<script>
  import AppVue from '../../../assets/eventBus.js';
  import searchmask from '@/components/commonality/search-mask.vue';
  import searchmaskbottom from '@/components/commonality/search-mask-bottom.vue';
    export default {
        name: 'myTake',
        props:{
          pageData:{
            type:Object
          }
        },
        data () {
            return {
              items:[],
              startX : 0 ,
              endX : 0 ,
              removeindex:'',
            }
        },
      created: function () {
          this.axios.get('/api/seller')
            .then((response) =>  {
              let list = response.data.data.myTake.myTakeList;
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

        AppVue.$on('menu', () => {
          this.$refs.mask.closemenu();
        });
        },
        methods: {
          closemenu:function () {
            this.$refs.mask.closemenu();
          },
          gitimage:function () {
            this.$refs.bottomMask.closemenu();
            this.restSlide();
          },
          todetails:function () {
            this.menu = false;
            this.$parent.getData();
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
                let list = response.data.data.myTake.myTakeList,
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
          左滑删除组件功能 配合css .li-list-item[data-type="0"]完成
          */

          //跳转
          skip(){
            if( this.checkSlide() ){
              this.restSlide();
            }else{
              alert('You click the slide!')
            }
          },
          //滑动开始
          touchStart(e){
            // 记录初始位置
            this.startX = e.touches[0].clientX;
          },
          //滑动结束
          touchEnd(e){
            // 当前滑动的父级元素
            let parentElement = e.currentTarget.parentElement;
            // 记录结束位置
            this.endX = e.changedTouches[0].clientX;
            // 左滑
            if( parentElement.dataset.type == 0 && this.startX - this.endX > 30 ){
              this.restSlide();
              parentElement.dataset.type = 1;
            }
            // 右滑
            if( parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
              this.restSlide();
              parentElement.dataset.type = 0;
            }
            this.startX = 0;
            this.endX = 0;
          },
          //判断当前是否有滑块处于滑动状态
          checkSlide(){
            let listItems = document.querySelectorAll('.li-list-item');
            for( let i = 0 ; i < listItems.length ; i++){
              if( listItems[i].dataset.type == 1 ) {
                return true;
              }
            }
            return false;
          },
          //复位滑动状态
          restSlide(){
            let listItems = document.querySelectorAll('.li-list-item');
            // 复位
            for( let i = 0 ; i < listItems.length ; i++){
              listItems[i].dataset.type = 0;
            }
          },
          //删除
          deleteItem(e){
            this.$refs.bottomMask.closemenu();
            // 当前索引
            let index = e.currentTarget.dataset.index;
          /*  // 复位
            this.restSlide();
            // 删除
            this.items.splice(index,1);*/
            this.removeindex = e.currentTarget.dataset.index;
          },
          removeData:function () {
            // 删除
            this.items.splice(this.removeindex,1);
            this.gitimage();
          }
        },
      components:{
        'search-mask':searchmask,
        'search-mask-bottom':searchmaskbottom
      }
    };
</script>
<style scoped>
.firmcontainer{
  padding-bottom: 0;
  display: block;
  width: 100%;
}
.firmcontainer ul{
  padding: 0.3448275862068966rem 0;
  background: #fff;
  width: 100%;
  display: block;
}
.firmcontainer ul li{
  display: block;
  width: 100%;
  border-bottom: 0.017241379310344827rem solid #F2EBF2;
  margin-bottom: 0.1724137931034483rem;
  position: relative;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.firmcontainer ul li .delete{
  width: 2rem;
  height: 100%;
  display: block;
  background: #e5e5e5;
  font-size: 0.47586206896551724rem;
  color: #b6b6b9;
  text-align: center;
  position: absolute;
  line-height: 1.9655172413793103rem;
  top: 0;
  right: -2rem;
  -webkit-box-shadow: 0 0 22px #c9c9c9  inset;
  box-shadow: 0 0 22px #c9c9c9  inset;
}


.li-list-item{
  position: relative;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.li-list-item[data-type="0"]{
  transform: translate3d(0,0,0);
}
.li-list-item[data-type="1"]{
  transform: translate3d(-2rem,0,0);
}
.firmcontainer ul .item-container{
  width: 100%;
  padding: 0 0.25862068965517243rem;
}
.firmcontainer ul .list-item{
  width: 100%;
  display: block;
  }
.firmcontainer ul .list-item .item-img{
  width: 30%;
  height: 1.206896551724138rem;
  display: inline-block;
  margin-right: 0.20689655172413793rem;
}
.firmcontainer ul .list-item .item-img img{
  width: 100%;
  height: 100%;
  display: block;
}
.firmcontainer ul .list-item .item-take{
  width: 65%;
  display: inline-block;
  position: relative;
}
.firmcontainer ul .list-item .item-take h4{
  font-size: 0.1875rem;
  font-weight: 100;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.15625rem;
  padding-right: .17rem;
  color: #101010;
}
.firmcontainer ul .list-item .item-take .item-take-text{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.firmcontainer ul .list-item .item-take .item-take-text p{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #858385;
  font-size: 0.13793103448275862rem;
  line-height: 0.3793103448275862rem;
}
.firmcontainer ul .list-item .item-take .item-take-text p i{
  vertical-align: middle;
  padding-right: 0.06896551724137931rem;
}
.firmcontainer ul .list-item .item-take .item-take-text p.alignRight{
    text-align: right;
  }
.firmcontainer ul li .progress{
    width: 100%;
    margin: 0.1724137931034483rem auto ;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.firmcontainer ul li .progress .progress-div{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 0.034482758620689655rem;
  background: #DBD7DB;
  position: relative;
  overflow: hidden;
}
.firmcontainer ul li .progress .progress-div .progress-width{
  background: #03A9F4;
  height: 0.034482758620689655rem;
}
.firmcontainer ul li .progress .progress-text{
  width: 1.0344827586206897rem;
  text-align: right;
  font-size: 0.13793103448275862rem;
  color: #BBBBBB;
}



#paneldefault{
  position: relative;
  margin: 0.5172413793103449rem auto 0.1724137931034483rem;
}
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

.icon-guanbi1{
  position: absolute;
  font-size: 0.3793103448275862rem;
  color: #999;
  right: 0.1724137931034483rem;
  top: -0.3924137931034483rem;
  z-index: 912;
}

.panel-default div .iconfont{
  font-size: 0.51875rem;
}
.panel-default div p{
  font-size: 0.1875rem;
  color: #333;
}
.icon-gongsiquanbushengchandingdanguanli{
  color: rgb(80, 170, 240);
}

.icon-yiwancheng{
  color: #259B24;
}
.icon-weiwancheng{
  color: #FF9800;
}


  .warning-text{
    background: white;
    line-height: 0.8620689655172413rem;
    font-size: 0.20689655172413793rem;
    color: #101010;
    border: 1px solid #f5f3f3;
  }
  .warning-text a{
    padding: 0.10344827586206896rem 0.20689655172413793rem;
    border-radius: 0.05172413793103448rem;
    border:1px solid #ddd;
    color: #101010;
    font-size: 0.20689655172413793rem;
    margin: 0 1.0344827586206897rem 0 0.1724137931034483rem;
  }
.warning-btn{
  background: white;
  height: 1.293103448275862rem;
  text-align: center;
}
.warning-btn a{
  display: inline-block;
  width: 90%;
  background: none repeat scroll 0 0 #e0645c;
  border-radius: 0.08620689655172414rem;
  color: white;
  padding: 0.1724137931034483rem;
  margin: 0.27586206896551724rem auto;
}
</style>
