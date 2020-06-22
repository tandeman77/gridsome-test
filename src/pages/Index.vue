<template>
  <div>
    <h1>{{$t('home.heading')}}</h1>
    <c-nav></c-nav>
  </div>
</template>

<script>
import cNav from "~/components/nav.vue";

export default {
  components: {
    cNav
  },
  mounted() {
    console.log(`current page locale to ${this.$i18n.locale}`);
  }
};
</script>


<style scoped lang="scss">
</style>