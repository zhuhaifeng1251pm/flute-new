<template>
    <div class="register">
        <header>
            <div class="top">
                <span @click="$router.back()"></span>
                <span>登录</span>
                <span>注册</span>
            </div>
            <div class="banner"></div>
        </header>
        <section>
            <div class="login-inp">
                <input type="text" placeholder="手机号码/用户名" v-model="registerName">
                <input type="password" placeholder='请输入验证码' v-model="verification">
                <Button>获取验证码</Button>
                <input type="password" placeholder='请输入密码（6-16位，区分大小写）' v-model="registerPassword">
            </div>
            <div class="login-btn">
                <!-- <router-link to='/home'> -->
                <Button type="success" :disabled='!agree' :style="`color:${agree?'#fff':'#999'}`">注册</Button>
                <!-- </router-link> -->
                <div class="other-login">
                    <router-link to='/'>
                        <span>用已有账号登录</span>
                    </router-link>
                </div>
            </div>
        </section>
        <footer>
            <div class="login-wechat">
                <input type="checkbox" id='agreement' v-model="agree">
                <label for="agreement">同意并愿意遵守《郎恒安服务协议》</label>
            </div>
        </footer>

    </div>
</template>
<script>
export default {
  name: "register",
  data: () => ({
    agree: false,
    registerName: "",
    registerPassword: "",
    verification: ""
  })
};
</script>

<style lang="scss" scoped>
.register {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.3rem;
  header {
    width: 100%;
    height: 42%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #35d4a0;
    background-image: url("../assets/banner-bg_06.png");
    background-repeat: no-repeat;
    background-position: bottom;
    .top {
      width: 95%;
      height: 0.8rem;
      margin-top: 0.2rem;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > span {
        width: 0.8rem;
        line-height: 0.8rem;
        height: 0.8rem;
        text-align: center;
      }

      > span:first-child {
        background-image: url(http://pf9cvp4yn.bkt.clouddn.com/back%23fff_06.png);
        background-size: 35%;
        background-position: left center;
        background-repeat: no-repeat;
      }
      > span:last-child {
        color: #35d4a0;
      }

      //   line-height: 3;
    }
    .banner {
      width: 100%;
      height: 1rem;
      background-image: url("../assets/logo_03.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      margin-top: 1rem;
    }
  }
  section {
    width: 100%;
    .login-inp {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.1rem 0 0 0;
      margin-bottom: 0.7rem;
      position: relative;
      input {
        width: 80%;
        margin: 0 auto;
        outline: 0;
        line-height: 2.5;
        margin-bottom: 0.2rem;
        border: 1px solid #ccc;
        border-radius: 0.4rem;
        padding: 0.1rem 0.4rem;
        font-size: 0.3rem;
      }
      ::-webkit-input-placeholder {
        color: #ccc;
        background-image: url("../assets/icon1_09.jpg");
        background-repeat: no-repeat;
        background-position: left center;
        background-size: contain;
        padding-left: 0.5rem;
      }
      input:nth-child(2)::-webkit-input-placeholder {
        background-image: url(http://pf9cvp4yn.bkt.clouddn.com/regsiter-code_03.png);
      }
      input:nth-child(4)::-webkit-input-placeholder {
        background-image: url("../assets/icon2_09.png");
      }
      > button {
        position: absolute;
        bottom: 1.4rem;
        right: 0.65rem;
        line-height: 3.1;
        border-radius: 0.4rem;
        background-color: #d6d6d6;
        color: #fff;
        width: 30%;
      }
      .clear-user {
        position: absolute;
        top: 0.45rem;
        right: 1rem;
      }
      .clear-password {
        position: absolute;
        top: 1.65rem;
        right: 1rem;
      }
    }
    .login-btn {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        width: 5.7rem;
        margin: 0 auto;
        outline: 0;
        line-height: 2.5;
        margin-bottom: 0.2rem;
        border: 1px solid #35d4a0;
        color: #fff;
        border-radius: 0.4rem;
        padding: 0.1rem 0.4rem;
        font-size: 0.3rem;
      }
      .other-login {
        display: flex;
        width: 5.5rem;
        margin: 0 auto;
        align-items: center;
        justify-content: flex-end;
        a {
          color: #ccc;
        }
      }
    }
  }
  footer {
    width: 100%;
    height: 1rem;
    padding: 0.5rem 1rem;
    color: #ccc;
    font-size: 0.3rem;
    position: absolute;
    bottom: 0.2rem;
    .login-wechat{
        display: flex;
        justify-content: center;
        align-items: center;
    input[type="checkbox"] {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    label {
      padding-left: 0.2rem;
      font-size: 0.22rem;
    }
    label::before {
      content: "";
      display: block;
      width: 0.3rem;
      height: 0.3rem;
      border: 2px solid #ccc;
      background-color: #fff;
      border-radius: 3px;
      position: absolute;
      z-index: 52;
      top: 0.52rem;
      left: 1.5rem;
    }
    input:checked ~ label::before {
      background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E5%AF%B9.svg);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
}
</style>
