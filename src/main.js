import {createApp, h, markRaw} from 'vue'
import page from 'page'
import routes from './routes'
import store from './utils/store';
import config from "@/assets/content/config.json";

const DefaultComponent = markRaw({
  render: () => h('div', 'Loading…')
})

const SimpleRouterApp = {
  data: () => ({
    ViewComponent: null
  }),

  render() {
    return h(this.ViewComponent || DefaultComponent)
  },

  created() {
    const capitalize = s => s && s[0].toUpperCase() + s.slice(1).toLowerCase()
    document.title = `${capitalize(config.tokenName)}Pay | mPOS`

    for (let route in routes) {
      page(route, () => {
        this.ViewComponent = markRaw(require('./views/' + routes[route] + '.vue').default)
      })
    }

    page()
  }
}

const app = createApp(SimpleRouterApp)
app.use(store)

app.mount('#app')
