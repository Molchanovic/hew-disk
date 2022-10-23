<template>
  <app-header />
  <main class="home">
    <div class="container">
      <section class="catalog">
        <h1 class="catalog__title">Каталог курсов</h1>
        <catalog-search @input="parseData" />

        <ul class="catalog__list">
          <li v-for="item of catalogPosts" :key="item.id" class="catalog__item">
            <catalog-item :item="item" />
          </li>
        </ul>

        <catalog-pagination :pageCount="catalogPosts.length" />
      </section>
    </div>
  </main>
</template>

<script>
import catalogSearch from "@/components/app-search/app-search.vue";
import appHeader from "@/components/app-header/app-header.vue";
import catalogItem from "@/components/catalog/catalog-item.vue";
import catalogPagination from "@/components/pagination/app-pagination.vue";

import { getCatalogPosts } from "@/api-fetch-posts.js";
export default {
  name: "App",
  data() {
    return {
      catalogPosts: [
        {
          id: 3,
          preview_img_path: "pic-img.png",
          title: "Базовые принципы разработки решений с блокчейн",
          cost: 135000,
          cost_currency: "₽",
          series: "Программирование",
        },
        {
          id: 8,
          preview_img_path: "pic-img.png",
          title:
            "Базовые принципы разработки решений с блокчейн. Продвинутый уровень",
          cost: 80000,
          cost_currency: "₽",
          series: "Программирование",
        },
        {
          id: 1,
          preview_img_path: "pic-img.png",
          title: "Как добывают нефть",
          cost: 135000,
          cost_currency: "₽",
          series: "Профессия",
        },
        {
          id: 6,
          preview_img_path: "pic-img.png",
          title: "Как добывают нефть. Продвинутый уровень",
          cost: 150000,
          cost_currency: "₽",
          series: "Профессия",
        },
        {
          id: 2,
          preview_img_path: "pic-img.png",
          title:
            "Основы искусственного интеллекта и машинного обучения с Python",
          cost: 135000,
          cost_currency: "₽",
          series: "Программирование",
        },
        {
          id: 7,
          preview_img_path: "pic-img.png",
          title:
            "Основы искусственного интеллекта и машинного обучения с Python. Продвинутый уровень",
          cost: 150000,
          cost_currency: "₽",
          series: "Программирование",
        },
        {
          id: 4,
          preview_img_path: "pic-img.png",
          title: "Продажи от «А» до «Я»",
          cost: 135000,
          cost_currency: "₽",
          series: "Бизнес навыки",
        },
        {
          id: 9,
          preview_img_path: "pic-img.png",
          title: "Продажи от «А» до «Я». Продвинутый уровень",
          cost: 160000,
          cost_currency: "₽",
          series: "Бизнес навыки",
        },
        {
          id: 10,
          preview_img_path: "pic-img.png",
          title: "Прокрастинация: как не откладывать дела",
          cost: 135000,
          cost_currency: "₽",
          series: "Бизнес навыки",
        },
        {
          id: 5,
          preview_img_path: "pic-img.png",
          title: "Прокрастинация: как не откладывать дела. Продвинутый уровень",
          cost: 150000,
          cost_currency: "₽",
          series: "Бизнес навыки",
        },
      ],
    };
  },
  components: { appHeader, catalogSearch, catalogItem, catalogPagination },
  methods: {
    parseData() {
      getCatalogPosts();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: FuturaPT, normal;
  font-weight: 600;
}

.home {
  padding-top: 20px;
  padding-bottom: 60px;
}
.catalog {
  &__title {
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    justify-content: space-between;

    li {
      $grid: 31.8;
      flex: 0 0 0% + $grid;
      max-width: 0% + $grid;
      margin-bottom: 30px;

      &:nth-child(n + 7) {
        margin-bottom: 0px;
      }

      @media (max-width: $mxl) {
        $grid: 48.5;
        flex: 0 0 0% + $grid;
        max-width: 0% + $grid;

        &:nth-child(n) {
          margin-bottom: 30px;
        }

        &:nth-child(n + 6) {
          margin-bottom: 0px;
        }
      }

      @media (max-width: $msm) {
        $grid: 100;
        flex: 0 0 0% + $grid;
        max-width: 0% + $grid;
        margin-bottom: 10px;

        &:nth-child(n) {
          margin-bottom: 10px;
        }

        &:nth-child(n + 6) {
          margin-bottom: 0px;
        }
      }
    }
  }

  &__item {
  }
}
</style>
