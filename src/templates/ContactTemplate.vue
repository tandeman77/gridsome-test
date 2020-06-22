<template>
  <div>
    <h1>Template Page: {{$page.contact.heading}}</h1>
    <c-nav></c-nav>
  </div>
</template>

<page-query>
query($id: ID!){
  contact(id:$id){
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
    this.$i18n.locale = this.$context.locale;
  }
};
</script>

<style scoped lang="scss">
</style>