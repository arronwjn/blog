<template>
  <div class="resume">
      <c-site></c-site>
      <div class='about-warp'>
        <div class='about' >
          <ul>
            <li class='about-li'>
              <dt><i class="fa fa-location-arrow" aria-hidden="true"></i><span>基本信息</span></dt>
              <div class='img'><img src='../assets/about_me.jpg' /></div>
              <dd><span>个人信息:</span><label>王健男/男/23岁</label></dd>
              <dd><span>毕业院校:</span><label>长春工业大学</label></dd>
              <dd><span>所学专业:</span><label>计算机网络技术</label></dd>
              <dd><span>应聘岗位:</span><label>前端工程师</label></dd>
              <dd><span>现居住地:</span><label>河北秦皇岛</label></dd>
            </li>
            <li>
              <dt><i class="fa fa-location-arrow" aria-hidden="true"></i><span>联系方式</span></dt>
              <dd><span>联系电话:</span><label>15333347509</label></dd>
              <dd><span>联系微信:</span><label>15333347509</label></dd>
              <dd><span>联系QQ:</span><label>904089747</label></dd>
              <dd><span>联系邮箱:</span><label>904089747@qq.com</label></dd>
              <dd><span>blog:</span><a href='http://www.cnblogs.com/Aaron-wang/'>http://www.cnblogs.com/Aaron-wang/</a></dd>
              <dd><span>github:</span><a href='https://github.com/arronwjn'>https://github.com/arronwjn</a></dd>
              <dd><span>Markdown:</span><a href='https://arronwjn.github.io/#toc'>https://arronwjn.github.io/#toc</a></dd>
            </li>
            <li>
              <dt><i class="fa fa-location-arrow" aria-hidden="true"></i><span>主要技能</span></dt>
              <dd>
                <v-button class="vbutton" v-for="(item,index) in tags" :key="index" :color="item.color" :title="item.title"></v-button>
              </dd>
              <div id="mainData" style="height:400px;"></div>
            </li>
            <li>
              <dt><i class="fa fa-location-arrow" aria-hidden="true"></i><span>技能详解</span></dt>
              <dd>
                <ul>
                  <li>
                    <div></div>
                    <h3>HTML/CSS</h3>
                    <p>
                      熟练运用html+css开发pc端、手机端、admin等页面，对css3兼容问题有一定经验，能够熟练编写语义化网页
                    </p>
                  </li>
                  <li>
                    <div></div>
                    <h3>Javascript</h3>
                    <p>熟练运用原生js回调、异步、原型链、继承等，熟练运用原生js数据类型的方法，及对数据的各种处理</p>
                  </li>
                  <li>
                    <div></div>
                    <h3>jquery</h3>
                    <p>熟悉jq语法规则,能够运用jq进行常规功能开发.操作Dom实现动画、增删改查等等</p>
                  </li>
                  <li>
                    <div></div>
                    <h3>vue.js</h3>
                    <p>掌握vue-router,axios，等技术栈，用vue开发过多页面以及单页面应用</p>
                  </li>
                  <li>
                    <div></div>
                    <h3>React.js</h3>
                    <p>熟悉React的生态系统,能够运用React独立开发简单的单页面应用</p>
                  </li>
                  <li>
                    <div></div>
                    <h3>BootStrap、vux/antd</h3>
                    <p>运用ui框架快速完成页面开发,熟练使用常用组件</p>
                  </li>
                </ul>
              </dd>
            </li>
            <li>
              <dt><i class="fa fa-location-arrow" aria-hidden="true"></i><span>自我评价</span></dt>
              <p class="content">
                  责任心没话说，喜欢专研新知识，了解react+express前后台分离的组件化开发模式，掌握vue框架和javascript语言，掌握html+css和jquery，熟悉前端工程化，如webpack,npm，熟悉es6
              </p>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
    import vButton from '@/components/vButton.vue';
    import cSite from '@/components/cSite.vue';

    var echarts = require('echarts');

    export default{ 
        name:'resume',
        data () {
            return{
                tags:[
                    {
                        color:'#409eff',
                        title:'html'
                    },
                    {
                        color:'#67c23a',
                        title:'css'
                    },
                    {
                        color:'#e6a23c',
                        title:'javaScript'
                    },
                    {
                        color:'#409eff',
                        title:'Vue.js'
                    },
                    {
                        color:'#67c23a',
                        title:'jquery'
                    },
                    {
                        color:'#e6a23c',
                        title:'react.js'
                    },
                    {
                        color:'#67c23a',
                        title:'webpack'
                    },
                    {
                        color:'#e6a23c',
                        title:'node.js'
                    },
                ]
            }
        },
        mounted () {

            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('mainData'));
            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                right: '30%',
                title: {
                    text: '前端技能数据展示'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: {
                    data: ['html', 'css', 'vue', 'react', 'jquery', 'webpack','node']
                },
                yAxis: {},
                series: [{
                    name: '能量值',
                    type: 'bar',
                    data: [35, 30, 40, 10, 30, 6,8]
                }]
            });
        },
        components:{
            vButton,
            cSite
        }
    }
</script>

<style scoped>
.resume{
    width:100%;
    height:100%;
    font-size:16px;
}
.about{
  width: 100%;
}
.about img{
  width: 60px;
  height:auto;
  position: absolute;
  right:0;
}
.about>ul>li>dt>i{
  font-size: 18px;
  color:#0097A7;
  margin-right: 2px;
}
.about>ul>li>dd>a{
  color:#00BCD4;
}
.about>ul>li>dd>ul{
  border-left: 2px solid #0097A7;
  padding: 0px 20px;
  position: relative;
  list-style: none;
}
.about>ul>li>dd>ul>li>h3{
  color:#000;
}
.about>ul>li>dd>ul>li>p{
  color:#000;
}
.about>ul>li>dt{
  border-bottom: 1px solid #0097A7;
  line-height: 30px;
  padding: 5px;
  margin-bottom: 5px;
}
.about>ul>li>dd{
  line-height: 30px;
  padding: 5px;
  font-size: 12px;
}
.about>ul>li:nth-child(3)>dd{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.about>ul>li>dt>span{
  color:#0097A7;
  font-size: 18px;
}
.about>ul>li>dd>span{
  color:rgba(0,0,0,0.6);
  font-weight: bold;
}
.vbutton{
  margin: 5px;
}
.vbutton:last-child{
    margin-right: 0;
}
.about>ul>li>dd>lable{
  color:#969696;
}
.about>ul>li>dd>ul>li>div{
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #0097A7;
  position: absolute;
  left:-10px;
}
.about>ul>li>dd>ul>li>h3{
  color:#0097A7;
  font-weight: 600;
}
.about>ul>li>dd>ul>li>p{
  color:rgba(0,0,0,0.6);
}
.about>ul>li>p{
  color:rgba(0,0,0,0.6);
  line-height: 25px;
}
.content{
    line-height: 2;
    text-align:justify;
    font-size: 12px;
}
</style>
