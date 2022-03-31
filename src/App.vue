<!--
 * @Author: losting
 * @Date: 2022-03-31 12:20:41
 * @LastEditTime: 2022-03-31 14:33:56
 * @LastEditors: losting
 * @Description: 
 * @FilePath: \github-actions-demo\src\App.vue
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
const env = import.meta.env.DEV
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="PUSH" />
  {{env}}-222222222222222222
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
