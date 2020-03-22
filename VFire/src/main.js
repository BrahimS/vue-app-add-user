
import './firebase';
import Vue from 'vue'
import VueFire from 'vuefire';
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss';



new Vue({
	el: '#app',
  render: h => h(App)
})

Vue.use(VueFire);
