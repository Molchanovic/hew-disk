<template>
  <a
    :style="{
      background: `url(${item.preview_img_path})`,
    }"
    class="card"
    href="##"
  >
    <div class="card__wrapper">
      <span class="card__tag">{{ item.series }}</span>
      <h2 class="card__title">{{ item.title }}</h2>
      <p class="card__price">{{ item.cost }}</p>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {},
};
</script>
<style lang="scss">
</style>