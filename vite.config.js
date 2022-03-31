/*
 * @Author: losting
 * @Date: 2022-03-31 12:20:41
 * @LastEditTime: 2022-03-31 14:50:15
 * @LastEditors: losting
 * @Description: 
 * @FilePath: \github-actions-demo\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default ({mode}) => {
  const __DEV__ = mode === 'development'
  return defineConfig({
    base: __DEV__ ? './' : './github-actions-demo/',
    plugins: [vue()]
  })
}
