<template>
  <section class="firmcontainer">
    <div class="item-list">
      <div class="head">
        <a class="headimg">
          <img src="http://thirdqq.qlogo.cn/g?b=sdk&k=yIJVd1no0g4RUxhxRVia03w&s=140&t=1484889723">
        </a>
        <div class="head-introduce">
          <h4>酱</h4>
          <div class="head-statistical">
            <span><b>04-18</b>发布</span>
            <span><b>32321</b>人阅读</span>
          </div>
        </div>
        <div class="item-title">
          央视网消息：两年前的4月19日，习近平主持召开网络安全和信息化工作座谈会并发表重要讲话。“4·19”讲话勾勒出网络强国的宏观框架，指明了网信事业的发展方向。
        </div>
        <div class="item-introduce">
          习近平在讲话中指出，要通过网络走群众路线。按此要求，增强人民幸福感、推动互联网发展、用好互联网的力量促进社会进步，成为网信工作者的历史使命。两年来，中国网信事业与民生同频共振，取得了极大成就。
          网信事业发展为了谁？对于这一根本问题，习近平早已给出清晰答案：让每一个民众在互联网中得到切实的利益与实惠。
        </div>
        <div class="delineate-figure" style="background: url('https://bpic.588ku.com/element_banner/20/18/05/f8c5ff836c8b879d0ccff20c525fc613.jpg')"></div>
        <div class="delineate-figure" style="background: url('https://bpic.588ku.com/element_banner/20/18/05/f8c5ff836c8b879d0ccff20c525fc613.jpg')"></div>
        <div class="delineate-figure" style="background: url('https://bpic.588ku.com/element_banner/20/18/05/f8c5ff836c8b879d0ccff20c525fc613.jpg')"></div>
        <div class="item-bottom">
          <span class="from">话题来自<b>开发小工具</b></span>
          <span class="comments"><i class="icon iconfont icon-taolun"></i>{{pinglun}}</span>
        </div>
      </div>
      <h2 class="Goodcomments">精彩评论</h2>
      {{comments}}
      <!--精彩评论-->
      <ul>
        <li class="comments-item">
          <div class="item-cotn">
            <a class="item-left" href="javascript:void(0);">
                <img src="https://bpic.588ku.com/element_banner/20/18/06/5b6b7ede5528e903d66ce72bf726e5db.jpg">
            </a>
            <div class="item-right">
                <i class="icon iconfont icon-zan"></i>
                <h4>欧尼酱</h4>
                <div class="head-statistical">
                  <span>事业部</span>
                  <span>03-18</span>
                </div>
                <div class="describe">
                  如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它,
                </div>
            </div>
          </div>
        </li>
        <li class="comments-item">
          <div class="item-cotn">
            <a class="item-left" href="javascript:void(0);">
              <img src="http://thirdqq.qlogo.cn/g?b=sdk&k=yIJVd1no0g4RUxhxRVia03w&s=140&t=1484889723">
            </a>
            <div class="item-right">
              <i class="icon iconfont icon-zan"></i>
              <h4>欧尼酱</h4>
              <div class="head-statistical">
                <span>事业部</span>
                <span>03-18</span>
              </div>
              <div class="describe">
                如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它,
              </div>
            </div>
          </div>
        </li>
        <li class="comments-item">
          <div class="item-cotn">
            <a class="item-left" href="javascript:void(0);">
              <img src="https://bpic.588ku.com/element_banner/20/18/05/f8c5ff836c8b879d0ccff20c525fc613.jpg">
            </a>
            <div class="item-right">
              <i class="icon iconfont icon-zan"></i>
              <h4>欧尼酱</h4>
              <div class="head-statistical">
                <span>事业部</span>
                <span>03-18</span>
              </div>
              <div class="describe">
                如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它,
                如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它,
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="inputShow" @touchstart="maskhide" class="m-search-mask mask-open"></div>
    <footer class="commentsTool">
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
  </section>
</template>
<script>
  import veditdiv from '@/components/container/discuss/v-edit-div'
    export default {
        name: 'name',
        props:{
          pageData:{
            type:Object
          }
        },
        data () {
            return {
                "pinglun":760,         //评论数
                "iconzan":76812,       //点赞数
                "inputShow":false,     //是否显示评论框
                "comments":null,      //评论的内容
                "allTrue":false       //提交按钮的状态
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
          }
        },
      components:{
        'v-edit-div':veditdiv
      }
    }
</script>
<style scoped>
  .firmcontainer{
    width: 100%;
    padding: 0.8103448275862069rem 0.13793103448275862rem;
    background: #fff;
  }
  .item-list .head{
    margin-top: 0.43103448275862066rem;
    position: relative;
    display: block;
  }
  .item-list .head .headimg{
    display: inline-block;
    float: left;
    width: 1.0344827586206897rem ;
    height: 1.0344827586206897rem;
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
    padding-left: 1.1206896551724137rem;
    padding-top: 0.13793103448275862rem;
  }
  .head-introduce h4{
    font-size: 0.20689655172413793rem;
    font-weight: 700;
    line-height: 0.4482758620689655rem;
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
  }
  .delineate-figure{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    height: 0;
    zoom: 1.1;
    vertical-align: top;
    background: no-repeat;
    background-size: 100% 100% !important;
    padding-bottom: 50%;
    margin-bottom: 0.15625rem;
  }
  .item-bottom{
    margin-top: 0.2724137931034483rem;
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
    font-size: 0.27586206896551724rem;
    padding-right: 0.08620689655172414rem;
    color: #BBBBBB;
    vertical-align: middle;
  }
  .Goodcomments{
    font-size: 0.27586206896551724rem;
    font-weight: 700;
    margin-top: 0.43103448275862066rem;
    color: #000;
  }
  .comments-item{
    position: relative;
    display: block;
    padding-top: 0.1724137931034483rem;
  }
  .item-cotn{
    position: relative;
    width: 100%;
    height: auto;
  }
  .item-cotn .item-left{
    display: inline-block;
    float: left;
    width: 0.6896551724137931rem;
    height: 0.6896551724137931rem;
    overflow: hidden;
    border-radius: 50%;
    text-align: center;
  }
  .item-cotn .item-left img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .item-cotn .item-right{
    padding-left: 0.7758620689655172rem;
    padding-top: 0.1104137931034483rem;
  }
  .item-cotn .item-right .icon-zan{
    position: absolute;
    right: 0.08620689655172414rem;
    width: 0.43103448275862066rem;
    height: 0.43103448275862066rem;
    vertical-align: middle;
    text-align: center;
    line-height: 0.43103448275862066rem;
    font-size: 0.3793103448275862rem;
  }
  .item-cotn .item-right h4{
    font-size: 0.20689655172413793rem;
    font-weight: 700;
    line-height: 0.20689655172413793rem;
    color: #101010;
  }
  .item-cotn .item-right .head-statistical{
    display: inline-block;
    line-height: 0.13793103448275862rem;
    font-size: 0.13793103448275862rem;
    color: #9E9E9E;
  }
  .item-cotn .item-right .head-statistical span{
    padding-right: 0.1724137931034483rem;
  }
  .describe{
    margin-top: 0.08620689655172414rem;
    font-size: 0.20689655172413793rem;
    color: #333;
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
