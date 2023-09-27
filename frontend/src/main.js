import { createApp } from "vue";
import router from "./routes";
import store from "./store";
import App from './App'

import 'mdb-ui-kit/css/mdb.min.css'
import 'mdb-ui-kit/js/mdb.min.js'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');