<template>
  <div>
    <h1>和为{{sum}}</h1>
    <h1>和为{{bigSum}}</h1>
    <h3>我的名字：{{myname}} ,我的兴趣爱好是：{{hobby}}</h3>
    <select name="" id="" v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <el-button type="primary" @click="increment">+</el-button>
  <el-button type="success" @click="decrement">-</el-button>

  <el-button type="warning" @click="odd">当前和为奇数再加</el-button>
  <el-button type="danger" @click="wait">等等再加</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    name:'count',
    data(){
        return{
            // sum:0,放到store的state
            n:1,

        }
    },
    computed:{
        // ...mapState({sum:'sum',myname:'myname',hobby:'hobby'}),
        // ...mapGetters({bigSum:'bigSum'})
        ...mapState(['sum','myname','hobby']),
        ...mapGetters(['bigSum'])
    },
    
    methods:{
        increment(){
            this.$store.dispatch('jia',this.n)
            
        },
        decrement(){
            this.$store.dispatch('jian',this.n)
            
        },
        odd(){
            if(this.$store.state.sum%2){
                this.$store.dispatch('odd',this.n)
            }
            
        },
        wait(){
            setTimeout(()=>{
                this.$store.dispatch('wait',this.n)
               
            },500)
        }

    },
    mounted(){
        const x = mapState({sum:'sum',myname:'myname',hobby:'myhobby'})
        console.log(x)
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