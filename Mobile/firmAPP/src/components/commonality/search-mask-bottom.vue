<template>
  <div>
    <div class="search-mask">
      <div class="m-search-page"  :class="imageTools?'':'z-open'"  style="display: block; bottom: 0; width: 100%;">
        <slot></slot>
      </div>
    </div>
    <div class="m-search-mask" :class="imageTools?'mask-open':''"  @touchstart="closemenu"></div>
  </div>
</template>
<script>
    export default {
        name: 'search-mask-bottom',
        data () {
            return {
              imageTools:false
            }
        },
        methods: {
          closemenu:function () {
            this.imageTools = !this.imageTools;
          }
        }
    }
</script>
<style scoped>

  .search-mask{
    z-index: 900;
  }
  .m-search-mask{
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
  .m-search-page{
    display: block;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 912;
    width: 100%;
    -webkit-transition: all .5s ease;
  }
  .m-search-mask.mask-open{
    -webkit-transition: -webkit-transform .5s ease;
    opacity: 1;
    z-index: 910;
  }
  .search-mask .m-search-page.z-open{
    -webkit-transition: -webkit-transform .5s ease;
    -webkit-transform: translate3d(0,100%,0);
  }
</style>
