import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("Start", require("./components/Start.vue").default);
Vue.component("ContentTable", require("./components/ContentTable.vue").default);
Vue.component("Topic", require("./components/Topic.vue").default);
Vue.component("Topic2", require("./components/Topic2.vue").default);
Vue.component("Topic3", require("./components/Topic3.vue").default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
