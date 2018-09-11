<template>
<!--  <scroller ref="my_scroller" style="padding-top: 4.29rem;padding-bottom: .8rem;width: 100%;z-index: 10;background: white;">
    <div class="Goodcomments">
      <h4>精彩评论</h4>
      <ul>
        <li class="comments-item">
          <div class="item-cotn">
            <a class="item-left" href="javascript:void(0);">
              <img src="https://bpic.588ku.com/element_banner/20/18/06/5b6b7ede5528e903d66ce72bf726e5db.jpg">
            </a>
            <div class="item-right">
              <i class="icon iconfont icon-zan"></i>
              <h5>欧尼酱</h5>
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
      </ul>
    </div>
  </scroller>-->
  <div class="container" style="position: fixed;width: 100%;top: 4.29rem;left: 0;bottom: .79rem;">

    <!--对于scroller默认高度总是占满父容器，虽然可以使用属性设置高度-->
    <!--但在用一个div包住4会更简单点-->
    <div style="" id="container">

      <!--scroller组件定位方式用relative 否则会溢出父容器-->
      <scroller
        class="scroller"
        :on-refresh="refresh"
        :on-infinite="infinite"
        ref="my_scroller">
        <div class="Goodcomments">
          <h4>精彩评论</h4>
          <ul>
            <li class="comments-item" v-for="(item, index) in items">
              <div class="item-cotn">
                <a class="item-left" href="javascript:void(0);">
                  <img src="https://bpic.588ku.com/element_banner/20/18/06/5b6b7ede5528e903d66ce72bf726e5db.jpg">
                </a>
                <div class="item-right">
                  <i class="icon iconfont icon-zan"></i>
                  <h5>欧尼酱</h5>
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
          </ul>
        </div>
      </scroller>
    </div>
  </div>

</template>
<script>
    export default {
        name: 'name',
        data () {
            return {
              items: []
            }
        },
      mounted() {
        for (let i = 1; i <= 20; i++) {
          this.items.push(i)
        }
      },
        methods: {
          refresh(done) {
            this.items = [1, 2, 3, 4, 5, 6].map(() => parseInt(Math.random() * 10))
            done()
          },
          infinite(done) {
//            this.items = this.items.concat([12, 3, 4, 42,])
            done()
          },
          onItemClick(index, item) {
            console.log(index)
          }



        }
    }
</script>
<style scoped>
  .container {
    position: fixed;
    width: 100%;
    top: 4.29rem;
    right: 0;
    bottom: 0.79rem;
    left: 0;
    background: white;
  }
  #container{
    position: absolute;
    top: 0;
    right: 0;
    bottom:0;
    left: 0;
    display: block;
  }

  .row {
    height: 100px;
    width: 100px;
    background: deepskyblue;
    margin: 10px;
  }

  .scroller {
    position: relative;
  }






.Goodcomments{
  padding: 15px 20px;
}
.Goodcomments h4 {
  font-size: 0.27586206896551724rem;
  font-weight: 700;
  color: #000;
}
.comments-item{
  position: relative;
  display: block;
  padding-top: 0.1724137931034483rem;
}

.item-cotn {
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
.item-cotn .item-right {
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
.item-cotn .item-right h5{
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
</style>
