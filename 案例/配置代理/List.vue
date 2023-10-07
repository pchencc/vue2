<template>
   <div class="row">
    <!-- 展示列表 -->
    <div class="cat" v-show="info.users.length" v-for="user in info.users" :key="user.login">
        <a :href="user.html_url">
        <img :src="user.avatar_url" alt="" style="width: 300px;">
    </a>
    <p class="cat-text">{{user.login}}</p>

    </div>
   <!-- 展示欢迎 -->
   <h1 v-show="info.isFirst">welcome</h1>
   <!-- 展示加载 -->
   <h1 v-show="info.isLoad">load</h1>
    
   <!-- 错误 -->
   <h1 v-show="info.msg">{{info.msg}}</h1>

   </div>
</template>

<script>
export default {

    name:'List',
    data(){
        return{
           info:{
            
            isFirst:true,
            isLoad:false,
            msg:'',
            users:[],
           }
                }
    },
    mounted(){
        this.$bus.$on('getdata',this.getdata)
    },
    beforeDestroy(){
        this.$bus.$off('getdata')
    },
    methods:{
        getdata(dataobj){
            console.log('我收到了消息',dataobj)
            this.info=dataobj


        }
    }
}
</script>

<style>
.row{
    margin-top: 20px;
    border: 1px black solid;
    display: flex;
    flex-wrap: wrap;


}
.cat{
    margin: 50px;
    border: 1px solid black;
}



</style>