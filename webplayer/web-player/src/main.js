import { createApp } from 'vue'
import App from './App.vue'

// 在此导入扩展中的播放器组件
import Player from '../core/popup.js' 

const app = createApp(App)
app.mount('#app')
