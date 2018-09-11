<template>
  <section class="firmcontainer">
    <ul>
      <li class="item-list" v-for="item in pageData.discussList" @click="todetails">
        <router-link  :to="{path:'/topicdetails/topicdetails'}" :data-id="item.code">
          <div class="head">
            <a class="headimg">
              <img :src="item.portrait">
            </a>
            <div class="head-introduce">
              <h4>{{item.name}}</h4>
              <div class="head-statistical">
                <span><b>{{item.releasetime}}</b>发布</span>
                <span><b>{{item.readTheNumber}}</b>人阅读</span>
              </div>
            </div>
          </div>
          <div class="item-title">{{item.itemtitle}}</div>
          <p class="item-introduce">{{item.itemintroduce}}.</p>
          <div class="delineate-figure">
            <div class="delineate-figure-item itemlength3" v-if="item.delineatefigure.length >= 3" v-for="img in item.delineatefigure" :style="{backgroundImage: 'url(\''+img+'\')'}"></div>
            <div class="delineate-figure-item itemlength2" v-if="item.delineatefigure.length == 2" v-for="img in item.delineatefigure" :style="{backgroundImage: 'url(\''+img+'\')'}"></div>
            <div class="delineate-figure-item itemlength1" v-if="item.delineatefigure.length == 1" v-for="img in item.delineatefigure" :style="{backgroundImage: 'url(\''+img+'\')'}"></div>
          </div>
          <div class="item-bottom">
            <span class="from">话题来自<b>{{item.from}}</b></span>
            <span class="comments"><i class="icon iconfont icon-taolun"></i>{{item.comments}}</span>
          </div>
        </router-link>

      </li>
    </ul>
    <search-mask ref="mask">
      <div id="paneldefault">
        <i class="icon iconfont icon-guanbi1" @click="closemenu"></i>
        <div class="panel panel-default">
          <div  @click="todetails">
            <router-link :to="{path:'/topicdetails/topicdetails'}" class="touterlink" tag="a">
              <i class="icon iconfont icon-taolun"></i>
              <p>与我相关</p>
            </router-link>
          </div>
          <div  @click="todetails">
            <router-link :to="{path:'/editingProblems/editingProblems'}" class="touterlink" tag="a">
              <i class="icon iconfont icon-wenyishengtiwen"></i>
              <p>发表话题</p>
            </router-link>
          </div>
        </div>
      </div>
    </search-mask>
  </section>
</template>
<script>
  import AppVue from '../../../assets/eventBus.js';
  import searchmask from '@/components/commonality/search-mask.vue';
    export default {
        name: 'name',
        props:{
          pageData:{
            type:Object
          }
        },
        data () {
            return {
            }
        },
        created(){
          console.log(this.$route.params.id);
          AppVue.$on('menu', () => {
            this.$refs.mask.closemenu();
          });
        },
        methods: {
          closemenu:function () {
              console.log(this.$refs.mask)
            this.$refs.mask.closemenu();
          },
          todetails:function () {
            this.$refs.mask.menu = false;
            this.$parent.getData();
          }
        },
      components:{
        'search-mask':searchmask
      }
    }
</script>
<style scoped>
.firmcontainer{
  width: 100%;
  padding: 0.9821428571428571rem 0.26785714285714285rem 0;
  background: #fff;
}
.firmcontainer ul{
  padding-bottom: 0.603448275862069rem;
}

.item-list{
  margin-top: 0.43103448275862066rem;
  width: 100%;
  display: block;
  position: relative;
}
.item-list .head{
  position: relative;
  display: block;
}
.item-list .head .headimg{
  display: inline-block;
  float: left;
  width: .9rem;
  height: .9rem;
  overflow: hidden;
  border-radius: 50%;
  text-align: center;
}
.item-list .head .headimg img{
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.head-introduce{
  padding-left: 1rem;
  padding-top: 0.05rem;
}
.head-introduce h4{
  font-size: 0.20689655172413793rem;
  font-weight: 700;
  line-height: 0.4282758620689655rem;
  color: #101010;
}
.head-introduce .head-statistical{
  display: inline-block;
  line-height: 0.4482758620689655rem;
  font-size: 0.13793103448275862rem;
  color: #9E9E9E;
}
.head-introduce .head-statistical span{
  padding-right: 0.1724137931034483rem;
}
.head-introduce .head-statistical span b{
  font-weight: 100;
  padding-right: 0.05172413793103448rem;
}
.item-title{
  height: auto;
  max-height: 1rem;
  margin-top: 0.08620689655172414rem;
  font-size: 0.20689655172413793rem;
  color: #4F4D4F;
  font-weight: 600;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  cursor: auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.item-introduce{
  margin: 0.1724137931034483rem auto;
  font-size: 0.20689655172413793rem;
  color: #999399;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
}
.delineate-figure{
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}
.delineate-figure-item{
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  height: 0;
  zoom: 1.1;
  vertical-align: top;
  background: no-repeat;
  background-size: 100% 100% !important;
}
.delineate-figure-item:not(:nth-child(3n+1)){
  margin-left: 0.08620689655172414rem;
}
.itemlength1{
  padding-bottom: 100%;
}
.itemlength2{
  padding-bottom: 50%;
}
.itemlength3{
  padding-bottom: 28.9%;
}
.item-bottom{
  margin-top: 0.1724137931034483rem;
  font-size: 0.1724137931034483rem;
  color: #BEC2C9;
  line-height: 0.3793103448275862rem;
}
.item-bottom .from{
}
.item-bottom .from b{
  font-weight: 100;
  color: #039BE5;
  font-size: 0.1724137931034483rem;
  padding-left: 0.08620689655172414rem;
}
.item-bottom .comments{
  float: right;
  margin: 0;
}
.item-bottom .comments .icon-taolun{
  font-size: 0.20689655172413793rem;
  padding-right: 0.08620689655172414rem;
  color: #BBBBBB;
}
.search-mask {
  z-index: 900;
}
.m-search-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: rgba(0,0,0,.3);
  opacity: 0;
  -webkit-transition: -webkit-transform .5s ease;
}
.m-search-page, .m-search-input-list {
  display: block;
  overflow: hidden;
  position: fixed;
  top: -100%;
  left: 0;
  z-index: 912;
  width: 100%;
  background-color: #f7f7f7;
}
.search-mask .m-search-page {
  -webkit-transition: -webkit-transform .5s ease;
  -webkit-transform: translate3d(0,-100%,0);
}
.search-mask .m-search-page.z-open {
  -webkit-transition: -webkit-transform .5s ease;
  -webkit-transform: translate3d(0,0,0);
}
.search-mask .m-search-mask.mask-open {
  -webkit-transition: -webkit-transform .5s ease;
  opacity: 1;
  z-index: 910;
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
  padding: 0.5172413793103449rem;
}
.panel.panel-default .touterlink {
  color: #333;
}
.panel.panel-default .touterlink p{
  font-size: 0.20689655172413793rem;
  color: #333;
}
.panel.panel-default .touterlink .iconfont{
  font-size: 0.3793103448275862rem;
}
.panel.panel-default .touterlink .icon-taolun{
  color: #00a2d4;
}
.panel.panel-default .touterlink .icon-wenyishengtiwen{
  color: #00cdfa;
}
#paneldefault{
  position: relative;
}
.icon-guanbi1{
  position: absolute;
  font-size: 0.3793103448275862rem;
  color: #999;
  right: 0.1724137931034483rem;
  top: 0.05172413793103448rem;
  z-index: 912;
}
</style>
