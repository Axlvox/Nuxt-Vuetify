<template>
  <v-app-bar>
    <v-toolbar 
    flat color="#5F4BB6" 
    class="border-b" 
    >
    <v-app-bar-nav-icon class="ms-2"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>
        <NuxtLink
      v-for="rota in rotas()"
      :key="rota.nome"
      :to="rota.path"
      class="px-10 text-white"
      variant="text">
      <v-btn variant="text">{{ rota.nome }}</v-btn>
      <v-divider vertical></v-divider>
    </NuxtLink>
        <v-badge class="mr-5" :content="6">
          <v-icon icon="mdi-bell-outline"></v-icon>
        </v-badge>
      <v-avatar class="mr-5">
          <v-img 
          class=""
          cover 
          src="https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar11-512.png"></v-img>
        </v-avatar>
      
  </v-toolbar>
</v-app-bar>
    
    <!-- <v-app-bar flat color="#5F4BB6" class="border-b">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-title>Menu</v-app-title>
      <NuxtLink
      v-for="rota in rotas()"
      :key="rota.nome"
      :to="rota.path"
      class="px-10 text-white">
      {{ rota.nome }}
    </NuxtLink>
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
    </v-app-bar> -->
    <v-main></v-main>

</template>