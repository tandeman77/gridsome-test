// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Vuex from "vuex";
import store from "~/store/index.js";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(Vuex);

  appOptions.i18n.setLocaleMessage("th-TH", require("./locale/th.json"));
  appOptions.i18n.setLocaleMessage("en-GB", require("./locale/en.json"));

  appOptions.store = store;
}
