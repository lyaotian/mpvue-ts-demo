import Vue from 'vue'
import App from './_.vue'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '查看启动日志'
  }
}
