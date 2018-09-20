<template>
  <div class="login">
    <header>
      <div class="top">
        <span ></span>
        <span>登录</span>
        <router-link to='/register'>
          <span>注册</span>
        </router-link>
      </div>
      <div class="banner"></div>
    </header>
    <section>
      <div class="login-inp">
        <input type="text" placeholder="手机号码/用户名" v-model="loginName"><img src="http://pf9cvp4yn.bkt.clouddn.com/X.svg" alt="" class="clear-user" v-show="loginName" @click="clearLoginName">
        <input type="password" placeholder='密码' v-model="password"><img src="http://pf9cvp4yn.bkt.clouddn.com/X.svg" alt="" class="clear-password" v-show="password" @click="clearPassword">
      </div>
      <div class="login-btn">
        <!-- <router-link to='/home'> -->
        <button @click="toLogin">登录</button>
        <!-- </router-link> -->
        <div class="other-login">
          <span @click="$router.push('/phonelogin')">手机快捷登录</span>
          <span>忘记密码</span>
        </div>
      </div>
    </section>
    <footer>
      <div class="login-wechat">
        <span>其他登录方式</span>
        <img src="../assets/wechat_09.png" alt="">
      </div>
    </footer>
    <transition name="fade">
      <div class="show-message" v-show='showMessage'>
        <div class="detail">
          <p> 输入的账号或者密码不正确，请重新输入！</p>
          <Button type="error" @click="closeTips">确认</Button>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="success" v-if="loginInfo">
        <div class="detail">
          <p> 登录成功</p>
          <router-link to='/home'>
            <Button type="success" @click="closeTips">确认</Button>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
    name: "logins",
    data: () => ({
        loginName: "",
        password: "",
        showMessage: null
    }),
    methods: {
        toLogin() {
            if (this.loginName.trim()) {
                const userInfo = {
                    loginName: this.loginName,
                    password: this.password
                };
                this.$store.commit("isTrue", userInfo);
                this.showMessage = !this.$store.state.login.login;
            }
            // console.log(this.loginName, this.password, this.showMessage);
        },
        closeTips() {
            this.showMessage = null;
        },
        clearLoginName() {
            this.loginName = "";
        },
        clearPassword() {
            this.password = "";
        }
    },
    computed: {
        loginInfo() {
            return this.$store.state.login.login;
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
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
            a > span {
                width: 0.8rem;
                line-height: 0.8rem;
                height: 0.8rem;
                text-align: center;
                color: #fff;
            }
            >span {
                width: 0.8rem;
                line-height: 0.8rem;
                height: 0.8rem;
                text-align: center;
            }

            >span:first-child {
                background-image: url(http://pf9cvp4yn.bkt.clouddn.com/back%23fff_06.png);
                background-size: 35%;
                background-position: left center;
                background-repeat: no-repeat;
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
            input:nth-child(3)::-webkit-input-placeholder {
                background-image: url("../assets/icon2_09.png");
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
                background-color: #35d4a0;
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
                justify-content: space-between;
                color: #ccc;
            }
        }
    }
    footer {
        width: 100%;
        height: 2rem;
        padding: 0.5rem 1rem;
        color: #ccc;
        font-size: 0.3rem;
        position: absolute;
        bottom: 0.2rem;
        .login-wechat {
            display: flex;
            align-items: center;
            > span {
                width: 2rem;
            }
            img {
                width: 0.7rem;
            }
        }
    }
    .show-message {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        z-index: 5;
        .detail {
            width: 5rem;
            height: 3rem;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -1.5rem;
            margin-left: -2.5rem;
            border-radius: 0.08rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            p {
                width: 80%;
                margin-bottom: 0.3rem;
            }
            > button {
                width: 30%;
            }
        }
    }
    .success {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        z-index: 5;
        .detail {
            width: 5rem;
            height: 3rem;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -1.5rem;
            margin-left: -2.5rem;
            border-radius: 0.08rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            p {
                width: 80%;
                margin-bottom: 0.3rem;
                text-align: center;
            }
            > button {
                width: 30%;
            }
        }
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
}
</style>
