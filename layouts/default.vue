<script setup lang="ts">
import software from '~/middleware/software';
</script>

<template>
    <v-app theme="light">
    <v-container class="align-center p-5">
        <Navbar />
        <slot>
        </slot>
    </v-container>
</v-app>
</template>