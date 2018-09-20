<template>
    <div class="attract">
        <DetailsTop/>
        <section>
            <div class="main">
                <h3>
                    请填写您的信息：
                </h3>
                <ul>
                    <li>
                        <div class="inp-box">
                            <label for="">意向代理城市:</label><input type="text" placeholder="请输入信息"></div> <img src="http://pf9cvp4yn.bkt.clouddn.com/%E6%98%9F%E5%8F%B7.svg" alt=""> </li>
                    <li>
                        <div class="inp-box">
                            <label for="">公司或机构名称:</label><input type="text" placeholder="请输入信息"> </div> <img src="http://pf9cvp4yn.bkt.clouddn.com/%E6%98%9F%E5%8F%B7.svg" alt=""> </li>
                    <li>
                        <div class="inp-box">
                            <label for="">联系人姓名:</label><input type="text" placeholder="请输入信息"> </div> <img src="http://pf9cvp4yn.bkt.clouddn.com/%E6%98%9F%E5%8F%B7.svg" alt=""> </li>
                    <li>
                        <div class="inp-box">
                            <label for="">联系人电话:</label><input type="text" placeholder="请输入信息"> </div> <img src="http://pf9cvp4yn.bkt.clouddn.com/%E6%98%9F%E5%8F%B7.svg" alt=""> </li>
                    <li>
                        <div class="inp-box">
                            <label for="">联系人邮箱:</label><input type="text" placeholder="请输入信息"> </div> <img src="http://pf9cvp4yn.bkt.clouddn.com/%E6%98%9F%E5%8F%B7.svg" alt=""> </li>
                    <li>
                        <div class="inp-box">
                            <label for="">公司 / 个人地址:</label><input type="text" placeholder="请输入信息"> </div> <img src="http://pf9cvp4yn.bkt.clouddn.com/%E6%98%9F%E5%8F%B7.svg" alt=""> </li>
                    <li>
                        <div class="inp-box">
                            <label for="">公司 / 个人优势:</label><input type="text" placeholder="请输入信息"> </div> <img src="http://pf9cvp4yn.bkt.clouddn.com/%E6%98%9F%E5%8F%B7.svg" alt=""> </li>
                </ul>
            </div>
            <button>提交信息</button>
        </section>
        <footer>
            <h3>联系我们</h3>
            <ul>
                <li>联系人：王先生</li>
                <li>电 话：18701521668</li>
                <li>地 址：北京市亦庄中和街 14 号</li>
            </ul>

        </footer>
    </div>
</template>
<script>
import DetailsTop from "./DetailsTop";
export default {
  name: "attract",
  components: {
    DetailsTop
  }
};
</script>
<style lang="scss" scoped>
.attract {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .main {
      width: 100%;
      display: flex;
      flex-direction: column;
      > h3 {
        margin: 0;
        width: 100%;
        line-height: 1.04rem;
        background-color: #f3f3f3;
        font-size: 0.24rem;
        color: #666;
        padding: 0 0.25rem;
      }
      ul {
        width: 100%;
        list-style: none;
        li {
          width: 96%;
          margin: 0 auto;
          line-height: 0.72rem;
          height: 0.72rem;
          border-bottom: 1px solid #f7f7f7;
          font-size: 0.24rem;
          color: #999;
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/city_23.png);
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 7%;
          padding: 0 0.1rem 0 0.6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .inp-box {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            input {
              width: 70%;
              outline: 0;
              border: 0;
            }
            ::-webkit-input-placeholder {
              color: #e6e6e6;
            }
            :focus {
              border-bottom: 1px solid #000;
            }
          }
          img {
            width: 0.15rem;
          }
        }
        li:nth-child(2) {
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/name_23.png);
        }
        li:nth-child(3) {
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/contactName_23.png);
        }
        li:nth-child(4) {
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/tellNumber_27.png);
        }
        li:nth-child(5) {
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/contactE-mail_27.png);
        }
        li:nth-child(6) {
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/contactAddress_27.png);
          background-size: 6%;
        }
        li:nth-child(7) {
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/advantage_27.png);
        }
      }
    }
    > button {
      width: 1.78rem;
      line-height: 0.4rem;
      align-self: flex-end;
      margin-top: 1.2rem;
      margin-right: 0.2rem;
      margin-bottom: 0.3rem;
      background-color: #f99f1e;
      border: 1px solid #f99f1e;
      color: #fff;
      border-radius: 3px;
      font-size: 0.24rem;
      outline: 0;
    }
  }
  footer {
    width: 100%;
    background-color: #f3f3f3;
    padding-bottom: 1.1rem;
    > h3 {
      margin: 0;
      width: 100%;
      line-height: 1.2rem;
      background-color: #f3f3f3;
      font-size: 0.24rem;
      color: #666;
      padding: 0 0.25rem;
    }
    > ul {
      background-color: #fff;
      li {
        width: 96%;
        margin: 0 auto;
        line-height: 0.72rem;
        line-height: 0.9rem;
        // border-bottom: 1px solid #f7f7f7;
        font-size: 0.24rem;
        color: #999;
        background-image: url(http://pf9cvp4yn.bkt.clouddn.com/attact1_03.png);
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 7%;
        padding: 0 0.1rem 0 0.6rem;
      }
      li:nth-child(2) {
        background-image: url(http://pf9cvp4yn.bkt.clouddn.com/tellNumber_27.png);
      }
      li:nth-child(3) {
        background-image: url(http://pf9cvp4yn.bkt.clouddn.com/contactAddress_27.png);
        background-size: 6%;
      }
    }
  }
}
</style>
