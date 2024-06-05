<template>
  <v-row>
    <v-col cols="2" md="4" lg="3">
      <div class="card" v-for="software in softwares" :key="software.id">
        <v-card>
          <v-img 
          :src="software.imagem" class="card-img-top" :alt="software.title">
            <v-card-title>{{ software.title }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem architecto quam sit voluptas explicabo maxime obcaecati aperiam vero?</v-card-subtitle>
          <v-card-text class="text-center">
            {{ software.descricao }}
          </v-card-text>
          <v-card-actions class="justify-center px-10">
            <v-btn text class="align-center text-purple bg-blue-grey-lighten-4" style="width:60%">Botão</v-btn>
            <v-btn append-icon="mdi-heart" text class="text-red bg-red-lighten-5">FAVORITAR</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-col>
   </v-row>
</template>

<script>
export default {
  data() {
    return {
      softwares: [] // Array para armazenar os dados dos softwares
    };
  },
  mounted() {
    // Carregar os dados do db.json quando o componente for montado
    this.loadSoftwares();
  },
  methods: {
    async loadSoftwares() {
      try {
        // Substitua pela lógica de carregamento dos dados do seu db.json
        const response = await fetch('http://localhost:3000/GRV');
        const data = await response.json();
        this.softwares = data.softwares;
      } catch (error) {
        console.error('Erro ao carregar os dados dos softwares:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Estilos para o card, se necessário */
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
