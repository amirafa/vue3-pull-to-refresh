import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";

export default defineConfig({
    plugins: [vue(), cssInjectedByJs()],
    build: {
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            name: "Vue3PulToRefresh",
            fileName: "vue3-pull-to-refresh",
        },
        cssCodeSplit: false,
        rollupOptions: {
            external: ["vue"],
            output: {
                manualChunks: undefined,
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});
