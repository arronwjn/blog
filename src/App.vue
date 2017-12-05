<template>
  <div id="app">
    <transition name="router-fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  /* @import '~vux/src/styles/reset'; */
  @import './common/css/reset';
  
  #app{
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling:touch;  /*解决苹果手机滑动平滑问题*/
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
