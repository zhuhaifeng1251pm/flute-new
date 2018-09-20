const state = {
    goodsType:'all'
}

const mutations = {
    changeGType(state, str) {
        state.goodsType=str
    }
}

const goodsType = {
    state,
    mutations
}
    export default goodsType