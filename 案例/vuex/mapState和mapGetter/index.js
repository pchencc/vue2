//该文件用于创建vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'

//准备action：用于响应组件中的动作
//组件methods的this.$store.dispatch('jia',this.n)
//提交jia
const actions={
//context是一个ministore的方法 里面有需要的方法 commit和dispatch
jia(context,value){
   context.commit('JIA',value)//用context的commit提交方法提交jia和值n
},

jian(context,value){
    context.commit('JIAN',value)
},
odd(context,value){
    context.commit('ODD',value)
},
wait(context,value){
    context.commit('WAIT',value)
}

}

//准备mutations：用于操作数据（state）
//收到state和value：n，进行操作
const mutations={
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

}

//准备state：用于存储数据
const state={
    sum:1,
    myname:'潘晨',
    hobby:'学习'

}


//加工state数据
const getters={
  bigSum(state){
    return state.sum*10
  }    
}

Vue.use(Vuex)//可以给vm传入store配置项

//创建并导出store
export default  new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


