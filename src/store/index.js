import Vue from "vue"
import Vuex from "vuex"

import app from "./modules/app"
import detaile from "./modules/detaile"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    app,
    detaile
  }
}) 