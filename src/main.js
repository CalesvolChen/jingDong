import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('base-icon', {
  name:'base-icon'
})
app.mount('#app')
