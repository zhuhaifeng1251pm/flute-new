<template>
    <div class="select-address">
        <Top title='选择收货地址' :handleBack='handleBack' />
        <div class="main">
            <ul>
                <li v-for=" address in showAddress" :key="address.id">
                    <div class="up">
                        <div class="check-box"><input type="checkbox" :id='`checkss${address.id}`' @change='handleAddress(address)' v-model="address.is_selected">
                            <label :for='`checkss${address.id}`'></label>
                        </div>
                        <article>
                            <h4>
                                <span>收货人:{{address.name}}</span>
                                <span>{{address.tellphone}}</span>
                            </h4>
                            <p>收货地址：{{address.area}}{{address.detailed_address}}</p>
                        </article>
                    </div>
                    <div class="down">
                        <button :class="{active:address.setdefault}" @click="$store.commit('setDefault',address.id)">默认地址</button>
                        <div class="toolLists">
                            <router-link :to="`/editaddress/${address.id}`" class="edit-address">
                            </router-link>
                            <span @click="$store.commit('delAddress',address.id)"></span>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
        <Button type='warning' @click="$router.push('/createaddress')">新建地址</Button>
    </div>
</template>
<script>
import Top from "./top/Top";
export default {
    name: "selAddress",
    components: {
        Top
    },
    methods: {
        handleBack() {
            this.$router.push("/shoppingcart/confirmorder");
        },
        handleAddress(address) {
            if(address.is_selected){
                this.$store.getters.showAddress(address)
                this.$store.commit('selectAdress',address.id)
            }
        }
    },
    computed: {
        showAddress() {
            return this.$store.state.address.address;
        }
    }
};
</script>
<style lang="scss" scoped>
.select-address {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .main {
        width: 100%;
        height: 100vh;
        background-color: #f5f5f5;
        ul {
            list-style: none;
            li {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 0.2rem;
                height: 2.5rem;
                background-color: #fff;
                .up {
                    display: flex;
                    align-items: center;
                    .check-box {
                        position: relative;
                        margin-right: 0.5rem;
                        // display: flex;
                        // flex-direction: column;
                        input[type="checkbox"] {
                            position: absolute;
                            z-index: -1;
                            opacity: 0;
                        }
                        // label {
                        //     padding-left: 0.2rem;
                        // }
                        label::before {
                            content: "";
                            display: block;
                            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E5%8B%BE%28%23cccccc%29.svg);
                            background-repeat: no-repeat;
                            background-position: center;
                            width: 0.35rem;
                            height: 0.35rem;
                            border: 2px solid #c4c4c4;
                            background-color: #fff;
                            border-radius: 50%;
                            position: absolute;
                            z-index: 52;
                            top: -0.5rem;
                            left: -0.1rem;
                        }
                        input:checked ~ label::before {
                            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E5%8B%BE%20%28%23fc8e00%29.svg);
                            background-repeat: no-repeat;
                            background-position: center;
                            border-color: #fc8e00;
                        }
                    }
                    article {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 1rem;
                        font-size: 0.24rem;
                    }
                }
                .down {
                    width: 100%;
                    height: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    > button {
                        width: 1.5rem;
                        line-height: 0.5rem;
                        height: 0.5rem;
                        border: 1px solid #ccc;
                        background-color: #fff;
                        outline: 0;
                        color: #ccc;
                        border-radius: 3px;
                    }
                    .active {
                        border-color: #fc8e00;
                        color: #fc8e00;
                    }
                    .toolLists {
                        display: flex;
                        span {
                            width: 0.5rem;
                            height: 0.5rem;
                            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E5%88%A0%20%E9%99%A4.svg);
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: 50%;
                        }
                        .edit-address {
                            width: 0.5rem;
                            height: 0.5rem;
                            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/%E7%BC%96%E8%BE%91.svg);
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: 50%;
                        }
                    }
                }
            }
        }
    }
    > button {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1rem;
        width: 100%;
    }
}
</style>
