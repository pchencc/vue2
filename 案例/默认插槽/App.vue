<template>
  <div class="contain">
  <Category title="food" >
    <img src="./assets/cat.png" alt="" width="150px">
  </Category>
  <Category title="game" >
    <ul>
        <li v-for="(list,index) in games" :key="index">{{list}}</li>

    </ul>
  </Category>
  <Category title="book" ></Category>
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
   name:'App',
   components:{
    Category

      
      
   },
   data(){
    return{
      foods:['米饭','面条','稀饭'],
      games:['王','者','荣耀'],
      books:['好书','书本','书书'],
    }
   }
  
}
</script>

<style>
.contain{
  display: flex;
  justify-content: space-around;
}

</style>