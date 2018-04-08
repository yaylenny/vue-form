import Vue from 'vue';

/* * *    OUR HERO    * * */
import VueForm from "Lib/vue-form.js";
Vue.use( VueForm );

/* * *    OUR DEMO    * * */
import demo from './demo.vue';
const config={
  el: '#demo',
  render:h=>h( demo )
};

/* * *    VUE ROUTER    * * */
// import VueRouter from 'vue-router';
// import routes from './routes.js';
// Vue.use( VueRouter );
// config.router=new VueRouter({ mode: 'hash', routes })

/* * *    VUEX - STORE    * * */
import Vuex from "vuex";
import store from './store.js';
Vue.use( Vuex );
config.store=new Vuex.Store( store );

new Vue( config );
