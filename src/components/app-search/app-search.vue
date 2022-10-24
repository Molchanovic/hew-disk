<template>
  <div class="search">
    <input
      @input="seachText"
      v-model="textSearch"
      placeholder="Поиск по каталогу"
      class="search__input"
      name="search-product"
      type="text"
    />
    <span class="search__text">Поиск</span>
    <icon-search class="search__icon" />
  </div>
</template>
<script>
import iconSearch from "@/components/app-search/icon-search.vue";
export default {
  data() {
    return {
      textSearch: "",
    };
  },
  components: {
    iconSearch,
  },
  methods: {
    seachText() {
      this.$emit("seatch-text", this.textSearch);
    },
  },
};
</script>
<style lang="scss">
.search {
  position: relative;
  margin-top: 30px;

  &__text {
    transition: 0.3s;
    padding: 2px 4px;
    $fs: 13;
    font-size: calc($fs / $f-size) + em;
    line-height: calc(16 / $fs * 100%);
    background: $color-light;
    border-radius: 0px 0px 2px 2px;
    position: absolute;
    top: 0;
    left: 18px;
    color: $color-dark;
    opacity: 0;
    pointer-events: none;
  }

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

    &:hover {
      background: $color-light;
    }

    &:active {
      box-shadow: inset 0px 2px 2px $color-shadow-focus;
    }

    &:focus + .search__text {
      opacity: 1;
      pointer-events: all;
    }

    &:focus {
      border: 1px solid $color-super-light;
      box-shadow: inset 0px 2px 2px $color-shadow-focus;

      &::placeholder {
        color: transparent;
      }
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