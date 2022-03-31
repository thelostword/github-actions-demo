/*
 * @Author: losting
 * @Date: 2022-03-31 12:20:41
 * @LastEditTime: 2022-03-31 15:46:22
 * @LastEditors: losting
 * @Description: 
 * @FilePath: \github-actions-demo\vite.config.js
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
export default ({ mode }) => {
  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_BASE_PATH,
    plugins: [vue()],
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
  })
}
