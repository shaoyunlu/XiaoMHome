import {createApp} from 'vue'
import App from './main.vue'


import register from 'xiaomeng-vue-ui'
import 'xiaomeng-vue-ui/dist/xmv-ui.css'
import './style/index.less'

import xmvCode from 'comp/code/index.vue'

import router from "./route";


const app = createApp(App)
app.use(router)
app.use(register)
app.component('xmvCode', xmvCode)
app.mount('#app')