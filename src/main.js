import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import http from "../services/httpClient";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

Vue.config.productionTip = false;
Vue.prototype.$http = http;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
