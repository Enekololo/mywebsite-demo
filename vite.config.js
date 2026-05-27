import { defineConfig } from "vite";

export default defineConfig({
    base: '/mywebsite-demo/',
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                link1: './link.html'
            }
        }
    }
})