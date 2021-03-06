// External libs imports
import Vue from 'vue/dist/vue.js'
import VueOnsen from 'vue-onsenui'
import VueLocalStorage from 'vue-localstorage'


// App imports
import App from './App.vue'                            // Vue entry point
import {DaVinciApi, store} from './js/*.js'            // Javascript
import * as baseComponents from './components/*.vue'   // Base components
import './css/**/*.css'                                // Css files


// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/davincijs/dist/sw.js');
  });
}

/** Install Vue plugins and base components */
;[VueOnsen, DaVinciApi].forEach( plugin => Vue.use(plugin))
Vue.use(VueLocalStorage, {name: 'localStorage', bind: true})
Object.values(baseComponents).forEach( component => Vue.component(component.name, component))
Vue.prototype.$vue = Vue

/** Developer mode */
if(process.env.NODE_ENV === 'development'){
  Vue.prototype.$ons.platform.select('android') // Set android
}

// Load Store
const localStorage = { ...store, ...DaVinciApi.store}
Object.keys(localStorage).map(function(key) { localStorage[key] = {type: Object, default: localStorage[key]}})
Object.defineProperty(Vue.prototype, "$store", { get: () => Vue.prototype.$localStorage })

/** Start Vue */
new Vue({
  el: '#app',
  render: h => h(App),
  localStorage,


  // Handle window resize
  data: {
    window: {
      width: 0,
      height: 0
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
})

Vue.prototype.$davinciApi.refresh()
