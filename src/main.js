import {createApp, h, markRaw} from 'vue'
import page from 'page'
import routes from './routes'
import store from './utils/store';

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
