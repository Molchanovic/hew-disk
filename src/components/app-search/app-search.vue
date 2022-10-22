<template>
  <div class="search">
    <input
      placeholder="Поиск по каталогу"
      class="search__input"
      name="search-product"
      type="text"
    />
    <icon-search class="search__icon" />
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
.search {
  position: relative;
  margin-top: 30px;
  &__input {
    width: 100%;
    padding: 15px 20px;
    border-radius: 4px;
    background: $color-super-light;
    $fs: 18;
    font-size: calc($fs / $f-size) + em;
    line-height: calc(28 / $fs * 100%);
    color: $color-dark;
    border: 1px solid transparent;

    &::placeholder {
    }

    &:hover {
      background: $color-light;
    }

    &:active {
      box-shadow: inset 0px 2px 2px $color-shadow-focus;
    }

    &:focus {
      border: 1px solid $color-super-light;
      box-shadow: inset 0px 2px 2px $color-shadow-focus;
    }

    @media (max-width: $msm) {
      $fs: 15;
      font-size: calc($fs / $f-size) + em;
      line-height: calc(24 / $fs * 100%);
    }
  }

  &__icon {
    position: absolute;
    top: 21px;
    right: 20px;
  }
}
</style>