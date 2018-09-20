<template>
    <div class="fulte-info">
        <DetailsTop/>
        <section>
            <div class="top">
                <h4>产品介绍</h4>
                <ul>
                    <li>产品名称： 排痰器</li>
                    <li>商品名： 朗费罗 ® 肺笛</li>
                    <li>可选型号： 家庭治疗护理型</li>
                </ul>
            </div>
            <div class="middle">
                <h4>适用人群</h4>
                <ul>
                    <li> <img src="http://pf9cvp4yn.bkt.clouddn.com/flute4_11.png" alt="">
                        <span>烟民</span>
                    </li>
                    <li><img src="http://pf9cvp4yn.bkt.clouddn.com/flute5_11.png" alt="">
                        <span>尘肺病</span>
                    </li>
                    <li><img src="http://pf9cvp4yn.bkt.clouddn.com/flute6_11.png" alt="">
                        <span>肺部疾病患者</span>
                    </li>
                    <li><img src="http://pf9cvp4yn.bkt.clouddn.com/flute7_11.png" alt="">
                        <span>雾霾吸入者</span>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <div class="bottom-up">
                    <h4>产品特点</h4>
                    <ul>
                        <li><img src="http://pf9cvp4yn.bkt.clouddn.com/flute8_14.png" alt="">
                            <span>美国原装进口</span>
                        </li>
                        <li><img src="http://pf9cvp4yn.bkt.clouddn.com/flute9_15.png" alt="">
                            <span>纯物理治疗</span>
                        </li>
                        <li><img src="http://pf9cvp4yn.bkt.clouddn.com/flute10_15.png" alt="">
                            <span>吹出有害物质</span>
                        </li>
                    </ul>
                </div>
                <div class="bottom-middle">
                    <h4>使用方法</h4>
                    <ul>
                        <li>保持一个放松的位置；背部挺直不要靠在椅背上，身体略前倾，并保持喉咙和气到畅通，拿住肺笛向下指。</li>
                        <li>比平常更深一些吸气。</li>
                        <li>把嘴唇完全地包住吹嘴。</li>
                        <li>平稳而缓慢地向肺笛吹气，好像要把蜡烛吹灭。当吹气时，哨片将震动并传递声波。在吹气时专注于保持哨片</li>
                        <li>把吹嘴从口中一开，快速地吸一口气，并重复以上步骤</li>
                    </ul>
                </div>
                <div class="bottom-down">
                    <h4>工作原理</h4>
                    <p>当患者通过吹嘴向器械吹气时，器械产生声波和肺腔一起震动，传送到气到和肺部，是痰液从粘稠变为流体，让痰液松动，易于咳出。使用肺笛，结合大力咳嗽，将有利于清除呼吸道分泌物，减少可能被困在呼吸道的空气量，保持气道开放，清除分泌物，改善支气管扩张剂药物的输送。粘液堵住气道，并且不易咳出 轻轻地吹几分钟肺笛，一个非常简单的过程，产生低频声波震动，声波行驶到胸部并穿透肺部的分泌物，使其变稀薄，使其松动，支持身体本身的粘液清除系统 肺笛的声波穿透粘液，有类似改变凝胶转化成液体的结果。 患者能够咳出变薄的痰液，清肺并缓解症状。
                    </p>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
import DetailsTop from "./DetailsTop";
export default {
  name: "fulteinfo",
  components: {
    DetailsTop
  }
};
</script>
<style lang="scss" scoped>
.fulte-info {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f3f3f3;
  font-size: .22rem;
  color:#999;
  section {
    background-color: #f3f3f3;
    padding-top: 0.3rem;
    font-size: 0.22rem;
    h4 {
      width: 95%;
      margin: 0 auto;
      font-size: 0.24rem;
      line-height: 0.24rem;
      border-left: 4px solid #35d4a0;
      padding: 0 0.3rem;
      margin-bottom: 0.2rem;
      color:#333;
    }
    .top {
      width: 100%;
      margin-bottom: 0.3rem;
      ul {
        background-color: #fff;
        width: 100%;
        list-style: none;
        li {
          width: 90%;
          margin: 0 auto;
          line-height: 0.5rem;
          color: #666;
          background-image: url(http://pf9cvp4yn.bkt.clouddn.com/flute1_03.png);
          background-size: 4%;
          background-repeat: no-repeat;
          background-position: left center;
          padding: 0.05rem 0.6rem;
        }
        li:nth-child(2){
            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/flute2_06.png);
        }
        li:last-child{
            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/flute3_07.png);
        }
      }
    }
    .middle {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        list-style: none;
        justify-content: space-between;
        background-color: #fff;
        margin-bottom: .3rem;
       padding: .2rem 0;
        li {
          width: 25%;
          text-align: center;
          height: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        justify-content: space-between;
          >img{
              width: 20%;
          }
        }
      }
    }
    .bottom{
        width: 100%;
        .bottom-up{
            width: 100%;
            margin-bottom: .2rem;
            ul{
                display: flex;
                justify-content: space-around;
                list-style:none;
                width: 80%;
                margin: 0 auto;
                li{
                    width: 32%;
                    height: 1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        width: 100%;
                        height: 0.7rem;
                    }
                }
            }
        }
        .bottom-middle{
            width: 100%;
            margin-bottom: .3rem;
            ul{
                list-style: none;
                width: 100%;
                padding: 0 .5rem;
                li{
                    background-image: url(http://pf9cvp4yn.bkt.clouddn.com/authorize-point_07.png);
                    background-position: left center ;
                    background-repeat: no-repeat;
                    background-size: 1.5%;
                    padding-left:.2rem;
                    margin-bottom: .1rem;
                }
                li:nth-child(1),li:nth-child(4){
                    background-position: left .15rem;
                }
                li:last-child{
                    margin-bottom: 0;
                }
            }
        }
        .bottom-down{
            width: 100%;
            p{
                margin: 0;
                width: 96%;
                margin: 0 auto;
                line-height: .3rem;
            }
        }
    }
  }
}
</style>

