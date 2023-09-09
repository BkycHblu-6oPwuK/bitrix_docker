import * as dotenv from 'dotenv'
dotenv.config()

import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'

import autoprefixer from "autoprefixer";
import liveReload from 'vite-plugin-live-reload'

export default defineConfig({
    base: process.env.TEMPLATE_PUBLIC_PATH,
    plugins: [
        Vue(),
        liveReload('../../../**/*.php'),
    ],
    css: {
      postcss: {
          plugins: [
              autoprefixer,
          ]
      }
    },
    build: {
        assetsDir: '.',
        copyPublicDir: false,
        rollupOptions: {
            input: {
                main: 'src/main.js',
            },
            output: {
                entryFileNames: 'main.js',
                assetFileNames: 'main.css',
            },
        },
    },
    server: {
        strictPort: true,
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: 'http://localhost',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})