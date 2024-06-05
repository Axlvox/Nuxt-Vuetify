<template>
      <v-app theme="light">
    <v-app-bar flat color="#5F4BB6" class="border-b">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-title>Menu</v-app-title>
      <v-spacer></v-spacer>
        <v-badge class="mr-5" :content="6">
          <v-icon icon="mdi-bell-outline"></v-icon>
        </v-badge>
      <v-avatar class="mr-5">
          <v-img 
          class=""
          cover 
          src="https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar11-512.png"></v-img>
        </v-avatar>
    </v-app-bar>
    <v-main></v-main>
</v-app>
</template>