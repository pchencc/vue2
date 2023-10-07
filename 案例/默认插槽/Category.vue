<template>
  <div class="category">
    <h3>{{title}}</h3>
     <slot>插槽 占个位置 没有东西就显示文字有就不显示</slot>
  </div>
</template>

<script>
export default {
name:'Category',
props:['title']

}
</script>

<style>
.category{
    background-color: aqua;
    width: 150px;
}
h3{
    background-color: orange;
    text-align: center;
}


</style>