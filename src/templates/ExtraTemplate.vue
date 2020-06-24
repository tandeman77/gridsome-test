<template>
  <layout>
    <div>
      <h1>Template Page: {{$page.extra.heading}}</h1>
      <c-nav></c-nav>
    </div>
  </layout>
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
  mounted() {}
};
</script>

<style scoped lang="scss">
</style>