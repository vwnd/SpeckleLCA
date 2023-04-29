<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <v-app>
    <TheNavbar />
    <RouterView />
  </v-app>
</template>

<style scoped></style>
