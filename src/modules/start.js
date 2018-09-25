const state = {
    start: {
        start: "个人",
        company: "",
        Renumber: "",
        detailed: ""
    }
};

const mutations={
    inputInfo(state,obj){
        state.start.company=obj.company,
        state.start.Renumber=obj.Renumber,
        state.start.detailed=obj.detailed

    }
}
const start = {
    state,mutations
};
export default start;
