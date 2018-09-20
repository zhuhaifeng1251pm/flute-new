<template>
    <div class="top">
        <span @click="handleClick()"></span>
        <span>{{title}}</span>
        <span></span>
      </div>
</template>
<script>
export default {
    name:'top',
    props:[
    'title','handleBack'
    ], methods:{
      handleClick(){
        this.handleBack()
      }
    }
 
}
</script>
<style lang="scss" scoped>
 .top {
      width: 100%;
      height: 0.8rem;
      background-color: #000;
      font-size: 0.3rem;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.2rem;
      span {
        width: 2rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
      }
      span:first-child {
        background-image: url("../../assets/back_06.png");
        background-size: 12%;
        background-position: left center;
        background-repeat: no-repeat;
      }
    }
</style>

