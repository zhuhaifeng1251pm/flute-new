<template>
    <div class="shoppingCart">
        <header>
            <Top title="购物车" :handleBack='handleBack' /> </header>
        <router-view></router-view>
    </div>

</template>
<script>
import Top from "./top/Top";
export default {
  name: "shoppingCart",
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
.shoppingCart {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    flex-shrink: 0;
  }
}
</style>

