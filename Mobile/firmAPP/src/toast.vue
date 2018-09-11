<template>
  <!-- 全局提示框 -->
  <div v-show="visible" class="dialog-tips dialog-center animJelly">
    <div class="icon iconfont" :class="iconfont" v-if="iconfont"></div>
    {{message}}
  </div>
</template>
<script>
    export default {
      data() {
        return {
          visible: false,
          message: "",
          iconfont:""
        };
      }
    }
</script>
<style >
  .dialog-tips{
    position: fixed;
    z-index: 1000;
    max-width: 5.689655172413793rem;
    padding: 0.20689655172413793rem 0.25862068965517243rem;
    border-radius: 0.06896551724137931rem;
    background-color: rgb(0,0,0);
    opacity: 0;
    color: #fff;
    -webkit-box-shadow: 0rem 0.13793103448275862rem 0.25862068965517243rem 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0rem 0.13793103448275862rem 0.25862068965517243rem 0 rgba(0, 0, 0, 0.3);
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.20689655172413793rem;
  }
  .dialog-tips .iconfont{
    font-size: 0.4482758620689655rem;
    margin: 0 auto 0.1724137931034483rem;
  }
  .dialog-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  .animJelly{
    -webkit-animation-name: animScale;
    animation-name: animScale;
    -webkit-animation-duration: 0.25s;
    animation-duration: 0.25s;
    animation-fill-mode:forwards;
  }
  @-webkit-keyframes animScale {
    0% { opacity: 0}
    100% { opacity: .8}
  }

  @keyframes animScale {
    0% { opacity: 0}
    100% { opacity: .8}
  }
</style>
