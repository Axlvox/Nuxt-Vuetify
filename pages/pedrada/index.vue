<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="5" lg="3" v-for="software in softwares" :key="software.id">
        <v-card class="d-flex flex-column">
          <v-title text class="d-flex text-white text-center bg-cyan-darken-1">
            <v-card-title class="flex-grow-1">{{ software.title }}     
              </v-card-title>     
<v-btn
        color="blue-white"
        icon="mdi-open-in-new"
        variant="text"
      ></v-btn> 
</v-title>

          <v-img 
          :src="software.imagem" class="card-img-top" :alt="software.title" height="200px">
          </v-img>
          <v-card-subtitle class="justify-center text-center">{{ software.subtitle }}</v-card-subtitle>
          <div>
    <div class="text-center d-flex pb-4">
    </div>
    <v-expansion-panels
      v-model="panel"
      multiple
    >
    <v-expansion-panel
    class="align-center"
    collapse-icon="mdi-minus text-red-lighten-1" 
    expand-icon="mdi-plus text-cyan-darken-1"
    title=" "
    :value="software.title"
    :text="software.descricao">
        </v-expansion-panel>
    </v-expansion-panels>
  </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      softwares: [],
      panel: []
    };
  },
  mounted() {
    this.loadSoftwares();
  },
  methods: {
    async loadSoftwares() {
      try {
        const response = await fetch('http://localhost:3000/GRV');
        const data = await response.json();
        this.softwares = data.softwares;
      } catch (error) {
        console.error('Erro ao carregar os dados dos softwares:', error);
      }
    },
    all () {
        this.panel = []
      },
      none () {
        this.panel = []
      },
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 18rem;
  margin: 1rem;
}
</style>
