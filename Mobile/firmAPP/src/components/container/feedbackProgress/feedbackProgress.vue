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
          <li class="feedback-item" v-for="(item,index) in items"  @click="todetails">
            <router-link :to="{path:'/feedbackProgressShow/feedbackProgressShow'}" class="item-container">
              <h4>4.28苏州滨投《房地产项目竣工决算实务与土地增值税清算众筹划》</h4>
              <div class="item-take-text">
                <p>
                  <i class="icon iconfont icon-zan"></i>2018-7-30 14:00:40
                </p>
                <p class="alignRight">
                  <b>14</b><span>/100 份数据</span>
                </p>
              </div>
              <div class="item-take-text">
                <p>
                  <i class="icon iconfont icon-zan"></i>郭华
                </p>
                <p style="text-align: right">
                  <i class="icon iconfont icon-gongsiquanbushengchandingdanguanli"></i>
                  <i class="icon iconfont icon-gongsiquanbushengchandingdanguanli"></i>
                </p>
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
  export default {
    name: 'team',
    data () {
      return {
        items:[]
      }
    },
    created:function () {
      this.axios.get('/api/seller')
        .then((response) =>  {
          let list = response.data.data.team.teamList;
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
    methods: {
      refresh: function (done) {
        //下拉触发
        var self = this
        setTimeout(function () {
          var start = self.top - 1
          self. gitteamList('refresh');
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
          self. gitteamList('infinite');
          self.bottom = self.bottom + 10;
          done();
        }, 1500)
      },
      gitteamList:function (type) {
        this.axios.get('/api/seller')
          .then((response) =>  {
            let list = response.data.data.team.teamList,
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
        this.$parent.getData();
      }
    }
  };
</script>
<style scoped>
  .firmcontainer ul{
    width: 100%;
    display: block;
    padding: 0.3448275862068966rem 0.1724137931034483rem 0 0.1724137931034483rem;
  }
  .firmcontainer ul li.feedback-item{
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
    border-bottom: 2px solid #03A9F4;
  }
  .item-take-text{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 5px;
  }
  .item-take-text p{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #858385;
    font-size: 0.13793103448275862rem;
    line-height: 0.3793103448275862rem;
    padding-top: 5px;
  }
  .item-take-text p i{
    vertical-align: middle;
    padding-right: 0.06896551724137931rem;
  }
  .item-take-text p.alignRight{
    padding: 0;
    text-align: right;
  }
  .item-take-text p.alignRight b{
    vertical-align: super;
  }
</style>
