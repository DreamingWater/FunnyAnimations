import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index.js'
import App from './App.vue'

// import 'normalize.css' //reset.css
import 'animate.css'
import '@/assets/common.css'
import drag from '@/utils/drag.js'
createApp(App).use(router).use(createPinia()).directive('drag', drag).mount('#app')
