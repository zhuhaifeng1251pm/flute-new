<template>
    <div class="agent">
        <DetailsTop/>
        <section>
            <div class="top">
                <h4>授权书</h4>
                <img src="http://pf9cvp4yn.bkt.clouddn.com/authorize_03.png" alt="">
            </div>
            <div class="bottom">
                <h4>肺笛科技奖项</h4>
                <ul>
                    <li>{{`2007 年 Frost&Sullivan 的“卓越技术奖”`}}</li>
                    <li>2009/10 年度科普：“年度最佳创新”</li>
                    <li>2010 MD+DI:"关注的前 50 家企业"高级护理和睡眠呼吸医学杂志</li>
                    <li>2010年技术观察奖</li>
                    <li>{{`2011 年 Frost&Sullivan 的“肺器械年度创业公司奖”`}}</li>
                    <li>2012 年世界卫生组织，医疗设备创新的卫生技术汇编——低资源设置。</li>
                    <li>2015 年联合国援助、“结核病诊断，目前”</li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
import DetailsTop from "./DetailsTop";
export default {
  name: "agentinfo",
  components: {
    DetailsTop
  }
};
</script>
<style lang="scss" scoped>
.agent {
  font-size: 0.2rem;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f3f3f3;
  section {
    background-color: #f3f3f3;
    padding-top: 0.5rem;
    h4 {
      width: 95%;
      margin: 0 auto;
      font-size: 0.24rem;
      line-height: 0.24rem;
      border-left: 4px solid #35d4a0;
      padding: 0 0.3rem;
      margin-bottom: 0.35rem;
    }
    .top {
      img {
        width: 98%;
        margin: 0 auto;
        margin-bottom: 0.3rem;
      }
    }
    .bottom {
      width: 100%;
      ul {
        width: 100%;
        li {
          width: 95%;
          margin: 0 auto;
          line-height: 0.5rem;
          list-style: none;
          padding-left: 0.4rem;
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/authorize-point_07.png);
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 1.5%;
        }
      }
    }
  }
}
</style>

