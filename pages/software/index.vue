<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" sm="6" md="4" lg="3" v-for="software in softwares" :key="software.id">
        <v-card class="d-flex flex-column">
          <v-title text class="text-black text-center">            <v-card-title class="flex-grow-1">{{ software.title }}</v-card-title>
</v-title>
          
          <v-img 
          :src="software.imagem" class="card-img-top" :alt="software.title" height="200px">
          </v-img>
          <v-card-subtitle class="pt-3 flex-grow-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem architecto quam sit voluptas explicabo maxime obcaecati aperiam vero?</v-card-subtitle>
          <div>
    <div class="text-center d-flex pb-4">
    </div>
    <v-expansion-panels
      v-model="panel"
      multiple
    >
    <v-expansion-panel
    class="align-center"
    collapse-icon="mdi-minus" 
    expand-icon="mdi-plus"
    title=" "
    :value="software.title"
    :text="software.descricao">
        </v-expansion-panel>
    </v-expansion-panels>
  </div>
          <v-card-actions class="justify-center px-10">
            <v-btn text class="align-center text-purple bg-blue-grey-lighten-4" style="width:60%">Botão</v-btn>
            <v-btn append-icon="mdi-heart" text class="text-red bg-red-lighten-5 justify-center"></v-btn>
          </v-card-actions>
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
