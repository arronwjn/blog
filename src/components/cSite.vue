<template>
    <div class="site">
        <div class="sidebar">
            <div class="sidebar-inner" id="sidebar" :class="searchBarFixed == true ? 'isFixed' :''">
                <div class="site_nav" v-show="showDiv">
                    <div class="site_nav_item" 
                        v-for="(item,index) in tabArray" 
                        :key="index" 
                        @click="handleTab(item.tabTitle)" 
                        :class="{site_nav_item_active:showTab-1==index}"
                    >
                        {{item.tabTitle}}
                    </div>
                </div>
                <transition name="show">
                    <keep-alive>
                        <div v-show="showTab==1">
                            <ul>
                                <li>文章1</li>
                                <li>文章2</li>
                                <li>文章3</li>
                                <li>文章4</li>
                            </ul>
                        </div>
                    </keep-alive>
                </transition>
                <transition name="show">
                    <keep-alive>
                        <div v-show="showTab==2">
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
                                    <span class="sidebar-item-num">4</span>
                                    <span class="sidebar-item-name">分类</span>
                                </div>
                                </nav>
                                <div class="link-wrapper">
                                <a class="link-item" href="https://github.com/arronwjn">
                                    <i class="fa fa-github" aria-hidden="true"></i>
                                    <span>Github</span>
                                </a>
                                <a class="link-item" href="https://arronwjn.github.io/#toc">
                                    <i class="fa fa-book" aria-hidden="true"></i>
                                    <span>Note</span>
                                </a>
                                </div>
                            </div>
                            <div class="links-module">
                                <h3>友情链接</h3>
                                <a href="https://github.com/fightingljm">Figing</a>
                            </div>
                        </div>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'site',
        data () {
            return{
                searchBarFixed:false,
                tabArray:[
                    {
                        tabTitle:'文章目录',
                    },
                    {
                        tabTitle:'站点概况'
                    }
                ],
            }
        },
        props:{
            showTab:{
                default:2,
                type:Number,//显示tab默认选项,从1开始
            },
            showDiv:{
                default:false,
                type:Boolean,//site_nav盒子显示状态，默认不显示
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
            handleTab(title){
                if(title==='文章目录'){
                    this.showTab=1;
                }else if(title==='站点概况'){
                    this.showTab=2;
                }
            }
        }
    }    
</script>

<style scoped>
ul li {
    font-size:14px;
    text-align: center;
    line-height: 2;
}
.site{
    position: absolute;
    left:0;
}
.site_nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 2;
    margin:0 0 20px;
    font-size:0;
    color:#555;
}
.site_nav_item{
    padding:0 5px;
    cursor: pointer;
    font-size:12px;
}
.site_nav_item_active{
    border-bottom: 1px solid rgb(255,160,0);
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
.site .isFixed{
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
  box-shadow: 0px 0px 4px #cecece;
  cursor: pointer;
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
}
.avater img:hover{
  transform: rotate(720deg);
  -webkit-transform: rotate(720deg);
  -moz-transform: rotate(720deg);
  -o-transform: rotate(720deg);
  -ms-transform: rotate(720deg);
}
.show-enter-active, .show-leave-active {
    transition: opacity .2s;
  }
  .show-enter, .show-leave-active {
    opacity: 0;
  }
</style>

