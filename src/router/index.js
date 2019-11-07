import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/tablacontenido",
    name: "tablacontenido",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Content.vue")
  },
  {
    path: "/proposito",
    name: "proposito"
  },
  {
    path: "/desarrollo",
    name: "desarrollo"
  },
  {
    path: "/conclusiones",
    name: "conclusiones"
  },
  {
    path: "/referentes",
    name: "referentes"
  },
  {
    path: "/creditos",
    name: "creditos"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
