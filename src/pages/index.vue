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
                <i class="fa fa-share-alt-square" aria-hidden="true"></i>分享
              </li>
              <li><i class="fa fa-tags" aria-hidden="true"></i>标签</li>
              <li>
                <router-link :to="{path:'resume'}">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>关于
                </router-link>
              </li>
            </ul>
          </div>
          <div class="sidebar">
            <div class="sidebar-inner" id="sidebar" :class="searchBarFixed == true ? 'isFixed' :''">
              <div class="sidebar-top">
                <div class="avater">
                  <img src="../assets/arronwjn.jpg" alt="">
                </div>
                <p>arronwjn</p>
              </div>
              <div class="sidebar-min">
                <p><i class="fa fa-street-view" aria-hidden="true"></i>吉林 长春 长春工业大学</p>
                <p><i class="fa fa-pencil" aria-hidden="true"></i>待我代码打完，娶你为妻可好</p>
              </div>
              <div class="sidebar-bottom">
                <nav class="sidebar-bottom-inner">
                  <div class="sidebar-bottom-item">
                    <span class="sidebar-item-num">10</span>
                    <span class="sidebar-item-name">文章</span>
                  </div>
                  <div class="sidebar-bottom-item">
                    <span class="sidebar-item-num">25</span>
                    <span class="sidebar-item-name">留言</span>
                  </div>
                  <div class="sidebar-bottom-item">
                    <span class="sidebar-item-num">30</span>
                    <span class="sidebar-item-name">简历</span>
                  </div>
                </nav>
                <div class="link-wrapper">
                  <a class="link-item" href="https://github.com/arronwjn">
                    <i class="fa fa-github" aria-hidden="true"></i>
                    <span>Github</span>
                  </a>
                  <a class="link-item" href="https://arronwjn.github.io/#toc">
                    <i class="fa fa-book" aria-hidden="true"></i>
                    <span>E-Mail</span>
                  </a>
                </div>
              </div>
              <div class="links-module">
                <h3>友情链接</h3>
                <a href="https://github.com/fightingljm">Figing</a>
              </div>
            </div>
          </div>
          <div class="right">
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
      return {
        searchBarFixed:false
      }
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      //处理滚动吸顶效果
      handleScroll(){
        var that=this;
         var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
         var offsetTop = document.getElementById('sidebar').offsetTop
          if (scrollTop - 250 > offsetTop || scrollTop>250) {
            that.searchBarFixed = true
          } else {
            that.searchBarFixed = false
          }
      },
      
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
  width:80%;
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
.left ul li i{
  font-size: 12px;
  margin-right: 5px;
}
.router-link-active{
  color:rgb(255,160,0);
}
.sidebar-bottom{
  border-bottom: 1px solid #ccc;
}
.sidebar-bottom-inner{
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding:10px 0;
  font-size:16px;
}
.sidebar-bottom-item{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-right:1px solid #faf3f3;
  cursor: pointer;
}
.sidebar-bottom-item:last-child{
  border-right:none;
}
.sidebar-item-name{
  font-size:14px;
  color:#999;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;

}
.sidebar-item-num{
  font-size: 16px;
  font-weight: 600;
  color:inherit;
}
.sidebar-bottom-item span{
  padding:5px;
}
.link-wrapper{
  display: flex;
  justify-content: space-around;
  font-size:0;
  vertical-align: top;
}
.link-item{
  line-height: 2;
  padding: 0 5px;
  margin-bottom: 5px;
  vertical-align: top;
  font-size: 12px;
  color: #555;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
.link-item:hover{
  background-color: #f5f3f3;
  border-radius: 5px;
}
.links-module{
  font-size:0;
}
.links-module h3{
  vertical-align: middle;
  line-height: 40px;
  font-size: 14px;
  font-weight: bold;
}
.links-module a{
  padding-bottom: 5px;
  font-size:13px;
  color:#999;
  font-weight: bold;
}
.links-module a:hover{
  border-bottom: 1px solid #ccc;
}
.right{
  float: right;
  margin-left: 20px;
  display: inline-block;
  width:calc(100% - 260px);
  min-height:100%;
  border-radius: 5px;
}
.index .isFixed{
  width: 230px;
  position:fixed;
  background-color:#Fff;
  top:0;
  z-index:999;
  margin-top:0;
}
.sidebar{
  position: static;
  top:0;
  left:0;
  width:254px;
  height:0;
  margin-top: 250px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px #cecece;
}
.sidebar-inner{
  width:230px;
  border-radius: 5px;
  padding:10px;
  background-color: #fff;
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
.sidebar-min i{
  margin-right: 5px;
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
