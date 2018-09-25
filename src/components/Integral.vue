<template>
    <div class="integral">
        <Top title='使用积分' :handleBack='handleBack' />
        <div class="main">
            <div class="cale-box">
                <p>当前共有
                    <span>{{totalIntegral-this.$store.state.personal.personal.useIntegral}}</span>积分，本次使用
                </p>
                <div class="btn">
                    <button :disabled="integral===1?true:false" @click="subIntegral">-</button>
                    <input type="text" v-model="integral">
                    <button :disabled="integral>totalIntegral?true:false" @click="addIntegral">+</button>
                </div>

            </div>
            <p>共抵扣
                <span>￥{{integral>totalIntegral?'超出所有积分，请重新输入':(integral*0.01).toFixed(2)}}</span>
            </p>

        </div>
        <Button type='warning'  :disabled='integral>totalIntegral?true:false' @click="useIntegral">确认</Button>
    </div>
</template>
<script>
import Top from "./top/Top";
export default {
  name: "integral",
  components: {
    Top
  },
  data: () => ({
    integral: ''
  }),
  methods: {
    handleBack() {
      this.$router.back();
    },
    addIntegral() {
      this.integral++;
    },
    subIntegral() {
      this.integral--;
    },useIntegral(){
        this.$store.commit('useIntegral',this.integral)
        this.$router.back()
    }
  },
  computed: {
    totalIntegral() {
      return this.$store.state.personal.personal.integral;
    }
  },mounted(){
      this.integral=this.$store.state.personal.personal.useIntegral
  }
};
</script>
<style lang="scss" scoped>
.integral {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .main {
    width: 100%;
    height: 88vh;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
    .cale-box {
      display: flex;
      width: 100%;
      justify-content: space-between;
      height: 1rem;
      align-items: center;
      p {
        font-size: 0.24rem;
        span {
          color: #fc8e00;
        }
      }
      .btn {
        width: 40%;
        height: 1rem;
        display: flex;
        font-size: 0.3rem;
        align-items: center;
        input {
          width: 50%;
          height: 0.7rem;
          text-align: center;
          outline: 0;
          border: 1px solid #f5f5f5;
          border-left: 0;
          border-right: 0;
        }
        > button {
          height: 0.7rem;
          width: 0.7rem;
          outline: 0;
          border: 0;
          background-color: #fff;
          border: 1px solid #f5f5f5;
        }
      }
    }
    > p {
      display: flex;
      width: 100%;
      padding: .2rem;
      height: 1rem;
      justify-content: flex-end;
      align-items: center;
    }
  }
  > button {
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0.2rem;
  }
}
</style>

