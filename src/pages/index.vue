<template>
  <div class="index">
      <div class="main">
        <div class="head"></div>
        <div class="main-inner">
          <div class="left">
            <div class="header">
              <p>arronwjn</p>
              <span>王健男的个人博客</span>
            </div>
            <ul>
              <li>
                <router-link :to="{path:'home'}">首页</router-link>
              </li>
              <li>
                <router-link :to="{path:'resume'}">关于</router-link>
              </li>
              <li>标签</li>
              <li>关于</li>
            </ul>
          </div>
          <div class="sidebar">
            <div class="sidebar-inner">
              <div class="sidebar-top">
                <div class="avater">
                  <img src="../assets/arronwjn.jpg" alt="">
                </div>
                <p>arronwjn</p>
              </div>
              <div class="sidebar-min">
                <p>吉林 长春 长春工业大学</p>
                <p>待我代码打完，娶你为妻可好</p>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="sidebar">
              <div class="top">
                <div class="avater">
                  <img src="" alt="">
                </div>
              </div>
            </div>
            <router-view></router-view>
          </div>
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
.index{
  width:100%;
  height:100%;
  font-size:0;
  background-color:#e9eaee;
}
.main{
  width:100%;
  height:100%;
}
.head{
  width: 100%;
  height:10px;
  background-color: #e9eaee;
}
.main-inner{
  position: relative;
  display: flex;
  flex-direction:row;
  width:1200px;
  height:80%;
  margin:0 auto;
  /* background-color:#fff; */
}
.header{
  padding:20px 0;
  text-align: center;
  background-color:#4a495b;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
}
.header p{
  vertical-align: top;
  height: 30px;
  line-height: 30px;
  font-size: 36px;
  font-weight: normal;
  font-family: fantasy;
  color:#ddd;
}
.header span{
  display:inline-block;
  margin-top:5px;
  font-size:13px;
  color:#ddd;
}
.left{
  position: absolute;
  top:0;
  left:0;
  width:250px;
  flex:0;
  border-radius: 5px;
  background-color:#fff;
  z-index:999;
}
.left ul li{
  display: block;
  width:100%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  list-style: none;
  font-size:14px;
  color:rgb(121,122,127);
}
.router-link-active{
  color:rgb(255,160,0);
}
.right{
  position: absolute;
  top:0;
  right:0;
  display: inline-block;
  width:78%;
  width:76%;
  height:100%;
  border-radius: 5px;
  background-color:#fff;
}
.sidebar{
  position: fixed;
  top:0;
  left:0;
  padding:20px 10px;
}
.sidebar{
  position: absolute;
  top:0;
  left:0;
  width:230px;
  margin-top: 250px;
  border-radius: 5px;
  background-color: #fff;
}
.sidebar-inner{
  padding:10px;
}
.sidebar-top{
  padding-bottom:10px;
  border-bottom: 1px solid #ccc;
}
.sidebar-min{
  padding:10px 0;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
}
.sidebar-min p{
  text-align: left;
  font-size:13px;
  color:#555;
}
.sidebar-top p{
  margin-top:10px;
  text-align: center;
  font-size: 16px;
  color:#404a58;
  font-weight: bold;
}
.avater{
  width:120px;
  height: 120px;
  margin: 0 auto;
}
.avater img{
  display: block;
  max-width: 120px;
  height:auto;
  border-radius: 50%;
  box-sizing: border-box;
}
@media screen and (max-width: 769px) {
  .index{
    flex-direction:column-reverse;
  }
  .left{
    width:100%;
    height:45px;
    border-right:none;
    margin-top:250px;
    border-top:1px solid rgb(220,220,220);
    background-color:rgba(255,255,255,0.95);
    /* -webkit-filter:blur(1px); */
  }
  .left ul{
    display: flex;
    justify-content: space-around;
    align-items:center;
    z-index:9999;
  }
  .left ul li{
    font-size:0.16rem;
  }
}
</style>
