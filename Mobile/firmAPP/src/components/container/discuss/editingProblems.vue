<template>
  <section class="firmcontainer">
    <div class="main-part">
      <div class="problem-title">
        <input type="text" v-model="title" @input="inputChange" :class="titleType?'active':''" placeholder="请输入问题标题..." />
      </div>
      <div class="problem-describe">
        <textarea type="text" v-model="describe" @input="describeChange" placeholder="请经量清晰完善的描述问题,以便大家给予专业的回复"></textarea>
        <span class="words" :style="{'color':describeType?'#fff':'red'},{'background':describeType?'#03a9f4':'#bac6cc'}">{{words}}</span>
      </div>
    </div>
    <el-upload></el-upload>
    <footer class="commentsTool">
      <div class="comments-options">
          <span @touchstart="gitimage">
            <i data-v-20553fcc="" class="icon iconfont icon-tupian"></i>
          </span>
          <span>
            <i data-v-20553fcc="" class="icon iconfont icon-biaoqian"></i>
          </span>
          <span class="say ">
            <a href="javascript:void(0);" class="release" @touchstart="submitTopic">发布</a>
          </span>
      </div>
    </footer>
    <search-mask-bottom  ref="mask">
      <ul>
        <li>
          从手机相册选择<span></span>
        </li>
        <li>
          拍摄
        </li>
        <li class="cancel"  @touchstart="gitimage">取消</li>
      </ul>
    </search-mask-bottom>
  </section>
</template>
<script>
  import elupload from '@/components/container/discuss/elupload'
  import searchmaskbottom from '@/components/commonality/search-mask-bottom.vue';
    export default {
        name: 'name',
        data () {
            return {
              title:'',
              titleType:false,
              describe:'',
              describeType:true,
              words:0
            }
        },
        methods: {
          gitimage:function () {
            this.$refs.mask.closemenu();
          },
          inputChange:function () {
            if(this.title.length == 0 )
            {
                this.titleType = false;
            }else {
                this.titleType = true;
            }
          },
          describeChange:function () {
            if(this.describe.length > 100)
            {
                this.describeType = false;
            }else {
              this.describeType = true;
            }
            this.words = this.describe.length;
          },
          submitTopic:function () {
            if(this.titleType == false)
            {
                this.$toast('请填写标题',1500);
                return false;
            }
            if(this.words == 0)
            {
              this.$toast('话题描述不能为空',1500);
              return false;
            }
            if(this.describeType == false)
            {
              this.$toast('话题描述大于规定字数',1500);
              return false;
            }
            console.log('话题标题 :'+this.title+"****** 话题描述 :"+ this.describe)
            this.$toast('话题标题 :'+this.title+"****** 话题描述 :"+ this.describe,1500);
          }
        },
      components:{
        'el-upload':elupload,
        'search-mask-bottom':searchmaskbottom
      }
    }
</script>
<style scoped>
  html,body{
    background: #fff!important;
    height: 100%;
  }
  .main-part{
    margin: 0.546875rem 0.234375rem 0;
  }

  .problem-title,.problem-describe{
    display: block;
    overflow: hidden;
    margin-bottom: 0.234375rem;
    position: relative;
  }
  .problem-title input{
    position: relative;
    display: block;
    float: right;
    border: none;
    border-radius: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-appearance: none;
    z-index: 10;
    padding: 0.125rem 0.078125rem 0.125rem;
    width: 100%;
    background: transparent;
    color: #DDDDDD;
    border-bottom: 0.015625rem solid #BBBBBB;
    -webkit-transition: all 300ms;
    transition: all 300ms;
  }
  .problem-title input.active{
    -webkit-transition: all 300ms;
    transition: all 300ms;
    border-bottom: 0.015625rem solid #03A9F4;
  }
  .problem-describe textarea{
    position: relative;
    display: block;
    float: right;
    border: none;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-appearance: none;
    z-index: 10;
    padding: 0.125rem 0.3125rem 0.125rem 0.078125rem;
    width: 100%;
    background: #f8f8f8;
    color: #646363;
    min-height: 2.5rem;
    border-radius: 0.0625rem;

  }
  .problem-describe .words{
    position: absolute;
    bottom: 0.078125rem;
    right: 0.078125rem;
    display: inline-block;
    z-index: 11;
    padding: 0rem 0.109375rem;
    background: #03a9f4;
    font-size: 0.125rem;
    color: white;
    border-radius: 0.46875rem;

  }
  .commentsTool{
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    -webkit-box-shadow: 0 0.015625rem 0.09375rem rgba(0,0,0,.117647), 0 0.015625rem 0.0625rem rgba(0,0,0,.117647);
    box-shadow: 0 0.015625rem 0.09375rem rgba(0,0,0,.117647), 0 0.015625rem 0.0625rem rgba(0,0,0,.117647);
    background: #F8F8F8;
    z-index: 90;
    height: .79rem;

  }
  .comments-options{
    color: #302e2e;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    margin: 0 0.14285714285714285rem;
  }
  .commentsTool .comments-options span{
    text-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 0.17857142857142858rem;
    line-height: .79rem;
  }
  .commentsTool .comments-options span.say{
    -webkit-box-flex: 4;
    -ms-flex: 4;
    flex: 4;
    font-size: 0.21428571428571427rem;
    padding: 0.14285714285714285rem 0.10714285714285714rem;
    text-align: right;
    line-height: inherit;
  }
  .commentsTool .comments-options span i{
    color: #DDDDDD;
    font-size: 0.34375rem;
    line-height: .79rem;

  }
  .commentsTool .comments-options span.say a.release{
    font-size: 0.21875rem;
    padding: 0.078125rem 0.234375rem;
    color: #FFFFFF;
    background: #03A9F4;

  }









  .m-search-page ul{
    background: #f1f1f1;
  }
  .m-search-page ul li{
    text-align: center;
    padding: 0.09375rem 0;
    line-height: 0.5rem;
    border-bottom: 0.015625rem solid #f2f0f0;
    background: #fff;
    position: relative;

  }
  .m-search-page ul li.cancel{
    margin-top: 0.15625rem;
    border: none;

  }
  .m-search-page ul li span{
    width: 0.078125rem;
    height: 0.078125rem;
    border-radius: 0.078125rem;
    background: red;
    display: inline-block;
    vertical-align: text-top;
    margin-left: 0.0625rem;

  }
</style>
