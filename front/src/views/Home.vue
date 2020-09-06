<template>
  <div class="home">
    
    <HelloWorld msg="Estante Encantada"/>

    <div class="cards-container">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Lenda da Vitória Régia</div>
            <div class="md-subhead">Nome do Autor</div>
          </md-card-header-text>

          <md-card-media md-big>
            <img src="../assets/books/cover_mock.png" alt="Capa">
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <router-link to="/story/123" class="md-dense md-raised md-primary">
            <md-button>Ler</md-button>
          </router-link>
          <md-button>Favoritar</md-button>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Lenda da Vitória Régia</div>
            <div class="md-subhead">Nome do Autor</div>
          </md-card-header-text>

          <md-card-media md-big>
            <img src="../assets/books/cover_mock.png" alt="Capa">
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <router-link to="/story/123" class="md-dense md-raised md-primary">
            <md-button>Ler</md-button>
          </router-link>
          <md-button>Favoritar</md-button>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Lenda da Vitória Régia</div>
            <div class="md-subhead">Nome do Autor</div>
          </md-card-header-text>

          <md-card-media md-big>
            <img src="../assets/books/cover_mock.png" alt="Capa">
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <router-link to="/story/123" class="md-dense md-raised md-primary">
            <md-button>Ler</md-button>
          </router-link>
          <md-button>Favoritar</md-button>
        </md-card-actions>
      </md-card>
    </div>

  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}
</script>

<style>
  .home {
    padding: 0 5%;
  }

  .cards-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
  }

  .md-card {
    margin-bottom: 5%;
  } 

  .md-card:last-child {
    margin-bottom: 25%;
  }
</style>