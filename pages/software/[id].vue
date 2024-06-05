<template>
    <div>
Você está em {{ idParams }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'exibicao',
    middleware: 'software',
});

const router = useRoute();

const idParams = computed(() => router.params.id);
</script>

<style lang="scss" scoped>

</style>