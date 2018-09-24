<template>
    <div class="paysuccess">
        <Top title='支付成功' :handleBack='handleBack' />
        <div class="main">
            <div class="up">
                <img src="http://pf9cvp4yn.bkt.clouddn.com/%E6%94%AF%E4%BB%98%E6%88%90%E5%8A%9F.svg" alt="">
                <span>支付成功</span>
            </div>
            <div class="down">
                <h3>送货信息</h3>
                <p>我们将尽快给您安排发货，请您保持手机通畅，以便快递公司第一时间联系到您。</p>
                <div class="btn">
                    <button @click="handleHome">返回首页</button>
                    <button @click="handleMyorder">查看订单</button>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Top from "./top/Top";
export default {
    name: "paysuccess",
    components: {
        Top
    },
    methods: {
        handleBack() {
            this.$router.back();
        },handleHome(){
            this.$router.push('/home')
        },
        handleMyorder(){
            this.$router.push('/myorder')
        }
    }
};
</script>
<style lang="scss" scoped>
.paysuccess {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .main {
        width: 100%;
        background-color: #fff;
        .up {
            width: 96%;
            margin: 0 auto;
            height: 4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #f5f5f5;
            span {
                font-size: 0.3rem;
                font-weight: bolder;
                color: #35d4a0;
            }
        }
        .down{
            width: 100%;
            padding: .3rem;
            h3{
                font-size: .3rem;
                color: #000;
                margin-bottom: .2rem;
            }
            p{
                color:#333;
            }
            .btn{
                margin-top: 1.5rem;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                button{
                    width: 40%;
                    height: .7rem;
                    background-color: #fff;
                    outline: 0;
                    border-radius: 4px;
                    border: 2px solid #ccc;
                    color:#666;
                    font-size: .3rem;
                }
                button:first-child{
                    color:#fc8e00;
                    border-color:#fc8e00;
                    }
            }
        }
    }
}
</style>
