import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: 'Verde Vida Social',
    user: {
      name: "",
      avatar: "",
    },
    darkTheme: true,
    primaryDrawer: {
      model: null,
      clipped: false,
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    },
    items: [
      { title: "Estudantes", icon: "people", routTo: "/students" },
      { title: 'App Layout', icon: 'dashboard', routTo: "/app-layout"},
      { title: 'About', icon: 'info', routTo: "/about" }
    ],
    baseAPIURL: 'http://localhost:8080/verdevidasocial/api'

  },
  mutations: {
    changeToDark(context, isDark){
      this.state.darkTheme = isDark
    }
  },
  actions: {}
});
