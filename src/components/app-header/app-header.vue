<template>
  <header class="header">
    <div class="container">
      <icon-header />
    </div>
  </header>
</template>
<script>
import IconHeader from "@/components/app-header/icon-header.vue";
export default {
  components: {
    IconHeader,
  },
};
</script>
<style lang="scss">
.header {
  padding: 30px 0px 10px 0px;
}
</style>