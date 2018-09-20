<template>
    <div class="news">
        <header>
            <Top :title='title' :handleBack='handleBack' />
        </header>
        <div class="main">
            <ul>
                <li>
                    <h3>北京朗恒安生物科技有限公司核心团队由多名海外学者昨中国</h3>
                    <div class="show-box">
                        <span>2017-12-23 09: 23</span>
                        <b>查看更多</b>
                    </div>
                </li>
                <li>
                    <h3>北京朗恒安生物科技有限公司核心团队由多名海外学者昨中国</h3>
                    <div class="show-box">
                        <span>2017-12-23 09: 23</span>
                        <b>查看更多</b>
                    </div>
                </li>

            </ul>
            <span>加载更多</span>
                <Loading v-if='true' />

        </div>

        <Footer/>
    </div>
</template>
<script>
import Loading from "./Loading";
import Top from "../components/top/Top";
import Footer from "../components/footer/Footer";
export default {
  name: "news",
  components: { Top, Footer, Loading },
  data: () => ({
    title: "热点新闻"
  }),
  methods: {
    handleBack() {
      this.$router.push("/home");
    },
    showMore(){
        //点击的时候改变Loading组件中的v-if内的值为true，等待请求成功后，在将其变为false。
    }
  }
};
</script>
<style lang="scss" scoped>
.news {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  header {
    width: 100%;
    flex-shrink: 0;
  }
  .main {
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: #f5f5f5;
   
    ul {
      width: 100%;
      background-color: #fff;
      list-style: none;
      padding: 0.2rem;
      li {
        width: 100%;
        height: 1.2rem;
        margin-top: 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
          font-size: 0.32rem;
          overflow: hidden;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .show-box {
          display: flex;
          justify-content: space-between;
          span {
            color: #ccc;
          }
          b {
            color: #f9a52c;
          }
        }
      }
    }
    > span {
      width: 1.4rem;
      line-height: 0.8rem;
      margin-top: 0.3rem;
      font-size: 0.26rem;
      background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E7%9C%81%E7%95%A5%E5%8F%B7.svg);
      background-repeat: no-repeat;
      background-position: center right;
    }
  }
  footer {
    flex-shrink: 0;
  }
}
</style>
