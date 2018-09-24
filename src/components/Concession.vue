<template>
    <div class="concession">
        <Top title="使用优惠码" :handleBack='handleBack' />
        <div class="main">
            <h3>
                <span @click="handleClick(true)" :class="{active:show}">可使用的优惠码（{{$store.getters.showCanUse.length}}）</span>
                <span @click="handleClick(false)" :class="{active:!show}">不可使用的优惠码（{{$store.getters.showNoUse.length}}）</span>
            </h3>
            <ul>
                <li v-for=" code in $store.getters.showCanUse" :key='code.id' v-show="show">
                    <img :src="code.img" alt="">
                </li>
                <li v-for=" code in $store.getters.showNoUse" :key='code.id' v-show="!show">
                    <div class="wrap"></div>
                    <img :src="code.img" alt="">
                </li>
            </ul>

        </div>
    </div>
</template>
<script>
import Top from "./top/Top";
export default {
    name: "concession",
    data: () => ({
        show: true
    }),
    components: {
        Top
    },
    methods: {
        handleBack() {
            this.$router.back();
        },
        handleClick(str) {
            this.show = str;
        }
    },
    mounted() {
        console.log(this.$store.getters.showNoUse);
    }
};
</script>
<style lang="scss" scoped>
.concession {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .main {
        width: 100%;
        height: 87vh;
        background-color: #f5f5f5;
        h3{
            width: 99%;
            margin: 0 auto;
            display: flex;
            padding: 0 .5rem;
            justify-content: space-between;
            span{
                width: 45%;
                line-height: .6rem;
                text-align: center;
                border-bottom: 1px solid #000;
            }
            .active{
                color:#fc8e00;
                border-bottom-color:#fc8e00; 
            }
        }
        ul{
            list-style: none;
            width: 100%;
            margin-top: .2rem;
            padding: .2rem;
            li{
                width: 100%;
                height: 2rem;
                background-color: #fff;
                position: relative;
                img{
                    width: 100%;
                    height: 3rem;
                }
                .wrap{
                    position: absolute;
                    top: 0;left: 0;
                    width: 100%;
                    height: 3rem;
                    background-color: rgba(0,0,0,0.5);
                }
            }
        }
    }
}
</style>

