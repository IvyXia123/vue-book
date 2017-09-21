<template>
  <div id="app">
    <!--<router-link tag="div" :to="{name:'BookDetail',params:{id:1}}">BookDetail</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>

</style>


