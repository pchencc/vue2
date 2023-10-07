<template>
  <div>
    <ul><li v-for="p in personList" :key="p.id">
        姓名：{{p.name}}</li></ul>
    <h1>和为{{sum}}</h1>
    <h1>和为{{bigSum}}</h1>
    <h3>我的名字：{{myname}} ,我的兴趣爱好是：{{hobby}}</h3>
    <select name="" id="" v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <el-button type="primary" @click="increment(n)">+</el-button>
  <el-button type="success" @click="decrement(n)">-</el-button>

  <el-button type="warning" @click="odd(n)">当前和为奇数再加</el-button>
  <el-button type="danger" @click="wait(n)">等等再加</el-button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    name:'count',
    data(){
        return{
            // sum:0,放到store的state
            n:1,

        }
    },
    computed:{
        // sum(){
        //   return this.$store.state.sum
        // },
        // ...mapState({sum:'sum',myname:'myname',hobby:'hobby'}),
        // ...mapGetters({bigSum:'bigSum'})
        ...mapState('a',['sum','myname','hobby']),
        ...mapState('b',['personList',]),
        ...mapGetters('a',['bigSum'])
    },
    
    methods:{
        // increment(){
        //     this.$store.commit('jia',this.n)
            
        // },
        // decrement(){
        //     this.$store.commit('jian',this.n)
        //   },
           
        ...mapMutations('a',{increment:'JIA',decrement:'JIAN'}),
            
       
    //     odd(){
    //         if(this.$store.state.sum%2){
    //             this.$store.dispatch('ODD',this.n)
    //         }
            
    //     },
    //     wait(){
    //         setTimeout(()=>{
    //             this.$store.dispatch('WAIT',this.n)
               
    //         },500)
    //     }

            //commit提交给mutations 所有用mutations
    ...mapActions('a',{odd:'odd',wait:'wait'}),
    //要给上面的方法传参（n）

    },
    mounted(){
        
        console.log(this.$store)
    }
    }


</script>

<style>
select{
    height: 40px;
    width: 60px;
    margin-right: 10px;
}

</style>