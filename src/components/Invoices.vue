<template>
    <div class="invoice" @click="handleClose">
        <header>
            <Top title="发票信息" :handleBack='handleBack' />
        </header>
        <div class="main">
            <div class="up">
                <h3>发票类型</h3>
                <span>纸质发票</span>
            </div>
            <div class="start" :class="{isHeight:$store.state.start.start==='个人'}">
                <h4>发票抬头</h4>
                <RadioGroup v-model="$store.state.start.start">
                    <Radio label="个人"></Radio>
                    <Radio label="单位"></Radio>
                </RadioGroup>
                    <div class="inp-box" v-if="$store.state.start.start==='单位'">
                        <Input v-model="company" style='margin-top: 0.2rem' placeholder="请在此填写单位名称" clearable/>
                        <Input v-model="Renumber" style='margin-top: 0.2rem' placeholder="请在此填写纳税人识别号" clearable/>
                    </div>
            </div>
            <article @click.stop="handleOpen">
                <h3>发票内容</h3>
                <p v-if='show'>
                    <span v-if="!detailed">明细(点我输入)</span>
                    <span v-else>{{detailed}}</span>
                </p>
                <Input v-model="detailed" type="textarea" placeholder="Enter something..." v-else style='height:3rem' size="large" />
            </article>
        </div>
        <Button type='warning' @click="$router.push('shoppingcart/confirmorder')">确定</Button>
    </div>
</template>
<script>
import Top from "./top/Top";
export default {
  name: "invoices",
  data: () => ({
    company: "",
    Renumber: "",
    detailed: "",
    show: true
  }),
  components: {
    Top
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleClose() {
      this.show = true;
    },
    handleOpen() {
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.invoice {
  width: 100%;
  display: flex;
  flex-direction: column;
  header {
    flex-shrink: 0;
    width: 100%;
  }
  .main {
    width: 100%;
    height: 87vh;
    background-color: #f5f5f5;
    font-size: 0.3rem;
    .up {
      width: 100%;
      height: 2rem;
      background-color: #fff;
      padding: 0.3rem 0.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-bottom: 0.3rem;
      span {
        width: 1.5rem;
        line-height: 0.5rem;
        text-align: center;
        border: 1px solid #fc8e00;
        color: #fc8e00;
        border-radius: 3px;
      }
    }
    .start {
      background-color: #fff;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0.2rem;
      .inp-box {
        width: 100%;
        height: 2rem;
      }
    }
    .isHeight {
      height: 1.5rem;
    }
    article {
      background-color: #fff;
      width: 100%;
      height: 3rem;
      margin-top: 0.2rem;
      padding: 0.2rem;
      display: flex;
      flex-direction: column;
      h3 {
        margin-bottom: 0.2rem;
      }
    }
  }

  button {
    height: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>

