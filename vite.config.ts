import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            name: "Vue3PullToRefresh",
            fileName: "vue3-pull-to-refresh",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
                // Ensure that the styles are bundled if needed
                assetFileNames: "assets/[name]-[hash][extname]",
            },
        },
    },
});
