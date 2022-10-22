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

  @media (max-width: $msm) {
    padding-top: 12px;
  }
}
</style>