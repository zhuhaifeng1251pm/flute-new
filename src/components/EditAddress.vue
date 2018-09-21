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
                    <li>所在地区：
                        <span>北京市大兴区亦庄经济开发区</span>
                    </li>
                    <li>详细地址：
                        <span>中和街14号B座301</span>
                    </li>
                </ul>
            </div>
            <div class="is-default">
                <div class="left">
                    <h4>设为默认地址</h4>
                    <span>注：每次下单时会使用地址</span>
                </div>
                <div class="right">
                    <i-switch size="large" v-model="show">
                        <span slot="sett">设置</span>
                        <span slot="canell">取消</span>
                    </i-switch>
                </div>
            </div>
        </div>
        <Button type='warning'>保存并使用</Button>

        <v-distpicker type="mobile" @selected="getAddress" v-if="show"></v-distpicker>
    </div>
</template>
<script>
import Top from "./top/Top";
export default {
  name: "editaddress",
  data: () => ({
    show: false
  }),
  components: {
    Top
  },
  methods: {
    getAddress(data) {
      console.log(data);
    },
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

