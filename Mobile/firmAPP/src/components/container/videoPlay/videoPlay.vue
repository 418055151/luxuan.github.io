<template>
  <div>
    <div class="video-container">
      <button type="button" class="mu-icon-button">
        <i class="icon iconfont icon-zuo"></i>
      </button>
      <video></video>
    </div>
    <div class="video-nav">
      <router-link class="nav-item" :to="{name: 'courseDescription'}" tag="div"   @mouseover.native="overTag('courseDescription')">课程介绍</router-link>
      <router-link class="nav-item" :to="{name: 'comments'}" tag="div"  @mouseover.native="overTag('comments')">评论</router-link>
      <div class="nav-tap"><i class="icon iconfont icon-zan"></i>123</div>
      <div class="nav-tap"><i class="icon iconfont icon-zan"></i>123</div>
    </div>
    </scroller>
    <router-view></router-view>
    <footer class="commentsTool" v-if="footerType">
      <div class="comments-options"  v-if="!inputShow">
        <span class="say " @touchstart="showCommentsInput"><i class="icon iconfont icon-wenyishengtiwen"></i>我来说一说...</span>
        <span><i class="icon iconfont icon-pinglun"></i>{{pinglun}}</span>
        <span><i class="icon iconfont icon-zan"></i>{{iconzan}}</span>
      </div>
      <div class="comments-input" v-if="inputShow">
        <v-edit-div @inputval="inputval"></v-edit-div>
        <div class="submit-btn" :class="{ active: allTrue}" @touchstart="submitbtn">发布</div>
      </div>
    </footer>
  </div>
</template>
<script>
  import veditdiv from '@/components/container/discuss/v-edit-div'
  export default {
        name: 'name',
        data () {
            return {
              "pinglun":760,         //评论数
              "iconzan":76812,       //点赞数
              "inputShow":false,     //是否显示评论框
              "comments":null,      //评论的内容
              "allTrue":false,       //提交按钮的状态
              "footerType":false
            }
        },
      mounted() {
        if(this.$route.name == 'comments'){
            this.footerType = true
        }else if(this.$route.name == 'courseDescription')
        {
          this.footerType = false
        }
      },
        methods: {
          inputval:function (val) {
            this.comments = val;
            if(this.comments.length > 0)
            {
              this.allTrue = true;
            }else {
              this.allTrue = false;
            }
          },
          showCommentsInput:function () {
            this.inputShow = true;
          },
          submitbtn:function () {
            if(!this.allTrue)
            {
              this.$toast('还没有输入任何数据',1500);
              return false
            }else {
              alert(this.comments);
              this.allTrue = false;
//                  this.comments = null;  提交以后再清空
              this.inputShow = false;
            }
          },
          maskhide:function () {
            this.inputShow = false;
            console.log(this.comments)
          },
          overTag:function (type) {
            if(type == 'courseDescription')
            {
                this.footerType = false;
            }else if(type == 'comments')
            {
              this.footerType = true;
            }
          }
        },
      components:{
        'v-edit-div':veditdiv
      }
    }
</script>
<style scoped>
.video-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  background: #ddd;
  z-index: 899;
}
.mu-icon-button{
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
  transition-duration: .3s;
  -webkit-transition-timing-function: cubic-bezier(.23,1,.32,1);
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
  z-index: 99;
}
.icon{
  font-size: .32rem;
  cursor: inherit;
  color: #AAAAAA;
}
video{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
  .video-nav{
    position: fixed;
    top:3.5rem;
    left: 0;
    width: 100%;
    display: flex;
    height: 0.79rem;
    line-height: 0.79rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 899;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    box-shadow: 0 1px 3px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    background: white;
    margin-bottom: 5px;
  }
  .video-nav div{
    text-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #999;
    font-size: 14px;
    font-weight: bold;
  }
  .video-nav div.active{
    color: #03a9f4;
  }
  .video-nav div .iconfont{
    padding-right: 5px;
    vertical-align: middle;
  }
  .video-nav div.nav-tap{

  }



.commentsTool{
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
  box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
  background: #FFFFFF;
  z-index: 90;
}
.commentsTool .comments-options,.commentsTool .comments-input{
  color: #302e2e;
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
  min-height: .79rem;
  margin: 0 0.14285714285714285rem;
}
.commentsTool .comments-options span{
  text-align: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 0.17857142857142858rem;
  line-height: .79rem;
}
.commentsTool .comments-options span.say{
  -webkit-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
  background: #F2F2F2;
  font-size: 0.21428571428571427rem;
  padding: 0.14285714285714285rem 0.10714285714285714rem;
  border-radius: 0.625rem;
  text-align: left;
  line-height: inherit;
}
.commentsTool .comments-options span.say .icon-wenyishengtiwen{
  padding: 0 0.08928571428571429rem 0 0.17857142857142858rem;
  font-size: 0.21428571428571427rem;
  vertical-align: unset;
}
.commentsTool .comments-options .iconfont{
  padding-right: 0.08928571428571429rem;
  font-size: 0.35714285714285715rem;
  vertical-align: middle;
}
.commentsTool .comments-input{
  margin: 0.14285714285714285rem;
  height: auto;
  min-height: inherit;
}
.commentsTool .comments-input .inupt-box{
  -webkit-box-flex: 4;
  -ms-flex: 4;
  flex: 4;
  background: #F2F2F2;
  font-size: 0.21428571428571427rem;
  padding: 0.07142857142857142rem 0.10714285714285714rem;
  border-radius: 0.17857142857142858rem;
  text-align: left;
  line-height: inherit;
  min-height: 0.26785714285714285rem;
  max-height: 1.25rem;
  width: 4.375rem;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-user-modify: read-write-plaintext-only;
  -moz-user-modify: read-write-plaintext-only;
  user-modify: read-write-plaintext-only;
}
.commentsTool .comments-input .inupt-box:focus{
  outline:none
}
.commentsTool .comments-input .inupt-box:empty:before{
  content: attr(data-placeholder);
  color: #ddd;
  text-indent: 0.35714285714285715rem;
}
.commentsTool .comments-input .submit-btn{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 0.23214285714285715rem;
  font-weight: bold;
  justify-content: space-around;
  align-self: flex-end;
  line-height: 0.42857142857142855rem;
  transition: all 300ms;
}
.commentsTool .comments-input .active{
  transition: all 300ms;
  color: #03A9F4;
}
.m-search-mask{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 89;
  background: rgba(0,0,0,0);
  opacity: 0;
  -webkit-transition: -webkit-transform .5s ease;
}
.m-search-mask.mask-open{
  -webkit-transition: -webkit-transform .5s ease;
  opacity: 1;
}

</style>
