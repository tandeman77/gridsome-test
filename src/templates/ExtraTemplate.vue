<template>
  <div>
    <h1>Template Page: {{$page.extra.heading}}</h1>
    <c-nav></c-nav>
  </div>
</template>

<page-query>
query($id: ID!){
  extra(id:$id){
    heading
    locale
    path
  }
}
</page-query>
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