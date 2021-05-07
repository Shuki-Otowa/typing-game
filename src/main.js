import Vue from "vue";
import App from "./App.vue";
import router from "./plugins/Router";
import VueTyperPlugin from "vue-typer";

Vue.config.productionTip = false;
Vue.use(VueTyperPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");