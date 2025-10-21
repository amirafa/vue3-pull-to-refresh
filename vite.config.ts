import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        vue(),
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
