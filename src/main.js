import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Quasar icon sets & fonts
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Quasar CSS
import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
  config: {
    brand: {
      primary: '#D32F2F',
      secondary: '#1976D2',
    }
  }
})

app.mount('#app')
