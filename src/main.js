import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Notifications from 'vue-notification'
// import Vue from 'vue';
// import VueToast from 'vue-toast-notification';
// Import any of available themes
// import 'vue-toast-notification/dist/dist/theme-default.css';

// const app = createApp({})

// Vue.use(VueToast)
// Vue.use(Notifications)
createApp(App).use(router).mount('#app')
