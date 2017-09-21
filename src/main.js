import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'   //引入vue-router包
import routerConfig from './router'  //引入router.js文件
import '!style-loader!css-loader!less-loader!./css/init.less'  //引入less包

Vue.use(VueRouter);   //使用VueRouter
const router=new VueRouter(routerConfig);  //创建router实例

Vue.filter('join',function(args){
  if(args){
    return args.join(",")
  }
});

new Vue({
  el:'#app',
    router,    //挂载router
  render: h => h(App)
});











