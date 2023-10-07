<template>
    <transition name="todo" appear="">
    
    
    <li class="item">
        <label>
          <input type="checkbox" @change="itemCheck(todo.id)" :checked="todo.done">
          <span v-show="!todo.isEdit">{{todo.name}}</span>
          <input type="text" :value="todo.name" 
          ref="inputfocus" v-show="todo.isEdit" @blur="handleBlur(todo,$event)">

        </label>
        <span class="btn">
        <button @click="editItem(todo)">编辑</button>
        <button @click="itemDel(todo.id)">删除</button></span>
        
    </li>
</transition>
  
</template>

<script>
import PubSub from 'pubsub-js';

export default {
  name:'Item',
  
  props:['todo',],//接受todo里面的每一条信息
  methods:{
    itemCheck(id){
        console.log('item',id)
        this.$bus.$emit('handleCheck',id)//把id传过去
    },
    itemDel(id){
        PubSub.publish('delTodo',id)
    },
    editItem(todo){
        if(todo.hasOwnProperty('isEdit')){
            todo.isEdit=true}
         else{     
        this.$set(todo,'isEdit',true)}

        this.$nextTick(function(){
        this.$refs.inputfocus.focus()
       })
        
    },
    handleBlur(todo,e){
        todo.isEdit=false
        this.$bus.$emit('updateItem',todo.id,e.target.value)
        console.log('item edit',todo.id,e.target.value)
      
    }
  }
}
</script>

<style>
.item{
    height: 30px;
    width: 306px;
    position: relative;
    left: 0px;
    border: 1px solid grey;
    
}
.item:hover{
    background-color:orange;
}
.btn{
    position: absolute;
    right: 0px;
    top: 5px;

}
li{
	list-style:none;
    

}
.todo-enter-active{
    animation: todo 0.5s linear;
}
.todo-leave-active{
    animation: todo 0.5s linear reverse;
}
@keyframes todo{
    from{
        transform: translateX(-100%);
    }
    to
    {
        transform: translateX(0);
    }
}
</style>