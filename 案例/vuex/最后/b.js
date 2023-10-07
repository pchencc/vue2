
import axios from "axios"
import { nanoid } from "nanoid"
export default{
    //人员

    namespaced:true,
    actions:{
        addServer(context){
        axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
            reponse=>{
                context.commit('ADD_PERSON',{id:nanoid(),name:reponse.data})
                console.log('yes',reponse.data)
            },
            error=>{
                console.log('no',error.message)
            }
        )
        }
    },
    mutations:{   
        ADD_PERSON(state,value){
        state.personList.unshift(value)
    }},
    state:{
        personList:[
            {
                id:'001',name:'panchen',
            },
            {
                id:'002',name:'pan'
            },
            {
                id:'003',name:'chen'
            }
        ]
    },
    getters:{},

}