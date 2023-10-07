//该文件用于创建vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'

import a from './a'
import b from './b'




Vue.use(Vuex)//可以给vm传入store配置项

//创建并导出store
export default  new Vuex.Store({
modules:{
    a,
     b
     //namespaced:true,
    
}
})


