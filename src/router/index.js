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
    name: "content",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Content.vue")
  },
  {
    path: "/proposito",
    name: "purpose",
    component: () => import("../views/Purpose.vue")
  },
  {
    path: "/desarrollo",
    name: "develop",
    component: () => import("../views/Develop.vue")
  },
  {
    path: "/conclusiones",
    name: "conclusions",
    component: () => import("../views/Conclusions.vue")
  },
  {
    path: "/referentes",
    name: "bibliography",
    component: () => import("../views/Bibliography.vue")
  },
  {
    path: "/creditos",
    name: "credits",
    component: () => import("../views/Credits.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
