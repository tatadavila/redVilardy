import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { VueResponsiveComponents } from "vue-responsive-components";

Vue.use(VueResponsiveComponents);

Vue.config.productionTip = false;
Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("Start", require("./components/Start.vue").default);
Vue.component("ContentTable", require("./components/ContentTable.vue").default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
