<template>
    <div class="settlement">
        <Top title='结算页' :handleBack='handleBack' />
        <div class="main">
            <h3>
                <span>需支付</span>
                <span>￥{{$store.getters.isToPay.toFixed(2)}}</span>
            </h3>
            <div class="pay-way">
                <h3>支付方式：</h3>
                <div class="paybox" @click="wechatPay">
                    <img src="http://pf9cvp4yn.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E4%BB%98%E6%AC%BE.svg" alt="">
                    <div class="box1">
                        <div class="left">
                            <h3>微信支付</h3>
                            <span>微信安全支付</span>
                        </div>
                        <div class="right">
                            <input type="checkbox" id="wechat" v-model="wechatWay">
                            <label for="wechat"></label>
                        </div>
                    </div>
                </div>
                <div class="paybox" @click="aplaiPay">
                    <img src="http://pf9cvp4yn.bkt.clouddn.com/%E6%94%AF%E4%BB%98%E5%AE%9D%E4%BB%98%E6%AC%BE01.svg" alt="">
                    <div class="box1">
                        <div class="left">
                            <h3>支付宝支付</h3>
                            <span>支付宝安全支付</span>
                        </div>
                        <div class="right">
                            <input type="checkbox" id="ipay" v-model="aplaiWay">
                            <label for="ipay"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Button type='warning' :disabled='$store.getters.isToPay!==0?false:true' @click="toPay">
            <span>{{wechatWay?'微信支付':'支付宝支付'}}</span>
            <span>￥{{$store.getters.isToPay.toFixed(2)}}</span>
        </Button>
        <div class="wrap" v-if="show"></div>
        <div class="tpics" v-if="show">
            <p>请确认{{wechatWay?'微信支付':'支付宝支付'}}是否完成</p>
            <p @click="paysuccess">已完成支付</p>
            <p @click="rePay">支付遇到问题，重新支付</p>
        </div>
    </div>
</template>
<script>
import Top from "./top/Top";
export default {
    name: "settlement",
    data: () => ({
        wechatWay: true,
        aplaiWay: false,show:false
    }),
    components: {
        Top
    },
    methods: {
        handleBack() {
            this.$router.back();
        },
        wechatPay() {
            this.aplaiWay = false;
        },
        aplaiPay() {
            this.wechatWay = false;
        },rePay(){
            this.show=false
        },toPay(){
            this.show=true
        },paysuccess(){
            this.$router.push('/paysuccess')
            const arr =this.$store.getters.showGoods('isPay')
            for(let i=0;i<arr.length;i++){
                this.$store.commit('paySuce',arr[i].id)
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.settlement {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .main {
        width: 100%;
        height: 87vh;
        background-color: #f5f5f5;
        > h3 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 1rem;
            background-color: #fff;
            font-size: 0.26rem;
            margin: 0.2rem 0;
            padding: 0.2rem;
            span {
                line-height: 0.5rem;
                text-align: center;
            }
            span:last-child {
                color: #fc8e00;
            }
        }
        .pay-way {
            width: 100%;
            background-color: #fff;
            padding: 0.2rem;
            > h3 {
                width: 100%;
                line-height: 1rem;
                font-size: 0.26rem;
                border-bottom: 1px solid #f5f5f5;
            }
            .paybox {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.2rem;
                border-bottom: 1px solid #f5f5f5;
                img {
                    width: 1rem;
                }
                .box1 {
                    display: flex;
                    width: 5rem;
                    justify-content: space-between;
                    align-items: center;
                    .left {
                        span {
                            font-size: 0.2rem;
                        }
                    }
                    .right {
                        position: relative;
                        margin-right: 0.5rem;
                        // display: flex;
                        // flex-direction: column;
                        input[type="checkbox"] {
                            position: absolute;
                            z-index: -1;
                            opacity: 0;
                        }
                        // label {
                        //     padding-left: 0.2rem;
                        // }
                        label::before {
                            content: "";
                            display: block;
                            width: 0.35rem;
                            height: 0.35rem;
                            border: 2px solid #c4c4c4;
                            background-color: #fff;
                            border-radius: 50%;
                            position: absolute;
                            z-index: 20;
                            top: -0.1rem;
                            left: 0.1rem;
                        }
                        input:checked ~ label::before {
                            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E5%AF%B9%20%282%29.svg);
                            background-repeat: no-repeat;
                            background-position: center;
                            border-color: #fc8e00;
                        }
                    }
                }
            }
        }
    }
    button {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
    }
    .wrap {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 35;
    }
    .tpics {
        width: 5rem;
        height: 3.3rem;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -2.5rem;
        margin-top: -1.65rem;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.3rem;
        z-index: 45;
        justify-content: space-between;
        p {
            line-height: 1rem;
            width: 100%;
            text-align: center;
            color: #fc8e00;
        }
        p:first-child {
            font-weight: bolder;
            color: #000;
        }
        p:last-child {
            color: #ccc;
        }
    }
}
</style>

