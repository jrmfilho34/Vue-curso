import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Menu from './components/template/Menu.vue'
import Carrosel from './components/widgets/Carrosel.vue'
import Footer from './components/template/Footer.vue'

Vue.config.productionTip = false
Vue.component('app-menu',Menu)
Vue.component('app-carrosel',Carrosel)
Vue.component('app-footer',Footer)

new Vue({
  render: h => h(App),
}).$mount('#app')
