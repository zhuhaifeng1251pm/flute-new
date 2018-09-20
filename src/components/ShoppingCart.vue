<template>
    <div class="shoppingCart">
        <header>
            <Top :title="title" :handleBack='handleBack' /> </header>
        <div class="main">
            <ul>
                <li v-for="(good,ind) in $store.getters.showGoods('isPay') " :key='good.id'>
                    <div class="top">
                        <span>{{$moment(good.create_time).format("YYYY MMM Do,hh:mm:ss a")}}</span>
                    </div>
                    <div class="body">
                        <div class="check-box"><input type="checkbox" :id='`${good.id}inp`'  :ref='`int${ind}`'>
                            <label :for='`${good.id}inp`'></label>
                        </div>

                        <img :src="good.img">
                        <aside>
                            <h3>{{good.name}}</h3>
                            <span>购买类型：肺笛单品</span>
                            <div class="cale-box">
                                <div class="cale">
                                    <Button size='small' disabled>-</Button>
                                    <span>{{good.count}}</span>
                                    <Button size='small'>+</Button>
                                </div>
                                <span>￥{{good.price*good.count}}</span>
                            </div>
                        </aside>
                    </div>
                </li>
            </ul>
        </div>
        <footer>
            <div class="check-all">
                <input type="checkbox" id='all' v-model="ischecked">
                <label for="all">全选</label>
            </div>
            <div class="total">
                <span>合计:</span>
                <u>￥4000.00</u>
            </div>
            <Button type='warning' size='large'>结算</Button>
        </footer>
    </div>

</template>
<script>
import Top from "./top/Top";
export default {
    name: "shoppingCart",
    components: {
        Top
    },
    data: () => ({
        title: "购物车",
        ischecked:true
    }),
    methods: {
        handleBack() {
            this.$router.back();
        }
    }
};
</script>
<style lang="scss" scoped>
.shoppingCart {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    header {
        flex-shrink: 0;
    }
    .main {
        flex-grow: 100;
        height: 87vh;
        overflow: auto;
        background-color: #f5f5f5;
        padding-top: 0.2rem;
        ul {
            list-style: none;
            width: 100%;

            display: flex;
            flex-direction: column;
            overflow: auto;
            li {
                width: 100%;
                display: flex;
                flex-direction: column;
                border-bottom: 4px solid #f5f5f5;
                font-size: 0.24rem;
                background-color: #fff;
                .top {
                    display: flex;
                    align-items: center;
                    border-bottom:1px solid #f5f5f5; 
                    span{
                       line-height: .7rem;
                       padding: 0 0 0 .2rem;
                    }
                   
                }
                .body {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0.2rem 0;
                    padding: 0 .2rem;
                    .check-box {
                        position: relative;
                        input[type="checkbox"] {
                            position: absolute;
                            z-index: -1;
                            opacity: 0;
                        }
                        label {
                            padding-left: 0.2rem;
                        }
                        label::before {
                            content: "";
                            display: block;
                            width: 0.35rem;
                            height: 0.35rem;
                            border: 2px solid #c4c4c4;
                            background-color: #fff;
                            border-radius: 50%;
                            position: absolute;
                            z-index: 52;
                            top: 0rem;
                            left: -.1rem;
                        }
                        input:checked ~ label::before {
                            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E5%AF%B9%20%282%29.svg);
                            background-repeat: no-repeat;
                            background-position: center;
                            border-color: #fc8e00;
                        }
                    }
                    img {
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                    aside {
                        height: 1.5rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        h3 {
                            font-size: 0.26rem;
                        }
                        > span {
                            font-size: 0.22rem;
                            color: #ccc;
                        }
                        .cale-box {
                            display: flex;
                            justify-content: space-between;
                            .cale {
                                display: flex;
                                width: 1.3rem;
                                height: 0.45rem;
                                justify-content: space-between;
                                > span {
                                    width: 0.6rem;
                                    line-height: 0.45rem;
                                    border: 1px solid #dcdee2;
                                    text-align: center;
                                }
                                > button:first-child {
                                    border-right: 0;
                                }
                                > button:nth-child(3) {
                                    border-left: 0;
                                }
                            }
                            > span {
                                font-size: 0.26rem;
                                color: #fc8e00;
                            }
                        }
                    }
                }
            }
        }
    }
    footer {
        width: 100%;
        height: 0.7rem;
        background-color: #fff;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>

