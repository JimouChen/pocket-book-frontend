import {createApp} from 'vue'
import App from './App.vue'
import router from './routers'
import elementIcon from "./plugins/icons";

createApp(App).use(router).use(elementIcon).mount('#app')
