import { createApp } from 'vue'
import App from './App.vue' 
import './scripts/imports'
import router from './router/pagesRouter'

const app = createApp(App)

app.use(router)
app.mount('#app')
