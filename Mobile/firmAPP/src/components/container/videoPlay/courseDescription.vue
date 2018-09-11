<template>
    <scroller ref="my_scroller" style="padding-top: 4.29rem;width: 100%;z-index: 10;background: white;">
      <div class="Description">
        <h4>房地产企业总经理、董事长总经理、董事长;房地房地产企业总经理、董事长总经理、董事长;房地房地产企业总经理、董事长总经理、董事长;房地</h4>
        <div class="courseDescription " :class="[Descriptiontype?'':'height1-5rem']">
          网信事业发展为了谁？对于这一根本问题，习近平早已给出清晰答案
          如果你无法简洁的表达你的想法，轻点鼠标，麦田里的虫情、苗情、墒情和灾情一目了然；农民足不出户，就可将本地土特产品销往全国各地……随着“互联网＋农业”进村入户，传统的农产品生产、运输和销售模式悄然生变。轻点鼠标，麦田里的虫情、苗情、墒情和灾情一目了然；农民足不出户，就可将本地土特产品销往全国各地……随着“互联网＋农业”进村入户，传统的农产品生产、运输和销售模式悄然生变。轻点鼠标，麦田里的虫情、苗情、墒情和灾情一目了然；农民足不出户，就可将本地土特产品销往全国各地……随着“互联网＋农业”进村入户，传统的农产品生产、运输和销售模式悄然生变。
          <p @click="showDescription" v-if="!Descriptiontype"><i class="icon iconfont icon-you"></i></p>
        </div>
        <h4 style="margin-top: 8px">课程须知</h4>
        <div class="Courseinfo">
          轻点鼠标，麦田里的虫情、苗情、墒情和灾情一目了然；农民足不出户，就可将本地土特产品销往全国各地……随着“互联网＋农业”进村入户，传统的农产品生产、运输和销售模式悄然生变。轻点鼠标，麦田里的虫情、苗情、墒情和灾情一目了然；农民足不出户，就可将本地土特产品销往全国各地……随着“互联网＋农业”进村入户，传统的农产品生产、运输和销售模式悄然生变。轻点鼠标，麦田里的虫情、苗情、墒情和灾情一目了然；农民足不出户，就可将本地土特产品销往全国各地……随着“互联网＋农业”进村入户，传统的农产品生产、运输和销售模式悄然生变。
        </div>
      </div>
    </scroller>
</template>
<script>
  import { mapState,mapActions} from 'vuex'
  import { store} from 'vuex'
  import Vue from "vue"
    export default {
        name: 'name',
        data () {
            return {
              Descriptiontype:''
            }
        },
      created(){
            this.Descriptiontype = this.$store.state.Descriptiontype;
      },
        methods: {
          showDescription(){
            this.$store.state.Descriptiontype = true;
            this.Descriptiontype = true;
            console.log(this.$store.state.Descriptiontype)

          }
        }
    }
</script>
<style scoped>
.Description{
  padding: 15px 20px;
  background: white;
}
  .Description h4{
    position: relative;
    font-size: 14px;
    line-height: 26px;
    color: #101010;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .Description .courseDescription{
    margin-top: 6px;
    font-size: 12px;
    color: #333;
    line-height: 26px;
    overflow: hidden;
    -webkit-transition: all .4s;
    transition: all .4s;
    height: auto;
    position: relative;
  }
  .Description .height1-5rem{
    height: 2rem;
    -webkit-transition: all .4s;
    transition: all .4s;
  }
  .Description p{
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: #aaaaaa;
    border-bottom: 1px solid #E3E1E3;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 50px;
    background-image: -webkit-gradient(linear,left top, left bottom,from(rgba(255,255,255,0)),color-stop(70%, #fff));
    background-image: linear-gradient(-180deg,rgba(255,255,255,0) 0%,#fff 70%);
  }
  .Description p i{
    display: inline-block;
    transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    position: absolute;
    top: 25px;
    color: #000;
  }
  .Courseinfo{
    margin-top: 6px;
    font-size: 12px;
    line-height: 26px;
    color: #999;
  }
</style>
