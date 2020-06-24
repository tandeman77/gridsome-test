<template>
  <div class="layout">
    <slot />
  </div>
</template>

<script>
export default {
  created() {
    console.log("created");
  },
  methods: {
    setLang() {
      console.log("run setlang");
      // this.$i18n.locale =
    },
    getLang() {
      this.$route.path;
    }
  },
  created() {
    console.log("mounted");
    if (this.$store.currentLanguage == null) {
      this.$store.commit("setLanguageBasedOnPath", {
        availableLocales: this.$i18n.availableLocales,
        path: this.$route.path
      });
    }
  },
  mounted() {
    console.log(
      `current i18n locale is ${this.$i18n.locale}, changing to ${this.$store.state.currentLanguage}`
    );
    this.$i18n.locale = this.$store.state.currentLanguage;
    console.log(`i18n language is now ${this.$i18n.locale}`);
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
