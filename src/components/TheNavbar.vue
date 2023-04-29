<template>
  <v-app-bar app color="primary" dark dense>
    <v-btn small><h3 class="text--white">SpeckleLCA</h3></v-btn>
    <v-spacer />
    <div v-if="isAuthenticated && route.path === '/'">StreamSearch</div>
    <div v-else-if="stream" class="font-weight-bold cursor-pointer">{{ stream.name }}</div>
    <v-spacer />
    <v-btn class="ma-2" small outlined v-if="!isAuthenticated">
      <span>Login/Register</span>
    </v-btn>
    <TheNavbarMenu v-else class="mr-3" />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import TheNavbarMenu from "@/components/TheNavbarMenu.vue";

const isAuthenticated = true;
const stream = { name: "My Stream Name" };

const route = useRoute();
</script>

<style scoped></style>
