<template>
  <div id="app" v-loading="loading">
    <firm-header :header-data="indexdata" :titlename="titlename"  @upup="change"></firm-header>
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <keep-alive>
        <router-view  class="router-view" :page-data="indexdata"/>
      </keep-alive>
    </transition>
    <firm-footer :footer-data="indexdata"></firm-footer>
  </div>
</template>
<script>
  import { mapState,mapActions} from 'vuex'
  import { store} from 'vuex'
  import Vue from "vue"
  import header from '@/components/header/header.vue'
  import footer from '@/components/footer/footer.vue'
export default {
  data(){
    return {
      responsejson:{},
      indexdata:{},
      titlename:'',
      loading:true
    }
  },
  created(){
    setTimeout(() => {
      this.loading = false;
    }, 800);
//    因为每个vue组件有独立的作用域。要全局使用可以把axios挂载到Vue的原型上。然后在组件内通过this访问。
    this.axios.get('/api/seller')
      .then((response) =>  {
        let results = response.data;
        if(results.errno === 0)
        {
            let id = this.$route.params.id;
          this.responsejson = response.data.data;
          if(id == 'home')
          {
            this.indexdata = this.responsejson.home;
          }else  if(id == 'mine')
          {
            this.indexdata = this.responsejson.mine;
          }else if (id == 'discuss')
          {
            this.indexdata = this.responsejson.discuss;
          }else if (id == 'topicdetails')
          {
            this.indexdata = this.responsejson.topicdetails;
          }else if (id == 'editingProblems')
          {
            this.indexdata = this.responsejson.editingProblems;
          }else if (id == 'examine')
          {
            this.indexdata = this.responsejson.examine;
          }else if (id == 'testPaper')
          {
            this.indexdata = this.responsejson.testPaper;
          }else if (id == 'myTake')
          {
            this.indexdata = this.responsejson.myTake;
          }else if (id == 'team')
          {
            this.indexdata = this.responsejson.team;
          }if (id == 'videoPlay')
          {
            this.indexdata = this.responsejson.videoPlay;
          }else if (id == 'teamCourse')
          {
            this.indexdata = this.responsejson.teamCourse;
          }else if (id == 'totalcourse')
          {
            this.indexdata = this.responsejson.totalcourse;
          }else if (id == 'cloudStorage')
          {
            this.indexdata = this.responsejson.cloudStorage;
          }else if (id == 'ranking')
          {
            this.indexdata = this.responsejson.ranking;
          }else if (id == 'excellentCourse')
          {
            this.indexdata = this.responsejson.excellentCourse;
          }else if (id == 'excellentCourseList')
          {
            this.indexdata = this.responsejson.excellentCourseList;
          }else if (id == 'CourseGrade')
          {
            this.indexdata = this.responsejson.CourseGrade;
          }else if (id == 'CourseGradeList')
          {
            this.indexdata = this.responsejson.CourseGradeList;
          }else if (id == 'questionnaireStatistics')
          {
            this.indexdata = this.responsejson.questionnaireStatistics;
          }else if (id == 'questionnaireShow')
          {
            this.indexdata = this.responsejson.questionnaireShow;
          }else if (id == 'feedbackProgress')
          {
            this.indexdata = this.responsejson.feedbackProgress;
          }else if (id == 'feedbackProgressShow')
          {
            this.indexdata = this.responsejson.feedbackProgressShow;
          }
        }
      })
      .catch((response) => {
        console.log(response);
      });
    console.log(this.$route.params);

    this.axios.get('/api/mockData.json')
      .then((response) =>  {
        console.log(response.data.seller);
      })
      .catch((response) => {
        console.log(response);
      });

  },
  components:{
    'firm-header':header,
    'firm-footer':footer
  },
  computed:{
    ...mapState({
      direction:function (state) {
//          console.log(state.home)
//        this.indexdata = state.home;
//        console.log(this.indexdata)
          return state.mutations.direction
      }
    })
  },
  methods:{
      getData:function (name) {
        if(name != undefined){
              this.titlename = name
        }else {
              this.titlename = ''
        }
          let routeId = this.$route.params.id;
        if(routeId == 'home')
        {
          this.indexdata = this.responsejson.home;
        }else if(routeId == 'mine')
        {
          this.indexdata = this.responsejson.mine;
        }else if (routeId == 'discuss')
        {
          this.indexdata = this.responsejson.discuss;
        }else if (routeId == 'topicdetails')
        {
          this.indexdata = this.responsejson.topicdetails;
        }else if (routeId == 'editingProblems')
        {
          this.indexdata = this.responsejson.editingProblems;
        }else if (routeId == 'examine')
        {
          this.indexdata = this.responsejson.examine;
        }else if (routeId == 'testPaper')
        {
          this.indexdata = this.responsejson.testPaper;
        }else if (routeId == 'myTake')
        {
          this.indexdata = this.responsejson.myTake;
        }else if (routeId == 'team')
        {
          this.indexdata = this.responsejson.team;
        } if (routeId == 'videoPlay')
        {
          this.indexdata = this.responsejson.videoPlay;
        }else if (routeId == 'teamCourse')
        {
          this.indexdata = this.responsejson.teamCourse;
        }else if (routeId == 'totalcourse')
        {
          this.indexdata = this.responsejson.totalcourse;
        }else if (routeId == 'cloudStorage')
        {
          this.indexdata = this.responsejson.cloudStorage;
        }else if (routeId == 'ranking')
        {
          this.indexdata = this.responsejson.ranking;
        }else if (routeId == 'excellentCourse')
        {
          this.indexdata = this.responsejson.excellentCourse;
        }else if (routeId == 'excellentCourseList')
        {
          this.indexdata = this.responsejson.excellentCourseList;
        }else if (routeId == 'CourseGrade')
        {
          this.indexdata = this.responsejson.CourseGrade;
        }else if (routeId == 'CourseGradeList')
        {
          this.indexdata = this.responsejson.CourseGradeList;
        }else if (routeId == 'questionnaireStatistics')
        {
          this.indexdata = this.responsejson.questionnaireStatistics;
        }else if (routeId == 'questionnaireShow')
        {
          this.indexdata = this.responsejson.questionnaireShow;
        }else if (routeId == 'feedbackProgress')
        {
          this.indexdata = this.responsejson.feedbackProgress;
        }else if (routeId == 'feedbackProgressShow')
        {
          this.indexdata = this.responsejson.feedbackProgressShow;
        }
      },
      change:function (name) {
        setTimeout(() => {
          if(name == 'home')
          {
            this.indexdata = this.responsejson.home;
          }else if(name == 'mine')
          {
            this.indexdata = this.responsejson.mine;
          }
        }, 300);
      }
  }
}
</script>
<style>
  @import './assets/reset.css'; /*引入公共样式*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 300ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
    -webkit-perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
