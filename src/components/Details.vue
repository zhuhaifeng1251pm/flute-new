<template>
    <div class="details">
        <Top title='订单详情' :handleBack='handleBack' />
        <div class="main">
            <div class="address arrow">
                <h4>
                    <span>收货人：{{showDetails.address.name}}</span>
                    <span>{{showDetails.address.tellphone}}</span>
                </h4>
                <p>收货地址：{{showDetails.address.area}}{{showDetails.address.detailed_address}}</p>
            </div>
            <div class="body" v-for="good in showDetails.goods" :key='good.id'>
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
            <p>
                <span>优惠券：￥-{{showDetails.coupon.toFixed(2)}}</span>
                <span>优惠码：￥-{{showDetails.concession.toFixed(2)}}</span>
                <span>使用{{showDetails.useIntergral*100}}积分,抵扣{{showDetails.useIntergral.toFixed(2)}}元</span>
            </p>
            <div class="code">
                <span>订单编号：{{showDetails.id}}</span>
                <span>下单时间：{{$moment(showDetails.create_time).format("YYYY MMM Do,hh:mm:ss a")}}</span>
            </div>


        </div>
    </div>
</template>
<script>
import Top from "./top/Top";
export default {
  name: "detailss",
  components: {
    Top
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  },
  computed: {
    showDetails() {
      return this.$store.getters.payTo(this.$router.history.current.params.id);
    }
  }
};
</script>
<style lang="scss" scoped>
.details {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  flex-direction: column;
  background-color: #f5f5f5;
  padding-bottom: 0.3rem;
  .main {
    width: 100%;
    height: 87vh;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    .body {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 0.2rem;
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
    > p {
      width: 100%;
      height: 1rem;
      display: flex;
      padding: 0 0.2rem;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
    }
    .code {
      width: 100%;
      height: 1rem;
      display: flex;
      background-color: #fff;
      padding: 0 0.2rem;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>

