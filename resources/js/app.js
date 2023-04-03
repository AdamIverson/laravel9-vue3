// require('./bootstrap')

import { createApp } from 'vue'
import Test from './Test.vue'
import Welcome from './Welcome.vue'

const app = createApp(Test)
const app2 = createApp(Welcome)

app2.component('welcome', Welcome)
app.component('test', Test)

app.mount('#app')
app2.mount('#app2')

// createApp(Welcome).mount("#app");