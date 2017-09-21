<template>
  <div id="main">
    <ul class="footer">
      <router-link tag="li" :to="{name:'Home'}">主页</router-link>
      <router-link tag="li" :to="{name:'Explorer'}">分类</router-link>
      <router-link tag="li" :to="{name:'Cart'}">购物车</router-link>
      <router-link tag="li" :to="{name:'Me'}">我</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="less" type="text/less">
  @import 'css/init.less';

  #main{
    position:relative;
    .footer{
      position:absolute;
      display:flex;
      .w(100%);
      .h(50px);
      .l-h(50px);
      background:rgba(0,0,0,0.1);
      bottom:0;
      left:0;
      li{
        flex:1;
        text-align:center;
      }
    }
  }
</style>
