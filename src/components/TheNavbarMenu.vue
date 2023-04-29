<template>
  <div>
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ props }">
        <v-avatar v-bind="props" size="32" color="grey lighten-3">
          <v-img v-if="user.avatar" :src="user.avatar" />
        </v-avatar>
      </template>
      <v-list dense nav subheader id="login-menu">
        <v-list-item link :href="`${serverURL}/profile`" target="_blank">
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <v-list-item-icon>
            <v-icon small>mdi-account</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item link @click="logout">
          <v-list-item-title class="error--text">Log out</v-list-item-title>
          <v-list-item-icon>
            <v-icon small color="error">mdi-logout</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
const user = {
  avatar: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
  name: "Joe"
};

const serverURL = import.meta.env.VITE_APP_SERVER_URL;

function logout() {}
</script>
