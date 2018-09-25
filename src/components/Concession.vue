<template>
    <div class="concession">
        <Top title="使用优惠码" :handleBack='handleBack' />
        <div class="main">
            <h3>
                <span @click="handleClick(true)" :class="{active:show}">可使用的优惠码（{{$store.getters.showCanUse.length}}）</span>
                <span @click="handleClick(false)" :class="{active:!show}">不可使用的优惠码（{{$store.getters.showNoUse.length}}）</span>
            </h3>
            <ul>
                <li v-for=" (code,ind) in $store.getters.showCanUse" :key='code.id' v-show="show" @click='handleClicks(code.id)'>
                    <img :src="code.img" alt=""   :class='{active:code.isselected}'>
                    <input type="checkbox" :id="`ischenked${ind}`" v-model="code.isselected">
                    <label :for="`ischenked${ind}`"></label>
                </li>
                <li v-for=" code in $store.getters.showNoUse" :key='code.id' v-show="!show">
                    <div class="wrap"></div>
                    <img :src="code.img" alt="">
                </li>
            </ul>

        </div>
<Button type='warning' @click="handleEnter">确认使用</Button>
    </div>
</template>
<script>
import Top from "./top/Top";
export default {
  name: "concession",
  data: () => ({
    show: true
  }),
  components: {
    Top
  },
  methods: {
    handleBack() {
      this.$store.commit('allConcession');
      this.$router.back();
    },
    handleClick(str) {
      this.show = str;
    },handleClicks(id){
        this.$store.commit('useConcession',id)
    },handleEnter(){
        
        this.$router.back()
    }
  },
  mounted() {
    console.log(this.$store.getters.showNoUse);
  }
};
</script>
<style lang="scss" scoped>
.concession {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .main {
    width: 100%;
    height: 87vh;
    background-color: #f5f5f5;
    h3 {
      width: 99%;
      margin: 0 auto;
      display: flex;
      padding: 0 0.5rem;
      justify-content: space-between;
      span {
        width: 45%;
        line-height: 0.6rem;
        text-align: center;
        border-bottom: 1px solid #000;
      }
      .active {
        color: #fc8e00;
        border-bottom-color: #fc8e00;
      }
    }
    ul {
      list-style: none;
      width: 100%;
      margin-top: 0.2rem;
      padding: 0.2rem;
      li {
        width: 100%;
        height: 2rem;
        background-color: #fff;
        position: relative;
        display: flex;
        img {
          width: 100%;
          height: 3rem;
        }

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
          border: 2px solid #000;
          background-color: #fff;
          border-radius: 3px;
          position: absolute;
          z-index: 20;
          bottom: -1rem;
          right: 0rem;
        }
        input:checked ~ label::before {
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E5%AF%B9%20%282%29.svg);
          background-repeat: no-repeat;
          background-position: center;
          border-color: #fc8e00;
        }
        .wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3rem;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .active{
          border:2px solid #fc8e00;
      }
      }
    }
  }
   >button{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1rem;
  }
}
</style>

