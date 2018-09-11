/**
 * Created by Administrator on 2017/6/5.
 */
import Vue from 'vue';
import  Vuex from 'vuex';

Vue.use(Vuex);

import actions from './actions'
import mutations from './mutations'

export default new Vuex.Store({
  state:{
    "home":{
      "titlename": "企业大学",
      "titleLeftIconType": false,
      "headerNavType":true,
      "titleLeftIcon": "",
      "titleLeftUrl": "",
      "titleRightIconType": true,
      "titleRightIcon": "icon-xiaoxi",
      "footerNavType":true,
      "banner":[
        {
          "img":"http://bpic.588ku.com/back_pic/03/70/72/5257b6c12d89875.jpg",
          "http":"https://www.baidu.com/"
        },
        {
          "img":"http://bpic.588ku.com/back_pic/03/72/92/6657b9a240d3d1f.jpg",
          "http":"https://www.baidu.com/"
        },
        {
          "img":"http://bpic.588ku.com/back_pic/04/89/00/9358f7236fd4294.jpg",
          "http":"https://www.baidu.com/"
        },
        {
          "img":"http://bpic.588ku.com/back_pic/04/88/89/4058f61f87c450a.jpg",
          "http":"https://www.baidu.com/"
        }
      ],
      "application": [
        {
          "type": true,
          "name": "我的班级",
          "color":"#03A9F4",
          "newdata":false,
          "iocn":"icon-13",
          "http":"/team/team",
          "id":1
        },
        {
          "type": false,
          "name": "我的选修",
          "color":"#FF9800",
          "newdata":false,
          "iocn":"icon-pintu",
          "http":"/myTake/myTake",
          "id":2
        },
        {
          "type": false,
          "name": "考试",
          "color":"#19C594",
          "newdata":true,
          "iocn":"icon-icon-kaoshijilu",
          "http":"/examine/examine",
          "id":3
        },
        {
          "type": false,
          "name": "讨论",
          "color":"#F1745E",
          "newdata":true,
          "iocn":"icon-taolun",
          "http":"/discuss/discuss",
          "id":4
        },
        {
          "type": false,
          "name": "海量课程",
          "color":"#5F97F4",
          "newdata":false,
          "iocn":"icon-hailiangxiansuo",
          "http":"/totalcourse/totalcourse",
          "id":5
        },
        {
          "type": false,
          "name": "课程列表",
          "color":"#9C89B9",
          "newdata":false,
          "iocn":"icon-kechengbiao",
          "http":"",
          "id":6
        },
        {
          "type": false,
          "name": "共享中心",
          "color":"#F7B55D",
          "newdata":false,
          "iocn":"icon-tongyongleifenzugongxiang",
          "http":"/cloudStorage/cloudStorage",
          "id":7
        },
        {
          "type": false,
          "name": "学时排行",
          "color":"#DBC714",
          "newdata":false,
          "iocn":"icon-jiangbei",
          "http":"/ranking/ranking",
          "id":8
        }
      ],
      "offlineapplication":[
        {
          "type": false,
          "name": "线下课签到",
          "color":"#8BC34A",
          "iocn":"icon-weixinsaoma",
          "http":""
        },
        {
          "type": false,
          "name": "课程打分",
          "color":"#50AAF0",
          "iocn":"icon-pingfen",
          "http":""
        },
        {
          "type": false,
          "name": "问卷统计",
          "color":"#F1745E",
          "iocn":"icon-navicon-tjb",
          "http":""
        },
        {
          "type": true,
          "name": "进度反馈",
          "color":"#349EEB",
          "iocn":"icon-group47",
          "http":""
        }
      ]
    },
    Descriptiontype:false
  },
  modules:{
    mutations
  },
  actions
});
