<template>
  <div class="address-component" ref='thirdAddress'>
    <transition name="fade">
      <div class="wrap" v-if="show">
        <img src="http://pf9cvp4yn.bkt.clouddn.com/X.svg" alt="" @click="handleCloses">
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="address">
        <v-distpicker  type="mobile" @selected="getAddresss" v-if="show"></v-distpicker>
      </div>
    </transition>
    <transition name="fade">
      <Button type='warning' @click="handleCloses" v-if="show">确定</Button>
    </transition>
  </div>
</template>
<script>
export default {
  name: "addresssss",
  data: () => ({
    show: false
  }),
  methods: {
    getAddresss(data) {
      this.getAddress(data);
    },
    handleOpens() {
      this.show = true;
    },
    handleCloses() {
      this.show = false;
    }
  },
  props: ["getAddress"]
};
</script>
<style lang="scss">
.address-component {
  width: 100%;
  
  .wrap {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 20;
    display: flex;
    justify-content: flex-end;
    padding: 0.2rem;
    img {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
  .address {
    position: fixed;
    z-index: 10;
    left: 0;
    bottom: 0;
    z-index: 25;
    height: 40vh;
    width: 100%;
    overflow: auto;
    padding-bottom: 1rem;
    .distpicker-address-wrapper .address-header {
    position: fixed;
    bottom: 5rem;
    z-index: 30;
    left: 0;
    width: 100%;
}
  }
  button {
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s linear;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: scale(0);
  }
}
</style>

