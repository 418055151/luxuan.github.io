<template>
  <footer class="footerNavClass mu-paper-round mu-paper"  :style="{'display':footerData.footerNavType ? 'block':'none'}">
    <div class="mu-bottom-nav-shift-wrapper">
      <router-link v-bind:to="'/index/home'" class="mu-buttom-item waves">
        <div class="mu-buttom-item-wrapper" @touchstart="handleChange('home')">
          <div class="mu-ripple-wrapper"></div>
          <i class="mu-bottom-item-icon mu-icon material-icons">home</i>
          <span class="mu-bottom-item-text">首页</span>
        </div>
      </router-link>
      <router-link v-bind:to="'/personalCenter/mine'" class="mu-buttom-item waves">
        <div class="mu-buttom-item-wrapper" @touchstart="handleChange('mine')">
          <div class="mu-ripple-wrapper"></div>
          <i class="mu-bottom-item-icon mu-icon material-icons">person</i>
          <span class="mu-bottom-item-text">我的</span>
        </div>
      </router-link>
      <!--<a class="waves ts-btn">Press me!</a>-->
      <!--<a class="waves ts-btn">Press me!</a>-->
    </div>
  </footer>
</template>

<script>
  export default {
    props:{
      footerData:{
        type:Object
      }
    },
    data () {
      return {
        bottomNav: ''
      }
    },
    methods: {
      handleChange (val) {
        this.$parent.change(val);
      }
    }
  }
</script>
<style>
  .mu-paper {
    -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
    -o-transition: all .45s cubic-bezier(.23,1,.32,1);
    transition: all .45s cubic-bezier(.23,1,.32,1);
    color: rgba(0,0,0,.87);
    background-color: #fff;
    -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
  }
  .mu-paper-round {
    border-radius: 0.034482758620689655rem;
  }
  .mu-buttom-item{
    position: relative;
    min-width: inherit;
    max-width: inherit;
    -webkit-tap-highlight-color:transparent;
  }
  .footerNavClass{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  .mu-bottom-nav{
    height: .79rem;
  }
  .mu-bottom-nav-shift-wrapper {
    height: 100%;
    width: 100%;
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
  .mu-buttom-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    height: 100%;
    color: rgba(0,0,0,.54);
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-decoration: none;
    border: none;
    outline: none;
    -webkit-transition: all .4s cubic-bezier(.445,.05,.55,.95);
    -o-transition: all .4s cubic-bezier(.445,.05,.55,.95);
    transition: all .4s cubic-bezier(.445,.05,.55,.95);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0.10344827586206896rem;
  }

  .mu-buttom-item-wrapper {
    display: block;
    height: 100%;
  }
  .mu-ripple-wrapper {
    overflow: hidden;
  }
  .mu-circle-ripple, .mu-ripple-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .mu-bottom-item-icon {
    display: block;
    margin: auto;
    -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
    -o-transition: all .45s cubic-bezier(.23,1,.32,1);
    transition: all .45s cubic-bezier(.23,1,.32,1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    width: 0.41379310344827586rem;
  }

  .mu-bottom-item-text {
    display: block;
    text-align: center;
    font-size: 0.20689655172413793rem;
    -webkit-transition: all .4s cubic-bezier(.23,1,.32,1),color .3s,font-size .3s;
    -o-transition: all .4s cubic-bezier(.23,1,.32,1),color .3s,font-size .3s;
    transition: all .4s cubic-bezier(.23,1,.32,1),color .3s,font-size .3s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .active .mu-bottom-item-icon,.active .mu-bottom-item-text{
    color: #03A9F4;
  }
  .material-icons{
    width: .38rem;
    font-size: .4rem;
  }
  .mu-buttom-item .mu-bottom-item-text{
    font-size: .18rem;
  }
  .mu-bottom-item-active .mu-bottom-item-text {
    font-size: .2rem;
  }

</style>

