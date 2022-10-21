<template>
  <div class="search">
    <input class="search__input" name="search-product" type="text" />
    <icon-search />
  </div>
</template>
<script>
import iconSearch from "@/components/app-search/icon-search.vue";
export default {
  data() {
    return {};
  },
  components: {
    iconSearch,
  },
};
</script>
<style lang="scss">
</style>