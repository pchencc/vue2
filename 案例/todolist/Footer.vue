<template>
 
  <div class="footer">
    <input type="checkbox" name="" id="" @click='allOk'> 已完成{{count()}}/全部{{todos.length}}  
   
    </div>
    
</template>

<script>
export default {
    name:'Footer',
   
    props: ['todos', 'okState'],

    methods:{
        count(){
            let i =0
            this.todos.forEach(todo => {
                if(todo.done){
                    i++

                }
                
            });
            return i
        },
        allOk(e){
    
            console.log('复选框的状态:', e.target.checked);
        this.okState(e.target.checked)
},
    // delAll(){
    //  this.allDel(1)
    // } 
         
    }

}
</script>

<style>
.footer{
    height: 30px;
    width: 300px;
}

</style>