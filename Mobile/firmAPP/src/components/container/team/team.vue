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
        <li class="team-item"  v-for="(item,index) in items"  @click="todetails(item.name)">
          <router-link  :to="{path:'/teamCourse/teamCourse'}">
            <span class="teamType" v-if="item.teamtype == false">未完成</span>
            <span class="teamType" v-if="item.teamtype == true">已完成</span>
            <h4>{{item.name}}</h4>
            <div class="team-time">
              <span>{{item.deadline}} 前完成</span>
              <span>{{item.creationtime}}</span>
            </div>
            <div class="team-describe">
              <div class="team-message">
                <img src="../../../assets/img/casecover.png">
                <span>创建者 - <b>{{item.creator}}</b></span>
              </div>
              <div class="team-progress">
                <div class="progress-div"><div class="progress-width" :style="{width: item.progress}"></div></div>
                <div class="progress-text" v-if="item.progress == '100%'" style="color: #03A9F4">{{item.progress}}</div>
                <div class="progress-text" v-if="item.progress != '100%'">{{item.progress}}</div>
              </div>
            </div>
            <div class="team-students">
              <ul>
                <li class="students-item" v-for="(itme,index) in item.studentsList" v-if='index<=5'>
                  <img src="../../../assets/img/casecover.png">
                  <span>{{itme.studentsName}}</span>
                </li>
                <li class="students-item more" v-if="item.studentsList.length > 5">
                  <i class="icon iconfont icon-caidanzengjia"></i>
                </li>
              </ul>
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
          todetails:function (name) {
            this.$parent.getData(name);
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
  margin-bottom: 0.1724137931034483rem;
}
.team-item{
  display: block;
  overflow: hidden;
  position: relative;
  padding: 0.1724137931034483rem;
  margin-bottom: 0.1724137931034483rem;
  background: white;
}
.team-item:first-child{
  padding-top: 0.25862068965517243rem;
}
.team-item .teamType{
  float: right;
  font-size: 0.20689655172413793rem;
  color: #03A9F4;
  line-height: 0.4827586206896552rem;
}
.team-item h4{
  font-size: 0.2413793103448276rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: .17rem;
  color: #101010;
  line-height: 0.4827586206896552rem;
}
.team-item .team-time{
    display: block;
  }
.team-item .team-time span{
  color: #9E9E9E;
  font-size: 0.13793103448275862rem;
  background: #E8E6E8;
  padding: 0.05172413793103448rem 0.13793103448275862rem;
  border-radius: 0.05172413793103448rem;
  margin-right: 0.08620689655172414rem;
}
.team-item  .team-describe{
  width: 100%;
  display: block;
  border-bottom: 0.017241379310344827rem solid #EBE8EB;
  padding: 0.13793103448275862rem 0;
  overflow: hidden;
  position: relative;
}
.team-item  .team-describe .team-message{
  display: block;
  width: 2.586206896551724rem;
  float: left;
}
.team-item  .team-describe .team-message img{
  width: 0.6896551724137931rem;
  height: 0.6896551724137931rem;
  display: inline-block;
  border-radius: 0.6896551724137931rem;
  margin-right: 0.08620689655172414rem;
}
.team-item  .team-describe .team-message span{
  color: #BBBBBB;
  font-size: 0.1724137931034483rem;
}
.team-item  .team-describe .team-message span b{
  font-weight: 100;
  color: #03A9F4;
}
.team-item  .team-progress{
  padding-left: 2.586206896551724rem;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -0.1206896551724138rem;
}
.team-item  .team-progress .progress-div{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 0.05172413793103448rem;
  background: #DBD7DB;
  position: relative;
  overflow: hidden;
}
.team-item  .team-progress .progress-div .progress-width{
  background: #03A9F4;
  height: 0.05172413793103448rem;
}
.team-item  .team-progress .progress-text{
  width: 0.8620689655172413rem;
  text-align: right;
  font-size: 0.13793103448275862rem;
  color: #BBBBBB;
}
.team-item  .team-students{
  padding-top: 0.13793103448275862rem;
  overflow: hidden;
}
.team-item  .team-students .students-item{
  display: inline-block;
  float: left;
  margin-right: 0.3448275862068966rem;
}
.team-item  .team-students .students-item img{
  width: 0.5689655172413793rem;
  height: 0.5689655172413793rem;
  display: block;
  border-radius: 0.5689655172413793rem;
  margin-bottom: 0.08620689655172414rem;
}
.team-item  .team-students .students-item span{
  display: inline-block;
  width: 0.5689655172413793rem;
  text-align: center;
  font-size: 0.13793103448275862rem;
  color: #BBBBBB;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.team-item  .team-students .students-item.more{
  float: right;
  color: #BBBBBB;
  font-size: 0.27586206896551724rem;
  line-height: 0.5172413793103449rem;
  margin-right: 0.2448275862068966rem;
}
</style>
