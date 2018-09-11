<template>
  <section class="firmcontainer">
    <h4 class="coures-title">1月25日 李老师培训2018年趋势展望</h4>
    <div class="coures-describe">
      <p>你好!</p>
      <div> 欢迎参加"企业大学课程评价意见"的调查工作!此次调查是本公司为了加强各企业学员的学习体验交流而专门设计的,圣旨在通过对课程满意度的调查对课程的相关建设做出改进.希望你抽出一点时间积极配合我们的调查工作,谢谢你的参与.</div>
    </div>
    <div class="form-item">
        <div class="list-item">
          <h4>一,解决公司问题紧迫度.</h4>
          <div class="form-vessel">
            <div class="vessel">
              <div class="vessel-50"></div>
              <div class="vessel-box">很差 ( 1 )</div>
              <div class="vessel-box text-right">很高 ( 10 )</div>
            </div>
            <div class="vessel">
              <div class="vessel-50 valuenumber">
                {{value1}}
              </div>
              <div class="vessel-box slider">
                <el-slider v-model="value1" :min="1" :max="10"></el-slider>
              </div>
            </div>
          </div>
        </div>

        <div class="list-item">
          <h4>二,内容原创度.</h4>
          <div class="form-vessel">
            <div class="vessel">
              <div class="vessel-50"></div>
              <div class="vessel-box">很差 ( 1 )</div>
              <div class="vessel-box text-right">很高 ( 10 )</div>
            </div>
            <div class="vessel">
              <div class="vessel-50 valuenumber">
                {{value1}}
              </div>
              <div class="vessel-box slider">
                <el-slider v-model="value2" :min="1" :max="10"></el-slider>
              </div>
            </div>
          </div>
        </div>

        <div class="list-item">
          <h4>三.与本岗业务关联度</h4>
          <div class="radiogroup">
            <el-radio-group v-model="value3">
              <el-radio :label="1">很差</el-radio>
              <el-radio :label="2">比较差</el-radio>
              <el-radio :label="3">一般</el-radio>
              <el-radio :label="4">很好</el-radio>
              <el-radio :label="5">非常好</el-radio>
            </el-radio-group>
          </div>
        </div>


        <div class="list-item">
          <h4>四.内容详实,实操性强</h4>
          <div class="radiogroup">
            <el-radio-group v-model="value4">
              <el-radio :label="1">很差</el-radio>
              <el-radio :label="2">比较差</el-radio>
              <el-radio :label="3">一般</el-radio>
              <el-radio :label="4">很好</el-radio>
              <el-radio :label="5">非常好</el-radio>
            </el-radio-group>
          </div>
        </div>


        <div class="list-item">
          <h4>五.思路清晰,逻辑性强.具有启发性</h4>
          <div class="radiogroup">
            <el-radio-group v-model="value5">
              <el-radio :label="1">很差</el-radio>
              <el-radio :label="2">比较差</el-radio>
              <el-radio :label="3">一般</el-radio>
              <el-radio :label="4">很好</el-radio>
              <el-radio :label="5">非常好</el-radio>
            </el-radio-group>
          </div>
        </div>


        <div class="list-item">
          <h4>六.观点明确.难度适宜</h4>
          <div class="radiogroup">
            <el-radio-group v-model="value6">
              <el-radio :label="1">很差</el-radio>
              <el-radio :label="2">比较差</el-radio>
              <el-radio :label="3">一般</el-radio>
              <el-radio :label="4">很好</el-radio>
              <el-radio :label="5">非常好</el-radio>
            </el-radio-group>
          </div>
        </div>

        <div class="list-item">
          <h4>七.表达清晰自然.语音洪亮</h4>
          <div class="form-vessel">
            <div class="vessel">
              <div class="vessel-50"></div>
              <div class="vessel-box">很差 ( 1 )</div>
              <div class="vessel-box text-right">很高 ( 10 )</div>
            </div>
            <div class="vessel">
              <div class="vessel-50 valuenumber">
                {{value1}}
              </div>
              <div class="vessel-box slider">
                <el-slider v-model="value7" :min="1" :max="10"></el-slider>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <h4>八.仪表精神状态良好</h4>
          <div class="form-vessel">
            <div class="vessel">
              <div class="vessel-50"></div>
              <div class="vessel-box">很差 ( 1 )</div>
              <div class="vessel-box text-right">很高 ( 10 )</div>
            </div>
            <div class="vessel">
              <div class="vessel-50 valuenumber">
                {{value1}}
              </div>
              <div class="vessel-box slider">
                <el-slider v-model="value8" :min="1" :max="10"></el-slider>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <h4>九.时间把握良好</h4>
          <div class="form-vessel">
            <div class="vessel">
              <div class="vessel-50"></div>
              <div class="vessel-box">很差 ( 1 )</div>
              <div class="vessel-box text-right">很高 ( 10 )</div>
            </div>
            <div class="vessel">
              <div class="vessel-50 valuenumber">
                {{value1}}
              </div>
              <div class="vessel-box slider">
                <el-slider v-model="value9" :min="1" :max="10"></el-slider>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <h4>十,现场应变灵活.思维敏捷</h4>
          <div class="form-vessel">
            <div class="vessel">
              <div class="vessel-50"></div>
              <div class="vessel-box">很差 ( 1 )</div>
              <div class="vessel-box text-right">很高 ( 10 )</div>
            </div>
            <div class="vessel">
              <div class="vessel-50 valuenumber">
                {{value1}}
              </div>
              <div class="vessel-box slider">
                <el-slider v-model="value10" :min="1" :max="10"></el-slider>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <h4>十一.PPT内容架构合理.逻辑清晰.内容详略得当</h4>
          <div class="form-vessel">
            <div class="vessel">
              <div class="vessel-50"></div>
              <div class="vessel-box">很差 ( 1 )</div>
              <div class="vessel-box text-right">很高 ( 10 )</div>
            </div>
            <div class="vessel">
              <div class="vessel-50 valuenumber">
                {{value1}}
              </div>
              <div class="vessel-box slider">
                <el-slider v-model="value11" :min="1" :max="10"></el-slider>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <h4>十二.PPT展示清晰.整洁.美观</h4>
          <div class="form-vessel">
            <div class="vessel">
              <div class="vessel-50"></div>
              <div class="vessel-box">很差 ( 1 )</div>
              <div class="vessel-box text-right">很高 ( 10 )</div>
            </div>
            <div class="vessel">
              <div class="vessel-50 valuenumber">
                {{value1}}
              </div>
              <div class="vessel-box slider">
                <el-slider v-model="value11" :min="1" :max="10"></el-slider>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="submit-btn">
      <a href="javascript:void(0);">提交</a>
    </div>
  </section>
</template>
<script>
    export default {
        name: 'name',
        data () {
            return {
                'value1':1,
                'value2':1,
                'value3':1,
                'value4':1,
                'value5':1,
                'value6':1,
                'value7':1,
                'value8':1,
                'value9':1,
                'value10':1,
                'value11':1,
                'value12':1
            }
        },
        methods: {
          formatTooltip(val) {
            return val / 10;
          }
      }
    }
</script>
<style scoped>
.coures-title{
  width: 100%;
  height: 34px;
  line-height: 34px;
  padding: 0 10px;
  text-align: center;
  background: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.coures-describe{
  padding: 10px 15px;
  background: #f7f7f7;
  width: 100%;
  height: auto;
}
.coures-describe p{
  font-size: 14px;
}
.coures-describe div{
  line-height: 28px;
  font-size: 14px;
  text-indent: 24px;
}
.form-item{
  background: #f7f7f7;
  padding: 10px 15px;
  padding-top: 20px;
}
.list-item{
  margin-bottom: 10px;
}
.form-vessel{
  background: white;
  padding:4px 10px 4px 0;
  margin-top: 10px;
}
.vessel{
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.vessel .vessel-50{
  width: 50px;
  line-height: 34px;
  text-align: center;
  color: #03A9F4;
}
.vessel div.vessel-box{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 10px;
  color: #C4BCC4;
  line-height: 34px;
}
  .text-right{
    text-align: right;
  }
.vessel div.slider{
    margin: 5px 15px;
  }
.el-slider__runway{
  margin: 24px auto;
}
.vessel .valuenumber{
    line-height: 50px;
  font-weight: bolder;
  }
  .radiogroup{
    padding: 10px 8px;
    background: white;
    margin-top: 10px;
  }
.el-radio-group{
  display: block;
}
.el-radio{
  display: block;
  height: 34px;
  line-height: 34px;
  margin-left: 15px;
  color: #C4BCC4;
}
.el-radio+.el-radio{
  margin-left: 15px;
}
.el-slider__button-wrapper{
  z-index: 0!important;
}
  .submit-btn{
    height: 1.293103448275862rem;
    text-align: center;
  }
.submit-btn a{
  display: inline-block;
  width: 90%;
  background: none repeat scroll 0 0 #03A9F4;
  border-radius: 0.08620689655172414rem;
  color: white;
  padding: 0.1724137931034483rem;
  margin: 0.27586206896551724rem auto;
}
</style>
