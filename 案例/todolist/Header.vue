<template>
    <div>
        <input type="text" placeholder="请输入你的任务名称，按回车确认" v-model="name" class="input" @keyup.enter="add">
    </div>
  
</template>

<script>
import {nanoid} from 'nanoid'
export default {

    name:'Header',
    data(){
        return {
            name:''
        }
    },
    methods:{
        add(e){
            //讲用户输出包装成一个todo对象
            const todoObj={id:nanoid(),name:e.target.value,done:false}
            this.receive(todoObj)
            this.name=''

        }
    },
    props:['receive']
}

</script>

<style scoped>
.input{
    height: 30px;
    width: 300px;
}


</style>