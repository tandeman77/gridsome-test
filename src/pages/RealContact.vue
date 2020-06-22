<template>
  <div>
    <h1>{{$page.allContact.edges[0].node.heading}}</h1>
    <c-nav></c-nav>
  </div>
</template>

<page-query>
query($locale: String) {
        allContact(filter: { locale: { eq: $locale } }) {
          edges {
            node {
              heading
            }
          }
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