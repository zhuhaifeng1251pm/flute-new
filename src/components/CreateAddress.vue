<template>
    <div class="create-address">
        <Top title="新建收货地址" :handleBack='handleBack' />
        <v-distpicker type="mobile" class="address"></v-distpicker>
    </div>
</template>
<script>
import Top from "./top/Top";
export default {
  name: "createAddress",
  components: {
    Top
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>
<style lang="scss" scoped>
.create-address {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .address {
    width: 100%;
    height: 80vh;
    .address-container {
      height: 80%;
      overflow: auto;
    }
  }
}

</style>


