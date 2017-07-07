// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//自定义注册组件
Vue.component("my-header",{
  template: ` <div>
                <p>this is {{name}}</p>
                <my-header-child1></my-header-child1>
              </div>
            `,
  data(){
    return{
      name: "MyHeader"
    }
  },
  components: {
    'my-header-child1': {
      template: `<p>this is {{name}}</p>`,
      data(){
        return{
          name: 'MyHeaderChild1'
        }
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  ...App,
  router,
  store
})
