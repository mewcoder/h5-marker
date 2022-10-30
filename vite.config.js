import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "/pages/index.html"),
        preview: resolve(__dirname, "/pages/preview.html"),
      },
    },
  },
});
