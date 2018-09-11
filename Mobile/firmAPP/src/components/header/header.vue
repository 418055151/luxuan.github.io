<template>
  <div class="mu-appbar mu-paper-1 waves"  :style="{'display':headerData.headerNavType? 'flex':'none'}">
    <div class="left">
        <button class="mu-icon-button" type="button"  v-on:click="goLink(headerData.titleLeftUrl)">
          <i class="icon iconfont" :class="headerData.titleLeftIcon" :style="{'display':headerData.titleLeftIconType ? 'block':'none'}"></i>
        </button>
    </div>
    <div class="mu-appbar-title">
      <span style="font-size: .32rem" v-if="titlename == ''|| titlename == null">{{headerData.titlename}}</span>
      <span style="font-size: .28rem" v-else="titlename != ''|| titlename != null">{{titlename}}</span>
    </div>
    <div class="right">
      <button class="mu-icon-button" type="button" v-on:click="eve">
        <i class="icon iconfont"  :class="headerData.titleRightIcon" :style="{'display':headerData.titleRightIconType ? 'block':'none'}"></i>
      </button>
    </div>
  </div>
</template>
<script>
  import AppVue from '../../assets/eventBus.js';
  export default {
    props:{
      headerData:{
          type:Object
      },
      titlename:{
          type:String
      }
    },
    created(){
    },
    methods: {
//        返回首页
      goLink:function(url){
        let _this = this;
        _this.$router.push(url);
        _this.$parent.getData()
      },
      eve:function () {
        AppVue.$emit('menu');

      }
    }
  }
</script>
<style scoped>
  .mu-appbar {
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
    color: #fff;
    height: 0.9655172413793104rem;
    padding: 0 0.13793103448275862rem;
    width: 100%;
    z-index: 3;
  }
  .mu-paper-1 {
    -webkit-box-shadow: 0 0.017241379310344827rem 0.10344827586206896rem rgba(0,0,0,.117647), 0 0.017241379310344827rem 0.06896551724137931rem rgba(0,0,0,.117647);
    box-shadow: 0 0.017241379310344827rem 0.10344827586206896rem rgba(0,0,0,.117647), 0 0.017241379310344827rem 0.06896551724137931rem rgba(0,0,0,.117647);
  }
  .mu-appbar, .mu-appbar>.left, .mu-appbar>.right {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 0;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .mu-appbar>.left, .mu-appbar>.right {
    height: 100%;
  }
  .mu-appbar-title {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-left: 0.13793103448275862rem;
    padding-right: 0.13793103448275862rem;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.3448275862068966rem;
    font-weight: 400;
    line-height: 0.9655172413793104rem;
  }
  button, select {
    text-transform: none;
  }
  [type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: button;
  }

  .mu-icon-button {
    position: relative;
    display: inline-block;
    overflow: visible;
    line-height: 1;
    width: 0.8275862068965517rem;
    height: 0.8275862068965517rem;
    border-radius: 50%;
    font-size: 0.41379310344827586rem;
    padding: 0.20689655172413793rem;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    color: inherit;
    text-decoration: none;
    -webkit-transition-duration: .3s;
    -o-transition-duration: .3s;
    transition-duration: .3s;
    -webkit-transition-timing-function: cubic-bezier(.23,1,.32,1);
    -o-transition-timing-function: cubic-bezier(.23,1,.32,1);
    transition-timing-function: cubic-bezier(.23,1,.32,1);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-box-flex: 0;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin: 0;
    outline: 0;
    cursor: pointer;
  }
  .mu-appbar{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
  }
  .mu-appbar,.mu-appbar-title{
    height: .79rem;
    text-align: center;
    line-height: .79rem;
    background-color: #03A9F4;
  }
  .icon{
    font-size:.32rem;
    cursor: inherit;
  }

</style>

