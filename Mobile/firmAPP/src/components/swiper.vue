<template>
  <swiper :options="swiperOption"  ref="mySwiper"  class="swiper-container clearfix">
    <!-- 这部分放你要渲染的那些内容 -->
    <swiper-slide v-for="item in bannerdata.banner" :style="{ backgroundImage: 'url(' + item.img + ')' }">
        <router-link class="swiper-link" :to="item.http"></router-link>
    </swiper-slide>
    <!-- 这是轮播的小圆点 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    props:{
      'bannerdata':{
        type:Object
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {

          speed: 400,
          loop:true,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
          autoplay: {
            disableOnInteraction: false,
          },
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          }
        }
      }
    },
    //定义这个sweiper对象
    computed: {

      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
      //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      this.swiper.slideTo(0, 0, false);
    }

  }
</script>
<style scoped>
  .swiper-container{
    height: 3.5rem!important;
  }
  .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide{
    background-size: 100% 100%;
    height: 3.5rem!important;
  }
  .swiper-link{
    width: 100%;
    height: 100%;
    display: inline-block;
  }
</style>
