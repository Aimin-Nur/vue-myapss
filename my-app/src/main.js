import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionsComponent from './components/CompositionsComponent.vue'

const app = createApp(App)

app.component('CompositionsComponent', CompositionsComponent)

app.mount('#app')
