<template>
    <div class="list">
        <ul>
            <Item v-for="todoobj in todos" :key="todoobj.id" :todo="todoobj" 
            
           />
            <!-- :todo="todoobj" todoobj是todos的每一条 我要把每一条信息传到todo传到item -->
        </ul>
       
        
    </div>
  
</template>

<script>
import Item from './Item.vue'
export default {
    name:'List',
    components:{
  Item
    },
    props:['todos']
    
    

}
</script>


<style>
.list{
    width: 300px;
}
ul,li {padding:0;margin:0;}

</style>