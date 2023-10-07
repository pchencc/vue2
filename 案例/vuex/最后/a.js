export default{
    namespaced:true,
    actions:{
        odd(context,value){
            context.commit('ODD',value)
        },
        wait(context,value){
            context.commit('WAIT',value)
        },
    },
    mutations:{
        JIA(state,value){
            state.sum+=value
    
        },
    
        JIAN(state,value){
            state.sum-=value
        },
        ODD(state,value){
            state.sum+=value
        },
        WAIT(state,value){
            state.sum+=value
        },
    },
    state:{
        sum:1,
        myname:'潘晨',
        hobby:'学习',
    },
    getters:{  
        bigSum(state){
        return state.sum*10
      }    },
}