<template>
  <div class="confirm-order">
    <div class="address arrow" @click="handleSelAddress">
      <h4>
        <span>收货人：{{showAddress?showAddress.name:''}}</span>
        <span>{{showAddress?showAddress.tellphone:''}}</span>
      </h4>
      <p>收货地址：{{showAddress?showAddress.area:''}}{{showAddress?showAddress.detailed_address:''}}</p>
    </div>
    <div class="pay-goods" v-for="good in showLists" :key='good.id'>
      <img :src="good.img">
      <aside>
        <h3>{{good.name}}</h3>
        <span>购买类型：肺笛单品</span>
        <span>￥{{good.price*good.count}}</span>
      </aside>
      <span class="count">x{{good.count}}</span>
    </div>
    <div class="invoice arrow" @click="$router.push('/invoices')">
      <b>发票</b>
      <span>
        <u>电子</u>（明细-{{$store.state.start.start.start}}）</span>
    </div>
    <ul class="discount">
      <li class="arrow" @click="handleToCoupon">
        <b>优惠券</b>
        <span>-￥{{($store.getters.showCanUseCou.filter(t=>t.isselected===true).length*10).toFixed(2)}}</span>
      </li>
      <li class="arrow" @click="handleToConcession">
        <b>优惠码</b>
        <span>-￥{{($store.getters.showCanUse.filter(t=>t.isselected===true).length*10).toFixed(2)}}</span>
      </li>
      <li class="arrow" @click="handleIntegral">
        <b>积分</b>
        <span>使用{{$store.state.personal.personal.useIntegral}}积分</span>
      </li>
    </ul>
    <div class="totals arrow">
      <p>
        <b>商品金额</b>
        <span>￥{{$store.getters.isToPay.toFixed(2)}}</span>
      </p>
      <p>
        <b>运费</b>
        <span>+ ￥0.00
          <u>（免运费）</u>
        </span>

      </p>
    </div>
    <footer>
      <span @click="handleBackCart">返回购物车</span>
      <p>
        <span>实付款</span>
        <b>￥{{($store.getters.isToPay-$store.getters.showCanUseCou.filter(t=>t.isselected===true).length*10-$store.getters.showCanUse.filter(t=>t.isselected===true).length*10-$store.state.personal.personal.useIntegral*0.01).toFixed(2)}}</b>
      </p>
      <Button type='warning' @click="Settlement" :disabled='$store.getters.isToPay!==0?false:true'>提交订单</Button>
    </footer>
  </div>
</template>
<script>
import shortId from "shortid";
export default {
    name: "confirmorder",
    data: () => ({
        showAddress: null
    }),
    computed: {
        showLists() {
            return this.$store.getters
                .showGoods("isPay")
                .filter(t => t.is_selected === true);
        }
        // showAddress(){
        //   return this.$store.getters.showAddress(12323)
        // }
    },
    methods: {
        handleSelAddress() {
            this.$router.push("/seladdress");
        },
        handleToConcession() {
            this.$router.push("/concession");
        },
        handleToCoupon() {
            this.$router.push("/coupon");
        },
        Settlement() {
            const newId = shortId();
            this.$router.push(`/settlement/${newId}`);
            const id = this.$store.state.id.id;
            const newMyorder = {
                id: newId,
                address: this.$store.getters.showAddress(id),
                coupon:
                    this.$store.getters.showCanUseCou.filter(
                        t => t.isselected === true
                    ).length * 10,
                goods: this.$store.getters
                    .showGoods("isPay")
                    .filter(t => t.is_selected === true),
                concession:
                    this.$store.getters.showCanUse.filter(
                        t => t.isselected === true
                    ).length * 10,
                useIntergral:
                    this.$store.state.personal.personal.useIntegral * 0.01,
                create_time: new Date(),
                invoices: this.$store.state.start.start,
                type: "isPay",
                total: this.$store.getters.isToPay,
                invoices: this.$store.state.start.start
            };
            this.$store.commit("addNewMyorder", newMyorder);
            console.log(newMyorder);
        },
        handleBackCart() {
            this.$router.push("/shoppingcart/cartlists");
            console.log(1);
        },
        handleIntegral() {
            this.$router.push("/integral");
        }
    },
    mounted() {
        const id = this.$store.state.id.id;
        this.showAddress = this.$store.getters.showAddress(id);
    }
};
</script>
<style lang="scss" scoped>
.confirm-order {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: auto;
    flex-direction: column;
    background-color: #f5f5f5;
    padding-bottom: 0.3rem;
    .address {
        background-color: #fff;
        width: 100%;
        margin: 0.2rem 0;
        padding: 0.15rem;
        height: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h4 {
            display: flex;
            font-size: 0.26rem;
            color: #000;
            span + span {
                margin-left: 0.5rem;
            }
        }
        > p {
            font-size: 0.16rem;
            color: #333;
            padding: 0 0.45rem;
            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/contactAddress_27.png);
            background-repeat: no-repeat;
            background-size: 2.5%;
            background-position: 0.1rem 0.04rem;
        }
    }
    .pay-goods {
        width: 100%;
        height: 1.5rem;
        background-color: #fff;
        display: flex;
        padding: 0.3rem 0.2rem;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.2rem;
        img {
            width: 1.2rem;
        }
        aside {
            height: 1.2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h3 {
                font-size: 0.26rem;
            }
            > span {
                font-size: 0.2rem;
                color: #ccc;
            }
            span:last-child {
                font-size: 0.3rem;
                color: #fc8e00;
            }
        }
        .count {
            font-size: 0.3rem;
            align-self: flex-end;
        }
    }
    .invoice {
        width: 100%;
        height: 0.9rem;
        background-color: #fff;
        margin-bottom: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.24rem;
        padding: 0 1.05rem 0 0.2rem;
        u {
            text-decoration: none;
            color: #fc8e00;
        }
    }
    .discount {
        width: 100%;
        background-color: #fff;
        list-style: none;
        font-size: 0.26rem;
        padding: 0.2rem 0 0.15rem 0;
        margin-bottom: 0.2rem;
        li {
            width: 100%;
            display: flex;
            line-height: 0.5rem;
            justify-content: space-between;
            padding: 0 0.7rem 0 0.2rem;
            span {
                color: #fc8e00;
            }
        }
        li + li {
            margin: 0.2rem 0;
        }
        li:last-child {
            span {
                color: #999;
                font-size: 0.28rem;
            }
        }
    }
    .totals {
        width: 100%;
        background-color: #fff;
        height: 1.5rem;
        padding: 0 0.4rem 0 0.2rem;
        font-size: 0.26rem;

        p {
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 0.7rem;
            span {
                color: #fc8e00;
                u {
                    text-decoration: none;
                    color: #999;
                }
            }
        }
    }
    footer {
        height: 1rem;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 0.28rem;
        > span {
            width: 1.2rem;
            height: 1rem;
            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E8%BF%94%E5%9B%9E.svg);
            background-repeat: no-repeat;
            background-position: 0.6rem 0.4rem;
            background-size: 50%;
            margin-right: 0.5rem;
            padding: 0.1rem;
        }
        button {
            height: 100%;
            width: 2.5rem;
            margin-left: 0.5rem;
        }
        b {
            color: #fc8e00;
            margin-left: 0.2rem;
        }
    }
    .arrow {
        background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E7%AE%AD%E5%A4%B4_%E5%8F%B3.svg);
        background-repeat: no-repeat;
        background-position: center right;
        background-size: 5%;
    }
}
</style>

