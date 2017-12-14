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
                <router-link :to="{path:'home'}"><i class="fa fa-home" aria-hidden="true"></i>首页</router-link>
              </li>
              <li>
                <router-link :to="{path:'project'}"><i class="fa fa-server" aria-hidden="true"></i></i>项目</router-link>
              </li>
              <li>
                <a href=""><i class="fa fa-tags" aria-hidden="true"></i>标签</a>
              </li>
              <li>
                <router-link :to="{path:'resume'}">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>关于
                </router-link>
              </li>
            </ul>
          </div>
          <div class="right">
            <router-view></router-view>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import cSite from '@/components/cSite.vue';

  export default{
    name:'index',
    data () {
      return {}
    },
    components:{
      cSite
    }
  }
</script>

<style scoped>
.index{
  width:100%;
  min-height:100%;
  font-size:0;
  background-color:#e9eaee;
}
.main{
  width:100%;
  /*height:100%;*/
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
  width:70%;
  height:80%;
  padding-bottom:60px;
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
  box-shadow: 0px 0px 4px #cecece;
}
.left ul li{
  display: block;
  width:100%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  list-style: none;
  font-size:12px;
  color:rgb(121,122,127);
}
.left ul li a{
  display: inline-block;
  width:100%;
  cursor: pointer;
}
.left ul li a:hover{
  background-color: #f5f3f3;
  color:rgb(255,160,0);
}
.left ul li i{
  font-size: 12px;
  margin-right: 5px;
}
.router-link-active{
  color:rgb(255,160,0);
}
.right{
  margin: 0 auto;
  margin-right: 0;
  display: inline-block;
  width:calc(100% - 270px);
  min-height:100%;
  border-radius: 5px;
}
@media screen and (max-width:756px){
  .main-inner{
    width:100%;
    height:100%;
    flex-direction: column;
  }
  .head{
    display:none;
  }
  .header{
    border-top-left-radius:0px;
    border-top-right-radius:0px;
  }
  .left{
    width:100%;
    height: auto;
    position: static;
  }
  .sidebar{
    display:none;
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
  .right{
    position: static;
    margin-left: 0;
    width:100%;
    height:100%;
    border-radius: 0;
  }
}
@media screen and (min-width:756px) and (max-width:1537px){
  /* .main-inner{
    max-width:1135px;
  } */
}
</style>
