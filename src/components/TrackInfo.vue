<template>
    <div class="trackInfo">
        <div class="top">
            <div>
                <span>订单编号</span>
                <span>20170925000456732</span>
            </div>
            <div>
                <span>预计送达</span>
                <span>2017.11.14</span>
            </div>
        </div>
        <div class="main">
            <ul>
                <li> <span>最新</span> <div class="box1">
                    <h4>快件在【北京通州集散中心】装车，已发往下一站</h4>
                    <span>2017年 11月11日 下午 8:24:25</span></div>
                </li>
                <li> <span v-show="false">最新</span> <div class="box1">
                    <h4>快件在【北京通州集散中心】装车，已发往下一站</h4>
                    <span>2017年 11月11日 下午 7:24:25</span></div>
                </li>
                <li> <span v-show="false">最新</span> <div class="box1">
                    <h4>快件在【北京大兴科创二街营业点】装车，已发往下一站</h4>
                    <span>2017年 11月11日 下午 7:24:25</span></div>
                </li>
                <li> <span v-show="false">最新</span> <div class="box1">
                    <h4>顺丰速运 已收取快件</h4>
                    <span>2017年 11月11日 下午 7:24:25</span></div>
                </li>
            </ul>

        </div>
    </div>
</template>
<script>
export default {
    name: "trackInfo"
};
</script>
<style lang="scss" scoped>
.trackInfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    .top {
        width: 100%;
        height: 2.2rem;
        border-bottom: .2rem solid #f5f5f5;
        padding: .2rem;
        > div {
            margin: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 0.89rem;
            border-bottom: 1px solid #f5f5f5;
        }
    }
    .main{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        ul{
            width: 95%;
            list-style:none ;
            padding-right:.2rem ;
            li{
                width: 100%;
                height: 1.7rem;
                display: flex;
                padding:.2rem .2rem .2rem  1rem;
                border-top:1px solid #f5f5f5;
                position: relative;
                >span{
                    width: 0.7rem;
                    line-height: 0.4rem;
                    height: 0.4rem;
                    color: #fff;
                    text-align: center;
                    background-color: #35d4a0;
                    flex-shrink: 0;
                    position: absolute;
                    top:.3rem ;left: 0;
                }
                .box1{
                    display: flex;
                flex-direction: column;
                justify-content: space-around;
                h4{
                    font-size: .26rem;
                }
                >span{
                    font-size: .2rem;
                    color: #ccc;
                }
                }
            }
        }
    }
}
</style>

