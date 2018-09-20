<template>
    <div class="tracking">
        <Top   :title="title" :handleBack='handleBack'/>
        <router-view></router-view>
    </div>

</template>
<script>
import Top from '../components/top/Top' 
export default {
    name:'tracking',
    components:{
        Top
    },data:()=>({
        title:'订单跟踪'
    }),methods:{
        handleBack(){
            this.$router.back()
        }
    }
}
</script>
