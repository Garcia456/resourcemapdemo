import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/trigger",
      name: "trigger",
      component: () => import("../views/ErrorView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/record",
      name: "record",
      component: () => import("../views/RecordScreen.vue"),
    },
    {
      path: "/replay",
      name: "replay",
      component: () => import("../views/ReplayScreen.vue"),
    },
  ],
});
export default router;
