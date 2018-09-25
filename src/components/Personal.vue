<template>
  <div class="personal">
    <header>
      <Top title="个人资料" :handleBack='handleBack' />
    </header>
    <div class="main">
      <img :src="showPersonal.img" alt="">
      <ul>
        <li>
          <span>用户名</span>
          <span>{{showPersonal.name}}</span>
        </li>
        <li>
          <span>性别</span>
          <span>{{showPersonal.sex}}</span>
        </li>
        <li>
          <span>出生日期</span>
          <span>{{showPersonal.birthday}}</span>
        </li>
        <li>
          <span>籍贯</span>
          <span>{{showPersonal.native_place}}</span>
        </li>
        <li>
          <span>邮箱</span>
          <span>{{showPersonal.email}}</span>
        </li>
        <li>
          <span>病因</span>
          <span>{{showPersonal.pathogeny}}</span>
        </li>
        <li>
          <span>个人积分</span>
          <span>{{showPersonal.integral}}</span>
        </li>
        <li @click="myConcseeion">我的优惠卷</li>
        <li @click="myCoupon">我的优惠码</li>
        <li @click="newPassword">修改密码</li>
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
    methods: {
        handleBack() {
            this.$router.push("/home");
        },
        loginToOut() {
            this.$router.push("/");
            this.$store.commit("loginOut");
        },myConcseeion(){
          this.$router.push('/concession')
        },myCoupon(){
          this.$router.push('/coupon')
        },newPassword(){
          this.$router.push('/newpassword')
        }
        
    }
    ,computed:{
        showPersonal(){
          return this.$store.state.personal.personal
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
        height: 87vh;
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
                line-height: .7rem;
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
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
}
</style>
