<template>
  <section class="firmcontainer">
    <swipe :bannerdata="pageData" :style="{'width':swipeBox}"></swipe>
    <ul class="mui-table-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"  v-for="item in pageData.application"  @click="handleChange()">
        <router-link :to="item.http">
                <span class="icon iconfont" :class="item.iocn" :style="{'color':item.color}">
                    <span class="icon-circle" :style="{'display':item.type ? 'block':'none'}" ></span>
                  <i class="icon iconfont icon-new" :style="{'display':item.newdata ? 'block':'none'}" ></i>
                </span>
        <div class="mui-media-body">{{item.name}}</div>
      </router-link>
      </li>
    </ul>
    <div class="application">线下应用</div>
    <ul class="mui-table-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"  v-for="item in pageData.offlineapplication"   @click="handleChange()">
        <router-link :to="item.http">
                <span class="icon iconfont" :class="item.iocn" :style="{'color':item.color}">
                    <span class="icon-circle" :style="{'display':item.type ? 'block':'none'}" ></span>
                  <i class="icon iconfont icon-new" :style="{'display':item.newdata ? 'block':'none'}" ></i>
                </span>
          <div class="mui-media-body">{{item.name}}</div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import swiper from '@/components/swiper'
  export default {
    props:{
      pageData:{
        type:Object
      }
    },
    data () {
      return {
          swipeBox:''
      }
    },

    created(){
      this.swipeBox = $(window).width()+'px';
    },
    methods: {
      handleChange () {
        console.log(this.$route.params.id);
        this.$parent.getData();
      }
    },
    components:{
      'swipe':swiper
    }
  };
</script>
<style scoped>
  .firmcontainer{
    background-color: #f8f8f8;
  }
  .mui-table-view {
    font-size: 0;
    display: block;
    width: 100%;
    list-style: none;
    background-color: #fff;
    position: relative;
    margin: 0;
    padding: 0;
    -webkit-box-shadow: 0 0 1px rgba(166,159,159,.85);
    box-shadow: 0 0 1px rgba(166,159,159,.85);
  }
  .mui-col-sm-3 {
    width: 25%;
  }

  .mui-table-view-cell {
    position: relative;
    overflow: hidden;
    padding: 11px 15px;
    -webkit-touch-callout: none;
  }
  .mui-table-view-cell {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .mui-table-view-cell {
    font-size: 17px;
    display: inline-block;
    text-align: center;
    background: 0 0;
    margin: 0;
    padding: 11px 15px;
    vertical-align: top;
    color: #797979;
    zoom:1.1;
    padding-bottom: 21.98%;
    height: 0;
  }
  .mui-table-view-cell>a:not(.mui-btn) {
    width: 50%;
    height: auto;
    position: absolute;
    display: block;
    /*overflow: hidden;*/
    margin: -0.19642857142857142rem -0.26785714285714285rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: inherit;
    top: 50%;
    left: 50%;
    margin-top: -0.42857142857142855rem;
    margin-left: -25%;
    padding: 0;

  }
  .mui-table-view-cell .iconfont {
    font-size: 0.5rem;
    position: relative;
  }

  @media screen and (min-width:800px){
    .mui-grid-9 .mui-table-view-cell>a:not(.mui-btn) {
      -moz-transform:scale(2,2);
      -webkit-transform:scale(2,2);
      -o-transform:scale(2,2);
      transform:scale(2,2);
    }
    .mui-table-view-cell .iconfont {
      font-size: 0.3rem;
      position: relative;
    }
  }
  .iconfont {
    font-family: Muiicons;
    font-size: 0.42857142857142855rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
  }

  .mui-media-body {
    overflow: hidden;
  }
  .mui-table-view-cell .mui-media-body {
    font-size: 0.17857142857142858rem;
    line-height: 0.26785714285714285rem;
    display: block;
    width: 100%;
    height: 0.26785714285714285rem;
    margin-top: 0.14285714285714285rem;
    text-overflow: ellipsis;
    color: #292929;
  }
  .icon-circle {
    min-width: 10px;
    text-align: center;
    line-height: 14px;
    display: inline-block;
    position: absolute;
    right: 9px;
    top: 9px;
    background: red;
    color: #fff;
    border-radius: 17px;
    padding: 6px;
    font-size: 16px;
    transform: scale(.7);
  }
  .mui-table-view-cell .icon-circle {
    top: -4px;
    right: -4px;
  }
  .mui-table-view-cell .icon-new {
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 24px;
    color: #FF7043;
  }
  .application {
    margin-left: 0.1724137931034483rem;
    margin-top: 0.1724137931034483rem;
    font-size: 0.22413793103448276rem;
    line-height: 0.5172413793103449rem;
    color: #B0B0B0;
    font-weight: bolder;
  }
</style>

