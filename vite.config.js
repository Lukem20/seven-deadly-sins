import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        envy: resolve(__dirname, 'envy.html'),
        gluttony: resolve(__dirname, 'gluttony.html'),
        greed: resolve(__dirname, 'greed.html'),
        lust: resolve(__dirname, 'lust.html'),
        pride: resolve(__dirname, 'pride.html'),
        sloth: resolve(__dirname, 'sloth.html'),
        wrath: resolve(__dirname, 'wrath.html'),


      },
    },
  },
})