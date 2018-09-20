<template>
  <div class="main">
    <header>
      <Top :title='title' :handleBack='handleBack' />
      <div class="banner"></div>
      <nav>
        <ul>
          <li @click="$store.commit('changeType','agentinfo')">
            <router-link to='/agentinfo'> <img src="../assets/agent_12.png" alt="">
              <span>独家代理</span>
            </router-link>
          </li>
          <li @click="$store.commit('changeType','fluteinfo')">
            <router-link to='/fluteinfo'><img src="../assets/news_12.png" alt="">
              <span>肺笛简介</span>
            </router-link>
          </li>
          <li @click="$store.commit('changeType','attract')">
            <router-link to='/attract'>
              <img src="../assets/attact_12.png" alt="">
              <span>招商引资</span>
            </router-link>
          </li>
          <li>
            <router-link to='/myorder'><img src="../assets/myorder_12.png" alt="">
              <span>我的订单</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <section>
      <div class="top">
        <h3>我的产品</h3>
        <div class="goods">
          <img src="../assets/proudct_03.png" alt="">
          <div class="product">
            <p>美国lung flute 正品 “肺笛” 正式进入中国</p>
            <span>￥2880.00</span>
            <div class="btnss">
              <button @click="addShopCart">加入购物车</button>
              <button @click="handleToCart();addShopCart()">立即购买</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <h3>
          <router-link to='/newsinfo'>热点新闻</router-link>
        </h3>
        <ul>
          <li>
            <img src="../assets/news-pic_03.png" alt="">
            <div class="detail">
              <p>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国</p>
              <span>查看更多</span>
            </div>
          </li>
          <li>
            <img src="../assets/news-pic_03.png" alt="">
            <div class="detail">
              <p>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国</p>
              <span>查看更多</span>
            </div>
          </li>
          <li>
            <img src="../assets/news-pic_03.png" alt="">
            <div class="detail">
              <p>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国</p>
              <span>查看更多</span>
            </div>
          </li>
        </ul>
        <span>查看更多</span>
      </div>
    </section>
    <Footer/>

  </div>
</template>
<script>
import Top from "../components/top/Top";
import Footer from "../components/footer/Footer";
import shortId from "shortid";
export default {
    name: "home",
    components: {
        Top,
        Footer
    },
    data: () => ({
        title: "个人中心"
    }),
    methods: {
        handleBack() {
            this.$router.push("/");
            this.$store.commit("loginOut");
        },
        addShopCart() {
            const newGoods = {
                img: "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
                name: "美国lungflute 正品 “肺笛®” 正式进入中国",
                count: 1,
                price: "2888",
                create_time: new Date(),
                type: "isPay",
                id: shortId()
            };
            this.$store.commit("addShoppingCar", newGoods);
        },
        handleToCart() {
          this.$router.push("/shoppingcart");
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    header {
        width: 100%;
        margin-bottom: 0.1rem;

        .banner {
            width: 100%;
            height: 3.23rem;
            background-image: url("../assets/home-banner-bg_09.png");
            background-repeat: no-repeat;
            background-size: contain;
        }
        nav {
            width: 100%;
            padding: 0.2rem 0 0 0;
            ul {
                width: 100%;
                height: 0.8rem;
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: 0.24rem;
                li {
                    width: 1rem;
                    display: flex;
                    a {
                        display: flex;
                        width: 100%;
                        height: 100%;
                        justify-content: space-between;
                        flex-direction: column;
                        align-items: center;
                        color: #000;
                        img {
                            width: 0.5rem;
                            height: 0.5rem;
                        }
                        span {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    section {
        border-top: 0.2rem solid #f1f1f1;
        border-bottom: 0.2rem solid #f1f1f1;
        h3 {
            font-size: 0.26rem;
            margin-top: 0;
        }
        .top {
            border-bottom: 0.2rem solid #f1f1f1;
            width: 100%;
            height: 2.8rem;
            display: flex;
            flex-direction: column;
            padding: 0.1rem 0.3rem 0.4rem 0.2rem;
            .goods {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                > img {
                    width: 0.16rem;
                    height: 1.72rem;
                    margin-left: 0.5rem;
                }
                .product {
                    width: 80%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    p {
                        font-size: 0.24rem;
                        margin: 0;
                        color: #999;
                    }
                    span {
                        font-size: 0.3rem;
                        color: #fc8e00;
                        margin: 0.15rem 0;
                    }
                    .btnss {
                        width: 100%;
                        display: flex;
                        > button {
                            width: 1.48rem;
                            height: 0.46rem;
                            font-size: 0.22rem;
                            text-align: center;
                            outline: 0;
                            border: 1px solid #fc8e00;
                            border-radius: 3px;
                        }
                        button:first-child {
                            color: #fc8e00;
                            background-color: #fff;
                            margin-right: 0.2rem;
                        }
                        button:last-child {
                            color: #fff;
                            background-color: #fc8e00;
                        }
                    }
                }
            }
        }
        .bottom {
            padding: 0.2rem 0.3rem;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            width: 100%;
            height: 4.7rem;
            > h3 {
                margin-bottom: 0.1rem;
                a {
                    color: #000;
                }
            }
            ul {
                font-size: 0.22rem;
                list-style: none;
                li {
                    display: flex;
                    width: 100%;
                    height: 1rem;
                    > img {
                        width: 1.5rem;
                    }
                    .detail {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        width: 5rem;
                        margin-left: 0.2rem;
                        p {
                            margin: 0;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2; //这里是在第二行有省略号
                            overflow: hidden;
                            color: #8c8c8c;
                        }
                        > span {
                            align-self: flex-end;
                            color: #fc8e00;
                            font-size: 0.22rem;
                        }
                    }
                }
                li + li {
                    margin: 0.15rem 0;
                }
            }
            > span {
                font-size: 0.24rem;
                align-self: center;
                color: #d9d9d9;
            }
        }
    }
}
</style>
