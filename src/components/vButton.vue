<template>
  <div class="button">
      <div class="button-wrapper" :style="{'background-color':color}">{{title}}</div>
  </div>
</template>

<script>
    export default{
        name:'button',
        data () {
            return{
            }
        },
        props:{
            title:{
                type:String
            },
            color:{
                type:String
            }
        },
        created () {

        }
    }
</script>

<style scoped>
    .button-wrapper{
        line-height: 2;
        padding:0 10px;
        /* background-color:#ccc; */
        border-radius: 5px;
        color:#fff;
        font-size:14px;
        cursor: pointer;
    }
    .button-wrapper:hover{
        opacity: 0.8;
    }
</style>
