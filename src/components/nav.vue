<template>
  <div>
    <ul>
      <li>
        <g-link :to="$tp('/')">Home</g-link>
      </li>
      <li>
        <g-link :to="$tp('/about')">about</g-link>
      </li>
      <li>
        <g-link :to="$tp('/product')">product</g-link>
      </li>
      <li>
        <g-link :to="$tp('/contact')">contact</g-link>
      </li>
      <li>
        <g-link :to="$tp('/real-contact')">real contact</g-link>
      </li>
    </ul>
    <hr />
    <language-switcher></language-switcher>
  </div>
</template>

<script>
import languageSwitcher from "~/components/langSwitcher.vue";

export default {
  components: {
    languageSwitcher
  }
};
</script>

<style scoped lang="scss">
</style>