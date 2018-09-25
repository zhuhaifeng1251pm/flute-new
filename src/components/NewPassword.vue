<template>
    <div class="newPassword">
        <Top title='修改密码' :handleBack='handleBack' />
        <ul>
            <li>
                <label for="oldword">旧密码</label>
                <Input v-model="oldvalue" id='oldword'  clearable  :type='oldsee?"text":"password"'/>
               <img :src="oldsee?'http://pf9cvp4yn.bkt.clouddn.com/nosee.svg':'http://pf9cvp4yn.bkt.clouddn.com/see.svg'" alt="" @click="handleOldSee">

            </li>
            <li>
                <label for="newword">新密码</label>
                <Input v-model="newvalue" id='newword'  clearable :type='newsee?"text":"password"'/>
               <img :src="newsee?'http://pf9cvp4yn.bkt.clouddn.com/nosee.svg':'http://pf9cvp4yn.bkt.clouddn.com/see.svg'" alt="" @click="handleNewSee">
            </li>
            <li>
                <label for="renewword">确认密码</label>
                <Input v-model="revalue" id='renewword'  clearable :type='resee?"text":"password"'/>
              <img :src="resee?'http://pf9cvp4yn.bkt.clouddn.com/nosee.svg':'http://pf9cvp4yn.bkt.clouddn.com/see.svg'" alt="" @click="handleReSee">
            </li>
        </ul>
        <Button type="warning" @click="changePassword">确认修改</Button>

    </div>
</template>
<script>
import Top from "./top/Top";
export default {
  name: "password",
  components: {
    Top
  },
  data: () => ({
    oldvalue: '',
    newvalue: "",
    revalue: "",
    oldsee:false,
    newsee:false,
    resee:false,
  }),
  methods: {
    handleBack() {
      this.$router.back();
    },
    changePassword(){
        if(this.oldvalue===this.$store.state.personal.personal.password){
            if(this.revalue===this.newvalue){
                this.$store.commit('newPassword',this.newvalue)
            }
            else{
                alert('确认密码与新密码不符，请重新输入')
            }

        }
        else{
            alert('原密码不符，无法修改')
        }
    }
    ,handleOldSee(){
        this.oldsee=!this.oldsee
    } ,handleNewSee(){
        this.newsee=!this.newsee
    } ,handleReSee(){
        this.resee=!this.resee
    }

  }
//   ,mounted(){
//       this.oldvalue=this.$store.state.personal.personal.password
//   }
};
</script>
<style lang="scss">
.newPassword {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
    ul{
        margin-top: 1rem;
        width: 100%;
        list-style:none;
        padding: .2rem;
    }
    li{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1rem;
        label{
            width: 1rem;
        }
        .ivu-input{
            width: 4.5rem;
        }
        .ivu-input-icon {
            right: .6rem;
        }
        img{
            width: 0.5rem;
            height: 0.5rem;
            margin-right: .5rem;
        }
    }








  button{
      width: 100%;
      height: 1rem;
      position: absolute;
      bottom: 0;
      left: 0;
  }
}
</style>

