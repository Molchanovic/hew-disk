<template>
  <app-header />
  <main class="home">
    <div class="container">
      <section class="catalog">
        <h1 class="catalog__title">Каталог курсов</h1>
        <catalog-search />
      </section>
    </div>
  </main>
</template>

<script>
import catalogSearch from "@/components/app-search/app-search.vue";
import appHeader from "@/components/app-header/app-header.vue";
export default {
  name: "App",
  components: { appHeader, catalogSearch },
};
</script>

<style lang="scss">
#app {
  font-family: FuturaPT, normal;
  font-weight: 600;
}
</style>
