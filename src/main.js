import Vue from 'vue'
import App from './App'
import './common/number-extend'
import '@/common/css/font-awesome.css'
import '@/common/css/spacing.css'
import '@/common/css/global.scss'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
