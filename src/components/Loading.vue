<template>

    <Spin fix='true'>
        <Icon type="ios-loading"  class="demo-spin-icon-load" size='50'></Icon>
        <div style='font-size:.5rem' >Loading</div>
    </Spin>
</template>
<script>
export default {};
</script>
<style>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>