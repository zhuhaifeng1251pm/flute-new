<template>
    <div class="create-address">
        <Top title='新建收货地址' :handleBack='handleBack' />
        <div class="main">
            <div class="detail-address">
                <ul>
                    <li>
                        <span>收货人：</span>
                        <Input v-model="newName" clearable />
                    </li>
                    <li>
                        <span>联系方式：</span>
                        <Input v-model="newTellphone" clearable />
                    </li>
                    <li @click="handleOpen()">
                        <span>所在地区：</span>
                        <Input v-model="newArea" clearable/>
                    </li>
                    <li>
                        <span>
                            <span>详细地址:</span>
                        </span>
                        <Input v-model="newAddress" clearable /> </li>
                </ul>
            </div>
            <div class="is-default">
                <div class="left">
                    <h4>
                        <span>设为默认地址:</span>
                    </h4>
                    <span>注：每次下单时会使用地址</span>
                </div>
                <div class="right">
                    <i-switch size="large" v-model="setDefault">
                        <span slot="open">设置</span>
                        <span slot="close">取消</span>
                    </i-switch>
                </div>
            </div>
        </div>
        <Button type='warning' @click="addNewAddress">保存</Button>
        <Address ref='thirdAddress' :getAddress='getAddress' />
    </div>
</template>
<script>
import Address from "./Address";
import Top from "./top/Top";
import shortId from "shortid";
export default {
    name: "editaddress",
    data: () => ({
        newArea: "北京市大兴区亦庄经济开发区",
        newAddress: "",
        newName: "",
        newTellphone: "",
        setDefault: false,
        id: shortId()
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
            this.newArea = `${data.province.value}${data.city.value}${
                data.area.value
            }`;
            // console.log(this.address)
        },
        addNewAddress() {
            const re = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
            const receiving_address = {
                id: this.id,
                name: this.newName,
                tellphone: this.newTellphone,
                area: this.newArea,
                detailed_address: this.newAddress,
                setdefault: this.setDefault
            };
            if (
                this.newName.trim() !== "" &&
                this.newTellphone.trim() !== "" &&
                this.newArea.trim() !== "" &&
                this.newAddress.trim() !== ""
            ) {
                if (re.test(this.newTellphone)) {
                    console.log(receiving_address);
                    this.$store.commit("addAddress", receiving_address);
                    alert("添加成功");
                    this.newName = "";
                    this.newTellphone = "";
                    this.newArea = "";
                    this.newAddress = "";
                    this.setDefaultfalse;
                    this.$router.push('/seladdress')
                } else {
                    alert("手机号码有误，请重填");
                }
            } else {
                alert("必填项不能为空填");
            }
        }
    },
    mounted() {
        console.log(this.$refs.thirdAddress);
    }
};
</script>
<style lang="scss" >
.create-address {
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
                    display: flex;
                    align-items: center;
                    .ivu-input {
                        width: 4.5rem;
                        border-color: #fff;
                        border-bottom-color: #ccc;
                    }
                    span {
                        width: 1.5rem;
                    }
                    .ivu-input-icon {
                        right: 0.6rem;
                    }
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

