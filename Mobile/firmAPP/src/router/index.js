import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/container/index'
import myTake from '@/components/container/myTake/myTake'
import team from '@/components/container/team/team'
import teamCourse from '@/components/container/team/teamCourse'
import discuss from '@/components/container/discuss/discuss'
import topicdetails from '@/components/container/discuss/topicdetails'
import totalcourse from '@/components/container/totalcourse/totalcourse'
import editingProblems from '@/components/container/discuss/editingProblems'
import examine from '@/components/container/examine/examine'
import testPaper from '@/components/container/examine/testPaper'
import cloudStorage from '@/components/container/cloudStorage/cloudStorage'
import ranking from '@/components/container/ranking/ranking'
import videoPlay from '@/components/container/videoPlay/videoPlay'
import courseDescription from '@/components/container/videoPlay/courseDescription'
import comments from '@/components/container/videoPlay/comments'
import excellentCourse from '@/components/container/excellentCourse/excellentCourse'
import excellentCourseList from '@/components/container/excellentCourse/excellentCourseList'
import CourseGrade from '@/components/container/CourseGrade/CourseGrade'
import CourseGradeList from '@/components/container/CourseGrade/CourseGradeList'
import questionnaireStatistics from '@/components/container/questionnaireStatistics/questionnaireStatistics'
import questionnaireShow from '@/components/container/questionnaireStatistics/questionnaireShow'
import feedbackProgress from '@/components/container/feedbackProgress/feedbackProgress'
import feedbackProgressShow from '@/components/container/feedbackProgress/feedbackProgressShow'
import swiper from '@/components/swiper'
import personalCenter from '@/components/container/personalCenter/personalCenter'

const routes = [
  {
    path: '/index/:id',component: index
  },
  {
    path: '/myTake/:id',component: myTake
  },
  {
    path: '/discuss/:id',component: discuss
  },
  {
    path: '/topicdetails/:id',component: topicdetails
  },
  {
    path: '/totalcourse/:id',component: totalcourse
  },
  {
    path: '/editingProblems/:id',component: editingProblems
  },
  {
    path: '/examine/:id',component: examine
  },
  {
    path: '/testPaper/:id',component: testPaper
  },
  {
    path: '/team/:id',component: team
  },
  {
    path: '/teamCourse/:id',component: teamCourse
  },
  {
    path: '/videoPlay/:id',component: videoPlay,
    redirect: '/courseDescription',
    children: [
      {
        path: '/courseDescription',
        name: 'courseDescription',
        component: courseDescription
      },
      {
        path: '/comments',
        name: 'comments',
        component: comments
      }
    ]

  },
  {
    path: '/cloudStorage/:id',component: cloudStorage
  },
  {
    path: '/excellentCourse/:id',component: excellentCourse
  },
  {
    path: '/excellentCourseList/:id',component: excellentCourseList
  },
  {
    path: '/CourseGrade/:id',component: CourseGrade
  },
  {
    path: '/CourseGradeList/:id',component: CourseGradeList
  },
  {
    path: '/questionnaireStatistics/:id',component: questionnaireStatistics
  },
  {
    path: '/questionnaireShow/:id',component: questionnaireShow
  },
  {
    path: '/feedbackProgress/:id',component: feedbackProgress
  },
  {
    path: '/feedbackProgressShow/:id',component: feedbackProgressShow
  },
  {
    path: '/ranking/:id',component: ranking
  },
  {
    path: '/personalCenter/:id',
    component: personalCenter,
    beforeEnter: (to, from, next) => {
      console.log(personalCenter)
      next()
    }
  },
  // 重定向
  {
    path: '/', redirect: '/index/home'
  }
];
export default new Router({
  linkActiveClass:"active",
  routes
})

Vue.use(Router);

