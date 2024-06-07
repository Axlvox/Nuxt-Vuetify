<template>
  <v-app-bar>
    <v-toolbar 
    flat color="#5F4BB6" 
    class="border-b" 
    image="https://i.imgur.com/nypnfwY.jpeg">
    
    <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
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

    <v-main></v-main>

</template>