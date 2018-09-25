<template>
  <div class="myorder">
    <header>
      <Top title="订单中心" :handleBack='handleBack' />
    </header>
    <div class="main">
      <nav>
        <ul>
          <li>
            <span :class="{active:titleTips==='all'}" @click="$store.commit('changeGType','all')"> 全部</span>
          </li>
          <li>
            <span :class="{active:titleTips==='isPay'}" @click="$store.commit('changeGType','isPay')">待付款</span>
          </li>
          <li>
            <span :class="{active:titleTips==='isSend'}" @click="$store.commit('changeGType','isSend')">待发货</span>
          </li>
          <li>
            <span :class="{active:titleTips==='isReceive'}" @click="$store.commit('changeGType','isReceive')">待收货</span>
          </li>
          <li>
            <span :class="{active:titleTips==='completed'}" @click="$store.commit('changeGType','completed')">已完成</span>
          </li>
        </ul>
      </nav>
      <div class="goods-lists">
        <ul>
          <li v-for="good in $store.getters.showMyorder(titleTips) " :key='good.id' :style="{'order':good.type==='isPay'?'1':good.type==='isSend'?2:good.type==='isReceive'?3:4}" @click="$router.push(`/details/${good.id}`)">
            <div class="top">
              <!-- <span>2017.11.09</span> -->
              <span>{{$moment(good.create_time).format("YYYY MMM Do,hh:mm:ss a")}}</span>
              <span>{{good.type==='isSend'?'待发货':good.type==='isPay'?'待支付':good.type==='isReceive'?'待收货':good.type==='completed'?'已完成':''}}</span>
            </div>
            <h3>实付：{{(good.total-good.coupon-good.concession-good.useIntergral).toFixed(2)}}</h3>
            <div class="body" v-for="good in good.goods" :key='good.id'>
              <img :src="good.img">
              <aside>
                <h3>{{good.name}}</h3>
                <span>购买类型：肺笛单品</span>
                <div class="cale-box">
                  <div class="cale">
                    <Button size='small' disabled>-</Button>
                    <span>{{good.count}}</span>
                    <Button size='small' disabled>+</Button>
                  </div>
                  <span>￥{{good.price*good.count}}</span>
                </div>
              </aside>
            </div>
            <div class="bottom" v-if="good.type==='completed'">
              <Button size='small'>申请退款</Button>
              <Button size='small'>再次购买</Button>
              <Button size='small' @click="$router.push('/tracking/trackdone')">查看物流</Button>
              <Button size='small' type='warning' @click="confirmGoods(good.id,good.type)" :disabled='good.type==="completed"'>{{good.type!=='completed'?'确认收货':'已完成'}}</Button>
            </div>

            <div class="bottom" v-if="good.type==='isPay'">
              <Button size='small' @click.stop="$store.commit('delOrder',good.id)">取消订单</Button>
              <Button size='small' class="orange-btn" @click.stop="$router.push(`/settlement/${good.id}`)">去支付</Button>
            </div>

            <div class="bottom" v-if="good.type==='isSend'">
              <Button size='small'>申请退款</Button>
              <Button size='small' @click.stop="$store.commit('changeIsReceive',good.id)">提醒发货</Button>
              <Button size='small' class="orange-btn">再次购买</Button>

            </div>

            <div class="bottom" v-if="good.type==='isReceive'">
              <Button size='small'>申请退款</Button>
              <Button size='small'>再次购买</Button>
              <Button size='small' @click.stop="$router.push('/tracking/trackinfo')">查看物流</Button>
              <Button size='small' type='warning' @click.stop="$store.commit('changeCompleted',good.id)" :disabled='good.type==="completed"'>{{good.type!=='completed'?'确认收货':'已完成'}}</Button>
            </div>

          </li>
        </ul>
      </div>
    </div>
    <div class="foot">
      <Footer/>
    </div>
  </div>
</template>
<script>
import Top from "./top/Top";
import Footer from "./footer/Footer";
export default {
    name: "myorder",
    components: {
        Top,
        Footer
    },
    methods: {
        handleBack() {
            this.$router.push("/home");
        },
        confirmGoods(id, type) {
            console.log(typeof id, type);
            if (type !== "completed") this.$store.commit("confirmGoods", id);
        }
    },
    computed: {
        titleTips() {
            return this.$store.state.goodsType.goodsType;
        }
        // ,
        // goodsLists() {
        //   return this.$store.state.goodslists.goodslists;
        // }
    },
    mounted() {
        console.log(this.$store.state.myorder.myorder);
    }
};
</script>
<style lang="scss" scoped>
.myorder {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    header {
        flex-shrink: 0;
        width: 100%;
    }
    .main {
        height: 85vh;
        width: 100%;
        overflow: hidden;
        nav {
            width: 100%;
            height: 1rem;
            border-bottom: 4px solid #f5f5f5;
            ul {
                background-color: #fff;
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: space-between;
                li {
                    width: 20%;
                    text-align: center;
                    line-height: 0.7rem;
                    font-size: 0.3rem;
                    font-weight: bolder;
                    display: flex;
                    justify-content: center;
                    span {
                        border-bottom: 2px solid #fff;
                    }
                    .active {
                        border-bottom: 2px solid #35d4a0;
                        color: #35d4a0;
                    }
                }
            }
        }
        .goods-lists {
            width: 100%;
            overflow: auto;
            height: 85vh;
            padding: 0 0 3rem 0;
            ul {
                list-style: none;
                width: 100%;
                display: flex;
                flex-direction: column;
                li {
                    width: 100%;
                    padding: 0.2rem;
                    display: flex;
                    flex-direction: column;
                    border-bottom: 4px solid #f5f5f5;
                    font-size: 0.24rem;
                    .top {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        span:nth-child(2) {
                            color: #fc8e00;
                        }
                    }
                    .body {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin: 0.2rem 0;
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
                    .bottom {
                        align-self: flex-end;
                        font-size: 0.24rem;
                        width: 72%;
                        display: flex;
                        justify-content: flex-end;
                        > button {
                            width: 24%;
                            text-align: center;
                            margin-right: 0.1rem;
                        }
                        button:last-child {
                            margin-right: 0;
                        }
                        .orange-btn {
                            color: #fc8e00;
                            border-color: #fc8e00;
                        }
                    }
                }
            }
        }
    }
    .foot {
        flex-shrink: 0;
        width: 100%;
        position: relative;
        z-index: 20;
        bottom: 0;
        background: #fff;
    }
}
</style>

