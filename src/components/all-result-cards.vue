<template>
  <p class="results">{{ this.allResult }} результатов</p>
</template>
<script>
export default {
  props: {
    allResult: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.results {
  color: $color-dark;
  $fs: 15;
  font-size: calc($fs / $f-size) + em;
  line-height: calc(19 / $fs * 100%);

  @media (max-width: $msm) {
    $fs: 13;
    font-size: calc($fs / $f-size) + em;
    line-height: calc(17 / $fs * 100%);
  }
}
</style>