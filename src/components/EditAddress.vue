<template>
    <div class="edit-address">
        <Top title='编辑收货地址' :handleBack='handleBack' />
        <div class="main">
            <div class="detail-address">
                <ul>
                    <li>
                        <span>收货人：</span>
                        <Input v-model="editName" clearable style="width: 5rem,borderColor:#fff" /> </li>
                    <li>
                        <span> 联系方式：</span>
                        <Input v-model="editTellphone" clearable style="width: 5rem,borderColor:#fff" /> </li>
                    <li @click="handleOpen()">
                        <span>所在地区：</span>
                        <Input v-model="editArea" clearable style="width: 5rem,borderColor:#fff" /> </li>
                    <li>
                        <span> 详细地址:</span>
                        <Input v-model="editAddress" clearable style="width: 5rem,borderColor:#fff" /> </li>
                </ul>
            </div>
            <div class="is-default">
                <div class="left">
                    <h4>设为默认地址</h4>
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
        <Button type='warning' @click="saveEdit">保存并使用</Button>
        <Address ref='thirdAddress' :getAddress='getAddress' />
    </div>
</template>
<script>
import Address from "./Address";
import Top from "./top/Top";
export default {
    name: "editaddress",
    data: () => ({
        editArea: "",
        editAddress: "",
        editName: "",
        editTellphone: "",
        editName: "name",
        setDefault: "",
        id: ""
    }),
    components: {
        Top,
        Address
    },
    methods: {
        handleBack() {
            this.$router.push('/seladdress');
        },
        handleOpen() {
            this.$refs.thirdAddress.handleOpens();
        },
        handleClose() {
            this.$refs.thirdAddress.handleCloses();
        },
        getAddress(data) {
            this.editArea = `${data.province.value}${data.city.value}${
                data.area.value
            }`;
            // console.log(this.address)
        },
        saveEdit() {
            const re = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
            const receiving_address = {
                id: this.id,
                name: this.editName,
                tellphone: this.editTellphone,
                area: this.editArea,
                detailed_address: this.editAddress,
                setdefault: this.setDefault
            };
            if (
                this.editName.trim() !== "" &&
                this.editTellphone.trim() !== "" &&
                this.editArea.trim() !== "" &&
                this.editAddress.trim() !== ""
            ) {
                if (re.test(this.editTellphone)) {
                    console.log(receiving_address);
                    this.$store.commit("editAddress", receiving_address);
                    alert("修改成功");
                } else {
                    alert("手机号码有误，请重填");
                }
            } else {
                alert("必填项不能为空填");
            }
        }
    },
    computed: {
        editAddresss() {
            const id = this.$router.history.current.params.id;
            return this.$store.getters.editAddress(id);
        }
    },
    mounted() {
        // console.log(this.$router.history.current.params.id);
        const id = this.$router.history.current.params.id;
        const DetAddress = this.$store.getters.editAddress(id);
        (this.editArea = DetAddress.area),
            (this.editAddress = DetAddress.detailed_address),
            (this.editName = DetAddress.name),
            (this.editTellphone = DetAddress.tellphone),
            (this.setDefault = DetAddress.setdefault);
        this.name = DetAddress.name;
        this.id = DetAddress.id;
    }
};
</script>
<style lang="scss" >
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
                // li {
                //     width: 100%;
                //     line-height: 0.8rem;
                //     font-size: 0.24rem;
                // }
                li {
                    display: flex;
                    width: 100%;
                    line-height: 0.8rem;
                    font-size: 0.24rem;
                    align-items: center;
                    span {
                        margin-right: 0.2rem;
                        width: 2rem;
                    }
                    .ivu-input {
                        width: 4rem;
                        border-color: #fff;
                    }
                    .ivu-input-icon {
                        right: 0.6rem;
                    }
                }
                li {
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

