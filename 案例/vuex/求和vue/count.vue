<template>
  <div>
    <h1>和为{{sum}}</h1>
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
export default {
    name:'count',
    data(){
        return{
            sum:0,
            n:1,

        }
    },
    methods:{
        increment(){
            this.sum=this.sum+this.n
        },
        decrement(){
            this.sum=this.sum-this.n
        },
        odd(){
            if(this.sum%2!==0){
                this.sum=this.sum+this.n
            }
        },
        wait(){
            setTimeout(()=>{
                this.sum=this.sum+this.n
            },500)
        }

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