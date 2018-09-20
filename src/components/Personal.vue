<template>
  <div class="personal">
    <header>
      <Top :title='title' :handleBack='handleBack' />
    </header>
    <div class="main">
      <img src="http://pcgnine5c.bkt.clouddn.com/timg.jpg" alt="">
      <ul>
        <li>
          <span>用户名</span>
          <span>可爱的桃桃</span>
        </li>
        <li>
          <span>性别</span>
          <span>女</span>
        </li>
        <li>
          <span>出生日期</span>
          <span>1993.09.08</span>
        </li>
        <li>
          <span>籍贯</span>
          <span>河北省保定市区徐水县西村</span>
        </li>
        <li>
          <span>邮箱</span>
          <span>18701239847@163.com</span>
        </li>
        <li>
          <span>病因</span>
          <span>咳嗽</span>
        </li>
      </ul>
      <!-- <router-link to='/' class="to-out"> -->
      <Button type="warning" @click="loginToOut">退出登录</Button>
      <!-- </router-link>  -->
    </div>
  </div>
</template>
<script>
import Top from "./top/Top";
export default {
    name: "personal",
    components: {
        Top
    },
    data: () => ({
        title: "个人资料"
    }),
    methods: {
        handleBack() {
            this.$router.push("/home");
        },
        loginToOut() {
            this.$router.push("/");
            this.$store.commit("loginOut");
        }
        
    }
};
</script>
<style lang="scss" scoped>
.personal {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .main {
        width: 100%;
        height: 95vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.3rem;
        img {
            width: 1rem;
            height: 1rem;
            border: 2px solid #35d4a0;
            border-radius: 50%;
            margin: 1rem 0;
            flex-shrink: 0;
        }
        ul {
            list-style: none;
            width: 100%;
            height: 100%;
            li {
                width: 98%;
                margin: 0 auto;
                display: flex;
                line-height: 1rem;
                justify-content: space-between;
                padding: 0 0.3rem 0 0.25rem;
                background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E7%AE%AD%E5%A4%B4_%E5%8F%B3.svg);
                background-repeat: no-repeat;
                background-position: right center;
            }
        }
        button {
            margin-top: 3rem;
            width: 100%;
            height: 1rem;
            font-size: 0.3rem;
            font-weight: bolder;
            flex-shrink: 0;
        }
    }
}
</style>
