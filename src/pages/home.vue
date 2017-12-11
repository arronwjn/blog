<template>
  <div class="home">
    <div class="main">
      <div class="list-item">
        <h3>vue基础知识</h3>
        <div class="list-meta">
          <span>发表于2017-12-11 </span>
          <span> | 作者王健男</span>
        </div>
        <div class="list-body">
          <div class="list-body-content">  
            Awsome React Libiary——介绍开发中实用的 React 库，都是自己已经在项目中用过的，介绍库的同时会附上最佳实践。
            简介Antd 开发和服务于企业级后台的 React UI 组件库。
            Antd Upload 文件选择上传和拖拽上传控件。
            七牛对象存储 实用的对象存储和 CDN
          </div>
        </div>
        <div class="list-more"><a href="">阅读全文</a></div>
      </div>

      <div class="list-item">
        <h3>vue基础知识</h3>
        <div class="list-meta">
          <span>发表于2017-12-11 </span>
          <span> | 作者王健男</span>
        </div>
        <div class="list-body">
          <div class="list-body-content">  
            Awsome React Libiary——介绍开发中实用的 React 库，都是自己已经在项目中用过的，介绍库的同时会附上最佳实践。
            简介Antd 开发和服务于企业级后台的 React UI 组件库。
            Antd Upload 文件选择上传和拖拽上传控件。
            七牛对象存储 实用的对象存储和 CDN
          </div>
        </div>
        <div class="list-more"><a href="">阅读全文</a></div>
      </div>

      <div class="list-item">
        <h3>vue基础知识</h3>
        <div class="list-meta">
          <span>发表于2017-12-11 </span>
          <span> | 作者王健男</span>
        </div>
        <div class="list-body">
          <div class="list-body-content">  
            Awsome React Libiary——介绍开发中实用的 React 库，都是自己已经在项目中用过的，介绍库的同时会附上最佳实践。
            简介Antd 开发和服务于企业级后台的 React UI 组件库。
            Antd Upload 文件选择上传和拖拽上传控件。
            七牛对象存储 实用的对象存储和 CDN
          </div>
        </div>
        <div class="list-more"><a href="">阅读全文</a></div>
      </div>

      <div class="list-item">
        <h3>vue基础知识</h3>
        <div class="list-meta">
          <span>发表于2017-12-11 </span>
          <span> | 作者王健男</span>
        </div>
        <div class="list-body">
          <div class="list-body-content">  
            Awsome React Libiary——介绍开发中实用的 React 库，都是自己已经在项目中用过的，介绍库的同时会附上最佳实践。
            简介Antd 开发和服务于企业级后台的 React UI 组件库。
            Antd Upload 文件选择上传和拖拽上传控件。
            七牛对象存储 实用的对象存储和 CDN
          </div>
        </div>
        <div class="list-more"><a href="">阅读全文</a></div>
      </div>

      <div class="list-item">
        <h3>vue基础知识</h3>
        <div class="list-meta">
          <span>发表于2017-12-11 </span>
          <span> | 作者王健男</span>
        </div>
        <div class="list-body">
          <div class="list-body-content">  
            Awsome React Libiary——介绍开发中实用的 React 库，都是自己已经在项目中用过的，介绍库的同时会附上最佳实践。
            简介Antd 开发和服务于企业级后台的 React UI 组件库。
            Antd Upload 文件选择上传和拖拽上传控件。
            七牛对象存储 实用的对象存储和 CDN
          </div>
        </div>
        <div class="list-more"><a href="">阅读全文</a></div>
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
.list-item{
  padding:30px;
  margin-bottom: 30px;
  background-color: #fff;
}
.list-item:last-child{
  margin-bottom: 0;
}
.list-item h3{
  line-height: 1.2;
  text-align: center;
  font-size:20px;
  color:#555;
}
.list-meta{
  margin: 10px 0 30px 0;
  color: #999;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 0;
  text-align: center;
}
.list-meta span{
  font-size:12px;
}
.list-body{
  line-height: 2;
  font-size:14px;
  color:#555;
}
.list-body-content{
  height:60px;
  vertical-align: middle;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list-more{
  text-align: center;
  margin-top:10px;
}
.list-more a{
  display: inline-block;
  padding:5px 20px;
  text-align: center;
  text-decoration: none;
  color:#46b882;
  border:2px solid #46b882;
  font-size:14px;
}
.list-more a:hover{
  background-color: #46b882;
  color:#fff;
}
</style>