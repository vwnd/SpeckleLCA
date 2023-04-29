import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

// Modules
import speckle from "./modules/speckle";
import auth from "./modules/auth";
import materialMapper from "./modules/materialMapper";

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * Assign the modules to the store.
   */
  modules: {
    auth,
    speckle,
    materialMapper,
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: [],
  // plugins: debug ? [createLogger()] : [],
});
