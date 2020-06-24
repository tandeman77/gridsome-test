import Vue from "vue";
import Vuex from "vuex";

function getLanguageFromPath(availableLanguages, path) {
  const lang = path.slice(1, 3);
  for (let i = 0; i < availableLanguages.length; i++) {
    if (availableLanguages[i].search(lang) > -1) {
      console.log("language based on path is " + availableLanguages[i]);
      return availableLanguages[i];
      break;
    }
  }
  return "en-GB";
}

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    defaultLanguage: "en-GB",
    currentLanguage: "null",
  },
  mutations: {
    changeLanguage(state, lang) {
      Vue.set(state, "currentLanguage", lang);
    },
    setLanguageBasedOnPath(state, payload) {
      console.log("setting language based on path");
      const lang = getLanguageFromPath(payload.availableLocales, payload.path);
      console.log("set currentLanguage to " + lang);
      Vue.set(state, "currentLanguage", lang);
    },
  },
});
