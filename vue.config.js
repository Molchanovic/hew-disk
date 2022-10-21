const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/fonts.scss";
        @import "@/assets/scss/variables.scss";
        @import "@/assets/scss/zeroing.scss";
           @import "@/assets/scss/basik.scss";
        `,
      },
    },
  },
});
