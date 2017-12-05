<template>
  <div class="home">
    <!-- <div class="search_wraper">
      <div class="search">
        <input type="text" placeholder="请输入搜索内容">
      </div>
      <div class="search_filter"></div>
    </div> -->
    <div class="main">
      <div class="list">
        <img src="" alt="123" width=10>
      </div>
    </div>
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
.home{
  width: 100%;
  height:100%;
  /* padding-top:0.58rem; */
}
.home h3{
  font-size:16px;
}
.search_wraper{
  position: fixed;
  top:0rem;
  width:100%;
  padding:0.15rem 0;
  
}
.search_filter{
  position: absolute;
  top:0;
  width:100%;
  height:100%;
  background-color:rgba(220,220,220,0.5);
  -webkit-filter: blur(10px);
  z-index:-1;
}
.search{
  width:3.2rem;
  height: 0.28rem;
  margin: 0 auto;
  background-color:rgb(220,220,220);
  z-index:999;
  border-radius: 5px;
  border:1px solid rgb(220,220,220);
}
.search input{
  width:100%;
  height:100%;
  font-size:0.14rem;
  color:rgb(70,70,77);
  z-index:-1;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color:rgb(220,220,220);
}
.search input::-webkit-input-placeholder { /* WebKit browsers */
    vertical-align: middle;
    text-align: center;
    color: rgb(121,122,128);
    font-size:0.14rem;
  }
</style>