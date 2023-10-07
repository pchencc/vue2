<template>
  <div>
    <h1>人员列表{{sum}}</h1>
    <input type="text" placeholder="输入名字" v-model="inputName">
    <el-button type="success" @click="addPerson()">添加</el-button>
    <el-button type="success" @click="addServer()">添加（服务器）</el-button>
    <ul>
        <li v-for="p in personList" :key="p.id">
        姓名：{{p.name}}</li>

    </ul>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'persons',
    data(){
    return{
        inputName:''
    }
    },
    computed:{
        ...mapState('b',['personList']),
        ...mapState('a',['sum'])
    },
    methods:{
        addPerson(){
            const personObj={id:nanoid(),name:this.inputName}
            console.log(personObj)
            this.$store.commit('b/ADD_PERSON',personObj)
            this.inputName=''

        },
        addServer(){
            this.$store.dispatch('b/addServer')
        }
       
    }

}
</script>

<style scoped>
div{
    margin-top: 50px;
}
input{
    height: 30px;
    width: 200px;
    margin-right: 10px;
}

</style>