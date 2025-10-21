import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        vue(),
        cssInjectedByJs(),
        dts({
            include: ["src/**/*.ts", "src/**/*.vue"],
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "lib/index.ts"),
            name: "Vue3PulToRefresh",
            fileName: (format) => `index.${format}.js`,
            formats: ["es", "cjs"],
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
        sourcemap: true,
    },
});
