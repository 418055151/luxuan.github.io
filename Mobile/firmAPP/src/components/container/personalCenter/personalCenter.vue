<template>
  <section class="firmcontainer">
    <div class="info">
      <h1 class="info-tit border-bottom">
        <img class="info-tit-logo" :src="pageData.userimg">
        <div class="info-tit-name">
          <p class="username">{{pageData.username}}</p>
          <p class="userdepartment">{{pageData.department}}</p>
        </div>
        <a href="javascript:void(0);" class="info-tit-link" data-name="chatList">
          <span class="info-tit-point">1</span>
          <i class="info-tit-msg icon iconfont icon-taolun"></i>
        </a>
      </h1>
      <ul class="info-list">
        <li class="info-item">
          <a href="javascript:void(0);" class="info-item-link" title="我的成长" data-name="growth">
            <i class="icon iconfont icon-wodechengchangzhangdan"></i>
            <p class="info-item-des">我的成长</p>
          </a>
        </li>
        <li class="info-item">
          <a href="javascript:void(0);" class="info-item-link" title="我的选修" data-name="mytake">
            <i class="icon iconfont icon-wodexuanxiuke"></i>
            <p class="info-item-des">我的选修</p>
          </a>
        </li>
        <li class="info-item">
          <a href="javascript:void(0);" class="info-item-link" title="精品课程包" data-name="excellentcourse">
            <i class="icon iconfont icon-jingpinkecheng"></i>
            <p class="info-item-des">精品课程包</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="lists">
      <ul class="list">
        <li class="list-item border-bottom arrow-right">
          <a href="javascript:void(0);" class="list-item-link" title="修改账号" data-name="myBalance">
            <i class="icon iconfont icon-shoujihao"></i>
            <span class="list-item-name">修改账号</span>
            <span class="list-item-des">{{pageData.account}}</span>
          </a>
        </li>
      </ul>
      <ul class="list">
        <li class="list-item border-bottom arrow-right">
          <a href="javascript:void(0);" class="list-item-link" title="更改密码" data-name="myBalance">
            <i class="icon iconfont icon-mima"></i>
            <span class="list-item-name">更改密码</span>
          </a>
        </li>
      </ul>
      <ul class="list">
        <li class="list-item border-bottom">
          <a href="javascript:void(0);" class="list-item-link" title="退出登录" data-name="myBalance">
            <i class="icon iconfont icon-tuichudenglu"></i>
            <span class="list-item-name">退出登录</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
    export default {
        name: 'personalCenter',
        data () {
            return {}
        },
        props:{
          pageData:{
            type:Object
          }
        },
        methods: {}
    };
</script>
<style scoped>
.firmcontainer{
  width: 100%;
  display: block;
  padding: 0;
}
.info {
  width: 100%;
  position: relative;
  padding-top: .79rem;
  margin-bottom: 10px;
  background-color: #fff;
}
.info-tit {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: normal;
}
.info-tit {
  height: 1.8rem;
  line-height: 1.8rem;
  padding: 0 1.2rem 0 .25rem;
}
.border-bottom {
  position: relative;
  margin: 0;
}
.info-tit-logo {
  position: absolute;
  top: 50%;
  margin-top: -.675rem;
  background-color: #eee;
  border-radius: 50%;
  height: 1.35rem;
  width: 1.35rem;

}
.info-tit-name {
  font-size: 0;
  margin-left: 1.5rem;
  height: auto;
  margin-top: .4rem;
}
.info-tit-name p{
  line-height: .55rem;
}
.username{
  font-size: .32rem;
}
.userdepartment{
  font-size: .24rem;
  font-weight: 100;
}
.info-tit-link {
  position: absolute;
  top: -0.3rem;
  right: .015rem;
  color: #03A9F4;
  padding: 0 30px;
}
.info-tit-point {
  /* display: none; */
  position: absolute;
  right: 0.18rem;
  top: 0.56rem;
  line-height: 1;
  background: #FE3824;
  border-radius: .3rem;
  z-index: 10008;
  color: #fff;
  font-size: .22rem;
  padding: .03rem .1rem;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transform: translate(-50%,0);
  transform: translate(-50%,0);
}
.info-tit-msg {
  font-size: .42rem;
}

.info-list {
  overflow: hidden;
}
.info-item {
  width: 33.33333%;
  text-align: center;
  float: left;
}
.info-item-link {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #999999;
  padding: 0.2413793103448276rem 0;
  padding-top: 0;
}
.iconfont {
  font-size: 0.41379310344827586rem;
  vertical-align: middle;
}

.info-item-des {
  font-size: 0.2413793103448276rem;
}
.list {
  background-color: #fff;
  margin-bottom: 0.1724137931034483rem;
}
.list--first {
  margin-bottom: 0;
}
.list-item {
  position: relative;
  margin-left: 0.3448275862068966rem;
  height: 0.7586206896551724rem;
  line-height: 0.7586206896551724rem;
}

.list-item.arrow-right:before {
  position: absolute;
  top: 0.39655172413793105rem;
  right: 0.3448275862068966rem;
  margin-top: -0.08620689655172414rem;
  border-width: 0.034482758620689655rem 0.034482758620689655rem 0 0;
  border-style: solid;
  width: 0.1206896551724138rem;
  height: 0.1206896551724138rem;
  color: #ccc;
  -webkit-transform: rotate(45deg);
  content: "";
}

.border-bottom:after {
  bottom: 0;
}
.list-item-link {
  display: inline-block;
  color: #999999;
  width: 100%;
  height: 0.7586206896551724rem;
  line-height: 0.7586206896551724rem;
}
.list-item-name{
  vertical-align: middle;
  font-size: 0.20689655172413793rem;
}
.list-item-des {
  position: absolute;
  left: 50%;
  margin-left: -0.7241379310344828rem;
  font-size: 0.1724137931034483rem;
}
.icon-shoujihao {
  vertical-align: middle;
  line-height: 0.5172413793103449rem;
  color: #fff;
  background: #00cdfa;
  padding: 0.10344827586206896rem;
  font-size: 0.2413793103448276rem;
  border-radius: 0.06896551724137931rem;
}
.icon-mima{
  vertical-align: middle;
  line-height: 0.5172413793103449rem;
  color: #fff;
  background: #ff9800;
  padding: 0.10344827586206896rem;
  font-size: 0.2413793103448276rem;
  border-radius: 0.06896551724137931rem;
}
.icon-tuichudenglu{
  vertical-align: middle;
  line-height: 0.5172413793103449rem;
  color: #fff;
  background: #03a9f4;
  padding: 0.10344827586206896rem;
  font-size: 0.2413793103448276rem;
  border-radius: 0.06896551724137931rem;
}

</style>
