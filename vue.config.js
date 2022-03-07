// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
// });

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hexschool-vue-week-6-3/' //儲存庫名稱
    : '/'
}
