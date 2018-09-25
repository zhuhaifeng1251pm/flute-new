const state={
    login:false
}
const mutations = {
    isTrue(state, userInfo) {
        if(userInfo.loginName==='1'&&userInfo.password==='1'){
            state.login=true
        }
    },
    loginOut(state){
        state.login=false
    }
}




const login={
    state,
    mutations
}
export default login