<template>
  <v-container v-if="software">
    <v-card class="d-flex flex-column">
      <v-card-title class="d-flex text-white text-center bg-cyan-darken-1">
        {{ software.title }}
      </v-card-title>
      <v-img :src="software.imagem" class="card-img-top" :alt="software.title" height="200px"></v-img>
      <v-card-subtitle class="justify-center text-center">{{ software.subtitle }}</v-card-subtitle>
      <v-expansion-panels>
        <v-expansion-panel
          class="align-center"
          collapse-icon="mdi-minus text-red-lighten-1"
          expand-icon="mdi-plus text-cyan-darken-1"
          title=" "
          :value="software.title"
          :text="software.descricao"
        >
          <v-expansion-panel-content>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const software = ref(null);
    const route = useRoute();

    const loadSoftware = async () => {
      const title = route.params.title;
      try {
        const response = await fetch(`http://localhost:3000/GRV`);
        const data = await response.json();
        software.value = data.softwares.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === title);
      } catch (error) {
        console.error('Erro ao carregar o software:', error);
      }
    };

    onMounted(() => {
      loadSoftware();
    });

    return {
      software
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.card {
  width: 18rem;
  margin: 1rem;
}
</style>
