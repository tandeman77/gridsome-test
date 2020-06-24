<template>
  <layout>
    <div>
      <h1>{{$t('about.heading')}}</h1>
      <c-nav></c-nav>
    </div>
  </layout>
</template>

<script>
import cNav from "~/components/nav.vue";

export default {
  components: {
    cNav
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
</style>