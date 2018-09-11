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
        <li v-for="(item,index) in items" class="li-list-item"  data-type="0"   @click="todetails(item.name)">
          <router-link  :to="{path:'/videoPlay/videoPlay'}">
            <div class="item-container">
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
          </router-link>

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
  </section>
</template>
<script>
  import AppVue from '../../../assets/eventBus.js';
  export default {
    name: 'myTake',
    props:{
      pageData:{
        type:Object
      }
    },
    data () {
      return {
        items:[]
      }
    },
    created: function () {
      this.axios.get('/api/seller')
        .then((response) =>  {
          let list = response.data.data.teamCourse.teamCourseList;
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
      closemenu: function () {
        this.$refs.mask.closemenu();
      },
      todetails: function (name) {
        this.menu = false;
        this.$parent.getData(name);
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
      gitexamineList: function (type) {
        this.axios.get('/api/seller')
          .then((response) => {
            let list = response.data.data.teamCourse.teamCourseList,
              arr = [];
            for (var i = 0; i < list.length; i++) {
              if (type == "infinite") {
                this.items.push(list[i]);
              } else if (type == "refresh") {
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
      }
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
    background: #ff4949;
    font-size: 0.27586206896551724rem;
    color: #fff;
    text-align: center;
    position: absolute;
    line-height: 1.9655172413793103rem;
    top: 0;
    right: -2rem;
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
</style>
