/**
 * Realizamos la importacion de vue
 * para agregarle el vue-router
 */
import Vue from "vue";
import Router from "vue-router";

/**
 *  Realizamos la importacion del componente
 *  que se va a mostrar en el path /
 */
import Home from "@/views/Home";
import Login from "@/views/Login";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "*",
      name: "error",
      component: Error,
    },
  ],
});
