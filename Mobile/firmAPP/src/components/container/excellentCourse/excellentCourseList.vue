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
        <li class="li-list-item" v-for="(item,index) in items">
          <div class="common__course-cover-wrap">
            <img src="data:image/png;base64,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" class="common__course-cover">
          </div>
          <h4 class="common__course-title">特朗普五连“推”怒怼哈雷公司：以后卖回美国需</h4>
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
    width: 100%;
    display: block;
    padding: 0.3448275862068966rem 0.1724137931034483rem 0 0.1724137931034483rem;
  }
  .firmcontainer ul li{
    display: block;
    width: 100%;
    -webkit-box-shadow: 0rem 0.125rem 0.25rem rgba(7, 17, 27, 0.1);
    box-shadow: 0rem 0.125rem 0.25rem rgba(7, 17, 27, 0.1);
    border-radius: 0.05172413793103448rem;
    margin-bottom: 0.1724137931034483rem;
    position: relative;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    padding: 0.13793103448275862rem;
    background: #fff;
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
    line-height: 0.6206896551724138rem;
    color: #101010;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
