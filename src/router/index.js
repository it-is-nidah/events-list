import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "events-list",
    component: () => import("@/views/EventsList.vue")
  },
  {
    path: "/events/:id",
    name: "events-show",
    component: () => import("@/views/EventsShow"),
    props: true
  },
  {
    path: "/events-create",
    name: "events-create",
    component: () => import("@/views/EventsCreate.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
