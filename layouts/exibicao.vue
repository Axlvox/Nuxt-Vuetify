<template>
    <v-app>
    <div>
       <Navbar />
        <NuxtLink to="/">
            <v-btn
      prepend-icon="mdi-arrow-left-bottom"
    >VOLTAR</v-btn>
        </NuxtLink>
        <slot></slot>
        Layout Padrão
        Rodapé Padrão
    </div>
</v-app>
</template>