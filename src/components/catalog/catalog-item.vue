<template>
  <a
    :style="{
      background: `url(${getPathImage}) no-repeat`,
      backgroundSize: `cover`,
    }"
    class="card"
    href="##"
  >
    <div class="card__wrapper">
      <div class="card__info">
        <a href="##" class="card__tag">{{ item.series }}</a>
        <h2 class="card__title">{{ item.title }}</h2>
      </div>

      <p class="card__price">{{ getfullCosts }}</p>
    </div>
  </a>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  computed: {
    getPathImage() {
      return require(`../../assets/img/gallery/${this.item.preview_img_path}`);
    },
    getfullCosts() {
      return this.item.cost.toLocaleString("ru") + " ₽";
    },
  },
};
</script>
<style lang="scss">
.card {
  font-family: HouschkaPro, normal;
  display: flex;
  min-height: 500px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: $mxxl) {
    min-height: 400px;
  }

  &::before {
    transition: 0.6s;
    content: "";
    height: 60%;
    background: linear-gradient(0deg, #4c5a79 0%, rgba(76, 90, 121, 0) 100%);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }

  &:hover {
    &::before {
      height: 100%;
      background: linear-gradient(
        0deg,
        #4c5a79 0%,
        rgba(76, 90, 121, 0.75) 100%
      );
    }
  }

  &:active {
    &::before {
      height: 100%;
      background: linear-gradient(
        0deg,
        #4c5a79 0%,
        rgba(76, 90, 121, 0.75) 100%
      );
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 0 160px;
    z-index: 1;
    padding: 0px 30px 25px 30px;

    @media (max-width: $mmd) {
      padding: 0px 20px 15px 20px;
    }
  }

  &__image {
    position: absolute;
  }

  &__tag {
    display: inline-block;
    $fs: 15;
    font-size: calc($fs / $f-size) + em;
    line-height: calc(19 / $fs * 100%);
    background: $color-blue;
    padding: 2px 10px;
    border-radius: 2px;
    color: $color-white;
    margin-bottom: 12px;
  }

  &__title,
  &__price {
    $fs: 18;
    font-size: calc($fs / $f-size) + em;
    line-height: calc(25 / $fs * 100%);
    color: $color-white;
    text-transform: uppercase;
    font-weight: 800;

    @media (max-width: $mmd) {
      $fs: 16;
      font-size: calc($fs / $f-size) + em;
      line-height: calc(25 / $fs * 100%);
    }
  }

  &__title {
  }

  &__price {
    margin-top: 12px;
  }
}
</style>