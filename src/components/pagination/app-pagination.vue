<template>
  <div class="pagination">
    <div class="pagination__wrapper">
      <button class="pagination__btn"><icon-arrow /></button>
      <ul class="pagination__list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <button class="pagination__btn pagination__btn_reverse">
        <icon-arrow />
      </button>
    </div>
  </div>
</template>
<script>
import iconArrow from "@/components/pagination/icon-arrow.vue";
export default {
  components: {
    iconArrow,
  },
  props: {
    pageCount: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.pagination {
  margin-top: 45px;
  display: flex;
  justify-content: center;
  font-family: HouschkaPro, normal;

  &__wrapper {
    display: flex;
  }

  &__btn,
  &__list li {
    width: 50px;
    height: 50px;
    border-radius: 3px;
    background: $color-super-light;
    color: $color-blue;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: $color-light;
    }

    &:active {
      background: $color-light;
      box-shadow: inset 0px 3px 4px $color-shadow-actie;
    }

    @media (max-width: $msm) {
      width: 40px;
      height: 40px;
    }
  }

  &__btn {
    margin: 0px 10px 0px 0px;
    &_reverse {
      margin: 0px 0px 0px 10px;

      svg {
        transform: rotate(-180deg);
      }
    }

    @media (max-width: $msm) {
      display: none;
    }
  }

  &__list {
    display: flex;
    li {
      margin-right: 10px;
      $fs: 18;
      font-size: calc($fs / $f-size) + em;
      line-height: calc(28 / $fs * 100%);
      font-weight: 700;

      &:last-child {
        margin-right: 0;
      }

      @media (max-width: $msm) {
        $fs: 15;
        font-size: calc($fs / $f-size) + em;
        line-height: calc(24 / $fs * 100%);
        font-weight: 700;
      }
    }
  }
}
</style>