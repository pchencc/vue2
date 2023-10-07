<template>
  <div>
   <count></count>
   <hr>
   <persons></persons>
  </div>
</template>

<script>
import count from './components/count.vue'
import persons from './components/persons.vue'

export default {
   name:'App',
   components:{
    count,
    persons
   
      
      
   },
  
}
</script>

<style>

</style>