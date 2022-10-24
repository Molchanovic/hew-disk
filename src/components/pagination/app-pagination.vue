<template>
  <div class="pagination">
    <div class="pagination__wrapper">
      <button @click="clickPreviousPage" class="pagination__btn">
        <icon-arrow />
      </button>
      <ul class="pagination__list">
        <li
          class="pagination__li"
          :class="{ active: selectPage == num }"
          @click="clickNewPage(num)"
          v-for="num of arrayAllPages"
          :key="num"
        >
          {{ num }}
        </li>
      </ul>
      <button
        @click="clickNextPage"
        class="pagination__btn pagination__btn_reverse"
      >
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
  data() {
    return {
      windowWidht: 0,
      selectPage: 1,
      arrayAllPages: [],
    };
  },
  created() {
    window.addEventListener("resize", this.widthWindow);
    this.widthWindow();
    this.arrayAllPages = this.drawPages;
  },
  props: {
    pageCount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    widthWindow() {
      this.windowWidht = window.innerWidth;
      this.arrayAllPages = this.drawPages;
    },
    clickNewPage(page) {
      this.selectPage = page;
      this.emitEventClick();
    },
    clickNextPage() {
      if (this.selectPage < this.allPages) {
        this.selectPage += 1;
      }
      this.emitEventClick();
    },
    clickPreviousPage() {
      if (this.selectPage > 1) {
        this.selectPage -= 1;
      }
      this.emitEventClick();
    },
    emitEventClick() {
      this.$emit("click-pagination", this.selectPage);
    },
  },
  computed: {
    allPages() {
      if (this.windowWidht > 1200) {
        return Math.ceil(this.pageCount / 9);
      } else if (this.windowWidht > 567) {
        return Math.ceil(this.pageCount / 6);
      } else {
        return Math.ceil(this.pageCount / 3);
      }
    },
    drawPages() {
      let arrayValue = [];
      let i = 1;
      while (i <= this.allPages) {
        arrayValue.push(i);
        i++;
      }
      return arrayValue;
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
  }

  &__li {
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

    &.active {
      background: $color-dark;
      color: $color-white;
    }
  }
}
</style>