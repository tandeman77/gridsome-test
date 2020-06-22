<template>
  <div>
    <h1>{{$t('product.heading')}}</h1>
    <c-nav></c-nav>
  </div>
</template>

<script>
import cNav from "~/components/nav.vue";

export default {
  components: {
    cNav
  }
};
</script>

<style scoped lang="scss">
</style>