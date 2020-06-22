<template>
  <div>
    <h2>Current lang: {{$i18n.locale}}</h2>
    <select name="langSwitcher" id="langS" v-model="currentLanguage" @change="changeLanguage()">
      <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">{{lang}}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: this.$i18n.locale
    };
  },
  methods: {
    changeLanguage() {
      console.log(`changing language to ${this.currentLanguage}`);
      this.$i18n.locale = this.currentLanguage;
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLanguage, true)
      });
    }
  },
  mounted() {
    console.log(`changing locale to ${this.$i18n.locale}`);
  }
};
</script>

<style scoped lang="scss">
</style>