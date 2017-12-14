<template>
  <div class="article_detail">
      <c-site :showTab="1" :showDiv="true"></c-site>
      <h3>文章详情暂未开发</h3>
  </div>
</template>

<script>
    import cSite from '@/components/cSite.vue';

    export default{
        name:'article',
        data () {
            return{}
        },
        created () {

        },
        components:{
          cSite,
        }
    }
</script>

<style scoped>
    .article_detail h3{
        font-size: 14px;
    }
</style>

