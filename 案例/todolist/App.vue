<template>
  <div>
  <Header :receive="receive"></Header>
  <List :todos="todos"
        
         ></List>
  <Footer
  :todos="todos"
   :okState="okState"
   ></Footer>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';


import Header from './components/Header.vue'
import List from './components/List.vue'

import Footer from './components/Footer.vue'
export default {
   name:'App',
   components:{
      Header,
      List,
      Footer
      
      
   },
   data(){
      return{
         todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:false},
        {id:'003',name:'学习',done:false}
    ]
      }

   },
   mounted() {
    // 在App组件中监听事件
    this.$bus.$on('handleCheck', this.handleCheck);
    this.pubId=pubsub.subscribe('delTodo', this.delTodo);
    this.$bus.$on('updateItem', this.editItem);
  },
  beforeDestroy() {
    // 在组件销毁前移除事件监听器
    this.pubsub.unsubscribe(this.pubId);
    this.$bus.$off('updateItem');
    this.$bus.$off('delTodo');
  },
   methods:{
      //添加todo
      receive(x){
         // console.log('我是app组件 我收到了',x)
         this.todos.unshift(x)
      
         //勾选或者取消todo
      },

      //勾选
      handleCheck(id){
         
         this.todos.forEach((todo)=>{
            if(todo.id===id) todo.done=!todo.done
         })
         console.log('我是app的handlechaeck',this.todos)

      },
      //编辑
      editItem(id,name){
         console.log('edit',id,name)
         this.todos.forEach((todo)=>{
            if(todo.id===id) todo.name=name
         })
      },

      delTodo(msgname,id){
         console.log('我是app的del',id)
         this.todos = this.todos.filter((todo) => {
          return todo.id != id;
});

      },

      //底部
      //全部
      okState(state){
         this.todos.forEach((todo)=>{
            todo.done=state
         })
         console.log('我是app的全部勾选',state)


      },
      //删除
      // allDel(x){
      //  if(x){
      //    this.todos=[]
      //  }
      // }

   }
}
</script>

<style>

</style>