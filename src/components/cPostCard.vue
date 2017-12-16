<template lang="html">
  <div class="blogCard">
    <div class="list-item" @click="jump('detail')">
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
      <div class="list-more"><a @click="jump('detail')">阅读全文</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'blogCard',
  data () {
    return{}
  },
  props:{

  }
}
</script>

<style lang="css" scoped>
</style>
