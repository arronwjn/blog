<template>
  <div class="index">
      <div class="left">
        <ul>
          <li>首页</li>
          <li>归档</li>
          <li>标签</li>
          <li>关于</li>
        </ul>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>

  export default{
    name:'index',
    data () {
      return {}
    }
  }
</script>

<style scoped>
.index{
  display: flex;
  flex-direction:row;
  height:100%;
}
.left{
  width:250px;
  height:100%;
  font-size:0.16rem;
  border-right:1px solid #ccc;
}
.left ul li{
  display: block;
  width:100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
}
@media screen and (max-width: 769px) {
  .index{
    flex-direction:column-reverse;
  }
  .left{
    width:100%;
    height:45px;
  }
  .left ul{
    display: flex;
    justify-content: space-around;
    align-items:center;
  }
}
</style>
