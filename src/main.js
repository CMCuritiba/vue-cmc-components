import Vue from 'vue'
//import App from './App.vue'
import cabecalho from './components/cabecalho.vue'
/*
new Vue({
  el: '#app',
  render: h => h(App)
})
*/
var app = new Vue({
	el: '#app',
	components: { cabecalho }
})
