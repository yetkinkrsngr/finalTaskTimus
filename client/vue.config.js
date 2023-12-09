const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // NestJS sunucu adresi
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
