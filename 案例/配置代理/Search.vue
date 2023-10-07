<template>
    <div>
        <input type="text" v-model="keyWord">
        <el-button type="warning" round @click="search">search</el-button>
    </div>
  
</template>

<script>
// import axios from 'axios'
export default {
    
    name:'Search',
    data(){
        return{
            keyWord:''
        }
    },
    methods:{
        search(){
            this.$bus.$emit('getdata',{isFirst:false,isLoad:true,msg:'',users:[]})
        // axios.get
        this.$http.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
            respose=>{
                console.log('yes',respose.data.items)
                this.$bus.$emit('getdata',{isLoad:false,msg:'',users:respose.data.items})
            },
            error=>{
                console.log('no',error.message)
                this.$bus.$emit('getdata',{isLoad:false,msg:error.message,users:[]})
            }
        )
        

        }
    }


}
</script>

<style scoped>
input{
    height: 30px;
    width: 300px;

}

</style>