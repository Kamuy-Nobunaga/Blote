import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import Vue3DraggableResizable from 'vue3-draggable-resizable'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')    
    // .use(Vue3DraggableResizable)

