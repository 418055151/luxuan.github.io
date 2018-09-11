// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import './assets/viewport.js'
import $ from 'jquery'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store/'
import './assets/reset.css'
import './assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VeLine  from 'v-charts/lib/gauge.common'
import VePie  from 'v-charts/lib/pie.common'
Vue.use(ElementUI)
Vue.component(VeLine.name, VeLine);
Vue.component(VePie.name, VePie);
/*
轮播
* */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'//（如果你使用的是2.6.0以上的版本要自己手动去加载css）
require('swiper/dist/css/swiper.css');

/*
自定义提示
* */
import Toast from './toast'
Vue.use(Toast);

/*
将自定义组件挂载到Vue原型上
*/
import corrugated from  './corrugated'
Vue.prototype.$corrugated = corrugated;


import VueScroller from 'vue-scroller'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.use(VueScroller)


Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
const root = process.env.API_HOST;
// simple history management
const history = window.sessionStorage;
let historyCount = history.getItem('count') * 1;
router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount;
    history.setItem('count', historyCount);
    to.path !== '/' && history.setItem(to.path, historyCount);
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1];
    window.location.href = `http${url}`
  } else {
    next()
  }
});
/* eslint-disable no-new */
window.AppVue = new Vue({
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
}).$mount('#app');
$(function  () {
  function resi() {
    var html = document.querySelector("html");
    var wW = document.body.clientWidth || document.documentElement.clientWidth;
    var maxW = 640;
    var minW = 320;
    if (wW > maxW) wW = maxW;
    var ratio = wW / minW;
    html.style.fontSize = 50 * ratio + "px"
  }
  window.addEventListener("DOMContentLoaded", function() {
    var bodys = document.querySelector("body").style;
    bodys.opacity = "1";
    bodys.filter = "alpha(opacity=100)";
    resi()
  });
  window.addEventListener("resize", resi);




  $(".waves").on('click',function (e) {
    window.AppVue.$corrugated.corrugated(e);
  })
});
