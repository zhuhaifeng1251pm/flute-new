<template>
  <footer>
    <ul>
      <li><img src="../../assets/bottom-home_06.png" alt="">
        <span>首页</span>
      </li>
      <li @click="$router.push('/personal')"><img src="../../assets/bottom-person_07.png" alt="">
        <span>个人中心</span>
      </li>
      <li><img src="../../assets/bottom-pic3_07.png" alt="">
        <span>肺笛</span>
      </li>
      <li><img src="../../assets/bottom-4_07.png" alt="">
        <span>关于我们</span>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  name: "footers"
};
</script>
<style lang="scss" scoped>
footer {
  font-size: 0.24rem;
  width: 100%;
  height: 0.9rem;
  padding-top: 0.2rem;
  background-color: #fff;
  ul {
    width: 100%;
    display: flex;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    li {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      justify-content: space-between;
      > img {
        width: 0.5rem;

      }
      span {
        background-color: #fff;
      }
    }
  }
}
</style>

