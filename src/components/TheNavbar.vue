<template>
  <v-app-bar app color="primary" dark dense>
    <v-btn small @click="navigateStream"><h3 class="text--white">SpeckleLCA</h3></v-btn>
    <v-spacer />
    <div
      v-if="isAuthenticated && route.path === '/'"
      @selected="$router.push(`/streams/${$event.id}`)"
    >
      StreamSearch
    </div>
    <div v-else-if="stream" class="font-weight-bold cursor-pointer" @click="navigateToCommitPage">
      {{ stream.name }}
    </div>
    <v-spacer />
    <v-btn class="ma-2" small outlined v-if="!isAuthenticated" @click="store.login">
      <span>Login/Register</span>
    </v-btn>
    <TheNavbarMenu v-else class="mr-3" />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import TheNavbarMenu from "@/components/TheNavbarMenu.vue";
import { useStore } from "@/stores/main.store";

const isAuthenticated = true;
const stream = { name: "My Stream Name" };

const route = useRoute();
const store = useStore();

function navigateStream() {
  throw new Error("Not implemented");
}

function navigateToCommitPage() {
  throw new Error("Not implemented");
}
</script>

<style scoped></style>
