<template>
    <div class="details-top">
        <header>
            <div class="top">
                <span @click="handleBack"></span>
                <h3>{{showTic()[0]}}</h3>
                <span></span>
            </div>
            <nav>
                <ul>
                    <li>
                        <router-link to='/home'>首页</router-link>
                    </li>
                    <li @click="goToOther(`${showTicPath()[1]}`)">
                        <router-link :to='`/${showTicPath()[1]}`'> {{showTic()[1]}}</router-link>
                    </li>
                    <li>
                        <router-link :to='`/${showTicPath()[2]}`'> {{showTic()[2]}}</router-link>
                    </li>
                    <li @click="goToOther(`${showTicPath()[3]}`)">
                        <router-link :to='`/${showTicPath()[3]}`'> {{showTic()[3]}}</router-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>
<script>
export default {
    name: "detailsTop",
    computed: {
        showTic() {
            return () => {
                if (this.$store.state.type.type === "agentinfo") {
                    return ["独家代理", "肺笛简介", "关于我们", "招商引资"];
                } else if (this.$store.state.type.type === "fluteinfo") {
                    return ["肺笛简介", "独家代理", "关于我们", "招商引资"];
                } else if (this.$store.state.type.type === "attract") {
                    return ["招商引资", "肺笛简介", "关于我们", "独家代理"];
                }
                else return ["独家代理", "肺笛简介", "关于我们", "招商引资"]
            };
        },
        showTicPath() {
            return () => {
                if (this.$store.state.type.type === "agentinfo") {
                    return ["agentinfo", "fluteinfo", "home", "attract"];
                } else if (this.$store.state.type.type === "fluteinfo") {
                    return ["fluteinfo", "agentinfo", "home", "attract"];
                } else if (this.$store.state.type.type === "attract") {
                    return ["attract", "fluteinfo", "home", "agentinfo"];
                }
                else return ["agentinfo", "fluteinfo", "home", "attract"]
            };
        }
    },
    methods: {
        handleBack() {
            this.$router.push('/home');
        },
        goToOther(str) {
            this.$store.commit("changeType", str);
            this.$router.push(str)
        }
    },mounted(){
        console.log(this.$store.state.type.type)
    }
};
</script>
<style lang="scss" scoped>
.details-top {
    width: 100%;
    background-color: #fff;
    .top {
        width: 100%;
        height: 0.68rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.26rem;
        color: #fff;
        background-color: #35d4a0;
        padding: 0 0.2rem;
        span {
            width: 0.45rem;
            height: 0.45rem;
            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/back%23fff_06.png);
            background-repeat: no-repeat;
            background-size: contain;
        }
        span:last-child {
            background-image: url(http://pf9cvp4yn.bkt.clouddn.com/menu_06.png);
            background-position: center;
        }
    }
    nav {
        width: 100%;
        height: 0.68rem;
        font-size: 0.22rem;
        ul {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            list-style: none;
            align-items: center;
            justify-content: space-between;
            li {
                width: 24.999%;
                line-height: 0.68rem;
                text-align: center;
                > a {
                    color: #333;
                }
            }
            li + li {
                border-left: 1px solid #f5f5f5;
            }
        }
    }
}
</style>

