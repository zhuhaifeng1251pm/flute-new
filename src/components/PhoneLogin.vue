<template>
    <div class="phone-login">
        <header>
            <div class="top">
                <span @click="$router.back()"></span>
                <span>登录</span>
                <router-link to='/register'>
                    <span>注册</span>
                </router-link>
            </div>
            <div class="banner">
                <p>为确保您账号安全及正常使用，依据《网络安全法》相关要求，将绑定您的手机号，感谢您的理解及支持！</p>
            </div>
        </header>
        <section>
            <div class="login-inp">
                <input type="text" placeholder="请输入手机号" v-model="phone">
                <input type="password" placeholder='验证码' v-model="code">
                <button>获取验证码</button>
            </div>
            <div class="login-btn">
                <!-- <router-link to='/home'> -->
                <button >登录</button>
                <!-- </router-link> -->
               
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:'phoneLogin',
    data:()=>({
        phone:'',
        code:''
    })
}
</script>

<style lang="scss" scoped>
.phone-login{
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
            position: relative;
            p{  
                width:100%;
                position: absolute;
                top: -1rem;
                left: 0;
                font-size: .22rem;
                background-color: #d9f7ed;
                color: #b4c2bd;
                height: 1rem;
                padding: .25rem  .25rem .1rem .25rem;
                
            }
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
                background-image: url(http://pf9cvp4yn.bkt.clouddn.com/phones-icon_03.png);
                background-repeat: no-repeat;
                background-position: left center;
                background-size: contain;
                padding-left: 0.8rem;
            }
            input:nth-child(2)::-webkit-input-placeholder {
                background-image: url(http://pf9cvp4yn.bkt.clouddn.com/code11_06.png);
            }
            >button{
                line-height: 2;
                position: absolute;
                top: 1.49rem;
                right: .8rem;
                border:0;
                background-color: #fff;
                border-left:1px solid #ccc; 
                width: 25%;
                color:#35d4a0;
                outline: 0;
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
        }
    }
    
}

</style>
