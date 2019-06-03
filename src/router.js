import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import AboutView from './views/AboutView'
import ConfigAppLayoutView from './views/ConfigAppLayoutView'
import StudentsView from './views/StudentsView'

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/app-layout",
      name: "app-layout",
      component: ConfigAppLayoutView
    },
    {
      path: "/students",
      name: "students",
      component: StudentsView
    }
  ]
});
