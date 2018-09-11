<template>
  <div class="search-mask">
    <div class="m-search-page" :class="[menu ? 'z-open':'']" style="display: block; top: 0px; width: 100%;">
      <slot></slot>
    </div>
    <div class="m-search-mask" :class="[menu ? 'mask-open':'']"  @touchstart="closemenu"></div>
  </div>
</template>
<script>
    export default {
        name: 'name',
        data () {
            return {
              menu:false
            }
        },
        methods: {
          closemenu:function () {
            this.menu = !this.menu;
          }
        }
    }
</script>
<style scoped>
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
    background-color: #FFFFFF;
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

</style>
