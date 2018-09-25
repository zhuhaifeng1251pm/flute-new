const state = {
    myorder:[]
}

const mutations = {
    addNewMyorder(state, newOrder) {
        state.myorder.push(newOrder)
    },
    delOrder(state, id) {
        state.myorder.splice(state.myorder.findIndex(t=>t.id===id),1)
    }
    ,
    changeIssend(state, id) {
        state.myorder.find(t=>t.id===id).type='isSend'
    },
    changeIsReceive(state, id) {
        state.myorder.find(t=>t.id===id).type='isReceive'
    },
    changeCompleted(state, id) {
        state.myorder.find(t=>t.id===id).type='completed'
    }
    
}
const getters = {
    showMyorder(state) {
        return (type) => {
            switch (type) {
              case "isPay":
                return state.myorder.filter(t => t.type === "isPay");
              case "isSend":
                return state.myorder.filter(t => t.type === "isSend");
              case "isReceive":
                return state.myorder.filter(t => t.type === "isReceive");
              case "completed":
                return state.myorder.filter(t => t.type === "completed");
              default:
                return state.myorder;
            }
          };

    },
    payTo(state,id) {
        return id=> {
            return state.myorder.find(t=>t.id===id)
        }
    }
}

const myorder = {
    state,mutations,getters
}

export default myorder