import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "events-list",
    component: () => import("@/views/EventsList.vue"),
  },
  {
    path: "/events-show",
    name: "events-show",
    component: () => import("@/views/EventsShow"),
  },
  {
    path: "/events-create",
    name: "events-create",
    component: () => import("@/views/EventsCreate.vue"),
  },

];

const router = new VueRouter({
  routes
});

export default router;
