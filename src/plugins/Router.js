import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Git from "@/components/Git";
import Linux from "@/components/Linux";
import Js from "@/components/Js";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,

    },
    {
      path: "/git",
      name: "git",
      component: Git,

    },
    {
      path: "/js",
      name: "js",
      component: Js,
    },
    {
      path: "/linux",
      name: "linux",
      component: Linux,
    },
  ],
});