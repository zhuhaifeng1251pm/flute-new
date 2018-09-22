<template>
    <div class="edit-address">
        <Top title='编辑收货地址' :handleBack='handleBack' />
        <div class="main">
            <div class="detail-address">
                <ul>
                    <li>收货人：
                        <span>清风</span>
                    </li>
                    <li>联系方式：
                        <span>18701591227</span>
                    </li>
                    <li @click="handleOpen()">所在地区：
                        <span>{{address}}</span>
                    </li>
                    <li>
                        <span> 详细地址:</span>
                        <Input v-model="DetAddress" clearable style="width: 5rem,borderColor:#fff" /> </li>
                </ul>
            </div>
            <div class="is-default">
                <div class="left">
                    <h4>设为默认地址</h4>
                    <span>注：每次下单时会使用地址</span>
                </div>
                <div class="right">
                    <i-switch size="large">
                        <span slot="open">设置</span>
                        <span slot="close">取消</span>
                    </i-switch>
                </div>
            </div>
        </div>
        <Button type='warning'>保存并使用</Button>
        <Address ref='thirdAddress' :getAddress='getAddress' />
    </div>
</template>
<script>
import Address from "./Address";
import Top from "./top/Top";
export default {
  name: "editaddress",
  data: () => ({
    address: "北京市大兴区亦庄经济开发区",
    DetAddress: "中和街14号B座301"
  }),
  components: {
    Top,
    Address
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleOpen() {
      this.$refs.thirdAddress.handleOpens();
    },
    handleClose() {
      this.$refs.thirdAddress.handleCloses();
    },
    getAddress(data) {
      this.address = `${data.province.value}${data.city.value}${
        data.area.value
      }`;
      // console.log(this.address)
    }
  },
  mounted() {
    console.log(this.$refs.thirdAddress);
  }
};
</script>
<style lang="scss" scoped>
.edit-address {
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .main {
    width: 100%;
    background-color: #f5f5f5;
    height: 100%;
    display: flex;
    flex-direction: column;
    .detail-address {
      width: 100%;
      margin-bottom: 0.2rem;
      ul {
        width: 100%;
        background-color: #fff;
        list-style: none;
        padding: 0.2rem 0.4rem;
        background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E7%AE%AD%E5%A4%B4_%E5%8F%B3.svg);
        background-repeat: no-repeat;
        background-position: center right;
        li {
          width: 100%;
          line-height: 0.8rem;
          font-size: 0.24rem;
        }
        li:last-child {
          display: flex;
          align-items: center;
          span{
              margin-right: .2rem;
          }
        }
        li:nth-child(3) {
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E7%BC%96%E8%BE%91.svg);
          background-repeat: no-repeat;
          background-size: 5%;
          background-position: center right;
        }
      }
    }
    .is-default {
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      padding: 0.2rem;
      align-items: center;
      .left {
        h4 {
          font-size: 0.3rem;
        }
        span {
          font-size: 0.2rem;
          color: #999;
        }
      }
    }
  }
  > button {
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
  }
}
</style>

