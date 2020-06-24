<template>
  <div>
    <h2>Current lang: {{currentLanguage}}</h2>
    <select name="langSwitcher" id="langS" v-model="currentLanguage" @change="changeLanguage()">
      <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">{{lang}}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: this.$store.state.currentLanguage
    };
  },
  methods: {
    changeLanguage() {
      this.$store.commit("changeLanguage", this.currentLanguage);
      this.$i18n.locale = this.currentLanguage;
      console.log(
        `changed language. i18n lang is now: ${this.$i18n.locale}, and current store locale is ${this.$store.state.currentLanguage}`
      );
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLanguage, true)
      });
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
</style>