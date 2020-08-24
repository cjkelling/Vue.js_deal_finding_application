import Vue from "vue";
import VueRouter from "vue-router";
import GalleryView from '../views/GalleryView';
import DetailedView from '../components/DetailedView';

Vue.use(VueRouter);

const routes = [
  { path: "/gallery", component: GalleryView },
  { path: "/offer/:id", component: DetailedView }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
