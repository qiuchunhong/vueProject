import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

let routeOptions = [];
let files = require.context(".", false, /\.js$/);
files.keys().forEach((key) => {
  if (key == "./index.js") return;
  routeOptions = routeOptions.concat(files(key).default);
});
const routes = routeOptions.map((route) => {
  if (!route.component) {
    route = {
      ...route,
      component: () => import(`@/views/${route.filePath}`),
    };
  }
  return route;
});
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
export default router;
